import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  personalInfo: FormGroup;

  constructor(fb: FormBuilder) {
    this.personalInfo = fb.group({

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
      dob: [null,[Validators.required,Validators.pattern('^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$')]],
      doj: [null,[Validators.required,Validators.pattern('^(0[1-9]|1[012])[-/.](0[1-9]|[12][0-9]|3[01])[-/.](19|20)\\d\\d$')]],
      bloodGroup: [null,[Validators.required,Validators.pattern('^(A|B|AB|O)[+-]$')]],
      nationality: [null, [Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z]')]],
      uanNo: [null,[Validators.required,Validators.pattern('^\d{4}\s\d{4}\s\d{4}$')]],
      voterCardNo: [null,[Validators.required,Validators.pattern('^\d{4}\s\d{4}\s\d{4}$')]],
      adhaarCardNo: [null,[Validators.required,Validators.pattern('^\d{4}\s\d{4}\s\d{4}$')]],
      nameAsPerAdhaarCard: [null, [Validators.required,Validators.pattern('[a-zA-Z]{3,30}')]],
      dlNumber: [null, [Validators.required,,Validators.pattern('^(0|[1-9][0-9]*)$')]],
      dlExpiryDate: [null, [Validators.required,Validators.pattern('^(0[1-9]|1[012])[-/.](0[1-9]|[12][0-9]|3[01])[-/.](19|20)\\d\\d$')]],
      panCard: [null,[Validators.required,Validators.pattern('[A-Za-z]{5}\d{4}[A-Za-z]{1}')]],
      nameAsPerPanCard: [null, [Validators.required,Validators.pattern('[a-zA-Z]{3,30}')]],
      passportNo: [null, [Validators.required,Validators.pattern('^(?!^0+$)[a-zA-Z0-9]{3,20}$')]],
      passportValidTo: [null, [Validators.required,Validators.pattern('^(0[1-9]|1[012])[-/.](0[1-9]|[12][0-9]|3[01])[-/.](19|20)\\d\\d$')]]
    });
    }

    get associateId() {
        return this.personalInfo.get('associateId') as FormControl 
    }

    get firstName() {
      return this.personalInfo.get('firstName') as FormControl
    }

    get middleName() {
      return this.personalInfo.get('middleName') as FormControl
    }

    get lastName() {
      return this.personalInfo.get('lastName') as FormControl
    }

    get email() {
      return this.personalInfo.get('email') as FormControl
    }

    get personalEmail() {
      return this.personalInfo.get('personalEmail') as FormControl
    }

    get fatherName() {
      return this.personalInfo.get('fatherName') as FormControl
    }

    get motherName() {
      return this.personalInfo.get('motherName') as FormControl
    }

    get phone() {
      return this.personalInfo.get('phone') as FormControl 
    }

    get phoneHome() {
      return this.personalInfo.get('phoneHome') as FormControl 
    }

    get dob() {
      return this.personalInfo.get('dob') as FormControl 
    }

    get doj() {
      return this.personalInfo.get('doj') as FormControl 
    }

    get bloodGroup() {
      return this.personalInfo.get('bloodGroup') as FormControl 
    }

    get nationality() {
      return this.personalInfo.get('nationality') as FormControl 
    }

    get uanNo() {
      return this.personalInfo.get('uanNo') as FormControl 
    }

    get voterCardNo() {
      return this.personalInfo.get('voterCardNo') as FormControl 
    }

    get adhaarCardNo() {
      return this.personalInfo.get('adhaarCardNo') as FormControl 
    }

    get nameAsPerAdhaarCard() {
      return this.personalInfo.get('nameAsPerAdhaarCard') as FormControl 
    }

    get dlNumber() {
      return this.personalInfo.get('dlNumber') as FormControl 
    }

    get dlExpiryDate() {
      return this.personalInfo.get('dlExpiryDate') as FormControl 
    }

    get panCard() {
      return this.personalInfo.get('panCard') as FormControl 
    }

    get nameAsPerPanCard() {
      return this.personalInfo.get('nameAsPerPanCard') as FormControl 
    }

    get passportNo() {
      return this.personalInfo.get('passportNo') as FormControl 
    }
    
    get passportValidTo() {
      return this.personalInfo.get('passportValidTo') as FormControl 
    }






    send() {
      console.log(this.personalInfo.value);

   }

  ngOnInit() {
  }

}
