import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductDescriptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule
  ],
  providers: [ ProductService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
