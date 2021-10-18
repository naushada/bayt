import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  createForm:FormGroup;
  constructor(private fb:FormBuilder) {
    this.createForm = this.fb.group({
      accountInformation: this.fb.group({
        existingCustomer: '',
        accountCode:'',
        companyName:'',
        role:''
      }),
      contactInformation: this.fb.group({
        title:'',
        name:'',
        streetAddress:'',
        city:'',
        state:'',
        postalCode:'',
        country:'',
        residentialAddress:'',
        telephone:'',
        email:'',
        remarks:'',
        info:''
      })});
   }

  ngOnInit(): void {
  }

  onSubmit():void {
    alert("Naushad: " + this.createForm.value);
    console.log(this.createForm.value);
  }
}
