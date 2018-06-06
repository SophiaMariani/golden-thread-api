import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user";
import { Charity } from "../models/charity";
import {
  HttpErrors,
  get,
  requestBody,
  param,
} from "@loopback/rest";

export class UserDonations {}