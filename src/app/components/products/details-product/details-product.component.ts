import { Component } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-details-product',
  standalone: true,
  imports: [],
  templateUrl: './details-product.component.html',
  styleUrl: './details-product.component.scss'
})
export class DetailsProductComponent {
  product!: Product;
  productId!:number; 
  featuredImage!:string; 
  constructor(private productService: ProductService, 
    private activateRoute: ActivatedRoute
  ){
    this.productId = parseInt(this.activateRoute.snapshot.paramMap.get('id')!);
    console.log(this.productId)
    this.loadProductDetails();
  }

  loadProductDetails(){
    this.productService.getProduct(this.productId).subscribe({
      next:(res:Product)=>{
        this.product = res; 
        this.featuredImage = this.product.images[0];},
      error:(err)=>{console.log(err)},
    })
  }
}
