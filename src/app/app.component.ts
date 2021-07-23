import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router){

  }

  onCreate(){
    this.router.navigateByUrl('create')

  }

  onView(){
    this.router.navigateByUrl('view')
    
  }

  onUpdate(){
    this.router.navigateByUrl('update')
  }
}
