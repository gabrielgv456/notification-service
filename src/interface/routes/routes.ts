import { Router } from 'express';
import { NotificationController } from '@controllers/NotificationController';
import { SnsNotificationService } from '@infrastructure/sns/snsNotificationService';
import { SendNotificationUseCase } from '@useCases/SendNotificationUseCase';
import { AuthUseCase } from '@useCases/AuthUseCase';
import { AuthController } from '@controllers/AuthController';
import { JWTService } from '@infrastructure/auth/jwtService';
import { AuthMiddleware } from 'interface/middlewares/AuthMiddleware';
import { configSNS } from '@shared/utils/constants/snsConfig';

const router = Router();

// Authentication
const loginUseCase = new AuthUseCase(JWTService);
const loginController = new AuthController(loginUseCase);

router.post('/authorization', (req, res) => loginController.handle(req, res));

// SNS Service
const snsService = new SnsNotificationService(configSNS);
const sendNotificationUseCase = new SendNotificationUseCase(snsService);
const notificationController = new NotificationController(sendNotificationUseCase);

router.post("/notification", AuthMiddleware, (req, res) => notificationController.send(req, res))

// Status API
router.get("/status", (_req, res) => res.status(200).json({ "status": "ok" }))




export default router