import { LoginRepository } from '../repositories/login.repository';
export declare class LoginController {
    private userRepo;
    constructor(userRepo: LoginRepository);
    requestuser(login: any): Promise<Object>;
}
