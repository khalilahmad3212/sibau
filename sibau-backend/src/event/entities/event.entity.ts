import { Department } from 'src/department/entities/department.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'Events' })
export class Event {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column({ length: 100 })
  Title: string;

  @Column()
  Cost: number;

  @Column({ length: 50 })
  OrganizorName: string;

  @Column({ length: 15 })
  OrganizorPhone: string;

  @Column({ length: 30 })
  OrganizorEmail: string;

  @Column('date')
  EndDate: Date;

  @Column({
    nullable: true,
    type: 'enum',
    enum: ['WORKSHOP', 'DIPLOMA', 'COURSE', 'CONFERENCE'],
  })
  EventType: string;

  @Column({ length: 200 })
  Image: string;

  @Column({ length: 200, nullable: true })
  PosterImage: string;

  @Column('date')
  StartDate: Date;

  @Column({ length: 100 })
  Venue: string;

  @Column({ type: 'integer' })
  Sort: number;

  @Column()
  EmbededCode: string;

  @ManyToOne(() => Department, (department) => department.Events, {
    nullable: true,
  })
  @JoinColumn({ name: 'DepartmentId' })
  Department: Department;
}
