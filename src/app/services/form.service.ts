import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormService implements OnInit {

  updateData:any

  constructor(private _httpClient:HttpClient) { }

  ngOnInit(): void {
    
  }

  getcall(){
    return this._httpClient.get("http://localhost:8000/hello/")
  }

  postForm(data:any){
    return this._httpClient.post("http://localhost:8000/hello/",data)
  }

  deleteForm(id:any){
    return this._httpClient.delete(`http://localhost:8000/hello/${id}/`)
  }

  putForm(id:any,data:any){
    console.log(id);
    console.log(data);
    return this._httpClient.put(`http://localhost:8000/hello/${id}/`,data)
  }


  setpassData(data:any){
    console.log(data);
    this.updateData = data;

  }

  getpassData(){
    return this.updateData;
  }



}