import { Component, OnInit } from '@angular/core';
import { ContactInformationService } from '../../../../ep-services/profile/contact-information.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.css']
})
export class ContactInformationComponent implements OnInit {

  formcontactinfo: FormGroup;

  existing_emp_contact_info = null;
  existing_emp_contact_info_backup = null;
  id = 1;
  play_with_contact_info_button_to = this.id === null ? "create" : "nutral" ; // Update

 edit_form() {
      this.play_with_contact_info_button_to = 'edit'
 }

 cancel_edit(){
  this.existing_emp_contact_info = JSON.parse(JSON.stringify(this.existing_emp_contact_info_backup));
  this.play_with_contact_info_button_to = 'nutral'
 }

  constructor(fb: FormBuilder,
    public contact_info:ContactInformationService) {

   this.formcontactinfo = fb.group({
      

    emergency_contact_number_self: [null, [Validators.required,Validators.maxLength(10),Validators.pattern('[0-9]*')]],
    emergency_contact_number_alternate: [null, [Validators.required,Validators.maxLength(10),Validators.pattern('[0-9]*')]],
    emergency_contact_email_self: [null, [Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    emergency_contact_email_alternate: [null, [Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    emergency_contact_relation: [null, [Validators.required,Validators.maxLength(10),Validators.pattern('[0-9]*')]], 
    emergency_contact_number_relation: [null, [Validators.required,Validators.maxLength(10),Validators.pattern('[0-9]*')]], 
    facebook_ID: [null, [Validators.required]],
    linkedIn_ID: [null, [Validators.required]],
    address1: [null, [Validators.required]],
    address2: [null, [Validators.required]],
    address3: [null, [Validators.required]],
    landmark: [null, [Validators.required,Validators.pattern('^[a-zA-Z\- ]+$')]],
    city: [null, [Validators.required,Validators.pattern('^[a-zA-Z\- ]+$')]],
    state: [null, [Validators.required,Validators.pattern('^[a-zA-Z\- ]+$')]],
    country: [null, [Validators.required,Validators.pattern('^[a-zA-Z\- ]+$')]],
    zipcode: [null, [Validators.required,Validators.pattern('[0-9]*')]]
    
      
       
      
      

    });

   }

   get emergency_contact_number_self() {
     return this.formcontactinfo.get('emergency_contact_number_self') as FormControl
   }

   get emergency_contact_number_alternate(){
     return this.formcontactinfo.get('emergency_contact_number_alternate') as FormControl
   }

   get emergency_contact_email_self(){
     return this.formcontactinfo.get('emergency_contact_email_self') as FormControl
   }

   get emergency_contact_email_alternate(){
     return this.formcontactinfo.get('emergency_contact_email_alternate') as FormControl
   }

   get emergency_contact_relation(){
    return this.formcontactinfo.get('emergency_contact_relation') as FormControl
   }

   get emergency_contact_number_relation(){
    return this.formcontactinfo.get('emergency_contact_number_relation') as FormControl
   }

   get facebook_ID(){
     return this.formcontactinfo.get('facebook_ID') as FormControl
   }

   get linkedIn_ID(){
     return this.formcontactinfo.get('linkedIn_ID') as FormControl
   }

   get address1(){
     return this.formcontactinfo.get('address1') as FormControl
   }

   get address2(){
    return this.formcontactinfo.get('address2') as FormControl
  }

  get address3(){
    return this.formcontactinfo.get('address3') as FormControl
  }

  get landmark(){
    return this.formcontactinfo.get('landmark') as FormControl
  }

  get city(){
    return this.formcontactinfo.get('city') as FormControl
  }

   get state(){
     return this.formcontactinfo.get('state') as FormControl
   }

   get country() {
     return this.formcontactinfo.get('country') as FormControl
   }

   get zipcode() {
    return this.formcontactinfo.get('zipcode') as FormControl
  }

  ngOnInit() {
    //Get Data
    this.contact_info.viewEmpContactInfo(this.id).then(data=>{
      this.existing_emp_contact_info = data;
      this.existing_emp_contact_info_backup = JSON.parse(JSON.stringify(data));
    });
      
}


  send(){
    var dataSet = this.formcontactinfo.value;
    if( this.existing_emp_contact_info === null  ){
      console.log("HIII");
      this.contact_info.createEmpContactInfo( dataSet ).then(data=>{
        this.existing_emp_contact_info = data
        this.existing_emp_contact_info_backup = JSON.parse(JSON.stringify(data))
        this.id = this.existing_emp_contact_info.id
        console.log(this.id);
      });
    }
    else{ 
      console.log("hello");
      console.log(this.id);
      this.contact_info.updateEmpContactInfo( this.id, dataSet ).then(data=>{
        this.existing_emp_contact_info = data
        this.existing_emp_contact_info_backup = JSON.parse(JSON.stringify(data))
        console.log(dataSet);
      });
    }
    this.play_with_contact_info_button_to = 'nutral'
  }
    
}
