import { Component, OnInit, OnDestroy } from '@angular/core';
import {Categoria} from '../../entities/categoria';
import{CategoriasService} from '../../../services/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  providers:[CategoriasService]
})
export class CategoriaCreateComponent implements OnInit {

  idUpdate: number;
  id:number = 0;
  categoria: Categoria;

  categoriaForm: FormGroup;
  private sub: any;

  constructor(private location : Location,
              private route: ActivatedRoute,
              private router: Router,
              private categoriaService: CategoriasService) { }


  ngOnInit() {
    this.sub = this.route.params.subscribe(params =>{
      this.idUpdate = params['id'];
    });

     this.categoriaForm = new FormGroup({
       nombre: new FormControl('',Validators.required),
       descripcion: new FormControl('',Validators.required)
     });

     if(this.idUpdate){
       this.categoriaService.findById(this.idUpdate).subscribe(
         categoria =>{
           this.id = categoria.id;
           this.categoriaForm.patchValue({
           nombre: categoria.nombre,
           descripcion: categoria.descripcion
         });
       },error=>{
         console.log(error);
       }
       );
     }

  }

ngOnDestroy():void{
  this.sub.unsubscribe();
}

onSubmit(){
   if(this.categoriaForm.valid){
     if(this.idUpdate){
      let categoria: Categoria = new
      Categoria(this.idUpdate,
        this.categoriaForm.controls['nombre'].value,
        this.categoriaForm.controls['descripcion'].value);
        console.log("La categoria on submit 1");
        console.log(categoria);
        this.categoriaService.saveCategoria(categoria).subscribe();
      }else{
        this.getLastId();
        console.log('Entro al else ');
        console.log(this.id);
        let categoria: Categoria = new
        Categoria(this.id+1,
          this.categoriaForm.controls['nombre'].value,
          this.categoriaForm.controls['descripcion'].value);
          console.log("La categoria on submit 2");
          console.log(categoria);
          this.categoriaService.updateCategoria(categoria).subscribe();
      }
   }

       this.categoriaForm.reset();

       this.router.navigate(['/categorias']);
}



  getLastId(){
    this.categoriaService.countCategoria().subscribe(
      (response)=>{
        this.id = response;
        console.log("al final de getlastid response");
       console.log(response);
       console.log(this.id);
      },(err)=>{
        console.log(err);
      }),()=>{
          console.log("Completed");
      };

  }


  redirectCastegoriaPage(){
    this.router.navigate(['/user']);
  }



}
