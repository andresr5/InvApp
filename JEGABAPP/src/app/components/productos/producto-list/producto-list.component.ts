import { Component, OnInit } from '@angular/core';
import {Producto} from '../../entities/producto';
import{ProductoService} from '../../../services/producto.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  providers:[ProductoService]
})
export class ProductoListComponent implements OnInit {

   private productos: Producto[];

  constructor(private router:Router,private productoService:ProductoService) {

   }

  ngOnInit() {
    this.getAllProductos();
  }

  getAllProductos(){
    this.productoService.findAll().subscribe(
      productos =>{
        this.productos = productos;
      },err=>{
        console.log(err);
      }
    );
  }


  editProductoPage(producto: Producto){
    console.log('-------------> ediit producto');
    console.log(producto);
    if(producto){
        this.router.navigate(['/productos/create',producto.id]);
    }
  }

  deleteProducto(producto:Producto){
    if(producto){
      this.productoService.deleteProductoById(producto.id).subscribe(
        res=>{
          this.getAllProductos();
          this.router.navigate(['/productos']);
        }
      )
    }
  }




}
