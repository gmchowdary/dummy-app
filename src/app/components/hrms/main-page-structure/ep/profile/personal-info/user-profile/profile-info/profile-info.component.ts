import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ProfileInfoService } from '../../../../../ep-services/profile/profile-info.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {

  formProfileInfo: FormGroup;

  existing_emp_profile_info = null;
  existing_emp_profile_info_backup = null;
  id = 1;
  play_with_profile_info_button_to = this.id === null ? "create" : "nutral" ; // Update

 edit_form() {
      this.play_with_profile_info_button_to = 'edit'
 }

 cancel_edit(){
  this.existing_emp_profile_info = JSON.parse(JSON.stringify(this.existing_emp_profile_info));
  this.play_with_profile_info_button_to = 'nutral'
 }

  constructor(fb: FormBuilder,
      public profile_info: ProfileInfoService) { 
    this.formProfileInfo= fb.group({

      associateId: [null, [Validators.required,Validators.minLength(3),Validators.pattern('^(0|[1-9][0-9]*)$')]],
      firstName: [null, [Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z]{3,30}')]],
      middleName: [null, [Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z]{3,30}')]],
      lastName: [null, [Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z]{3,30}')]],
      email: [null, [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      personalEmail: [null, [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      fatherName: [null, [Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z]{3,30}')]],
      motherName: [null, [Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z]{3,30}')]],
      phone: [null, [Validators.required,Validators.maxLength(10),Validators.pattern('^(0|[1-9][0-9]*)$')]],
      phoneHome: [null, [Validators.required,Validators.maxLength(10),Validators.pattern('^(0|[1-9][0-9]*)$')]],
      dob: [null,[Validators.required,Validators.pattern('^(3[01]|[12][0-9]|0?[1-9])/(1[0-2]|0?[1-9])/(?:[0-9]{2})?[0-9]{2}$')]],
      doj: [null,[Validators.required,Validators.pattern('^(3[01]|[12][0-9]|0?[1-9])/(1[0-2]|0?[1-9])/(?:[0-9]{2})?[0-9]{2}$')]],
      bloodGroup: [null,[Validators.required,Validators.pattern('^(A|B|AB|O)[+-]$')]],
      nationality: [null, [Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z]')]]
    });
  }


  get associateId() {
    return this.formProfileInfo.get('associateId') as FormControl 
}

get firstName() {
  return this.formProfileInfo.get('firstName') as FormControl
}

get middleName() {
  return this.formProfileInfo.get('middleName') as FormControl
}

get lastName() {
  return this.formProfileInfo.get('lastName') as FormControl
}

get email() {
  return this.formProfileInfo.get('email') as FormControl
}

get personalEmail() {
  return this.formProfileInfo.get('personalEmail') as FormControl
}

get fatherName() {
  return this.formProfileInfo.get('fatherName') as FormControl
}

get motherName() {
  return this.formProfileInfo.get('motherName') as FormControl
}

get phone() {
  return this.formProfileInfo.get('phone') as FormControl 
}

get phoneHome() {
  return this.formProfileInfo.get('phoneHome') as FormControl 
}

get dob() {
  return this.formProfileInfo.get('dob') as FormControl 
}

get doj() {
  return this.formProfileInfo.get('doj') as FormControl 
}

get bloodGroup() {
  return this.formProfileInfo.get('bloodGroup') as FormControl 
}

get nationality() {
  return this.formProfileInfo.get('nationality') as FormControl 
}

ngOnInit() {
  //Get Data
  this.profile_info.viewEmpInfo(this.id).then(data=>{
    this.existing_emp_profile_info = data;
    this.existing_emp_profile_info_backup = JSON.parse(JSON.stringify(data));
  });
    
}


send(){
  var dataSet = this.formProfileInfo.value;
  if( this.existing_emp_profile_info === null  ){
    console.log("HIII");
    this.profile_info.createEmpInfo( dataSet ).then(data=>{
      this.existing_emp_profile_info = data
      this.existing_emp_profile_info_backup = JSON.parse(JSON.stringify(data))
      this.id = this.existing_emp_profile_info.id
      console.log(this.id);
    });
  }
  else{ 
    console.log("hello");
    console.log(this.id);
    this.profile_info.updateEmpInfo( this.id, dataSet ).then(data=>{
      this.existing_emp_profile_info = data
      this.existing_emp_profile_info_backup = JSON.parse(JSON.stringify(data))
      console.log(dataSet);
    });
  }
  this.play_with_profile_info_button_to = 'nutral'
}

}
