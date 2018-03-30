import { NgModule } from '@angular/core';

import { HrmsComponent } from './hrms.component';
//importing HRMS "Main Page Module"
import { MainPageStructureModule } from './main-page-structure/main-page-structure.module';
import { AuthPageStructureModule } from './auth-page-structure/auth-page-structure.module';


@NgModule({
  declarations: [
    HrmsComponent,
  ],
  imports: [
    MainPageStructureModule,
    AuthPageStructureModule,
  ],
  providers: [],
  bootstrap: [HrmsComponent],
  exports: [HrmsComponent]
})
export class HrmsModule { }
