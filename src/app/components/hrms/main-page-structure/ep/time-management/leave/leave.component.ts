import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { LeaveService } from '../../../ep-services/profile/leave.service';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {
  formLeave: FormGroup;

  existing_emp_leave = null;
  existing_emp_leave_backup = null;
  id = 1;
  play_with_leave_button_to = this.id === null ? "create" : "nutral" ; //"edit"
  
  edit_form(){
    this.play_with_leave_button_to = 'edit'
  }
//formcompensation.reset()
  cancel_edit(){
    this.existing_emp_leave = JSON.parse(JSON.stringify(this.existing_emp_leave_backup));
    this.play_with_leave_button_to = 'nutral'
  }


  constructor(fb: FormBuilder,
    public  leave: LeaveService) { 
    this.formLeave = fb.group({
    fromDate: [null,[Validators.required,Validators.pattern('^(3[01]|[12][0-9]|0?[1-9])/(1[0-2]|0?[1-9])/(?:[0-9]{2})?[0-9]{2}$')]],
    toDate: [null,[Validators.required,Validators.pattern('^(3[01]|[12][0-9]|0?[1-9])/(1[0-2]|0?[1-9])/(?:[0-9]{2})?[0-9]{2}$')]],
    emergencyPhone: [null,[Validators.required,Validators.pattern('^(0|[1-9][0-9]*)$')]]
    });
  }

  get fromDate() {
    return this.formLeave.get('fromDate') as FormControl
  }

  get toDate() {
    return this.formLeave.get('toDate') as FormControl
  }

  get emergencyPhone() {
    return this.formLeave.get('emergencyPhone') as FormControl
  }

  ngOnInit() {
    //Get Data
    this.leave.viewEmpLeave(this.id).then(data=>{
      this.existing_emp_leave = data;
      this.existing_emp_leave_backup = JSON.parse(JSON.stringify(data));
    });
      
}


  send(){
    var dataSet = this.formLeave.value;
    if( this.existing_emp_leave === null  ){
      console.log("HIII");
      this.leave.createEmpLeave( dataSet ).then(data=>{
        this.existing_emp_leave = data
        this.existing_emp_leave_backup = JSON.parse(JSON.stringify(data))
        this.id = this.existing_emp_leave.id
        console.log(this.id);
      });
    }
    else{ 
      console.log("hello");
      console.log(this.id);
      this.leave.updateEmpLeave( this.id, dataSet ).then(data=>{
        this.existing_emp_leave = data
        this.existing_emp_leave_backup = JSON.parse(JSON.stringify(data))
        console.log(dataSet);
      });
    }
    this.play_with_leave_button_to = 'nutral'
  }

}
