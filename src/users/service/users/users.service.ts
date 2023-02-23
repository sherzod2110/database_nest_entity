import { userCreateDto, userUpdateDto } from './../../controller/users/dto/dto';
import { User } from './../../../typeorm/entities/User';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  findUsers() {
    return this.userRepository.find();
  }

  createUser(userDetails: userCreateDto) {
    const newUser = this.userRepository.create(userDetails);
    this.userRepository.save(newUser);
  }

  updateUser(userDetals: userUpdateDto, id: number) {
    this.userRepository.update(id, userDetals);
  }

  deleteUser(id: number) {
    this.userRepository.delete(id);
  }
}
