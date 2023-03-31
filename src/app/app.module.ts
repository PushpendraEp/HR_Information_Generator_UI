import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModuleModule } from './common-module/common-module.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { AuthIntercepter } from './auth-intercepter';
import { ToastrModule } from 'ngx-toastr';
import { MatSnackBarModule } from '@angular/material/snack-bar';

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
    Ng2FilterPipeModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthIntercepter, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
