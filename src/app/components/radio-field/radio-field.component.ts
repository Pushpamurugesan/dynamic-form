import { Component, Input } from '@angular/core';
import { FormControl,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-radio-field',
  templateUrl: './radio-field.component.html',
  styleUrl: './radio-field.component.css'
})
export class RadioFieldComponent {
  @Input() control!: FormControl;
  @Input() options!: { label: string, value: string }[];
  @Input() placeholder!: string;

}
