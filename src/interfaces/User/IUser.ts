//
import { Identifiable } from '..';

// Login user
export interface ILogin {
  email: string;
  password: string;
}

// Complete user
export interface IUser extends Identifiable, ILogin {
  username: string;
  role: string;
}

// User role
export interface IUserRole {
  role: string;
}

// Token
export interface IToken {
  token: string;
}

// User response
export type IUserResponse = Omit<IUser, 'password'>;