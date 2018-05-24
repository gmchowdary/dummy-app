import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HrmsModule } from './components/hrms/hrms.module';
import { UserPipe } from './user.pipe';
import {ExampleService} from './example.service';
@NgModule({
  declarations: [
    AppComponent,
    UserPipe,
  ],
  imports: [
    BrowserModule,
    HrmsModule,HttpModule
  ],
  providers: [HttpModule,ExampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
