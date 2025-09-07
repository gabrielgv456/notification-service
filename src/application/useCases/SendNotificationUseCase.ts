import { Notification } from "@entities/Notification";

export interface INotificationService {
  send(notification: Notification): Promise<void>;
}

export class SendNotificationUseCase {
  constructor(private notificationService: INotificationService) {}

  async execute(notification: Notification): Promise<void> {
    await this.notificationService.send(notification);
  }
}
