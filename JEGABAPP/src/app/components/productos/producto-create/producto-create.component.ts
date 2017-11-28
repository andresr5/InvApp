import { Component, OnInit, OnDestroy } from '@angular/core';
import {Producto} from '../../entities/producto';
import {Categoria} from '../../entities/categoria';
import {ProductoService} from '../../../services/producto.service';
import{CategoriasService} from '../../../services/categoria.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {FormControl, FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-producto-create',
  templateUrl: './producto-create.component.html',
  providers:[ProductoService,CategoriasService]
})
export class ProductoCreateComponent implements OnInit {

  idUpdate: number;
  id:number=0;
  producto: Producto;
  categorias:Categoria[];
  categoriaActual:Categoria = null;
  categoriaActualizar:Categoria = null;
  autocompleteList:Object[] = new Array<Object>(10);

  productoForm: FormGroup;
  private sub:any;

  constructor(private location:Location,
    private route: ActivatedRoute,
    private router: Router,
    private productoService: ProductoService,
    private categoriasService: CategoriasService
  ) { }
  idcat:number;
  nombre:String;
  descripcion:String;
  model2 ={id:this.idcat,nombre:this.nombre,descripcion:this.descripcion};


  ngOnInit() {

    this.getAllCategorias();

    this.sub = this.route.params.subscribe(params=>{
      this.idUpdate = params ['id'];
    });

    this.productoForm = new FormGroup({
      nombre: new FormControl('',Validators.required),
      descripcion: new FormControl('',Validators.required),
      codigo: new FormControl('',Validators.required),
      precio: new FormControl('',Validators.required),
      categoria: new FormControl('',Validators.required)
    });

    if(this.idUpdate){

      this.productoService.findById(this.idUpdate).subscribe(

        producto=>{
          this.id = producto.id;
          let obj ={id:producto.id,value:producto.nombre};
          //this.productoForm.controls['categoria'].patchValue(obj.id);


          if(producto.categoria!=null){
             console.log("categoria de producto is not null ");
             console.log(producto.categoria);
            this.categoriaActual = new Categoria(producto.categoria.id,producto.categoria.nombre,producto.categoria.descripcion);
            this.model2.id = producto.categoria.id;
            this.model2.nombre=producto.categoria.nombre;

            this.productoForm.patchValue({
              nombre:producto.nombre,
              codigo:producto.codigo,
              descripcion:producto.descripcion,
              precio: producto.precio,
              categoria:(producto.categoria.nombre),

            });

          }else{
            console.log("Categoria de producot is null");
            this.productoForm.patchValue({
              nombre:producto.nombre,
              codigo:producto.codigo,
              descripcion:producto.descripcion,
              precio: producto.precio,
             categoria:null
            });


          }



        },error=>{
          console.log(error);
        }
      );

    }else{
      this.id=this.getLastId();
    }
  }


  ngOnDestroy():void{
    this.sub.unsubscribe();
  }

  onSubmit(){
    if(this.productoForm.valid){
      console.log("entro l ifs valid");
      if(this.idUpdate){
        console.log("this.categoriaActualizar");
        console.log(this.categoriaActualizar);
        console.log("this.categoriaActual");
        console.log(this.categoriaActual);
        let producto: Producto = new
        Producto(this.idUpdate,this.productoForm.controls['nombre'].value,
        this.productoForm.controls['descripcion'].value,
        this.productoForm.controls['codigo'].value,
        this.productoForm.controls['precio'].value,(this.categoriaActualizar !=null)?this.categoriaActualizar:this.categoriaActual);
          this.productoService.updateProducto(producto).subscribe();
          producto=null;

      }else{
        let producto: Producto = new
        Producto(this.id+1,this.productoForm.controls['nombre'].value,
        this.productoForm.controls['descripcion'].value,
        this.productoForm.controls['codigo'].value,
        this.productoForm.controls['precio'].value,null);
        this.productoService.saveProducto(producto).subscribe();
      }
    }

    this.productoForm.reset();

    this.router.navigate(['/productos']);

  }


  getLastId():number{
    this.productoService.countProducto().subscribe(
      (response)=>{
        this.id=response;

      },(err)=>{
        console.log(err);
      }),()=>{
        console.log("completed");
      };
      return this.id;
    }


    redirectProductoPage(){
      this.router.navigate(['/productos']);
    }


    getAllCategorias(){
      this.categoriasService.findAll().subscribe(
        categorias => {
          this.categorias = categorias;
          //console.log(categorias);
          for(let cat of this.categorias){
          //console.log("this is item --> "+cat.id+ " -- "+cat.nombre);
          this.autocompleteList.push({id:cat.id,value:cat.nombre,nombre:cat.nombre,descripcion:cat.descripcion});
        }
        for(let cat of this.categorias){
          //console.log("this is item  printed--> ");
          //console.log(cat);
        }
      },err=>{
        console.log(err);
      }
    );
  }


  myCallback(newVal) {
    console.log("value is changed to "+  newVal);
    if( typeof newVal != null && newVal != undefined && newVal.id != null  ){
      this.categoriaActualizar = new Categoria(
                                              (newVal.id != null)?newVal.id:null,
                                              (newVal.nombre)?newVal.nombre:null,
                                              (newVal.descripcion)?newVal.descripcion:null);

    }
  }
}
