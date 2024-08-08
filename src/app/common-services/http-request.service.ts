import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
console.log('service')
@Injectable({
  providedIn: 'root'
})

export class HttpRequestService {
 
  constructor(private http:HttpClient) { }
  baseUrl=environment.DEV.BASE_URL;
  subj=new BehaviorSubject<any>(null); 
  request(urlType:string,requestType:string,requestUrl:string,requestBody:string):any{
    if(urlType=='base'){
      this.baseUrl=environment.DEV.BASE_URL
    }

    if(requestType==='get'){
      return this.http.get(this.baseUrl+requestUrl)
    }
    if(requestType==='post'){
      return this.http.post(this.baseUrl+requestUrl,requestBody)
    }
  }

  commonData(data:any){
     this.subj.next(data)
  }

  getData() {
    return this.subj.asObservable();
  }
}
