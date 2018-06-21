import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { TravelService } from '../../../ep-services/profile/travel.service';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
  
  formTravel: FormGroup;

  existing_emp_travel = null;
  existing_emp_travel_backup = null;
  id = 1;
  play_with_travel_button_to = this.id === null ? "create" : "nutral" ; //"edit"
  
  edit_form(){
    this.play_with_travel_button_to = 'edit'
  }

  cancel_edit(){
    this.existing_emp_travel = JSON.parse(JSON.stringify(this.existing_emp_travel_backup));
    this.play_with_travel_button_to = 'nutral'
  }


  constructor(fb: FormBuilder,
      public travel: TravelService) {
    this.formTravel= fb.group({
      validFrom: [null,[Validators.required,Validators.pattern('^(3[01]|[12][0-9]|0?[1-9])/(1[0-2]|0?[1-9])/(?:[0-9]{2})?[0-9]{2}$')]],
      validThrough: [null,[Validators.required,Validators.pattern('^(3[01]|[12][0-9]|0?[1-9])/(1[0-2]|0?[1-9])/(?:[0-9]{2})?[0-9]{2}$')]],
      sponseredBy: [null,[Validators.required]]

    });
   }

   validFrom() {
     return this.formTravel.get('validFrom') as FormControl
   }

   validThrough() {
    return this.formTravel.get('validThrough') as FormControl
  }

  sponseredBy() {
    return this.formTravel.get('sponseredBy') as FormControl
  }

  ngOnInit() {
    //Get Data
    this.travel.viewEmpTravel(this.id).then(data=>{
      this.existing_emp_travel = data;
      this.existing_emp_travel_backup = JSON.parse(JSON.stringify(data));
    });
      
}


  send(){
    var dataSet = this.formTravel.value;
    if( this.existing_emp_travel === null  ){
      console.log("HIII");
      this.travel.createEmpTravel( dataSet ).then(data=>{
        this.existing_emp_travel = data
        this.existing_emp_travel_backup = JSON.parse(JSON.stringify(data))
        this.id = this.existing_emp_travel.id
        console.log(this.id);
      });
    }
    else{ 
      console.log("hello");
      console.log(this.id);
      this.travel.updateEmpTravel( this.id, dataSet ).then(data=>{
        this.existing_emp_travel = data
        this.existing_emp_travel_backup = JSON.parse(JSON.stringify(data))
        console.log(dataSet);
      });
    }
    this.play_with_travel_button_to = 'nutral'
  }

}
