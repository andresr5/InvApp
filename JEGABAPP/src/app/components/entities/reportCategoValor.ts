export class ReportCategoValor{

  nombreProducto:String;
  cantidad:number;
  precioUnitario:number;
  precioTotal:number;

  constructor(  nombreProducto:String,cantidad:number,precioUnitario:number,precioTotal:number){
    this.nombreProducto = nombreProducto;
    this.cantidad= cantidad;
    this.precioUnitario = precioUnitario;
    this.precioTotal = precioTotal;
  }


}
