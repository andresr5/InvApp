import { Injectable } from '@angular/core';
import { Movimiento } from '../components/entities/Movimiento';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ReportsService {

  private apiUrl = 'http://localhost:8080/rest/movimiento/';

  constructor(private http:Http) { }

  getRepCategoriaProductosValor():Observable<Movimiento[]>{
    return this.http.get(this.apiUrl+'getRepCategoriaProductosValor')
    .map((res:Response)=> res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }


}
