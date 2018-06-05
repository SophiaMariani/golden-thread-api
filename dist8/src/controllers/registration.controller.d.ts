import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user";
export declare class RegistrationController {
    protected userRepo: UserRepository;
    constructor(userRepo: UserRepository);
    creatingRegistration(user: User): Promise<User>;
}
