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
  existing_emp_compensation = null;
  existing_emp_compensation_backup = null;
  id = 1;
  play_with_button_to = this.id === null ? "create" : "nutral" ; //"edit"
  
  edit_form(){
    this.play_with_button_to = 'edit'
  }
//formcompensation.reset()
  cancel_edit(){
    this.existing_emp_compensation = JSON.parse(JSON.stringify(this.existing_emp_compensation_backup));
    this.play_with_button_to = 'nutral'
  }

  

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

ngOnInit() {
    //Get Data
    this.compensation.viewEmpCompensation(this.id).then(data=>{
      this.existing_emp_compensation = data;
      this.existing_emp_compensation_backup = JSON.parse(JSON.stringify(data));
    });
      
}


  send(){
    var dataSet = this.formcompensation.value;
    if( this.existing_emp_compensation === null  ){
      console.log("HIII");
      this.compensation.createEmpCompensation( dataSet ).then(data=>{
        this.existing_emp_compensation = data
        this.existing_emp_compensation_backup = JSON.parse(JSON.stringify(data))
        this.id = this.existing_emp_compensation.id
        console.log(this.id);
      });
    }
    else{ 
      console.log("hello");
      console.log(this.id);
      this.compensation.updateEmpCompensation( this.id, dataSet ).then(data=>{
        this.existing_emp_compensation = data
        this.existing_emp_compensation_backup = JSON.parse(JSON.stringify(data))
        console.log(dataSet);
      });
    }
    this.play_with_button_to = 'nutral'
  }
}
