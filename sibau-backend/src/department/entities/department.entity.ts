import { Announcement } from 'src/announcement/entities/announcement.entity';
import { DeptwiseProgramSpecailzationController } from 'src/deptwise-program-specailzation/deptwise-program-specailzation.controller';
import { Deptwiseprogramspecilization } from 'src/deptwise-program-specailzation/entities/deptwise-program-specailzation.entity';
import { Event } from 'src/event/entities/event.entity';
import { News } from 'src/news/entities/news.entity';
import { ResourceType } from 'src/resource-type/entities/resource-type.entity';
import { Resource } from 'src/resource/entities/resource.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Employee } from '../../employee/entities/employee.entity';
import { Organization } from './../../organization/entities/organization.entity';

@Entity({ name: 'Department' })
export class Department {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column({ length: 100 })
  Name: string;

  @Column({ nullable: true, length: 1000 })
  History: string;

  @Column({ length: 1000 })
  Mission: string;

  @Column({ length: 1000 })
  Vision: string;

  @Column({ nullable: true, length: 1000 })
  Objectives: string;

  @Column({ nullable: true, length: 1000 })
  Description: string;

  @Column({ length: 15, nullable: true })
  Phone: string;

  @Column({ length: 500, nullable: true })
  Address: string;

  @Column()
  Accreditions: string;

  @Column()
  Catagory: string;

  @Column({ nullable: true })
  Logo: string;

  @OneToMany(() => Employee, (employee) => employee.Department, {
    nullable: true,
  })
  Employees: Employee[];

  @ManyToOne(() => Organization, { nullable: true })
  @JoinColumn({ name: 'OrganizationId' })
  Organization: Organization;

  @OneToOne(() => Employee, { nullable: true })
  @JoinColumn({ name: 'HeadEmployeeId' })
  Head: Employee;

  @OneToMany(() => News, (news) => news.Department, {
    nullable: true,
  })
  News: News[];

  @OneToMany(() => Announcement, (announcement) => announcement.Department, {
    nullable: true,
  })
  Announcements: Announcement[];

  @OneToMany(() => Event, (event) => event.Department, {
    nullable: true,
  })
  Events: Event[];

  @OneToMany(() => ResourceType, (resourceType) => resourceType.Department, {
    nullable: true,
  })
  ResourceTypes: ResourceType[];

  @OneToMany(() => Resource, (resource) => resource.Department, {
    nullable: true,
  })
  Resources: Resource[];

  @OneToMany(
    () => Deptwiseprogramspecilization,
    (deptwiseprogramspecilization) => deptwiseprogramspecilization.Department,
    {
      nullable: true,
    },
  )
  Deptwiseprogramspecilizations: Deptwiseprogramspecilization[];
}
