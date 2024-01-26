import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1695041034073 implements MigrationInterface {
  name = 'Migrations1695041034073';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "sibau_website"."employee_info" DROP CONSTRAINT "FK_043924611f1f3b5a8af1aa9ec73"`,
    );
    await queryRunner.query(
      `ALTER TABLE "sibau_website"."employee_info" DROP CONSTRAINT "REL_043924611f1f3b5a8af1aa9ec7"`,
    );
    await queryRunner.query(
      `ALTER TABLE "sibau_website"."employee_info" DROP COLUMN "employeeId"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "sibau_website"."employee_info" ADD "employeeId" integer`,
    );
    await queryRunner.query(
      `ALTER TABLE "sibau_website"."employee_info" ADD CONSTRAINT "REL_043924611f1f3b5a8af1aa9ec7" UNIQUE ("employeeId")`,
    );
    await queryRunner.query(
      `ALTER TABLE "sibau_website"."employee_info" ADD CONSTRAINT "FK_043924611f1f3b5a8af1aa9ec73" FOREIGN KEY ("employeeId") REFERENCES "sibau_website"."Employee"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
