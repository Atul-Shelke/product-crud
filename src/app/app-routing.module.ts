import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ListComponent } from './components/list/list.component';
import { GrandChildComponent } from './components/grand-child/grand-child.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'add',component:AddProductComponent},
  {path:'list',component:ListComponent},
  {path:'child',component:GrandChildComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
