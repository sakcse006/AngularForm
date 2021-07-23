import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  updateformDetail!: FormGroup;
  updataID!: number;
  response: any;
  constructor(private route:ActivatedRoute,private _updateData:FormService) { }

  ngOnInit(): void {
    const data = this._updateData.getpassData()
    console.log(data)
    this.updataID = data.id
    this.updateformDetail = new FormGroup({
      'name': new FormControl(data.name,Validators.required),
      'age': new FormControl(data.age),
      'gender': new FormControl(data.gender,Validators.required),
      'email': new FormControl(data.email,[Validators.required,Validators.email]),
      'qualification': new FormControl(data.qualification),
      'mobile': new FormControl(data.mobile),
    })

  }

  onUpdate(){


    const name = this.updateformDetail.get('name')?.value;
    console.log(name);
    const agestr = this.updateformDetail.get('age')?.value;
    const age = parseInt(agestr);
    console.log(age);
    const gender = this.updateformDetail.get('gender')?.value;
    console.log(gender);
    const  email= this.updateformDetail.get('email')?.value;
    console.log(email);
    const qualification = this.updateformDetail.get('qualification')?.value;
    console.log(qualification);
    const mobile = this.updateformDetail.get('mobile')?.value;
    console.log(mobile);
    

    var data= {

      name:name,
      age:age,
      gender:gender,
      email:email,
      qualification:qualification,
      mobile:mobile
    }
    console.log(data);

    this._updateData.putForm(this.updataID,data)
    .subscribe(sub =>{
      console.log(sub);
      var data:any =sub
      console.log(data.message)
      this.response = data.message
    },
    error =>{
      console.log(error);
    })

    this.updateformDetail.reset()

  }

}
