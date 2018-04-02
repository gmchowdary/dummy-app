import { NgModule } from '@angular/core';

import { MainPageStructureComponent } from './main-page-structure.component';
import { NavBarTopComponent } from './nav-bar-top/nav-bar-top.component';
import { FooterComponent } from './footer/footer.component';
import { SideMenuLeftComponent } from './side-menu-left/side-menu-left.component';
import { SideMenuRightComponent } from './side-menu-right/side-menu-right.component';
import { NavBarLogoComponent } from './nav-bar-logo/nav-bar-logo.component';
import { PageBody1Component } from './page-body1/page-body1.component';
import { PageBody2Component } from './page-body2/page-body2.component';


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
 ],
  imports: [],
  providers: [],
  bootstrap: [MainPageStructureComponent],
  exports: [MainPageStructureComponent]
})
export class MainPageStructureModule { }
