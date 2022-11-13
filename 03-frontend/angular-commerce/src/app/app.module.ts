import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { Route, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LoginStatusComponent } from './components/login-status/login-status.component';

const routes: Routes = [
  // When patch matches (category/:id) create new insance of component
  // Most specifics fir, then generics
  { path: 'category/:id', component: ProductListComponent },
  { path: 'category/', component: ProductListComponent },
  { path: 'products', component: ProductListComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: '**', redirectTo: '/products', pathMatch: 'full' },
];

@NgModule({
  declarations: [AppComponent, ProductListComponent, LoginComponent, LoginStatusComponent],
  // Import all module for the frontend
  imports: [RouterModule.forRoot(routes), BrowserModule, HttpClientModule],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
