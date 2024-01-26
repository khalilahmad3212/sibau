import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1695147653941 implements MigrationInterface {
  name = 'Migrations1695147653941';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "sibau_website"."employee_info" ADD "coursesTaught" text`,
    );
    await queryRunner.query(
      `ALTER TABLE "sibau_website"."employee_info" ADD "overView" text`,
    );
    await queryRunner.query(
      `ALTER TABLE "sibau_website"."employee_info" ALTER COLUMN "qualifications" DROP NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "sibau_website"."employee_info" ALTER COLUMN "publications" DROP NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "sibau_website"."employee_info" ALTER COLUMN "publications" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "sibau_website"."employee_info" ALTER COLUMN "qualifications" SET NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "sibau_website"."employee_info" DROP COLUMN "overView"`,
    );
    await queryRunner.query(
      `ALTER TABLE "sibau_website"."employee_info" DROP COLUMN "coursesTaught"`,
    );
  }
}
