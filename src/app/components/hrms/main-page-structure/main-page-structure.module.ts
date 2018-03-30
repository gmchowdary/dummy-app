import { NgModule } from '@angular/core';

import { MainPageStructureComponent } from './main-page-structure.component';
import { NavBarTopComponent } from './nav-bar-top/nav-bar-top.component';
import { FooterComponent } from './footer/footer.component';
import { SideMenuLeftComponent } from './side-menu-left/side-menu-left.component';
import { SideMenuRightComponent } from './side-menu-right/side-menu-right.component';


@NgModule({
  declarations: [
    MainPageStructureComponent,
    NavBarTopComponent,
    FooterComponent,
    SideMenuLeftComponent,
    SideMenuRightComponent,
 ],
  imports: [],
  providers: [],
  bootstrap: [MainPageStructureComponent],
  exports: [MainPageStructureComponent]
})
export class MainPageStructureModule { }
