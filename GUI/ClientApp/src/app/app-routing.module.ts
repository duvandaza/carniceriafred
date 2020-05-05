import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadingComponent } from './components/loading/loading.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MenuComponent } from './components/shared/menu/menu.component';

 export const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: 'loading', component: LoadingComponent},
  { path: 'menu', component: MenuComponent},
  { path: '**', redirectTo: 'loading'}
];


