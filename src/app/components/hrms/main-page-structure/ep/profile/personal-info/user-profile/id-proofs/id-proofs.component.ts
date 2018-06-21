import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { IdProofsService } from '../../../../../ep-services/profile/id-proofs.service';

@Component({
  selector: 'app-id-proofs',
  templateUrl: './id-proofs.component.html',
  styleUrls: ['./id-proofs.component.css']
})
export class IdProofsComponent implements OnInit {

  formIdProof: FormGroup;
  existing_emp_id_proofs = null;
  existing_emp_id_proofs_backup = null;
  id = 1;
  play_with_id_proofs_button_to = this.id === null ? "create" : "nutral" ; // Update

 edit_form() {
      this.play_with_id_proofs_button_to = 'edit'
 }

 cancel_edit(){
  this.existing_emp_id_proofs = JSON.parse(JSON.stringify(this.existing_emp_id_proofs_backup));
  this.play_with_id_proofs_button_to = 'nutral'
 }




  constructor(fb: FormBuilder,
      public id_proofs:IdProofsService) {
    this.formIdProof= fb.group({
      uanNo: [null,[Validators.required]],
      voterCardNo: [null,[Validators.required]],
      adhaarCardNo: [null,[Validators.required]],
      nameAsPerAdhaarCard: [null, [Validators.required,Validators.pattern('[a-zA-Z]{3,30}')]],
      dlNumber: [null, [Validators.required]],
      dlExpiryDate: [null, [Validators.required,Validators.pattern('^(3[01]|[12][0-9]|0?[1-9])/(1[0-2]|0?[1-9])/(?:[0-9]{2})?[0-9]{2}$')]],
      panCard: [null,[Validators.required,Validators.pattern('[A-Za-z]{5}\d{4}[A-Za-z]{1}')]],
      nameAsPerPanCard: [null, [Validators.required,Validators.pattern('[a-zA-Z]{3,30}')]],
      passportNo: [null, [Validators.required]],
      passportValidTo: [null, [Validators.required,Validators.pattern('^(3[01]|[12][0-9]|0?[1-9])/(1[0-2]|0?[1-9])/(?:[0-9]{2})?[0-9]{2}$')]]
    });
   }


   get uanNo() {
    return this.formIdProof.get('uanNo') as FormControl 
  }

  get voterCardNo() {
    return this.formIdProof.get('voterCardNo') as FormControl 
  }

  get adhaarCardNo() {
    return this.formIdProof.get('adhaarCardNo') as FormControl 
  }

  get nameAsPerAdhaarCard() {
    return this.formIdProof.get('nameAsPerAdhaarCard') as FormControl 
  }

  get dlNumber() {
    return this.formIdProof.get('dlNumber') as FormControl 
  }

  get dlExpiryDate() {
    return this.formIdProof.get('dlExpiryDate') as FormControl 
  }

  get panCard() {
    return this.formIdProof.get('panCard') as FormControl 
  }

  get nameAsPerPanCard() {
    return this.formIdProof.get('nameAsPerPanCard') as FormControl 
  }

  get passportNo() {
    return this.formIdProof.get('passportNo') as FormControl 
  }
  
  get passportValidTo() {
    return this.formIdProof.get('passportValidTo') as FormControl 
  }
  
  ngOnInit() {
    //Get Data
    this.id_proofs.viewEmpIdProofs(this.id).then(data=>{
      this.existing_emp_id_proofs = data;
      this.existing_emp_id_proofs_backup = JSON.parse(JSON.stringify(data));
    });
      
}


  send(){
    var dataSet = this.formIdProof.value;
    if( this.existing_emp_id_proofs === null  ){
      console.log("HIII");
      this.id_proofs.createEmpIdProofs( dataSet ).then(data=>{
        this.existing_emp_id_proofs = data
        this.existing_emp_id_proofs_backup = JSON.parse(JSON.stringify(data))
        this.id = this.existing_emp_id_proofs.id
        console.log(this.id);
      });
    }
    else{ 
      console.log("hello");
      console.log(this.id);
      this.id_proofs.updateEmpIdProofs( this.id, dataSet ).then(data=>{
        this.existing_emp_id_proofs = data
        this.existing_emp_id_proofs_backup = JSON.parse(JSON.stringify(data))
        console.log(dataSet);
      });
    }
    this.play_with_id_proofs_button_to = 'nutral'
  }

}
