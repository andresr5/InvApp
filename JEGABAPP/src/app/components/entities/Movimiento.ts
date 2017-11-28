import {Producto} from './Producto';
import {TipoMovimiento} from './TipoMovimiento';
export class Movimiento{

  id: number;
  cantidad: number;
  fecha: Date;
  user:string;
  producto:Producto;
  tipoMovimiento:TipoMovimiento;

  constructor(id: number,cantidad: number,fecha: Date,producto:Producto,tipoMovimiento:TipoMovimiento){
    this.id=id;
    this.cantidad=cantidad;
    this.fecha=fecha;
    this.user="DEFAULT";
    this.producto = producto;
    this.tipoMovimiento=tipoMovimiento;
  }




}
