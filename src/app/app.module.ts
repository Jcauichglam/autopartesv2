import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { HomeComponent } from './views/home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JumbotronComponent } from './shared/components/jumbotron/jumbotron.component';
import { BannerComponent } from './shared/components/banner/banner.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CategoryComponent } from './shared/components/category/category.component';
import { SupportComponent } from './shared/components/support/support.component';
import { BestProductComponent } from './shared/components/best-product/best-product.component';
import { SubscribeComponent } from './shared/components/subscribe/subscribe.component';

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CarouselComponent,
    JumbotronComponent,
    BannerComponent,
    CategoryComponent,
    SupportComponent,
    BestProductComponent,
    SubscribeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AutocompleteLibModule,
    CarouselModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
