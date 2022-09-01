import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {NotificationResponseModel} from "../models/notification-response.model";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private readonly http: HttpClient) {}

  public getNotificationsForUser(userId: number, page: number): Observable<NotificationResponseModel> {
    return this.http.get<NotificationResponseModel>(`https://localhost:8000/notifications/${userId}?page=${page}`);
  }

  public setNotificationAsRead(userId: number, notificationId: number): Observable<boolean> {
    return this.http.get<boolean>(`https://localhost:8000/notifications/${userId}/read/${notificationId}`);
  }

}
