import { Component, OnInit } from '@angular/core';
import {ExampleService} from '../../../example.service';

@Component({
  selector: 'app-main-page-structure',
  templateUrl: './main-page-structure.component.html',
  styleUrls: ['./main-page-structure.component.css']
})
export class MainPageStructureComponent implements OnInit {

  constructor(public ex:ExampleService) { }

  ngOnInit() {
    // var dataSet= {
    //     annual_salary: 200000.00,
    //     monthly_salary: 2000.00,
    //     basic: 1200.00,
    //     HRA: 200.00,
    //     LTA: 200.0,
    //     special_allowance: 2000.00,
    //     medical: "12345678",
    //     PF: "12345678"
    //   };
      this.ex.callService().then(data=>{
        console.log(data);
      });
  }
}

// localhost:1337/EmpCompensation/create

// {
//   annual_salary: 200000.00,
//   monthly_salary: 2000.00,
//   basic: 1200.00&HRA: 200.00,
//   LTA: 200.0,
//   special_allowance: 2000.00,
//   medical: "12345678",
//   PF: "12345678"
// }