import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {UiService} from '../core/ui.service';
import {DATABASE_KEY} from '../../core/utils/global-variable';
import {StorageService} from '../core/storage.service';
import {User, UserAuthResponse} from '../../interfaces/common/user.interface';
import {UtilsService} from '../core/utils.service';
import {environment} from '../../../environments/environment';

const API_URL = environment.apiBaseLink + '/api/user/';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private token: string;
  private isUser = false;
  private userId: string = null;
  private userStatusListener = new Subject<boolean>();

  // Hold The Count Time
  private tokenTimer: any;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private uiService: UiService,
    private utilsService: UtilsService,
    private storageService: StorageService,
  ) {
  }

  /**
   * MAIN API METHODS
   * userLogin()
   * autoUserLoggedIn()
   * getLoggedInUserData()
   */
  userLogin(data: { username: string, password: string }) {
    return new Promise((resolve, reject) => {
      this.httpClient.post<UserAuthResponse>
      (API_URL + 'login', data)
        .subscribe({
          next: res => {
            if (res.success) {
              this.token = res.token;
              if (res.data) {
                this.userId = res.data._id;
              }
              // When Token
              if (this.token) {
                this.isUser = true;
                this.userStatusListener.next(true);
                const expiredInDays = Number(res.tokenExpiredInDays.replace('d', ''));
                this.setSessionTimer(expiredInDays * 86400000);
                const now = new Date();
                const expirationDate = this.utilsService.getNextDateString(new Date(now.getTime() - 3600 * 1000), expiredInDays);
                // Store to Local
                this.saveUserData(res.token, expirationDate, this.userId);
                // Snack bar..
                this.uiService.message(res.message, 'success', 1500, 'right', 'top');

                // Navigate..
                this.router.navigate([environment.userBaseUrl]);
                resolve(res);
              }
            } else {
              this.uiService.message(res.message, 'wrong', 1500, 'right', 'top');
              this.userStatusListener.next(false);
              reject()
            }
          },
          error: err => {
            this.userStatusListener.next(false);
            reject(err);
          }
        })
    })

  }

  autoUserLoggedIn() {
    const authInformation = this.getUserData();
    if (!authInformation) {
      this.storageService.removeDataFromEncryptLocal(DATABASE_KEY.encryptUserLogin);
      return;
    }
    const now = new Date();
    const expDate = new Date(authInformation.expiredDate);
    const expiresIn = expDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.userStatusListener.next(true);
      this.isUser = true;
      this.userId = authInformation.userId;
      this.setSessionTimer(expiresIn);
    }
  }

  getLoggedInUserData(select?: string) {
    let params = new HttpParams();
    if (select) {
      params = params.append('select', select);
    }

    return this.httpClient.get<{ data: User }>(API_URL + 'logged-in-user-data', {params});
  }


  /**
   * USER AUTH METHODS
   * getUserStatus()
   * getUserToken()
   * getUserId()
   * getUserStatusListener()
   * userLogOut()
   */
  getUserStatus() {
    return this.isUser;
  }

  getUserToken() {
    return this.token;
  }

  getUserId() {
    return this.userId;
  }

  getUserStatusListener() {
    return this.userStatusListener.asObservable();
  }

  userLogOut() {
    this.token = null;
    this.isUser = false;
    this.userStatusListener.next(false);
    this.clearUserData();
    clearTimeout(this.tokenTimer);
    this.router.navigate([environment.userLoginUrl]);
  }


  /**
   * Save User Info Encrypt to Local
   * saveUserData()
   * clearUserData()
   * getUserData()
   * setSessionTimer()
   */
  protected saveUserData(token: string, expiredDate: Date, userId: string) {
    const data = {
      token,
      expiredDate,
      userId,
    };
    this.storageService.addDataToEncryptLocal(data, DATABASE_KEY.encryptUserLogin);
  }

  protected clearUserData() {
    this.storageService.removeDataFromEncryptLocal(DATABASE_KEY.encryptUserLogin);
  }

  protected getUserData() {
    return this.storageService.getDataFromEncryptLocal(DATABASE_KEY.encryptUserLogin);
  }

  private setSessionTimer(durationInMs: number) {
    this.tokenTimer = setTimeout(() => {
      this.userLogOut();
    }, durationInMs); // 1s = 1000ms
  }


}
