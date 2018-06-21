import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise'

@Injectable()
export class CertificationsService {

  constructor(public http:Http) { }
  
  viewEmpCertifications(id: number){
    return new Promise((result,reject)=>{ 
      this.http.get("http://ec2-13-127-93-234.ap-south-1.compute.amazonaws.com:1337/EmpCertifications/"+ id )
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


  createEmpCertifications(dataSet: object){
    return new Promise((result,reject)=>{ 
      this.http.post("http://ec2-13-127-93-234.ap-south-1.compute.amazonaws.com:1337/EmpCertifications/",dataSet)
      .toPromise()
      .then(res=>{
        result(res.json());
      },err=>{
        reject(err)
      });
    });
  }

  deleteEmpCertifications(id: number){
    console.log('in service');
    return new Promise((result,reject)=>{ 
      this.http.delete("http://ec2-13-127-93-234.ap-south-1.compute.amazonaws.com:1337/EmpCertifications/" + id )
      .toPromise()
      .then(res=>{
        result(res.json());
      },err=>{
        reject(err)
      });
    });
   }

    updateEmpCertifications(id: number, dataSet: object){
      console.log('in service');
      return new Promise((result,reject)=>{ 
        this.http.put("http://ec2-13-127-93-234.ap-south-1.compute.amazonaws.com:1337/EmpCertifications/"+ id,dataSet)
        .toPromise()
        .then(res=>{
          result(res.json());
        },err=>{
          reject(err)
        });
      });
    }

}
