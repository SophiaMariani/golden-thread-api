// Uncomment these imports to begin using these cool features!

// import {inject} from @loopback/context;
import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user";
import
{ HttpErrors,
  get, 
  requestBody,
  param,
 } from "@loopback/rest";


export class UserController {

  constructor(
    @repository(UserRepository.name) private userRepo: UserRepository,
  ) {}
   
  @get("/users")
  async findusers() : Promise<User[]> {
    return await this.userRepo.find();
  }
  
  @get ('user/{id}')
  async findUsersById(@param.path.number('id') id: number): Promise<User> {
    // Check for valid ID
    let userExits: boolean = !!(await this.userRepo.count({ id}));

    if (!userExits) {
      throw new HttpErrors.BadRequest ('user ID ${id} does not exist');
   }

      return await this.userRepo.findById(id);
    }

  }
