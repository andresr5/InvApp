import { Injectable } from '@angular/core';
import { Categoria} from '../components/entities/Categoria';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
@Injectable()
export class CategoriasService {

  private apiUrl = 'http://localhost:8080/rest/categoria/';

  constructor(private http: Http) {  }

  findAll(): Observable<Categoria[]>{
    return this.http.get(this.apiUrl)
     .map((res:Response) => res.json())
     .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  updateCategoria(categoria: Categoria):Observable<Categoria>{
    return this.http.put(this.apiUrl,categoria)
    .map((res:Response) => res.json())
    .catch((error:any)=> Observable.throw(error.json().error || 'Server error'));
  }

  saveCategoria(categoria: Categoria):Observable<Categoria>{
    return this.http.post(this.apiUrl,categoria)
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }



  deleteCategoriaById(id:number):Observable<boolean>{
    return this.http.delete(this.apiUrl+"/"+id)
    .map((res:Response)=>res.json())
    .catch((error:any)=>Observable.throw(error.json().error || 'Server error'));
  }



    findById(id:number): Observable<Categoria>{
      return this.http.get(this.apiUrl+'/'+id).
         map((res:Response) =>res.json())
    }


    countCategoria():Observable<number>{
      return this.http.get(this.apiUrl+'getLastId')
      .map((res:Response)=> res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }


}
