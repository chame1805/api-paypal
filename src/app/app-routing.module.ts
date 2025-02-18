import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Usuario/login/login.component';
import { RegistroComponent } from './Usuario/registro/registro.component';
import { HomeComponent } from './home/home.component';
import { HInicioComponent } from './h-inicio/h-inicio.component';
import { HorariosComponent } from './Usuario/horarios/horarios.component';
import { ReservaComponent } from './Usuario/reserva/reserva.component';
import { PagoComponent } from './pago/pago.component';
import { MetodoComponent } from './metodo-pago/metodo-pago.component';
import { UsuarioHorarioComponent } from './mostrar-horario/mostrar-horario.component';
import { LiberarComponent } from './Usuario/liberar/liberar.component';

const routes: Routes = [
  { path: '', component: LoginComponent }, 
  { path: 'login', component: LoginComponent }, 
  { path: 'registro', component: RegistroComponent },
  { path: 'home', component: HomeComponent },  
  {path:'h-inicio', component:HInicioComponent},
  {path: 'rutas', component:HorariosComponent},
  {path:'reserva', component:ReservaComponent},
  {path: 'pago', component:PagoComponent},
  {path: 'metodo', component:MetodoComponent},
  {path: 'horario', component:UsuarioHorarioComponent},
  {path:'liberar', component:LiberarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
