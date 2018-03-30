import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HrmsComponent } from './components/hrms/hrms.component';
import { MainPageStructureComponent } from './components/hrms/main-page-structure/main-page-structure.component';
import { NavBarTopComponent } from './components/hrms/main-page-structure/nav-bar-top/nav-bar-top.component';
import { FooterComponent } from './components/hrms/main-page-structure/footer/footer.component';
import { SideMenuLeftComponent } from './components/hrms/main-page-structure/side-menu-left/side-menu-left.component';
import { SideMenuRightComponent } from './components/hrms/main-page-structure/side-menu-right/side-menu-right.component';
import { AuthPageStructureComponent } from './components/hrms/auth-page-structure/auth-page-structure.component';
import { SigninFormComponent } from './components/hrms/auth-page-structure/signin-form/signin-form.component';
import { SignupFormComponent } from './components/hrms/auth-page-structure/signup-form/signup-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HrmsComponent,
    MainPageStructureComponent,
    NavBarTopComponent,
    FooterComponent,
    SideMenuLeftComponent,
    SideMenuRightComponent,
    AuthPageStructureComponent,
    SigninFormComponent,
    SignupFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
