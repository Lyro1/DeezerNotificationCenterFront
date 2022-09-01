import {UserModel} from "./user.model";

export enum NotificationType {
  recommendation = 'Recommandation',
  new = 'Nouveautée',
  shared_content = 'Partagé',
  information = 'Information'
}

export class NotificationContentModel {
  image: string;
  link: string;
  type: string;
  title: string;
  artist: string;

  public constructor(image: string,
                     link: string,
                     type: string,
                     title: string,
                     artist: string) {
    this.image = image;
    this.link = link;
    this.type = type;
    this.title = title;
    this.artist = artist;
  }
}

export class NotificationModel {
  id: number;
  type: string;
  content: NotificationContentModel;
  emission_date: string;
  expiration_date: Date|null = null;
  author: UserModel|null = null;
  description: string|null = null;
  recipients: UserModel[] = [];
  read_status: boolean;

  public constructor(id: number,
                     type: string,
                     content: NotificationContentModel,
                     emissionDate: string,
                     expirationDate: Date|null,
                     author: UserModel|null,
                     description: string|null,
                     recipients: UserModel[],
                     read_status: boolean) {
    this.id = id;
    this.type = type;
    this.content = content;
    this.emission_date = emissionDate;
    this.expiration_date = expirationDate;
    this.author = author;
    this.description = description;
    this.recipients = recipients;
    this.read_status = read_status;
  }
}
