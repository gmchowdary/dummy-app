import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {

  formInsurance: FormGroup;
  
  constructor(fb: FormBuilder) { 
    this.formInsurance = fb.group({

      spouseName: [null, [Validators.required]],
      spouseDateOfBirth: [null, [Validators.required]],
      noOfChildren: [null, [Validators.required]],
      childName: [null, [Validators.required]],
      childDateOfBirth: [null, [Validators.required]],
      childrenName: [null, [Validators.required]],
      childrenDateOfBirth: [null, [Validators.required]],
      cardNum: [null, [Validators.required]],
      TPA: [null, [Validators.required]],
      TPAContactNum: [null, [Validators.required]]

    })
  }


  get spouseName(){
    return this.formInsurance.get('spouseName') as FormControl
  }

  get spouseDateOfBirth(){
    return this.formInsurance.get('spouseDateOfBirth') as FormControl
  }

  get noOfChildren(){
    return this.formInsurance.get('noOfChildren') as FormControl
  }

  get childName(){
    return this.formInsurance.get('childName') as FormControl
  }

  get childDateOfBirth(){
    return this.formInsurance.get('childDateOfBirth') as FormControl
  }

  get childrenName(){
    return this.formInsurance.get('childrenName') as FormControl
  }
  get childrenDateOfBirth(){
    return this.formInsurance.get('childrenDateOfBirth') as FormControl
  }

  get cardNum(){
    return this.formInsurance.get('cardNum') as FormControl
  }

  get TPA(){
    return this.formInsurance.get('TPA') as FormControl
  }

  get TPAContactNum(){
    return this.formInsurance.get('TPAContactNum') as FormControl
  }


  ngOnInit() {
  }

}
