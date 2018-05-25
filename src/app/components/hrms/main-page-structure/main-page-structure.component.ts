import { Component, OnInit } from '@angular/core';
import { CompensationService } from '../main-page-structure/ep-services/profile/compensation.service';

@Component({
  selector: 'app-main-page-structure',
  templateUrl: './main-page-structure.component.html',
  styleUrls: ['./main-page-structure.component.css']
})
export class MainPageStructureComponent implements OnInit {

  constructor( public compensation:CompensationService ) { }

  ngOnInit() {
    // GET Data
    // this.compensation.viewEmpCompensation(1).then(data=>{
    //   console.log(data);
    // });

    // POST Data
    // var dataSet= {
    //     annual_salary: 200000.00,
    //     monthly_salary: 2000.00,
    //     basic: 1200.00,
    //     HRA: 200.00,
    //     LTA: 200.0,
    //     special_allowance: 2000.00,
    //     medical: "12345678",
    //     PF: "12345678"
    // };
    
    // this.compensation.createEmpCompensation( dataSet ).then(data=>{
    //   console.log(data);
    // });

    // DELETE Data
    // this.compensation.deleteEmpCompensation(1).then(data=>{
    //   console.log(data);
    // });

    // PUT Data
    // var dataSet= {
    //     annual_salary: 100000.00,
    //     monthly_salary: 2000.00,
    //     basic: 1200.00,
    //     HRA: 200.00,
    //     LTA: 200.0,
    //     special_allowance: 2000.00,
    //     medical: "12345678",
    //     PF: "12345678"
    // };
    
    // this.compensation.updateEmpCompensation( 4,dataSet ).then(data=>{
    //   console.log(data);
    // });    
  }
}