import { Request, Response, NextFunction } from 'express';
import { JWTService } from '../../infrastructure/auth/jwtService';

export function AuthMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ error: 'Token não fornecido' });

  try {
    const user = JWTService.verify(token);
    // @ts-ignore
    req.user = user;
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Token inválido' });
  }
}
