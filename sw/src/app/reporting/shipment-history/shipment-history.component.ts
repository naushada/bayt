import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipment-history',
  templateUrl: './shipment-history.component.html',
  styleUrls: ['./shipment-history.component.scss']
})
export class ShipmentHistoryComponent implements OnInit {

  reportingOptions: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
