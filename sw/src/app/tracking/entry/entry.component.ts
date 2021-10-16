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
  Events:Array<string> = ["Event1", "Event2", "Event3"];
  constructor(private fb: FormBuilder) { 
    this.trackingEntryForm = this.fb.group({trackingEntry: this.fb.group({
      evt:'',
      date:'',
      time:'',
      notes:'',
      connote:'',
      assignTo:'',
      eventLocation:'',
      defaultEventLocation:'',
      attachment:'',
      enteredBy:''
    })
    });
  }

  ngOnInit(): void {
  }

  onSubmit() : void {}

  onClick(): void {}

  onCloseDialog(): void {

  }
}
