import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.scss']
})
export class EnquiryComponent implements OnInit {

  enquiryOption: string;

  constructor() { 
    this.enquiryOption = "_single_shipment";
  }

  ngOnInit(): void {
  }

  onClickEvent(chosenOpt: string) : void {
    this.enquiryOption = chosenOpt;
  }
}
