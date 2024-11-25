import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AutentificacionModule } from "./Usuario/autentificacion/autentificacion.module";
import { HeaderCComponent } from './Usuario/header-c/header-c.component';
import { LiberarComponent } from './Usuario/liberar/liberar.component';
import { PaypalButtonComponent } from './paypal-button/paypal-button.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
   

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutentificacionModule,
    
],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
