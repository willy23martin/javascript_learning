import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// NgModel: https://stackoverflow.com/questions/38892771/cant-bind-to-ngmodel-since-it-isnt-a-known-property-of-input
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { EmbeddedInteractionFrameComponent } from './chat/embedded-interaction-frame/embedded-interaction-frame.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    EmbeddedInteractionFrameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
