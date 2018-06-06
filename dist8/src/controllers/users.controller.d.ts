import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user";
export declare class UserController {
    private userRepo;
    constructor(userRepo: UserRepository);
    findusers(): Promise<User[]>;
    findUsersById(id: number): Promise<User>;
    getDonationsByUserId(userId: number, dateFrom: Date, coolVariable: string): Promise<void>;
}
