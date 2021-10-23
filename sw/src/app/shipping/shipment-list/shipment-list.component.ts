import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shipment-list',
  templateUrl: './shipment-list.component.html',
  styleUrls: ['./shipment-list.component.scss']
})
export class ShipmentListComponent implements OnInit {

  ServiceType:Array<string> = ["By Location", "By Country"];
  Destination:Array<string> = ["eComerce", "Cash(Prepaid)", "CC(Pay in Destination)", "COD","COR","Export Documents", "Export Non Documents", "Heavy Shipment"];
  shipmentListQueryForm: FormGroup;

  constructor(private fb:FormBuilder) {
    this.shipmentListQueryForm = this.fb.group({
      shipmentListQuery: this.fb.group({
        fromDate: new Date(),
        toDate: new Date(),
        destination: '',
        serviceType: '',
        runId:'',
        senderName:'',
        accountCode:'',
        status:''
      })
    });

   }

  ngOnInit(): void {
  }

  onSubmit(): void {

  }

  onClear(): void {

  }
}
