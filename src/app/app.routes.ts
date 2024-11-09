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

export const routes: Routes = [
    {
        path:"app-add-customer-page",
        component:AddCustomerPageComponent
    },
    {
        path:"app-manage-customer-page",
        component:ManageCustomerPageComponent
    },
    {
        path:"app-add-eventplanner-page",
        component:AddEventplannerPageComponent
    },
    {
        path:"app-manage-event-planner",
        component:ManageEventPlannerComponent
    },
    {
        path:"app-add-evnt-page",
        component:AddEvntPageComponent
    },
    {
        path:"app-manage-event-page",
        component:ManageEventPageComponent
    },
    {
        path:"",
        component:HomePageComponent
    },
    {
        path:"app-view-eventplanners-page",
        component:ViewEventplannersPageComponent
    },
    {
        path:"app-loging-page",
        component:LogingPageComponent
    },
    {
        path:"app-view-events-page",
        component:ViewEventsPageComponent
    },
    {
        path:"app-selection-page",
        component:SelectionPageComponent
    }
];
