import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-shipping',
  templateUrl: './new-shipping.component.html',
  styleUrls: ['./new-shipping.component.scss']
})
export class NewShippingComponent implements OnInit {

  newShippingForm:FormGroup;
  constructor(private fb: FormBuilder) { 
    this.newShippingForm = this.fb.group({
      shipmentNo:'',
      altrefNo:'',
      senderInformation: this.fb.group({
        billTo:'',
        addressBook:'',
        name:'',
        country:'',
        address:'',
        city:'',
        state:'',
        postcode:'',
        contact:'',
        phone:'',
        email:'',
        receivingCountryTaxId:'',
      }),
      shipmentInformation: this.fb.group({
        service:'',
        numberOfItems:'',
        description:'',
        harmonisedCode:'',
        weight:'',
        unit:'',
      }),
      receiverInformation: this.fb.group({
        addressBook:'',
        name:'',
        country:'',
        address:'',
        city:'',
        state:'',
        postcode:'',
        contact:'',
        phone:'',
        email:'',

      })
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {

  }
}
