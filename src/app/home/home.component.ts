import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  public formInfo: FormGroup = new FormGroup({
    checkIn: new FormControl("", [Validators.required, Validators.minLength(5)]),
    checkOut: new FormControl("", Validators.required,),
    name: new FormControl("", [Validators.required, Validators.minLength(6)]),
    number: new FormControl("", Validators.required)
  })

  register() {
    console.log(this.formInfo)
  }
}
