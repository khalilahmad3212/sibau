import { Department } from 'src/department/entities/department.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'Announcement' })
export class Announcement {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column({ length: 100 })
  Title: string;

  @Column({ length: 200 })
  File: string;

  @Column('date')
  StartDate: Date;

  @Column('date')
  EndDate: Date;

  @Column({ nullable: true, length: 1000 })
  Description: string;

  @ManyToOne(() => Department, (department) => department.Announcements, {
    nullable: true,
  })
  @JoinColumn({ name: 'DepartmentId' })
  Department: Department;
}
