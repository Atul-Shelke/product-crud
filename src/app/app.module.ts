import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ListComponent } from './components/list/list.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { GrandChildComponent } from './components/grand-child/grand-child.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './common-services/auth.interceptor';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ListComponent,
    GrandChildComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NzInputModule,
    NzButtonModule,
    NzModalModule,
    NzIconModule,
    NzUploadModule,
    NzPaginationModule,
    NzSelectModule,
    NzTableModule

  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
