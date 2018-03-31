import { Component, OnInit } from '@angular/core';
declare const $;

@Component({
  selector: 'app-hrms',
  templateUrl: './hrms.component.html',
  styleUrls: ['./hrms.component.css']
})
export class HrmsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $("button").click(function(){
          $("div").animate({left: '250px'});
      });
  });
  }

}
