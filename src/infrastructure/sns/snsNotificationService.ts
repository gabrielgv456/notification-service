import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";
import { Notification } from "@entities/Notification";
import { INotificationService } from "@useCases/SendNotificationUseCase";
import { SnsConfigDTO } from "domain/dtos/snsConfigDTO";

export class SnsNotificationService implements INotificationService {
    private snsClient: SNSClient;
    private topicArn: string;

    constructor({ topicArn, region, accessKeyId, secretAccessKey }: SnsConfigDTO) {
        this.snsClient = new SNSClient({ region, credentials: { accessKeyId, secretAccessKey } });
        this.topicArn = topicArn;
    }

    async send(notification: Notification): Promise<void> {

        const messagePayload = { default: JSON.stringify(notification.message) }

        const command = new PublishCommand({
            TopicArn: this.topicArn,
            //Subject: notification.title ?? undefined,
            Message: JSON.stringify(messagePayload)
        })

        await this.snsClient.send(command);
    }
}
