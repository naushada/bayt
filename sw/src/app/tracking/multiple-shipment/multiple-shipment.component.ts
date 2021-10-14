import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-multiple-shipment',
  templateUrl: './multiple-shipment.component.html',
  styleUrls: ['./multiple-shipment.component.scss']
})
export class MultipleShipmentComponent implements OnInit {

  multipleTrackingForm:FormGroup;
  constructor(private fb: FormBuilder) { 
    this.multipleTrackingForm = this.fb.group({
      multipleTracking: this.fb.group({
      trackingNo: ['']
      })
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.multipleTrackingForm.value.tracking.value);
    alert(this.multipleTrackingForm.value.tracking.value);
  }

}
