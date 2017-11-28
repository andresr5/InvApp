import { Component, OnInit } from '@angular/core';
import { Movimiento } from '../../entities/Movimiento';
import { Producto } from '../../entities/Producto';
import { Categoria } from '../../entities/Categoria';
import { TipoMovimiento } from '../../entities/TipoMovimiento';
import { FormControl,FormGroup,Validators} from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute, Router} from '@angular/router';
import { MovimientoService } from '../../../services/movimiento.service';
import {ProductoService} from '../../../services/producto.service';
@Component({
  selector: 'app-movimiento-create',
  templateUrl: './movimiento-create.component.html',
  providers:[MovimientoService,ProductoService]
})
export class MovimientoCreateComponent implements OnInit {


//
private sub:any;

//Lista de productos
productos:Producto[];


//Atributos que pertenecen al productos
id:number;
nombre:string;
descripcion:string;
codigo:string;
precio:string;
categoriaProducto:Categoria;

//Declaracion del MovimientoForm
movimientoForm: FormGroup;

  modelProducto = {id:this.id, nombre:this.nombre,descripcion:this.descripcion,codigo:this.codigo,precio:this.precio,categoria:this.categoriaProducto};

  constructor(private location:Location,
              private route:ActivatedRoute,
              private router: Router,
              private movimientoService: MovimientoService,
              private productoService:ProductoService
               ) { }

  ngOnInit() {
    this.getAllProductos();

    this.movimientoForm = new FormGroup({
      producto: new FormControl('',Validators.required),
      cantidad: new FormControl('',Validators.required)
  });

  }

  getAllProductos(){
    this.productoService.findAll().subscribe(
      productos =>{
        this.productos = productos;
        console.log(productos);
      }
    );
  }

  ngOnDestroy():void{
    this.sub.unsubscribe();
  }


}
