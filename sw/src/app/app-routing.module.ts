import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { EnquiryComponent } from './tracking/enquiry/enquiry.component';
import { EntryComponent } from './tracking/entry/entry.component';

const routes: Routes = [
  //{path:'', component:EntryComponent}
  {path:'', component:MainComponent}
  //{path:'', component:EnquiryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
