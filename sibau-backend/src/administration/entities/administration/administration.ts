import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Administration {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  role: string;
}
