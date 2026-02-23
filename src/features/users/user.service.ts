import { CreateUserDTO, User } from './user.types';
import  Boom  from '@hapi/boom';

export class UserService {
  private users: User[];
  constructor() {
    this.users = [];
  }

  getUsers = (): User[] => {
    return this.users;
  };

  createUser = (user: CreateUserDTO): User => {
    const newUser: User = {
      id: new Date().getTime().toString(),
      name: user.name,
      email: user.email,
    };
    this.users.push(newUser);
    return newUser;
  };

deleteUser = (id: string): void => {
    const userFound = this.users.find((user) => user.id === id);
    if (!userFound) {
      throw Boom.notFound('User not found');
    }
    this.users = this.users.filter((user) => user.id !== id);
    };



}
