import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

  @Input() showMePartially!: boolean;

  trackingEntryForm:FormGroup;
  Events:Array<string> = ["Document Prepared", "Out For Delivery", "Arrived in HUB", 
                          "Not Delivered - Incomplete Address",
                          "Not Delivered - Adverse Weather",
                          "Not Delivered - Consignee Moved",
                          "Not Delivered - Consignee Schedule Delivery",
                          "Not Delivered - Courier Out of Time",
                          "Not Delivered - Inaccurate/Incomplete Address",
                          "Not Delivered - Miscoded",
                          "Not Delivered - No One Available/Home",
                          "Not Delivered - No Response/ Mobile switch Off",
                          "Not Delivered - Refused By Customer",
                          "Not Delivered - Unable to Locate Consignee",
                          "Not Delivered - Customer out of country",
                          "Held In Branch",
                          "Customer Refused",
                          "Customer Not Available"

                        ];
  constructor(private fb: FormBuilder) { 
    this.trackingEntryForm = this.fb.group({trackingEntry: this.fb.group({
      evt:'',
      date:'',
      time:'',
      notes:'',
      connote:'',
      assignTo:'auto',
      defaultEventLocation:'Default',
      attachment:'',
      enteredBy:'',
      driverName:''
    })
    });
  }

  ngOnInit(): void {
  }

  onSubmit() : void {}

  onClick(): void {}

  onCloseDialog(): void {

  }

  onClear(): void {
    this.trackingEntryForm.reset();
  }
}
