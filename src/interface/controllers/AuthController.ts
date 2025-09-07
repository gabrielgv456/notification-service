import { AuthUseCase } from '@useCases/AuthUseCase';
import { Request, Response } from 'express';

export class AuthController {
    constructor(private authUseCase: AuthUseCase) { }

    handle(req: Request, res: Response) {
        const { username, password } = req.body;

        try {
            const token = this.authUseCase.execute(username, password);
            res.json({ token });
        } catch (err) {
            res.status(401).json({ error: (err as Error).message });
        }
    }
}
