import { Component, OnInit } from '@angular/core';
import { CompensationService } from '../../../ep-services/profile/compensation.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-compensation',
  templateUrl: './compensation.component.html',
  styleUrls: ['./compensation.component.css']
})
export class CompensationComponent implements OnInit {

  formcompensation: FormGroup;

  constructor(fb: FormBuilder,
    public compensation:CompensationService) {
    this.formcompensation = fb.group({
      

      annual_salary: [null, [Validators.required,Validators.pattern('[0-9]*')]],
      monthly_salary: [null, [Validators.required,Validators.pattern('[0-9]*')]],
      basic: [null, [Validators.required,Validators.pattern('[0-9]*')]],
      HRA: [null, [Validators.required,Validators.pattern('[0-9]*')]],
      LTA: [null, [Validators.required,Validators.pattern('[0-9]*')]],
      special_allowance: [null, [Validators.required,Validators.pattern('[0-9]*')]],
      medical: [null, [Validators.required,Validators.pattern('[0-9]*')]],
      PF: [null, [Validators.required,Validators.pattern('[0-9]*')]]
       
      
      

    });
  }

  get annual_salary() {
    return this.formcompensation.get('annual_salary') as FormControl 
  }
get monthly_salary() {
  return this.formcompensation.get('monthly_salary') as FormControl 
 }
get basic() {
  return this.formcompensation.get('basic') as FormControl 
}
get HRA() {
  return this.formcompensation.get('HRA') as FormControl 
}
get LTA() {
  return this.formcompensation.get('LTA') as FormControl 
}
get special_allowance() {
  return this.formcompensation.get('special_allowance') as FormControl 
}

get medical() {
  return this.formcompensation.get('medical') as FormControl 
}

get PF() {
  return this.formcompensation.get('PF') as FormControl 
}

send() {
  console.log(this.formcompensation.value);

}
  
  ngOnInit() {
    
    
  }

  viewEmpCompensation(){
    
       //GET Data
       this.compensation.viewEmpCompensation(1).then(data=>{
        return data;
       });
  }

  createEmpCompenastion() {
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
    console.log(this.formcompensation.value );
    console.log("***************************************");
    var dataSet = this.formcompensation.value;
    this.compensation.createEmpCompensation( dataSet ).then(data=>{
       console.log(data);
       
     });

  }
    


}
