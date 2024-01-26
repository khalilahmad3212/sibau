import { Deptwiseprogramspecilization } from 'src/deptwise-program-specailzation/entities/deptwise-program-specailzation.entity';
import { Resource } from 'src/resource/entities/resource.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'specialization' })
export class Specialization {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column()
  Name: string;

  @OneToOne(() => Resource, {
    nullable: true,
  })
  @JoinColumn({ name: 'ResourceId' })
  Resource: Resource;

  @OneToMany(
    () => Deptwiseprogramspecilization,
    (deptwiseprogramspecilization) =>
      deptwiseprogramspecilization.Specialization,
    {
      nullable: true,
    },
  )
  Deptwiseprogramspecilizations: Deptwiseprogramspecilization[];
}
