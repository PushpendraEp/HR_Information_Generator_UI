import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModuleModule } from './common-module/common-module.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerComponent } from './spinner/spinner.component'; 
import { LoaderInterceptorInterceptor } from './loader-interceptor.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModuleModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // ToastrModule.forRoot({
    //   positionClass: 'toast-top-center',
    //   preventDuplicates: true,
    //   closeButton: true
    // })
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
