import { Entity } from '@loopback/repository';
export declare class Charity extends Entity {
    id?: number;
    name: string;
    description: string;
    mission: string;
    goalamount: string;
    getId(): number | undefined;
}
