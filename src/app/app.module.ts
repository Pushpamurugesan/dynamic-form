import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { DateFieldComponent } from './components/date-field/date-field.component';
import { RadioFieldComponent } from './components/radio-field/radio-field.component';
import { CheckboxFieldComponent } from './components/checkbox-field/checkbox-field.component';
import { SelectFieldComponent } from './components/select-field/select-field.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    TextFieldComponent,
    DateFieldComponent,
    RadioFieldComponent,
    CheckboxFieldComponent,
    SelectFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
   schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
