import { Component, OnInit , Inject} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EntryComponent } from '../entry/entry.component';

@Component({
  selector: 'app-single-shipment',
  templateUrl: './single-shipment.component.html',
  styleUrls: ['./single-shipment.component.scss']
})
export class SingleShipmentComponent implements OnInit {

  singleTrackingForm: FormGroup;
  constructor(private fb: FormBuilder, public dialog: MatDialog) {
    this.singleTrackingForm = this.fb.group({tracking: this.fb.group({
      trackingNo:''})
    });
   }

  openDialog(): void {
    const dialogRef = this.dialog.open(EntryComponent, {
      width: 'auto',
    });
    /*
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
    */
  }

  ngOnInit(): void {
  }
  onSubmit() : void {
    console.log(this.singleTrackingForm.value.tracking.trackingNo.value);
  }

}
