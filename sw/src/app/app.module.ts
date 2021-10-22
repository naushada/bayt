import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule } from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { _TrackingComponent } from './tracking/_tracking/_tracking.component';
import { SingleShipmentComponent } from './tracking/single-shipment/single-shipment.component';
import { MultipleShipmentComponent } from './tracking/multiple-shipment/multiple-shipment.component';
import { UploadComponent } from './batching/upload/upload.component';
import { DownloadComponent } from './batching/download/download.component';
import { EntryComponent } from './tracking/entry/entry.component';
import { AccountComponent } from './account/account.component';
import { EnquiryComponent } from './tracking/enquiry/enquiry.component';
import { ResponseComponent } from './enquiry/response/response.component';
import { NewShippingComponent } from './shipping/new-shipping/new-shipping.component';
import { AltrefUpdateComponent } from './shipping/altref-update/altref-update.component';
import { JobSchedulingComponent } from './shipping/job-scheduling/job-scheduling.component';
import { ManifestingComponent } from './shipping/manifesting/manifesting.component';
import { SuppliesComponent } from './shipping/supplies/supplies.component';
import { ShipmentPricingComponent } from './shipping/shipment-pricing/shipment-pricing.component';
import { ShipmentHistoryComponent } from './reporting/shipment-history/shipment-history.component';
import { CustomerComponent } from './_customer/customer/customer.component';
import { AgentViewComponent } from './_customer/agent-view/agent-view.component';
import { EmployeeViewComponent } from './_customer/employee-view/employee-view.component';
import { MainViewComponent } from './shipping/main-view/main-view.component';
import { GenericMenubarComponent } from './menubar/generic-menubar/generic-menubar.component';
import { SpecificMenubarComponent } from './menubar/specific-menubar/specific-menubar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    _TrackingComponent,
    SingleShipmentComponent,
    MultipleShipmentComponent,
    UploadComponent,
    DownloadComponent,
    EntryComponent,
    AccountComponent,
    EnquiryComponent,
    ResponseComponent,
    NewShippingComponent,
    AltrefUpdateComponent,
    JobSchedulingComponent,
    ManifestingComponent,
    SuppliesComponent,
    ShipmentPricingComponent,
    ShipmentHistoryComponent,
    CustomerComponent,
    AgentViewComponent,
    EmployeeViewComponent,
    MainViewComponent,
    GenericMenubarComponent,
    SpecificMenubarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
    FlexLayoutModule,
    DragDropModule,
    MatBadgeModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDialogModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatSidenavModule,
    MatMenuModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
