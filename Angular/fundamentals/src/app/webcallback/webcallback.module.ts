import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleFormComponent } from './schedule-form/schedule-form.component';
import { ScheduleCallbackService } from './services/schedule-callback.service';



@NgModule({
  declarations: [ScheduleFormComponent],
  imports: [
    CommonModule
  ],
  providers: [
    ScheduleCallbackService
  ]
})
export class WebcallbackModule { }
