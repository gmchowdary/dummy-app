import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProfileInfoService {

  constructor(public http:Http) { }

  viewEmpInfo(id: number){
    return new Promise((result,reject)=>{ 
      this.http.get("http://ec2-13-127-93-234.ap-south-1.compute.amazonaws.com:1337/EmpInfo/"+ id )
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


  createEmpInfo(dataSet: object){
    return new Promise((result,reject)=>{ 
      this.http.post("http://ec2-13-127-93-234.ap-south-1.compute.amazonaws.com:1337/EmpInfo/",dataSet)
      .toPromise()
      .then(res=>{
        result(res.json());
      },err=>{
        reject(err)
      });
    });
  }

  deleteEmpInfo(id: number){
    console.log('in service');
    return new Promise((result,reject)=>{ 
      this.http.delete("http://ec2-13-127-93-234.ap-south-1.compute.amazonaws.com:1337/EmpInfo/" + id )
      .toPromise()
      .then(res=>{
        result(res.json());
      },err=>{
        reject(err)
      });
    });
   }

    updateEmpInfo(id: number, dataSet: object){
      console.log('in service');
      return new Promise((result,reject)=>{ 
        this.http.put("http://ec2-13-127-93-234.ap-south-1.compute.amazonaws.com:1337/EmpInfo/"+ id,dataSet)
        .toPromise()
        .then(res=>{
          result(res.json());
        },err=>{
          reject(err)
        });
      });
    }

}
