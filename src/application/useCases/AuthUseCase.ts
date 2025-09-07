import { validUsers } from "@shared/utils/constants/users";

export class AuthUseCase {
    constructor(private jwtService: { sign(payload: object): string }) { }

    execute(username: string, password: string): string {
        const user = validUsers.find(
            u => u.username === username && u.password === password
        );

        if (!user) {
            throw new Error('Credenciais inválidas');
        }

        const token = this.jwtService.sign({ username: user.username });
        return token;
    }
}