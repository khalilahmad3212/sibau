import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1693755194123 implements MigrationInterface {
  name = 'Migrations1693755194123';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "sibau_website"."employee_info" ("id" SERIAL NOT NULL, "biography" text NOT NULL, "qualifications" text NOT NULL, "publications" text NOT NULL, "employeeId" integer, CONSTRAINT "REL_043924611f1f3b5a8af1aa9ec7" UNIQUE ("employeeId"), CONSTRAINT "PK_68d60ba2d0f54361a6469d0aafa" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "sibau_website"."employee_info" ADD CONSTRAINT "FK_043924611f1f3b5a8af1aa9ec73" FOREIGN KEY ("employeeId") REFERENCES "sibau_website"."Employee"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "sibau_website"."employee_info" DROP CONSTRAINT "FK_043924611f1f3b5a8af1aa9ec73"`,
    );
    await queryRunner.query(`DROP TABLE "sibau_website"."employee_info"`);
  }
}
