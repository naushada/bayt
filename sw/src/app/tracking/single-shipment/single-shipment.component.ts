import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-single-shipment',
  templateUrl: './single-shipment.component.html',
  styleUrls: ['./single-shipment.component.scss']
})
export class SingleShipmentComponent implements OnInit {

  singleTrackingForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.singleTrackingForm = this.fb.group({tracking: this.fb.group({
      trackingNo:''})
    });
   }

  ngOnInit(): void {
  }
  onSubmit() : void {
    console.log(this.singleTrackingForm.value.tracking.trackingNo.value);
    alert(this.singleTrackingForm.value.tracking.trackingNo.value);
  }

}
