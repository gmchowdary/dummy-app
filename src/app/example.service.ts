import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise'

@Injectable()
export class ExampleService {

  constructor(public http:Http) { }

  callService(){
    console.log('in service');
    return new Promise((result,reject)=>{ 
      this.http.get("http://localhost:1337/EmpCompensation")
      .toPromise()
      .then(res=>{
        result(res.json());
      },err=>{
        reject(err)
      });
    });
  
  }
}
