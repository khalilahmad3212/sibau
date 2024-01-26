import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Tender {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  originalFileName: string;

  @Column()
  updatedFileName: string;

  @Column()
  openingDate: string;

  @Column()
  fee: number;

  @Column()
  lastDate: string;

  @Column()
  category: string;

  @Column()
  contact: string;
}
