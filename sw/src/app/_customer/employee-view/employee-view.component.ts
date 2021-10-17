import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.scss']
})
export class EmployeeViewComponent implements OnInit {

  options: string = "";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickShipping(): void {
    this.router.navigate(["shipping/mainView"])
  }
}
