import { Component, OnInit } from '@angular/core';
declare const $;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $("button").click(function(){
          $("div").animate({left: '250px'});
      });
  });
  }

}