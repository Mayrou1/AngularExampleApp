import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  getProducts(){
    return this.httpClient.get(`${this.apiUrl}/categories`);
  }
}