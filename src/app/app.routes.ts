import { Routes } from '@angular/router';
import { AddCustomerPageComponent } from './page/add-customer-page/add-customer-page.component';
import { ManageCustomerPageComponent } from './page/manage-customer-page/manage-customer-page.component';
import { AddEventplannerPageComponent } from './page/add-eventplanner-page/add-eventplanner-page.component';
import { ManageEventPlannerComponent } from './page/manage-event-planner/manage-event-planner.component';
import { AddEvntPageComponent } from './page/add-event-page/add-evnt-page.component';
import { ManageEventPageComponent } from './page/manage-event-page/manage-event-page.component';
import { HomePageComponent } from './main/home-page/home-page.component';
import { ViewEventplannersPageComponent } from './page/view-eventplanners-page/view-eventplanners-page.component';
import { LogingPageComponent } from './page/loging-page/loging-page.component';
import { ViewEventsPageComponent } from './page/view-events-page/view-events-page.component';
import { SelectionPageComponent } from './page/selection-page/selection-page.component';
import { SelectionPageCardComponent } from './common/selection-page-card/selection-page-card.component';
import { CategoryPageComponent } from './page/category-page/category-page.component';
import { EntertainmentPageComponent } from './page/entertainment-page/entertainment-page.component';
import { CoporatePageComponent } from './page/coporate-page/coporate-page.component';
import { TechnologyPageComponent } from './page/technology-page/technology-page.component';
import { EducationalPageComponent } from './page/educational-page/educational-page.component';
import { ConferencePageComponent } from './page/conference-page/conference-page.component';
import { PartyPageComponent } from './page/party-page/party-page.component';
import { AboutusPageComponent } from './page/aboutus-page/aboutus-page.component';
import { AdminManagePageComponent } from './page/admin-manage-page/admin-manage-page.component';

export const routes: Routes = [
    {
        path: "app-add-customer-page",
        component: AddCustomerPageComponent
    },
    {
        path: "app-manage-customer-page",
        component: ManageCustomerPageComponent
    },
    {
        path: "app-add-eventplanner-page",
        component: AddEventplannerPageComponent
    },
    {
        path: "app-manage-event-planner",
        component: ManageEventPlannerComponent
    },
    {
        path: "app-add-evnt-page",
        component: AddEvntPageComponent
    },
    {
        path: "app-manage-event-page",
        component: ManageEventPageComponent
    },
    {
        path: "",
        component: HomePageComponent
    },
    {
        path: "app-view-eventplanners-page",
        component: ViewEventplannersPageComponent
    },
    {
        path: "app-loging-page",
        component: LogingPageComponent
    },
    {
        path: "app-view-events-page",
        component: ViewEventsPageComponent
    },
    {
        path: "app-selection-page",
        component: SelectionPageComponent,
        children: [
            {
                path: "",
                component: SelectionPageCardComponent
            },
            {
                path: "app-add-evnt-page",
                component: AddEvntPageComponent
            },
            {
                path: "app-manage-event-page",
                component: ManageEventPageComponent
            },
            {
                path: "app-manage-customer-page",
                component: ManageCustomerPageComponent
            }
        ]
    },
    {
        path: "app-category-page",
        component: CategoryPageComponent
    },
    {
        path: "app-entertainment-page",
        component: EntertainmentPageComponent
    },
    {
        path: "app-coporate-page",
        component: CoporatePageComponent
    },
    {
        path: "app-technology-page",
        component: TechnologyPageComponent
    },
    {
        path: "app-educational-page",
        component: EducationalPageComponent
    },
    {
        path: "app-conference-page",
        component: ConferencePageComponent
    },
    {
        path: "app-party-page",
        component: PartyPageComponent
    },
    {
        path:"app-aboutus-page",
        component:AboutusPageComponent
    },
    {
        path:"app-admin-manage-page",
        component:AdminManagePageComponent
    }


];
