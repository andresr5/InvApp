import { Injectable } from '@angular/core';
import { Movimiento } from '../components/entities/Movimiento';
import { Producto } from '../components/entities/Producto';
import { TipoMovimiento } from '../components/entities/TipoMovimiento';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MovimientoService {

  productos:Producto[];
  tipoMovimiento:TipoMovimiento = new TipoMovimiento(1,'INGRESO');
  private apiUrl ='http://localhost:8080/rest/movimiento/';




  constructor(private http: Http) { }

  findAll(): Observable<Movimiento[]>{
    return this.http.get(this.apiUrl)
    .map((res:Response)=> res.json())
    .catch((error:any)=> Observable.throw(error.json().error || 'Server error'));
  }


  updateMovimiento(movimiento:Movimiento):Observable<Movimiento>{
    return this.http.put(this.apiUrl,movimiento)
    .map((res:Response)=> res.json())
    .catch((error:any)=>Observable.throw(error.json().error || 'Server Error'))
  }


  saveMovimiento(movimiento:Movimiento):Observable<Movimiento>{
    return this.http.put(this.apiUrl,movimiento)
    .map((res:Response)=> res.json())
    .catch((error:any)=>Observable.throw(error.json().error || 'Server error'))
  }

  deleteMovimientoById(id:number){
    return this.http.delete(this.apiUrl+'/'+id)
    .map((res:Response)=>res.json())
    .catch((error:any)=>Observable.throw(error.json().error || 'Server error'));
  }

  countMovimiento():Observable<number>{
    return this.http.get(this.apiUrl+'getLastId')
    .map((res:Response)=>res.json())
    .catch((erro:any)=>Observable.throw(erro.json().error || 'Server error'))
  }




}
