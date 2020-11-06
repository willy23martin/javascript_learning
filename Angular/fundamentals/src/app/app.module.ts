import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// NgModel: https://stackoverflow.com/questions/38892771/cant-bind-to-ngmodel-since-it-isnt-a-known-property-of-input
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { EmbeddedInteractionFrameComponent } from './chat/embedded-interaction-frame/embedded-interaction-frame.component';
import { NotificationsComponent } from './chat/notifications/notifications.component';
import { LoginComponent } from './login/login.component';

// Http:
import {HttpClientModule} from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { VideoCallScheduleCallbackComponent } from './video-call-schedule-callback/video-call-schedule-callback.component';
import { VideoCallComponent } from './video-call/video-call.component';
import { ScheduleCallbackComponent } from './schedule-callback/schedule-callback.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    EmbeddedInteractionFrameComponent,
    NotificationsComponent,
    LoginComponent,
    MenuComponent,
    VideoCallScheduleCallbackComponent,
    VideoCallComponent,
    ScheduleCallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
