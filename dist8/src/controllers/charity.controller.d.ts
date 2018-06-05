import { CharityRepository } from "../repositories/charity.repository";
import { Charity } from "../models/charity";
export declare class CharityController {
    protected charityRepo: CharityRepository;
    constructor(charityRepo: CharityRepository);
    findcharities(): Promise<Charity[]>;
    findcharitiesById(id: number): Promise<Charity>;
}
