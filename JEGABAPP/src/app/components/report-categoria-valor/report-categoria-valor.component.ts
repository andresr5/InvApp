import { Component, OnInit } from '@angular/core';
import { Movimiento } from '../entities/movimiento';
import { ReportsService } from '../../services/reports.service';
import {ActivatedRoute,Router} from '@angular/router';
import {ReportCategoValor} from '../entities/reportCategoValor';



@Component({
  selector: 'app-report-categoria-valor',
  templateUrl: './report-categoria-valor.component.html',
  providers:[ReportsService]
})
export class ReportCategoriaValorComponent implements OnInit {

   reportCategoValor:ReportCategoValor;
   reportCategoValorList:ReportCategoValor[] = [];


  constructor(
             private router: Router,
             private reportsService: ReportsService
  ) { }

  ngOnInit() {
    this.getReport();
  }

  getReport(){
    this.reportsService.getRepCategoriaProductosValor().subscribe(
      (response)=>{


        for (let i = 0; i < response.length; i++) {
            this.reportCategoValor = new ReportCategoValor(response[i][0],response[i][1],response[i][2],response[i][3]);
            this.reportCategoValorList.push(this.reportCategoValor);
            this.reportCategoValor = null;
        }

        console.log(this.reportCategoValorList)

      }
    )
  }

}
