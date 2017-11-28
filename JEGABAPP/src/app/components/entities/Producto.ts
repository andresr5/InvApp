import {Categoria} from './Categoria';

export class Producto{

   id:number;
   nombre: string;
   descripcion: string;
   codigo: string;
   precio: number;
   categoria: Categoria;

   constructor(id:number,   nombre: string,descripcion: string,codigo: string,precio: number,categoria: Categoria){
     this.id = id;
     this.nombre = nombre;
     this.descripcion = descripcion;
     this.codigo = codigo;
     this.precio = precio;
     this.categoria = categoria;
   }



}
