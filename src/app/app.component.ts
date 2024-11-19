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
import { EntertainmentPageComponent } from './page/entertainment-page/entertainment-page.component';
import { CoporatePageComponent } from './page/coporate-page/coporate-page.component';
import { EducationalPageComponent } from './page/educational-page/educational-page.component';
import { TechnologyPageComponent } from './page/technology-page/technology-page.component';
import { PartyPageComponent } from './page/party-page/party-page.component';
import { ConferencePageComponent } from './page/conference-page/conference-page.component';
import { AboutusPageComponent } from './page/aboutus-page/aboutus-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    AddCustomerPageComponent,
    ManageCustomerPageComponent,
    NavBarComponent,
    AddEventplannerPageComponent,
    HomePageComponent,
    ViewEventplannersPageComponent,
    LogingPageComponent,
    ViewEventsPageComponent,
    SelectionPageComponent,
    EntertainmentPageComponent,
    CoporatePageComponent,
    EntertainmentPageComponent,
    CoporatePageComponent,
    EducationalPageComponent,
    TechnologyPageComponent,
    PartyPageComponent,
    ConferencePageComponent,
    AboutusPageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Evenet-manage-front-end';
}
  