import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signeupForm : FormGroup
  
  ngOnInit(){
    this.signeupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, Validators.required),
      'email': new FormControl(null,[Validators.required, Validators.email]),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
  }
  onSubmit(){
    console.log(this.signeupForm);
  }
  onAddHobby(){
    const control = new FormControl(null,Validators.required);
    (<FormArray>this.signeupForm.get('hobbies')).push(control);
  }
}
