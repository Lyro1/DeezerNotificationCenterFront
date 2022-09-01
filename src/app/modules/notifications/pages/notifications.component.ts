import { Component, OnInit } from '@angular/core';
import {NotificationService} from "../../../services/notification.service";
import {NotificationModel} from "../../../models/notification.model";
import {NotificationResponseModel} from "../../../models/notification-response.model";

@Component({
  selector: 'notification-page',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  public response: NotificationResponseModel|null = null;
  public notifications: NotificationModel[] | undefined = undefined;

  constructor(public notificationService: NotificationService) { }

  ngOnInit(): void {
    this.loadNotifications();
  }

  public loadNotifications() {
    this.notificationService.getNotificationsForUser(1, 1).subscribe(
      (result) => {
        this.response = result;
      }
    )
  }

}
