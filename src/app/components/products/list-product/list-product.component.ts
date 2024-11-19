import { Component } from '@angular/core';
import { Product } from '../../../models/product';
import { ProductService } from '../../../services/product.service';
import { NgPipesModule } from 'ngx-pipes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [NgPipesModule, RouterModule],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.scss'
})
export class ListProductComponent {
  products: Product[] = [];

  constructor(private productService: ProductService){
    this.loadProducts();
  }

  loadProducts(){
    this.productService.getProducts().subscribe({
      next:(res: Product[])=>{this.products = res},
      error:(err)=>{console.log(err)}
    })
  }


  truncateDescription(description: string, maxLength: number = 100): string {
    return description.length > maxLength ? description.substring(0, maxLength) + '...' : description;
  }

}
