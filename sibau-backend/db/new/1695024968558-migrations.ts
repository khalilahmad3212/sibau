import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1695024968558 implements MigrationInterface {
  name = 'Migrations1695024968558';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "sibau_website"."Employee" DROP CONSTRAINT "UQ_e90d878a2abc0522609397e0136"`,
    );
    await queryRunner.query(
      `ALTER TABLE "sibau_website"."Employee" DROP COLUMN "EmployeeId"`,
    );
    await queryRunner.query(
      `ALTER TABLE "sibau_website"."Employee" ADD "EmployeeId" character varying`,
    );
    await queryRunner.query(
      `ALTER TABLE "sibau_website"."Employee" ADD CONSTRAINT "UQ_e90d878a2abc0522609397e0136" UNIQUE ("EmployeeId")`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "sibau_website"."Employee" DROP CONSTRAINT "UQ_e90d878a2abc0522609397e0136"`,
    );
    await queryRunner.query(
      `ALTER TABLE "sibau_website"."Employee" DROP COLUMN "EmployeeId"`,
    );
    await queryRunner.query(
      `ALTER TABLE "sibau_website"."Employee" ADD "EmployeeId" integer`,
    );
    await queryRunner.query(
      `ALTER TABLE "sibau_website"."Employee" ADD CONSTRAINT "UQ_e90d878a2abc0522609397e0136" UNIQUE ("EmployeeId")`,
    );
  }
}
