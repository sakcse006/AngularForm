import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-view-delete',
  templateUrl: './view-delete.component.html',
  styleUrls: ['./view-delete.component.css']
})
export class ViewDeleteComponent implements OnInit {


  user:any=[]

  constructor(private _viewValue:FormService,private router:Router) { }

  ngOnInit(): void {
    this._viewValue.getcall()
    .subscribe(sub =>{
        console.log((sub));
      this.user = sub
    })
  }

  ondelete(id:any){
    console.log(id);
    this._viewValue.deleteForm(id)
    .subscribe(sub =>{
      console.log(sub)
      this.ngOnInit();
    })
   
  }

  onedit(data:any){
    console.log(data);
    this._viewValue.setpassData(data);
    this.router.navigateByUrl('update')
  }






}
  

