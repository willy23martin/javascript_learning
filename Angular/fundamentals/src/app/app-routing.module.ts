import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { ScheduleCallbackComponent } from './schedule-callback/schedule-callback.component';
import { VideoCallComponent } from './video-call/video-call.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'video-call', component: VideoCallComponent},
  {path: 'schedule-callback', component: ScheduleCallbackComponent},
  {path: '*', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
