import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise'

@Injectable()
export class PersonalInfoService {

  constructor(public http:Http) { }

  viewempPersonalInfo(id: number){
    return new Promise((result,reject)=>{ 
      this.http.get("http://ec2-13-127-93-234.ap-south-1.compute.amazonaws.com:1337/empPersonalInfo/"+ id )
      .toPromise()
      .then(res=>{
        result(res.json());
      },err=>{
        //reject(err)
        console.log(err);
        result(null);
      });
    });
  }


  createempPersonalInfo(dataSet: object){
    return new Promise((result,reject)=>{ 
      this.http.post("http://ec2-13-127-93-234.ap-south-1.compute.amazonaws.com:1337/empPersonalInfo/",dataSet)
      .toPromise()
      .then(res=>{
        result(res.json());
      },err=>{
        reject(err)
      });
    });
  }

  deleteempPersonalInfo(id: number){
    console.log('in service');
    return new Promise((result,reject)=>{ 
      this.http.delete("http://ec2-13-127-93-234.ap-south-1.compute.amazonaws.com:1337/empPersonalInfo/" + id )
      .toPromise()
      .then(res=>{
        result(res.json());
      },err=>{
        reject(err)
      });
    });
   }

    updateempPersonalInfo(id: number, dataSet: object){
      console.log('in service');
      return new Promise((result,reject)=>{ 
        this.http.put("http://ec2-13-127-93-234.ap-south-1.compute.amazonaws.com:1337/empPersonalInfo/"+ id,dataSet)
        .toPromise()
        .then(res=>{
          result(res.json());
        },err=>{
          reject(err)
        });
      });
    }

}
