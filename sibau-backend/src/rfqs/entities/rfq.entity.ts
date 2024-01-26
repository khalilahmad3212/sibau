import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Rfq {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  originalFileName: string;

  @Column()
  updatedFileName: string;

  @Column()
  published: string;

  @Column()
  lastDate: string;

  @Column()
  category: string;

  @Column()
  contact: string;
}
