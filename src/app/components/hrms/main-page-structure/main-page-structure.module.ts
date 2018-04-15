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

const appRoutes: Routes = [
  {path: "", component:PageBody1Component},
  {path: "about", component:PageBody2Component},
  {path: "mails", component:MailsComponent},
  {path: "calender", component:CalenderComponent}
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
 ],
  imports: [
    RouterModule.forRoot(appRoutes, {onSameUrlNavigation: `reload`})
  ],
  providers: [],
  bootstrap: [MainPageStructureComponent],
  exports: [MainPageStructureComponent]
})
export class MainPageStructureModule { }
