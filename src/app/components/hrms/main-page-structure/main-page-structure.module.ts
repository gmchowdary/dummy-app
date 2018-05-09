import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { MainPageStructureComponent } from './main-page-structure.component';
import { NavBarTopComponent } from './nav-bar-top/nav-bar-top.component';
import { FooterComponent } from './footer/footer.component';
import { SideMenuLeftComponent } from './side-menu-left/side-menu-left.component';
import { SideMenuRightComponent } from './side-menu-right/side-menu-right.component';
import { NavBarLogoComponent } from './nav-bar-logo/nav-bar-logo.component';
import { PageBody1Component } from './page-bodies/page-body1/page-body1.component';
import { PageBody2Component } from './page-bodies/page-body2/page-body2.component';
import { MailsComponent } from './page-bodies/mails/mails.component';
import { CalenderComponent } from './page-bodies/calender/calender.component';
import { ProfileComponent } from './ep/profile/profile.component';
import { PersonalInfoComponent } from './ep/profile/personal-info/personal-info.component';
import { CompensationComponent } from './ep/profile/compensation/compensation.component';
import { InsuranceComponent } from './ep/profile/insurance/insurance.component';
import { TravelComponent } from './ep/profile/travel/travel.component';
import { AssetComponent } from './ep/profile/asset/asset.component';
import { TimeManagementComponent } from './ep/time-management/time-management.component';
import { LeaveComponent } from './ep/time-management/leave/leave.component';
import { TimeSheetComponent } from './ep/time-management/time-sheet/time-sheet.component';
import { PoliciesComponent } from './ep/policies/policies.component';
import { HrComponent } from './ep/policies/hr/hr.component';
import { ItComponent } from './ep/policies/it/it.component';
import { FinanceComponent } from './ep/policies/finance/finance.component';
import { HelpdeskComponent } from './ep/helpdesk/helpdesk.component';
import { ViewComponent } from './ep/helpdesk/view/view.component';
import { CreateComponent } from './ep/helpdesk/create/create.component';
import { PerformanceManagementComponent } from './ep/performance-management/performance-management.component';
import { QuarterAppraisalComponent } from './ep/performance-management/quarter-appraisal/quarter-appraisal.component';
import { AnnualAppraisalComponent } from './ep/performance-management/annual-appraisal/annual-appraisal.component';
import { SpecialAppraisalComponent } from './ep/performance-management/special-appraisal/special-appraisal.component';
import { RewardsAndRecognitionComponent } from './ep/rewards-and-recognition/rewards-and-recognition.component';
import { NominationComponent } from './ep/rewards-and-recognition/nomination/nomination.component';
import { MonthlyAppraisalComponent } from './ep/performance-management/monthly-appraisal/monthly-appraisal.component';
import { OrganisationComponent } from './ep/organisation/organisation.component';
import { ExtensionsComponent } from './ep/organisation/extensions/extensions.component';
import { ChartComponent } from './ep/organisation/chart/chart.component';
import { NewsAndEventsComponent } from './ep/news-and-events/news-and-events.component';
import { ActivityTrackerComponent } from './ep/activity-tracker/activity-tracker.component';
import { TaskTrackerComponent } from './ep/task-tracker/task-tracker.component';
import { PayManageComponent } from './ep/pay-manage/pay-manage.component';

const appRoutes: Routes = [
  {path: "", component:PageBody1Component},
  {path: "about", component:PageBody2Component},
  {path: "mails", component:MailsComponent},
  {path: "calender", component:CalenderComponent},
  {path: "pay-manage", component:PayManageComponent},
  {path: "task-tracker", component:TaskTrackerComponent},
  {path: "monthly-appraisal", component:MonthlyAppraisalComponent},
  {path: "quarter-appraisal", component:QuarterAppraisalComponent},
  {path: "annual-appraisal", component:AnnualAppraisalComponent},
  {path: "special-appraisal", component:SpecialAppraisalComponent},
  
]

@NgModule({
  declarations: [
    MainPageStructureComponent,
    NavBarTopComponent,
    FooterComponent,
    SideMenuLeftComponent,
    SideMenuRightComponent,
    NavBarLogoComponent,
    PageBody1Component,
    PageBody2Component,
    MailsComponent,
    CalenderComponent,
    ProfileComponent,
    PersonalInfoComponent,
    CompensationComponent,
    InsuranceComponent,
    TravelComponent,
    AssetComponent,
    TimeManagementComponent,
    LeaveComponent,
    TimeSheetComponent,
    PoliciesComponent,
    HrComponent,
    ItComponent,
    FinanceComponent,
    HelpdeskComponent,
    ViewComponent,
    CreateComponent,
    PerformanceManagementComponent,
    QuarterAppraisalComponent,
    AnnualAppraisalComponent,
    SpecialAppraisalComponent,
    RewardsAndRecognitionComponent,
    NominationComponent,
    MonthlyAppraisalComponent,
    OrganisationComponent,
    ExtensionsComponent,
    ChartComponent,
    NewsAndEventsComponent,
    ActivityTrackerComponent,
    TaskTrackerComponent,
    PayManageComponent,
 ],
  imports: [
    RouterModule.forRoot(appRoutes, {onSameUrlNavigation: `reload`})
  ],
  providers: [],
  bootstrap: [MainPageStructureComponent],
  exports: [MainPageStructureComponent]
})
export class MainPageStructureModule { }
