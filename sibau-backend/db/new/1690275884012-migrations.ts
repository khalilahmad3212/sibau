import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1690275884012 implements MigrationInterface {
  name = 'Migrations1690275884012';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "sibau_website"."Employee" ADD "Phd" boolean DEFAULT false`,
    );
    await queryRunner.query(
      `ALTER TABLE "sibau_website"."DepartSpecialization" ALTER COLUMN "Content" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "sibau_website"."DepartSpecialization" ALTER COLUMN "Desc" DROP NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "sibau_website"."DepartSpecialization" ALTER COLUMN "Desc" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "sibau_website"."DepartSpecialization" ALTER COLUMN "Content" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "sibau_website"."Employee" DROP COLUMN "Phd"`,
    );
  }
}
