import { Component, OnInit } from '@angular/core';
import {Categoria} from '../../entities/categoria';
import{CategoriasService} from '../../../services/categoria.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  providers:[CategoriasService]
})
export class CategoriaListComponent implements OnInit {

  private categorias: Categoria[];

  constructor(private router:  Router,private categoriasService: CategoriasService) {

   }

  ngOnInit() {
    this.getAllCategorias();
  }


  getAllCategorias(){
    this.categoriasService.findAll().subscribe(
      categorias => {
        this.categorias = categorias;
      },err=>{
        console.log(err);
      }
    );
  }

  redirectNewCategoriaPage() {
    this.router.navigate(['categorias/create']);
  }

  editCategoriaPage(categoria: Categoria) {
    console.log("categoria---------------->");
    console.log(categoria);
    if (categoria) {
      this.router.navigate(['/categorias/create', categoria.id]);
    }
  }

  deleteCategoria(categoria: Categoria) {
    if(categoria){
      this.categoriasService.deleteCategoriaById(categoria.id).subscribe(
        res =>{
          this.getAllCategorias();
          this.router.navigate(['/categorias']);
        }
      );
    }

  }

}
