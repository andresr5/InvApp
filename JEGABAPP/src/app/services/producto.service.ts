import { Injectable} from '@angular/core';
import { Producto } from '../components/entities/Producto';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductoService {

  private apiUrl = 'http://localhost:8080/rest/producto/';

  constructor(private http: Http){ }

  findAll(): Observable<Producto[]>{
    return this.http.get(this.apiUrl)
    .map((res:Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


  updateProducto(producto:Producto):Observable<Producto>{
    return this.http.put(this.apiUrl,producto)
    .map((res:Response)=> res.json())
    .catch((error:any)=> Observable.throw(error.json().error || 'Server error'));
  }

  saveProducto(producto: Producto):Observable<Producto>{
    return this.http.post(this.apiUrl,producto)
    .catch((error:any)=> Observable.throw(error.json().error));

  }

  deleteProductoById(id:number){
    return this.http.delete(this.apiUrl+'/'+id)
    .map((res:Response)=>res.json())
    .catch((error:any)=>Observable.throw(error.json().error || 'Server error'));
  }

  findById(id:number):Observable<Producto>{
    return this.http.get(this.apiUrl+'/'+id)
    .map((res:Response) => res.json())
  }


  countProducto():Observable<number>{
    return this.http.get(this.apiUrl+'getLastId')
    .map((res:Response)=>res.json())
    .catch((error:any)=>Observable.throw(error.json().error || 'Server error'));
  }



}
