import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddCustomerPageComponent } from './page/add-customer-page/add-customer-page.component';
import { ManageCustomerPageComponent } from './page/manage-customer-page/manage-customer-page.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { AddEventplannerPageComponent } from './page/add-eventplanner-page/add-eventplanner-page.component';
import { HomePageComponent } from './main/home-page/home-page.component';
import { ViewEventplannersPageComponent } from './page/view-eventplanners-page/view-eventplanners-page.component';
import { LogingPageComponent } from './page/loging-page/loging-page.component';
import { ViewEventsPageComponent } from './page/view-events-page/view-events-page.component';
import { SelectionPageComponent } from './page/selection-page/selection-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AddCustomerPageComponent,ManageCustomerPageComponent,NavBarComponent,AddEventplannerPageComponent,HomePageComponent,ViewEventplannersPageComponent,LogingPageComponent,ViewEventsPageComponent,SelectionPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Evenet-manage-front-end';
}
  