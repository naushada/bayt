import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  Country:Array<string> = [];

  Role:Array<string> = ["Employee", "Agent", "Customer", "Driver"];

  createForm:FormGroup;
  constructor(private fb:FormBuilder) {
    this.createForm = this.fb.group({
      accountInformation: this.fb.group({
        existingCustomer: 'no',
        accountCode:'',
        companyName:'',
        role:''
      }),
      contactInformation: this.fb.group({
        title:'',
        name:'',
        address:'',
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
    console.log(this.createForm.value);
  }

  onClear(): void {
    this.createForm.reset();
  }
}
