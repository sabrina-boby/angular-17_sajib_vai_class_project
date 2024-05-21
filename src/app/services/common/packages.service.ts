import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Package } from '../../interfaces/common/package.interface';

const API_URL = environment.apiBaseLinkPackages+'/api/package/';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  constructor(
    private httpClient:HttpClient
  ) { }

  getAllPackages(){
    return this.httpClient.get<{data:Package}>(API_URL+ '648088ece468c7183aed4b9b');
  }
}
