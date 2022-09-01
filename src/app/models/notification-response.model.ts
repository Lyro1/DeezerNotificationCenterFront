import {NotificationModel} from "./notification.model";

export class NotificationResponseModel {
  numberOfNotifications: number;
  numberOfUnreadNotifications: number;
  notifications: NotificationModel[];

  public constructor(numberOfNotifications: number,
                      numberOfUnreadNotifications: number,
                      notifications: NotificationModel[]) {
    this.numberOfNotifications = numberOfNotifications;
    this.numberOfUnreadNotifications = numberOfUnreadNotifications;
    this.notifications = notifications;
  }

}
