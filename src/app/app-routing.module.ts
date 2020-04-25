import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { HomeComponent } from 'src/app/home/home.component';
import { ConsumerComponent } from 'src/app/consumer/consumer.component';
import { ProviderComponent } from 'src/app/provider/provider.component';
import { LoginComponent } from 'src/app/login/login.component';
import { MapComponent } from 'src/app/map/map.component';
import { LoginRegisterComponent } from 'src/app/login-register/login-register.component';


const routes: Routes = [
  // { path: '', component: HomeComponent },
  { path: '', component: MapComponent },
  { path: 'consumer', component: ConsumerComponent },
  { path: 'provider', component: ProviderComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'map', component: MapComponent },
  { path: 'register', component: LoginRegisterComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }