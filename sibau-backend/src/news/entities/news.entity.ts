import { Department } from 'src/department/entities/department.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'News' })
export class News {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column({ length: 100 })
  Title: string;

  @Column('date')
  Date: Date;

  @Column({ nullable: true, length: 100 })
  Heading: string;

  @Column({ nullable: true, length: 1000 })
  Descripiton: string;

  @Column({ length: 200 })
  Image: string;

  @Column({ type: 'integer' })
  Sort: number;

  @ManyToOne(() => Department, (department) => department.News, {
    nullable: true,
  })
  @JoinColumn({ name: 'DepartmentId' })
  Department: Department;
}
