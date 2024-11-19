import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutProductComponent } from './ajout-product/ajout-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DetailsProductComponent } from './details-product/details-product.component';

const routes: Routes = [
  {path:'add', component: AjoutProductComponent},
  {path:'all', component: ListProductComponent},
  {path:'show/:id', component: DetailsProductComponent},
  {path:'edit/:id', component: EditProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
