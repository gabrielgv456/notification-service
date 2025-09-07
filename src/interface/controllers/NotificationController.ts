import { Request, Response } from "express";
import { Notification } from "@entities/Notification";
import { SendNotificationUseCase } from "@useCases/SendNotificationUseCase";
import validateFields from "@shared/utils/validateFields";

export class NotificationController {
  constructor(private sendNotificationUseCase: SendNotificationUseCase) { }

  async send(req: Request, res: Response) {
    validateFields(['message'], req.body, true)
    const { message } = req.body;

    try {
      const notification = new Notification(message);
      await this.sendNotificationUseCase.execute(notification);
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ success: false, error: (error as Error).message });
    }
  }
}
