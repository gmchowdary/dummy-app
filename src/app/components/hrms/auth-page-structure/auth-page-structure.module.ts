import { NgModule } from '@angular/core';

import { AuthPageStructureComponent } from './auth-page-structure.component';
import { SigninFormComponent } from './signin-form/signin-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';


@NgModule({
  declarations: [
    AuthPageStructureComponent,
    SigninFormComponent,
    SignupFormComponent
  ],
  imports: [],
  providers: [],
  bootstrap: [AuthPageStructureComponent],
  exports: [AuthPageStructureComponent]
})
export class AuthPageStructureModule { }
