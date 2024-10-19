import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf,RouterLink],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
chambreform=new FormGroup({
  idChambre : new FormControl(0),
  numeroChambre : new FormControl(0),
  typeC : new FormControl(""),
  email : new FormControl("",[Validators.email,Validators.required]),
  password : new FormControl("",[Validators.minLength(8),Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$')]),
})
submit(){
console.log(this.chambreform.value);
console.log(this.chambreform.valid);
}
get email(){return this.chambreform.get("email")}
get password(){return this.chambreform.get("password")}
}
