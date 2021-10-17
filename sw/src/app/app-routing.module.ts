import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { MainViewComponent } from './shipping/main-view/main-view.component';
import { EnquiryComponent } from './tracking/enquiry/enquiry.component';
import { EntryComponent } from './tracking/entry/entry.component';
import { AgentViewComponent } from './_customer/agent-view/agent-view.component';
import { CustomerComponent } from './_customer/customer/customer.component';
import { EmployeeViewComponent } from './_customer/employee-view/employee-view.component';

const routes: Routes = [
  //{path:'', component:EntryComponent}
  //{path:'', component:MainComponent}
  //{path:'', component:AgentViewComponent}
  //{path:'', component:EnquiryComponent}
  {path:'customer/employeeView', component:EmployeeViewComponent},
  {path:'customer/customerView', component:CustomerComponent},
  {path:'customer/agentView', component:AgentViewComponent},
  {path:'shipping/mainView', component:MainViewComponent},
  {path:'', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
