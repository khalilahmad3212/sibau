import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1693728127242 implements MigrationInterface {
    name = 'Migrations1693728127242'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "sibau_website"."semester_data" ("id" SERIAL NOT NULL, "departmentName" character varying(255) NOT NULL, "semester" integer NOT NULL, "courses" text NOT NULL, CONSTRAINT "PK_305f6de68fc00a0d20a682afc4b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."DepartSpecialization" ALTER COLUMN "Content" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."DepartSpecialization" ALTER COLUMN "Desc" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sibau_website"."DepartSpecialization" ALTER COLUMN "Desc" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."DepartSpecialization" ALTER COLUMN "Content" SET NOT NULL`);
        await queryRunner.query(`DROP TABLE "sibau_website"."semester_data"`);
    }

}
