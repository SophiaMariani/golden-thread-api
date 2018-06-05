// Uncomment these imports to begin using these cool features!

// import {inject} from @loopback/context;
import { repository } from "@loopback/repository"
import  { post, requestBody } from "@loopback/rest";
import { LoginRepository} from '../repositories/login.repository';
import { Login } from "../models/login"
import { User } from "../models/user"


export class LoginController {
  constructor(
    @repository(LoginRepository.name) private userRepo: LoginRepository
  ) {}

  @post("/login")
  async requestuser(@requestBody() login: any): Promise<Object> {
    var username = login.username;
    var password = login.password;

    var users = await this.userRepo.find();

    for (var i = 0; i < users.length; i++) {
      var user = users[i];

      if (user.username == username && user.password == password) {
        return user;
      }
    }

    return "error";
  }
}

