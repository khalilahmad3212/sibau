import { Department } from 'src/department/entities/department.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'DepartSpecialization' })
export class DepartSpecialization {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column()
  Name: string;

  @Column()
  ShortName: string;

  @Column()
  Link: string;

  @Column({ nullable: true })
  Content: string;

  @Column({ nullable: true })
  Desc: string;
  @ManyToOne(() => Department, (department) => department.Id, {
    nullable: true,
  })
  @JoinColumn({ name: 'DepartmentId' })
  Department: Department;
}
