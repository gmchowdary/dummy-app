import { Component, OnInit, group } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PreviousOrganizationsService } from '../../../../ep-services/profile/previous-organizations.service';

@Component({
  selector: 'app-previous-organizations',
  templateUrl: './previous-organizations.component.html',
  styleUrls: ['./previous-organizations.component.css']
})
export class PreviousOrganizationsComponent implements OnInit {

  formPreviousOrganization: FormGroup;

  existing_emp_previous_organization = null;
  existing_emp_previous_organization_backup = null;
  id=2;
  play_with_previous_organization_button_to = this.id === null ? "create" : "nutral";

  edit_form(){
    this.play_with_previous_organization_button_to = 'edit'
  }

  cancel_edit(){
    this.existing_emp_previous_organization = JSON.parse(JSON.stringify(this.existing_emp_previous_organization_backup));
    this.play_with_previous_organization_button_to = 'nutral'
  }




  constructor( fb: FormBuilder,
    public previousorganization: PreviousOrganizationsService) {
     this.formPreviousOrganization = fb.group({

      organizationName: [null,[Validators.required,Validators.pattern('^[a-zA-Z\- ]+$')]],
      designation: [null,[Validators.required,Validators.pattern('^[a-zA-Z\- ]+$')]],
      from: [null,[Validators.required,Validators.pattern('^(3[01]|[12][0-9]|0?[1-9])/(1[0-2]|0?[1-9])/(?:[0-9]{2})?[0-9]{2}$')]],
      to: [null,[Validators.required,Validators.pattern('^(3[01]|[12][0-9]|0?[1-9])/(1[0-2]|0?[1-9])/(?:[0-9]{2})?[0-9]{2}$')]],
      referenceName: [null,[Validators.required,Validators.pattern('^[a-zA-Z\- ]+$')]],
      referenceContact: [null,[Validators.required,Validators.pattern('^(0|[1-9][0-9]*)$')]]

    });
   }

   get organizationName() {
     return this.formPreviousOrganization.get('organizationName') as FormControl
   }

   get designation() {
    return this.formPreviousOrganization.get('designation') as FormControl
  }

  get from() {
    return this.formPreviousOrganization.get('from') as FormControl
  }

  get to() {
    return this.formPreviousOrganization.get('to') as FormControl
  }

  get referenceName() {
    return this.formPreviousOrganization.get('referenceName') as FormControl
  }

  get referenceContact() {
    return this.formPreviousOrganization.get('referenceContact') as FormControl
  }


  ngOnInit() {
    //Get Data
    this.previousorganization.viewEmpPreviousOrganizations(this.id).then(data=>{
      this.existing_emp_previous_organization = data;
      this.existing_emp_previous_organization_backup = JSON.parse(JSON.stringify(data));
    });
      
}


  send(){
    var dataSet = this.formPreviousOrganization.value;
    if( this.existing_emp_previous_organization === null  ){
      console.log("HIII");
      this.previousorganization.createEmpPreviousOrganizations( dataSet ).then(data=>{
        this.existing_emp_previous_organization = data
        this.existing_emp_previous_organization_backup = JSON.parse(JSON.stringify(data))
        this.id = this.existing_emp_previous_organization.id
        console.log(this.id);
      });
    }
    else{ 
      console.log("hello");
      console.log(this.id);
      this.previousorganization.updateEmpPreviousOrganizations( this.id, dataSet ).then(data=>{
        this.existing_emp_previous_organization = data
        this.existing_emp_previous_organization_backup = JSON.parse(JSON.stringify(data))
        console.log(dataSet);
      });
    }
    this.play_with_previous_organization_button_to = 'nutral'
  }

}
