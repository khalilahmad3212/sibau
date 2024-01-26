import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1686305161617 implements MigrationInterface {
  name = 'Migrations1686305161617';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "sibau_website"."career" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "originalFileName" character varying NOT NULL, "updatedFileName" character varying NOT NULL, "published" character varying NOT NULL, "lastDate" character varying NOT NULL, "category" character varying NOT NULL, "contact" character varying NOT NULL, CONSTRAINT "PK_5f694c0aa9babcae2c4ad61c7d0" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "sibau_website"."rfq" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "originalFileName" character varying NOT NULL, "updatedFileName" character varying NOT NULL, "published" character varying NOT NULL, "lastDate" character varying NOT NULL, "category" character varying NOT NULL, "contact" character varying NOT NULL, CONSTRAINT "PK_395d59069aefd34028301b81af1" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "sibau_website"."tender" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "originalFileName" character varying NOT NULL, "updatedFileName" character varying NOT NULL, "openingDate" character varying NOT NULL, "fee" integer NOT NULL, "lastDate" character varying NOT NULL, "category" character varying NOT NULL, "contact" character varying NOT NULL, CONSTRAINT "PK_cf05759ac4297391f87db210f64" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "sibau_website"."Program" ADD "Link" character varying(100) NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "sibau_website"."Program" DROP COLUMN "Link"`,
    );
    await queryRunner.query(`DROP TABLE "sibau_website"."tender"`);
    await queryRunner.query(`DROP TABLE "sibau_website"."rfq"`);
    await queryRunner.query(`DROP TABLE "sibau_website"."career"`);
  }
}
