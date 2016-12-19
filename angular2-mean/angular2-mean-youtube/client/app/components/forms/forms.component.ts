import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  moduleId:module.id,
  selector: 'app-form',
  templateUrl: './forms.component.html'
  // styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  posts: any = [];
  loginForm;
  
  protected _buildForm(){
    this.loginForm = this._formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    });
  }

  constructor(private _formBuilder: FormBuilder) {
    this._buildForm();
    
  }

  doLogin(){
    console.log(this.loginForm.value);
  }

  reset(){
    this.loginForm.reset();
  }

}
