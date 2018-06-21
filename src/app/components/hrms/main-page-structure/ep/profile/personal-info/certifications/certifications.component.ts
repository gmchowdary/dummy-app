import { Component, OnInit } from '@angular/core';
import { CertificationsService } from '../../../../ep-services/profile/certifications.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {

  formcertification : FormGroup;

  existing_emp_certification = null;
  existing_emp_certification_backup = null;
  id =1;
  play_with_certification_button_to = this.id === null ? "create" : "nutral" ; //"edit"

  edit_form(){
    this.play_with_certification_button_to = 'edit'
  }

  cancel_edit(){
    this.existing_emp_certification = JSON.parse(JSON.stringify(this.existing_emp_certification_backup));
    this.play_with_certification_button_to = 'nutral'
  }

  constructor(fb: FormBuilder,
    public certification:CertificationsService) {
    this.formcertification = fb.group({
      

      certificate_name: [null, [Validators.required,Validators.pattern('[0-9]*')]],
      institution_name: [null, [Validators.required,Validators.pattern('[0-9]*')]],
      grade: [null, [Validators.required,Validators.pattern('[0-9]*')]],
      certified_on: [null, [Validators.required,Validators.pattern('[0-9]*')]],
      valid_upto: [null, [Validators.required,Validators.pattern('[0-9]*')]]

    });
  }

  get certificate_name() {
    return this.formcertification.get('certificate_name') as FormControl 
  }

  get institution_name() {
    return this.formcertification.get('institution_name') as FormControl 
  }

  get grade() {
    return this.formcertification.get('grade') as FormControl 
  }

  get certified_on() {
    return this.formcertification.get('certified_on') as FormControl 
  }

  get valid_upto() {
    return this.formcertification.get('valid_upto') as FormControl 
  }

  ngOnInit() {
    //Get Data
    this.certification.viewEmpCertifications(this.id).then(data=>{
      this.existing_emp_certification = data;
      this.existing_emp_certification_backup = JSON.parse(JSON.stringify(data));
    });
      
  }


  send(){
    var dataSet = this.formcertification.value;
    if( this.existing_emp_certification === null  ){
      console.log("HIII");
      this.certification.createEmpCertifications( dataSet ).then(data=>{
        this.existing_emp_certification = data
        this.existing_emp_certification_backup = JSON.parse(JSON.stringify(data))
        this.id = this.existing_emp_certification.id
        console.log(this.id);
      });
    }
    else{ 
      console.log("hello");
      console.log(this.id);
      this.certification.updateEmpCertifications( this.id, dataSet ).then(data=>{
        this.existing_emp_certification = data
        this.existing_emp_certification_backup = JSON.parse(JSON.stringify(data))
        console.log(dataSet);
      });
    }
    this.play_with_certification_button_to = 'nutral'
  }

}
