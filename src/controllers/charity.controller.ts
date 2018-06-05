// Uncomment these imports to begin using these cool features!

// import {inject} from @loopback/context;

import { repository } from "@loopback/repository";
import { CharityRepository } from "../repositories/charity.repository";
import { Charity } from "../models/charity"
import
{ HttpErrors,
  get, 
  requestBody,
  param,
 } from "@loopback/rest";

export class CharityController {
  constructor(
  @repository(CharityRepository) protected charityRepo: CharityRepository,
) {}

@get("/charities")
      async findcharities(): Promise<Charity[]> {
        return await this.charityRepo.find();
      }
      
      @get ('charity/{id}')
      async findcharitiesById(@param.path.number('id') id: number): Promise<Charity> {
        // Check for valid ID
        let charitiesExits: boolean = !!(await this.charityRepo.count({ id}));
    
        if (!charitiesExits) {
          throw new HttpErrors.BadRequest ('charity ID ${id} does not exist');
          }
    
          return await this.charityRepo.findById(id);
        }
      }
