import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn() 
  createdDate: Date;

  @Column({
    type: 'text',
    unique: true,
  })
  email: string;

  @Column('text')
  password: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  fullname: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  avatar: string;

  @Column({ default: true })
  isActive: boolean;

  @BeforeInsert()  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);  
  }
}