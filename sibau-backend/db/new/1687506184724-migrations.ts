import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1687506184724 implements MigrationInterface {
  name = 'Migrations1687506184724';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "sibau_website"."DepartSpecialization" ("Id" SERIAL NOT NULL, "Name" character varying NOT NULL, "ShortName" character varying NOT NULL, "Link" character varying NOT NULL, "Content" character varying NOT NULL, "Desc" character varying NOT NULL, "DepartmentId" integer, CONSTRAINT "PK_7c91dc4338d59d65fe4dbf217c7" PRIMARY KEY ("Id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "sibau_website"."DynamicPage" ("Id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "content" character varying NOT NULL, CONSTRAINT "PK_f5ce2bc27e0cc609e3edb35e235" PRIMARY KEY ("Id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "sibau_website"."Program" ADD "Link" character varying(100) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "sibau_website"."DepartSpecialization" ADD CONSTRAINT "FK_f389ea39f4efa843880a2b7b6d3" FOREIGN KEY ("DepartmentId") REFERENCES "sibau_website"."Department"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "sibau_website"."DepartSpecialization" DROP CONSTRAINT "FK_f389ea39f4efa843880a2b7b6d3"`,
    );
    await queryRunner.query(
      `ALTER TABLE "sibau_website"."Program" DROP COLUMN "Link"`,
    );
    await queryRunner.query(`DROP TABLE "sibau_website"."DynamicPage"`);
    await queryRunner.query(
      `DROP TABLE "sibau_website"."DepartSpecialization"`,
    );
  }
}
