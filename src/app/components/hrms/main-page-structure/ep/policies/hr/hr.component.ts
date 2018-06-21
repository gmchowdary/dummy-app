import { Component, OnInit } from '@angular/core';
import { HrService } from '../../../ep-services/profile/hr.service'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.css']
})
export class HrComponent implements OnInit {

  formHr: FormGroup;
  existing_emp_hr = null;
  existing_emp_hr_backup = null;
  id =1;
  play_with_hr_button_to = this.id === null ? "create" : "nutral" ; //"edit"

  edit_form(){
    this.play_with_hr_button_to = 'edit'
  }

  cancel_edit(){
    this.existing_emp_hr = JSON.parse(JSON.stringify(this.existing_emp_hr_backup));
    this.play_with_hr_button_to = 'nutral'
  }



  constructor(fb: FormBuilder,
      public hr:HrService) {
    this.formHr= fb.group({
      name: [null,[Validators.required]], 
      validFromDate: [null,[Validators.required,Validators.pattern('^(3[01]|[12][0-9]|0?[1-9])/(1[0-2]|0?[1-9])/(?:[0-9]{2})?[0-9]{2}$')]],
      validUptoDate: [null,[Validators.required,Validators.pattern('^(3[01]|[12][0-9]|0?[1-9])/(1[0-2]|0?[1-9])/(?:[0-9]{2})?[0-9]{2}$')]]
    });
   }

   get name(){
     return this.formHr.get('name') as FormControl
   }

   get validFromDate(){
    return this.formHr.get('validFromDate') as FormControl
  }

  get validUptoDate(){
    return this.formHr.get('validUptoDate') as FormControl
  }
   

  ngOnInit() {
    //Get Data
    this.hr.viewEmpHR(this.id).then(data=>{
      this.existing_emp_hr = data;
      this.existing_emp_hr_backup = JSON.parse(JSON.stringify(data));
    });
      
  }


  send(){
    var dataSet = this.formHr.value;
    if( this.existing_emp_hr === null  ){
      console.log("HIII");
      this.hr.createEmpHR( dataSet ).then(data=>{
        this.existing_emp_hr = data
        this.existing_emp_hr_backup = JSON.parse(JSON.stringify(data))
        this.id = this.existing_emp_hr.id
        console.log(this.id);
      });
    }
    else{ 
      console.log("hello");
      console.log(this.id);
      this.hr.updateEmpHR( this.id, dataSet ).then(data=>{
        this.existing_emp_hr = data
        this.existing_emp_hr_backup = JSON.parse(JSON.stringify(data))
        console.log(dataSet);
      });
    }
    this.play_with_hr_button_to = 'nutral'
  }


}
