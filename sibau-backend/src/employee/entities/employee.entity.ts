import { Experience } from 'src/experience/entities/experience.entity';
import { Education } from 'src/education/entities/education.entity';
import { Publication } from 'src/publication/entities/publication.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Department } from '../../department/entities/department.entity';
import { Recognition } from 'src/recognition/entities/recognition.entity';

@Entity({ name: 'Employee' })
export class Employee {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column({ length: 50 })
  FirstName: string;

  @Column({ length: 50 })
  LastName: string;

  @Column({ length: 50 })
  Designation: string;

  @Column({ length: 100, unique: true })
  Email: string;

  @Column({ length: 50, unique: true, nullable: true })
  CMS_id: string;

  @Column({ nullable: true, unique: true })
  EmployeeId: string;

  @Column({ length: 15, nullable: true })
  OfficeExtension: string;

  @Column({ length: 200 })
  OfficeAddress: string;

  @Column({ type: 'enum', enum: ['PERMANENT', 'CONTRACTUAL'] })
  Type: string;

  @Column({ length: 500 })
  Skills: string;

  @Column({ length: 500, nullable: true })
  Biography: string;

  @Column({ length: 200 })
  Image: string;

  @Column({ nullable: true })
  CurrentStatus: string;

  @Column({ length: 500, nullable: true })
  Message: string;

  @Column({ nullable: true, default: false })
  Phd: boolean;

  @Column({ nullable: true })
  BPS: number;

  @ManyToOne(() => Department, (department) => department, {
    nullable: true,
  })
  @JoinColumn({ name: 'DepartmentId' })
  Department: Department;

  @OneToMany(() => Publication, (publication) => publication.Employee, {
    nullable: true,
  })
  Publications?: Publication[];

  @OneToMany(() => Experience, (experience) => experience.Employee, {
    nullable: true,
  })
  Experiences?: Experience[];

  @OneToMany(() => Education, (education) => education.Employee, {
    nullable: true,
  })
  Educations?: Education[];

  @OneToMany(() => Recognition, (recognition) => recognition.Employee, {
    nullable: true,
  })
  Recognitions?: Recognition[];
}
