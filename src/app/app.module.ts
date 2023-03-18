import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModuleModule } from './common-module/common-module.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { AuthIntercepter } from './auth-intercepter';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModuleModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    Ng2FilterPipeModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthIntercepter, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
