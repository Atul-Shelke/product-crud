import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpRequestService } from 'src/app/common-services/http-request.service';

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.css']
})
export class GrandChildComponent implements OnInit {

  constructor(private http:HttpClient,private httprequest:HttpRequestService) {
    
   }
   

  @Input() grandchildData:any;
  notificationMessage:any;
 
  @Output() notifyParent=new EventEmitter();
  ngOnInit(): void {
    this.http.get('https://api.escuelajs.co/api/v1/users').subscribe((res:any)=>{
      console.log('res',res)
    });
    
     this.httprequest.getData().subscribe((data:any)=>{
      this.notificationMessage=data
    console.log('notification',data)
   })
    
  }


  sendNotification(){
    const message="Data from Child";
    this.notifyParent.emit(message)
  }


}
