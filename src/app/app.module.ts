import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationComponent } from './modules/notifications/components/notification/notification.component';
import { DateAsAgoPipe } from './shared/date-as-ago.pipe';
import { NotificationTypeToDisplayPipe } from './shared/notification-type-to-display.pipe';
import { NotificationsComponent } from './modules/notifications/pages/notifications.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NotificationComponent,
    DateAsAgoPipe,
    NotificationTypeToDisplayPipe,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    DateAsAgoPipe,
    NotificationTypeToDisplayPipe
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
