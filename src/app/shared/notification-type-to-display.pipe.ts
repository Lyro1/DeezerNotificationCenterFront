import { Pipe, PipeTransform } from '@angular/core';
import {NotificationType} from "../models/notification.model";

@Pipe({
  name: 'notificationTypeToDisplay'
})
export class NotificationTypeToDisplayPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (!value || typeof value !== 'string') {
      return 'Information';
    }
    const indexOfType = Object.keys(NotificationType).indexOf(value as unknown as NotificationType);
    return Object.values(NotificationType)[indexOfType];
  }

}
