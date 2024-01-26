import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1695027069241 implements MigrationInterface {
  name = 'Migrations1695027069241';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "sibau_website"."employee_info" ADD "employee" character varying NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "sibau_website"."employee_info" ADD CONSTRAINT "UQ_763d248a2934e17022a05268a72" UNIQUE ("employee")`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "sibau_website"."employee_info" DROP CONSTRAINT "UQ_763d248a2934e17022a05268a72"`,
    );
    await queryRunner.query(
      `ALTER TABLE "sibau_website"."employee_info" DROP COLUMN "employee"`,
    );
  }
}
