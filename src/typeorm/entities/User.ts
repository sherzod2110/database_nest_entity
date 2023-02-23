import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({
  name: 'users',
})
export class User {
  @PrimaryGeneratedColumn('uuid', {
    name: 'user_id',
  })
  id: string;

  @Column({
    name: 'user_name',
  })
  name: string;

  @Column({
    name: 'user_password',
  })
  password: string;
}
