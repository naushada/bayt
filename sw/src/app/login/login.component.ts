import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { 
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
    let _whoAmI: string ;
   // _whoAmI = this.loginForm.value.login.get('userId').value;
    _whoAmI = (<HTMLInputElement>document.getElementById("userId")).value; 

    alert(_whoAmI);
    if(_whoAmI == 'admin') {
      this.router.navigate(["customer/employeeView"]);
    } else {
      this.router.navigate(["customer/agentView"]);
    }
  }
}
