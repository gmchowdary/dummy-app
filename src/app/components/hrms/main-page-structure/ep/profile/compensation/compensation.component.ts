import { Component, OnInit } from '@angular/core';
import { CompensationService } from '../../../ep-services/profile/compensation.service';

@Component({
  selector: 'app-compensation',
  templateUrl: './compensation.component.html',
  styleUrls: ['./compensation.component.css']
})
export class CompensationComponent implements OnInit {

  constructor(public compensation:CompensationService) { }

  ngOnInit() {
  }

}
