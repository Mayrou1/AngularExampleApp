import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { environment } from '../../environments/environment';
import { map, Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.apiUrl}/products`).pipe(
      // Utiliser map pour filtrer les produits
      map((products: any[]) => 
        products.filter(product => {
          // Vérifie si le tableau images est non vide et ne contient pas d'images se terminant par "any"
          return (
            product.images && 
            product.images.length > 0 && 
            !product.images.some((img: string) => img.startsWith('['))
          );
        })
      )
    );
  }

  getProduct(id: number): Observable<Product>{
    return this.httpClient.get<Product>(`${this.apiUrl}/products/${id}`);
  }

}
