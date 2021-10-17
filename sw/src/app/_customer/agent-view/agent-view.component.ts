import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agent-view',
  templateUrl: './agent-view.component.html',
  styleUrls: ['./agent-view.component.scss']
})
export class AgentViewComponent implements OnInit {

  options: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
