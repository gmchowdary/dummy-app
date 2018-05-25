import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
// import { HttpClient, HttpHeaders, } from '@angular/common/http';
// import { Request, RequestOptions,Headers,Response, ResponseContentType } from '@angular/http'
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
// import 'rxjs/add/operator/timeout';

import 'rxjs/add/operator/toPromise'

@Injectable()
export class CompensationService {

  constructor(public http:Http) { }
  
  viewEmpCompensation(id: number){
    console.log('in service');
    return new Promise((result,reject)=>{ 
      this.http.get("http://localhost:1337/EmpCompensation/"+ id )
      .toPromise()
      .then(res=>{
        result(res.json());
      },err=>{
        reject(err)
      });
    });
  }


  createEmpCompensation(dataSet: object){
    return new Promise((result,reject)=>{ 
      this.http.post("http://localhost:1337/EmpCompensation",dataSet)
      .toPromise()
      .then(res=>{
        result(res.json());
      },err=>{
        reject(err)
      });
    });
  }

  deleteEmpCompensation(id: number){
    console.log('in service');
    return new Promise((result,reject)=>{ 
      this.http.delete("http://localhost:1337/EmpCompensation/" + id )
      .toPromise()
      .then(res=>{
        result(res.json());
      },err=>{
        reject(err)
      });
    });
   }

    updateEmpCompensation(id: number, dataSet: object){
      console.log('in service');
      return new Promise((result,reject)=>{ 
        this.http.put("http://localhost:1337/EmpCompensation/"+ id,dataSet)
        .toPromise()
        .then(res=>{
          result(res.json());
        },err=>{
          reject(err)
        });
      });
    }
}
