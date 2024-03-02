import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css'
})
export class DynamicFormComponent implements OnInit {
  // form!: FormGroup;
  form!:any;
  favoriteSeason:any;
  errorMessage:any;
  formData:any = {};
constructor(private formBuilder: FormBuilder,private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.formData = this.employeeService.fetchEmployeeData()
    this.form = this.formBuilder.group({});
    this.buildForm();
  }
  buildForm(): void {
    this.formData.formFields.forEach((section: any) => {
      section.fields.forEach((field: any) => {
        const validators = [];
        if (field.validations && field.validations.isRequired) {
          validators.push(Validators.required);
        }
        if (field.validations && field.validations.pattern) {
          validators.push(Validators.pattern(field.validations.pattern));
        }

        this.form.addControl(field.name, this.formBuilder.control('', validators));
      });
    });
  }



  onSubmit(): void {
    if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
    } else {
      console.error('Form is invalid. Please check the fields.');
      this.errorMessage ='Form is invalid. Please check the fields.'
    }
  }
}
