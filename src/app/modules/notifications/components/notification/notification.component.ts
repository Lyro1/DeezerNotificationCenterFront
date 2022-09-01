import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NotificationModel} from "../../../../models/notification.model";
import {NotificationService} from "../../../../services/notification.service";

@Component({
  selector: 'app-notification-component',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  @Input() public notification: NotificationModel|null = null;
  @Output() public markedAsRead: EventEmitter<void> = new EventEmitter<void>();

  constructor(public notificationService: NotificationService) { }

  ngOnInit(): void {
    console.log(this.notification);
  }

  public markNotificationAsRead(notificationId: number, userId: number = 1) {
    this.notificationService.setNotificationAsRead(notificationId, userId).subscribe(
      (result) => {
        this.markedAsRead.emit();
      }
    );
  }

}
