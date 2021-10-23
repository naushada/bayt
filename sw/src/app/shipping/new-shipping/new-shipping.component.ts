import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-shipping',
  templateUrl: './new-shipping.component.html',
  styleUrls: ['./new-shipping.component.scss']
})
export class NewShippingComponent implements OnInit {

  /* Weight Unit */
  Units:Array<string> = ["KG", "g"];
  Currency: Array<string> = ["UAE - Dirham",
                             "Saudi - Riyal",
                             "Kuwait - Dinar",
                             "Omani - Rial",
                             "Baharaini - Dinar",
                             "Qatar - Riyal"];
  Country: Array<string> = ["UAE", "Saudi", "Kuwait", "Oman", "Baharain", "Qatar"];

  newShippingForm:FormGroup;
  constructor(private fb: FormBuilder) { 
    this.newShippingForm = this.fb.group({
      shipmentNo:'',
      altrefNo:'',
      senderInformation: this.fb.group({
        billTo:'',
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
        _unit:'',
        cw:'',
        cod:'',
        currency:'',
      }),
      receiverInformation: this.fb.group({
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

  onReset(): void {
    this.newShippingForm.reset();
  }
}
