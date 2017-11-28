import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { Ng2AutoCompleteModule } from '../../node_modules/ng2-auto-complete';
//Rutas
import {APP_ROUTING} from './app.routes';


///Servicios
import { CategoriasService } from './services/categoria.service';
import { ProductoService } from './services/producto.service';
import { ReportsService } from './services/reports.service';
import { MovimientoService} from './services/movimiento.service';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CategoriaListComponent } from './components/categorias/categoria-list/categoria-list.component';
import { CategoriaCreateComponent } from './components/categorias/categoria-create/categoria-create.component';
import { ProductoCreateComponent } from './components/productos/producto-create/producto-create.component';
import { ProductoListComponent } from './components/productos/producto-list/producto-list.component';
import { LuiscarenalgaComponent } from './components/luiscarenalga/luiscarenalga.component';
import { MovimientoCreateComponent } from './components/movimiento/movimiento-create/movimiento-create.component';
import { ReportProductoPrecioComponent } from './components/report-producto-precio/report-producto-precio.component';
import { ReportCategoriaValorComponent } from './components/report-categoria-valor/report-categoria-valor.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    CategoriaListComponent,
    CategoriaCreateComponent,
    ProductoCreateComponent,
    ProductoListComponent,
    LuiscarenalgaComponent,
    MovimientoCreateComponent,
    ReportProductoPrecioComponent,
    ReportCategoriaValorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    Ng2AutoCompleteModule,
    APP_ROUTING
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
