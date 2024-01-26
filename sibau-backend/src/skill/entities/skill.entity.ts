import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity({ name: 'Skill'})
export class Skill {
    
    @PrimaryGeneratedColumn()
    Id: number;

	@Column({length:100})
	Name: string;
}
