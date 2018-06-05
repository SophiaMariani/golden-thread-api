// Uncomment these imports to begin using these cool features!

// import {inject} from @loopback/context;

import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user";
import { 
  HttpErrors,
  post,
  requestBody,
 } from "@loopback/rest";

export class RegistrationController {
  
  constructor(
  @repository(UserRepository) protected userRepo: UserRepository,

  ){}
  
  @post('/registration')
  async creatingRegistration (@requestBody() user: User): Promise<User> {
    // Check that required fields are supplied
    if (!user.email || !user.password) {
      throw new HttpErrors.BadRequest('missing data');
    }
    return await this.userRepo.create(user);
  }
}

