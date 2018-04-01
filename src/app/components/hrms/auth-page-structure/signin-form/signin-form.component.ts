import { Component, OnInit } from '@angular/core';
//import '../../hrms-assets/plugins/iCheck/icheck.min.js';

declare const $;

@Component({
  selector: 'app-signin-form',
  styleUrls: ['./signin-form.component.css', ],
  templateUrl: './signin-form.component.html'
})
export class SigninFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
 
    $(function () {
      $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' // optional
      });
    });
  
  }

}
