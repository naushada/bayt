import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.loginForm = this.fb.group({login: fb.group({
        userId:'',
        password:''
      })
    });
  }

  ngOnInit(): void {
  }

  onSubmit() : void {
    console.log(this.loginForm.value);
    alert(this.loginForm.value.login);
  }
}
