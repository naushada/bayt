import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-menubar',
  templateUrl: './generic-menubar.component.html',
  styleUrls: ['./generic-menubar.component.scss']
})
export class GenericMenubarComponent implements OnInit {

  options: string="";
  constructor() { }

  ngOnInit(): void {
  }

}
