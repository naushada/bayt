import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-docket-list',
  templateUrl: './docket-list.component.html',
  styleUrls: ['./docket-list.component.scss']
})
export class DocketListComponent implements OnInit {

  Status: Array<string> = [];
  Destination:Array<string> = [];
  docketListQueryForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.docketListQueryForm = this.fb.group({
      docketListQuery: this.fb.group({
        fromDate: new Date(),
        toDate: new Date(),
        destination:'',
        status:'',
        runId:''
      })
    });
   }

  ngOnInit(): void {
  }

  onSubmit(): void {

  }

  onClear(): void {
    this.docketListQueryForm.reset();
  }
}
