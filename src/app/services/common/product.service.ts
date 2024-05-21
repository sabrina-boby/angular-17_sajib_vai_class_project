import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {FilterData} from '../../interfaces/core/filter-data';
import {ResponsePayload} from '../../interfaces/core/response-payload.interface';


const API_URL = environment.apiBaseLink + '/api/product/';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private httpClient: HttpClient
  ) { }


  getAllProduct(filterData: FilterData) {
    return this.httpClient.post<ResponsePayload>(API_URL + 'get-all', filterData);
  }
}
