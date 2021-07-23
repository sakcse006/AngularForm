import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  formDetail!: FormGroup;
  response="";

  countrylist=[
    {country:"india"},
    {country:"austrelia"},
    {country:"america"},
  ]

  constructor(private _formDetail:FormService) { }

  ngOnInit(): void {
    this.formDetail = new FormGroup({
      'name': new FormControl(null,Validators.required),
      'age': new FormControl(null),
      'gender': new FormControl(null,Validators.required),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'qualification': new FormControl(null),
      'mobile': new FormControl(null),
    })
  }

  onSubmit(){

    const name = this.formDetail.get('name')?.value;
    console.log(name);
    const agestr = this.formDetail.get('age')?.value;
    const age = parseInt(agestr);
    console.log(age);
    const gender = this.formDetail.get('gender')?.value;
    console.log(gender);
    const  email= this.formDetail.get('email')?.value;
    console.log(email);
    const qualification = this.formDetail.get('qualification')?.value;
    console.log(qualification);
    const mobile = this.formDetail.get('mobile')?.value;
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

    this._formDetail.postForm(data)
    .subscribe(sub =>{
      console.log(sub);
      var data:any =sub
      console.log(data.message)
      this.response = data.message
    },
    error =>{
      console.log(error);
    })

    this.formDetail.reset()

  }

}
