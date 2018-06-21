import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { EducationalInformationService } from '../../../../ep-services/profile/educational-information.service';

@Component({
  selector: 'app-educational-information',
  templateUrl: './educational-information.component.html',
  styleUrls: ['./educational-information.component.css']
})
export class EducationalInformationComponent implements OnInit {

  educationalInformation: FormGroup;

  
  existing_emp_educational_info = null;
  existing_emp_educational_info_backup = null;
  id= null;
  play_with_educational_info_button_to = this.id === null ? "create" : "nutral" ; // Update

  edit_form() {
    this.play_with_educational_info_button_to = 'edit'
}

  cancel_edit(){
  this.existing_emp_educational_info = JSON.parse(JSON.stringify(this.existing_emp_educational_info_backup));
  this.play_with_educational_info_button_to = 'nutral'
  }
  
  constructor(fb: FormBuilder,
            public educational_info: EducationalInformationService) { 
    this.educationalInformation = fb.group({

      tenth: [null, [Validators.required]],
      twelve: [null, [Validators.required]],
      qualification: [null, [Validators.required]],
      university: [null, [Validators.required]],
      percentage: [null, [Validators.required]]

    })
  }


  get tenth(){
    return this.educationalInformation.get('tenth') as FormControl
  }

  get twelve(){
    return this.educationalInformation.get('twelve') as FormControl
  }

  get qualification(){
    return this.educationalInformation.get('qualification') as FormControl
  }

  get university(){
    return this.educationalInformation.get('university') as FormControl
  }

  get percentage(){
    return this.educationalInformation.get('percentage') as FormControl
  }


  ngOnInit() {
    //Get Data
    this.educational_info.viewEmpEducationalInfo(this.id).then(data=>{
      this.existing_emp_educational_info = data;
      this.existing_emp_educational_info_backup = JSON.parse(JSON.stringify(data));
    });
      
}


  send(){
    var dataSet = this.educationalInformation.value;
    if( this.existing_emp_educational_info === null  ){
      console.log("HIII");
      this.educational_info.createEmpEducationalInfo( dataSet ).then(data=>{
        this.existing_emp_educational_info = data
        this.existing_emp_educational_info_backup = JSON.parse(JSON.stringify(data))
        this.id = this.existing_emp_educational_info.id
        console.log(this.id);
      });
    }
    else{ 
      console.log("hello");
      console.log(this.id);
      this.educational_info.updateEmpEducationalInfo( this.id, dataSet ).then(data=>{
        this.existing_emp_educational_info = data
        this.existing_emp_educational_info_backup = JSON.parse(JSON.stringify(data))
        console.log(dataSet);
      });
    }
    this.play_with_educational_info_button_to = 'nutral'
  }
    

}
