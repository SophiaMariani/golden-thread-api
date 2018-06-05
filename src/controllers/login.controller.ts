// Uncomment these imports to begin using these cool features!

// import {inject} from @loopback/context;
import { repository } from "@loopback/repository";
import { UserRepository} from '../repositories/user.repository';
import { User } from "../models/user"
import { 
  HttpErrors,
  post,
  requestBody,
} from '@loopback/rest';

export class LoginController {
  constructor(
    @repository(UserRepository.name) protected userRepo: UserRepository,
  ) {}

  @post('/login')
  async loginUser(@requestBody() user: User): Promise<User> {
    // Check that email and password are both supplied
    if (!user.email || !user.password) {
      throw new HttpErrors.Unauthorized('invalid credentials');
    }
  // Check email and password are vaild
  let userExists: boolean = !!(await this.userRepo.count({
    and: [
      { email: user.email},
      { password: user.password},
    ],
  }));

  if (!userExists) {
    throw new HttpErrors. Unauthorized('invalid credentails');
  }
  return await this.userRepo.findOne({
    where: {
      and: [
        { email:user.email },
        { password: user.password }

      ]
    }
  })
  }

}

