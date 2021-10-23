import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-batch-import',
  templateUrl: './batch-import.component.html',
  styleUrls: ['./batch-import.component.scss']
})
export class BatchImportComponent implements OnInit {

  importForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.importForm = this.fb.group({
      _file:[]
    });
   }

  ngOnInit(): void {
  }

  onSubmit() : void {

  }

  onClear(): void {

  }
}
