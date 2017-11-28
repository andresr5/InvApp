import {Component} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import {CategoriaListComponent} from './components/categorias/categoria-list/categoria-list.component';
import {CategoriaCreateComponent} from './components/categorias/categoria-create/categoria-create.component';
import {ProductoListComponent} from './components/productos/producto-list/producto-list.component';
import {ProductoCreateComponent} from './components/productos/producto-create/producto-create.component';
import {ReportCategoriaValorComponent} from './components/report-categoria-valor/report-categoria-valor.component';
import {MovimientoCreateComponent} from './components/movimiento/movimiento-create/movimiento-create.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'categorias', component: CategoriaListComponent },
  { path: 'categorias/create', component: CategoriaCreateComponent },
  { path: 'categorias/create/:id', component: CategoriaCreateComponent },
  { path: 'productos', component: ProductoListComponent },
  { path: 'productos/create', component: ProductoCreateComponent },
  { path: 'productos/create/:id', component: ProductoCreateComponent },
  { path: 'movimientos/create',component:MovimientoCreateComponent},
  { path: 'report/getRepCategoriaProductosValor', component:ReportCategoriaValorComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
