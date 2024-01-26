import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'Slider' })
export class Slider {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column({ length: 100 })
  Title: string;

  @Column()
  Headings: string;

  @Column({ length: 100 })
  Link: string;

  @Column({ length: 100 })
  LinkTitle: string;

  @Column({ length: 100 })
  Image: string;
}
