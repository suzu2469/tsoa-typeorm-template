import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn() id: number

  @Column() name: string

  @Column() age: number

  @CreateDateColumn() createdAt: string

  @UpdateDateColumn() updatedAt: string
}

export interface UserCreationRequest {
  name: string
  age: number
}
