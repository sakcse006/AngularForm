import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ViewDeleteComponent } from './view-delete/view-delete.component';

const routes: Routes = [
  {
    path:"create",component:CreateComponent
  },
  {
    path:"view",component:ViewDeleteComponent
  },
  {
    path:"update",component:UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
