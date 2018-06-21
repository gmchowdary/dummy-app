import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  formCompanyDetails: FormGroup;


  constructor(fb: FormBuilder) { 
    this.formCompanyDetails = fb.group({
      company: [null,[Validators.required,Validators.pattern('[a-zA-Z]{3,30}')]],
      unit: [null,[Validators.required]],
      track: [null,[Validators.required]],
      designation: [null,[Validators.required,Validators.pattern('[a-zA-Z]{3,30}')]],
      employmentType: [null,[Validators.required,Validators.pattern('[a-zA-Z]{3,30}')]],
      reportingManager: [null,[Validators.required]],
      location: [null,[Validators.required,Validators.pattern('[a-zA-Z]{3,30}')]],
      EPAccess: [null,[Validators.required]],
      experience: [null,[Validators.required,Validators.pattern('^(0|[1-9][0-9]*)$')]]
    })
  }

  get company(){
    return this.formCompanyDetails.get('company') as FormControl
  }

  get unit(){
    return this.formCompanyDetails.get('unit') as FormControl
  }

  get track(){
    return this.formCompanyDetails.get('track') as FormControl
  }

  get designation(){
    return this.formCompanyDetails.get('designation') as FormControl
  }

  get employmentType(){
    return this.formCompanyDetails.get('employmentType') as FormControl
  }

  get reportingManager(){
    return this.formCompanyDetails.get('reportingManager') as FormControl
  }

  get location(){
    return this.formCompanyDetails.get('location') as FormControl
  }

  get EPAccess(){
    return this.formCompanyDetails.get('EPAccess') as FormControl
  }

  get experience(){
    return this.formCompanyDetails.get('experience') as FormControl
  }




  ngOnInit() {
  }

}
