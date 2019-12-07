import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HiveHomeComponent } from './hive-home/hive-home.component';
import { BookSlotsComponent } from './book-slots/book-slots.component';
import { ReportsComponent } from './reports/reports.component';
import { SlotRegistrationFormComponent } from './slot-registration-form/slot-registration-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { ChartsModule } from 'ng2-charts';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AuthGaurdService } from 'src/services/guards/auth-guard.service';
import { LogoutComponent } from './logout/logout.component';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { MatFormFieldModule, MatTooltipModule, MatToolbarModule, MatSidenavModule, MatBadgeModule, MatListModule, MatGridListModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatTableModule, MatChipsModule, MatPaginatorModule } from '@angular/material';
import { MatInputModule, MatButtonModule, MatCheckboxModule, MatSelectModule, MatCardModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToastrModule } from 'ngx-toastr';
import { MyprofileComponent } from './myprofile/myprofile.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    HiveHomeComponent,
    BookSlotsComponent,
    ReportsComponent,
    SlotRegistrationFormComponent,
    HomePageComponent,
    LoginComponent,
    ContactUsComponent,
    LogoutComponent,
    MyprofileComponent,
    SidenavComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatBadgeModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserModule,
    MatInputModule,
    MatTooltipModule,
    MatToolbarModule,
    MatIconModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    ChartsModule,
    ShowHidePasswordModule,
    FormsModule,
    ReactiveFormsModule, 
    FlexLayoutModule ,
    HttpClientModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    ToastrModule.forRoot(), 
    RouterModule.forRoot([
      { path: "booking", component: BookSlotsComponent, canActivate: [AuthGaurdService] },
      { path: "reports", component: ReportsComponent, canActivate: [AuthGaurdService] },
      { path: "register", component: SlotRegistrationFormComponent },
      { path: "login", component: LoginComponent },
      { path: "logout", component: LogoutComponent },
      { path: "home", component: HomePageComponent },
      { path: "contact", component: ContactUsComponent },
      { path: "myprofile", component: MyprofileComponent }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
