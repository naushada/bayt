import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-detailed-report',
  templateUrl: './detailed-report.component.html',
  styleUrls: ['./detailed-report.component.scss']
})
export class DetailedReportComponent implements OnInit {

  detailedReportForm: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.detailedReportForm = this.fb.group({
      detailedReport: this.fb.group({
        fromDate: new Date(),
        toDate: new Date(),
        accountCode:''
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
