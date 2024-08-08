import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router) { }
   paramsId:any;
   isEdit:boolean=false
  formData:any=this.fb.group({
    id:['',Validators.required],
    name:['',Validators.required],
    username:['',Validators.required],
    email:['',Validators.required]

  })
  
  userList:any=[]
  ngOnInit(): void {
    this.getUserList();
  }
  getUserList(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any)=>{
      this.userList=res;
    })
  }

  onEdit(id:any){
    console.log('id',id);
   
    this.paramsId=id
    this.isEdit=this.paramsId
    this.http.get('https://jsonplaceholder.typicode.com/users/'+id).subscribe((res:any)=>{
      console.log(res)
      this.formData=this.fb.group({
        id:[res.id],
        name:[res.name],
        username:[res.username],
        email:[res.email]
    
      })
    })
  }


  onSaveUser(){
    console.log('formData',this.formData.value);
    if(this.paramsId){
     
      this.http.patch('https://jsonplaceholder.typicode.com/users/'+this.paramsId,this.formData.value).subscribe((res:any)=>{
        this.formData.reset();
        this.isEdit=false
        console.log('res',res)
  })
    }
    else{
      this.isEdit=this.paramsId
    
    this.http.post('https://jsonplaceholder.typicode.com/users',this.formData.value).subscribe((res:any)=>{
          console.log('res',res)
    })
  }
  }
  deleteData(id:any){
    this.http.delete('https://jsonplaceholder.typicode.com/users/'+id).subscribe((res:any)=>{
      console.log('res',res)
    })
  }
}
