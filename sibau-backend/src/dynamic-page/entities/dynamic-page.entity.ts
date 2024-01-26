import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'DynamicPage' })
export class DynamicPage {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 50 })
  link: string;

  @Column()
  content: string;
}
