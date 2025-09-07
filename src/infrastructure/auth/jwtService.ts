import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET

export const JWTService = {
  sign(payload: object): string {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '24h' });
  },
  verify(token: string): any {
    return jwt.verify(token, JWT_SECRET);
  }
};
