import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {

  options: string= "";
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onClickBackToMainPage():void {
    this.router.navigate(["customer/employeeView"]);
  }
}
