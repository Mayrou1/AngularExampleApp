import { Routes } from '@angular/router';
import { AjoutUserComponent } from './components/ajout-user/ajout-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';

export const routes: Routes = [
    {path:'add', component: AjoutUserComponent},
    {path:'all', component: ListUserComponent}
];
