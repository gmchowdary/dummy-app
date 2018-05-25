import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HrmsModule } from './components/hrms/hrms.module';
import { UserPipe } from './user.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserPipe,
  ],
  imports: [
    BrowserModule,
    HrmsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
