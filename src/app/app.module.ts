import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { ViewDeleteComponent } from './view-delete/view-delete.component';
import { UpdateComponent } from './update/update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormService } from './services/form.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ViewDeleteComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
