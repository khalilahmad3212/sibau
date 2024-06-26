import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1709339275134 implements MigrationInterface {
    name = 'Migrations1709339275134'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sibau_website"."Gallery" RENAME COLUMN "AltText" TO "event"`);
        await queryRunner.query(`CREATE TABLE "sibau_website"."tender" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "originalFileName" character varying NOT NULL, "updatedFileName" character varying NOT NULL, "openingDate" character varying NOT NULL, "fee" integer NOT NULL, "lastDate" character varying NOT NULL, "category" character varying NOT NULL, "contact" character varying NOT NULL, CONSTRAINT "PK_cf05759ac4297391f87db210f64" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sibau_website"."semester_data" ("id" SERIAL NOT NULL, "departmentName" character varying(255) NOT NULL, "semester" integer NOT NULL, "courses" text NOT NULL, CONSTRAINT "PK_305f6de68fc00a0d20a682afc4b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sibau_website"."rfq" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "originalFileName" character varying NOT NULL, "updatedFileName" character varying NOT NULL, "published" character varying NOT NULL, "lastDate" character varying NOT NULL, "category" character varying NOT NULL, "contact" character varying NOT NULL, CONSTRAINT "PK_395d59069aefd34028301b81af1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sibau_website"."employee_info" ("id" SERIAL NOT NULL, "employee" character varying NOT NULL, "biography" text NOT NULL, "qualifications" text, "coursesTaught" text, "overView" text, "publications" text, CONSTRAINT "UQ_763d248a2934e17022a05268a72" UNIQUE ("employee"), CONSTRAINT "PK_68d60ba2d0f54361a6469d0aafa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sibau_website"."DynamicPage" ("Id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "link" character varying(50) NOT NULL, "content" character varying NOT NULL, CONSTRAINT "PK_f5ce2bc27e0cc609e3edb35e235" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TABLE "sibau_website"."DepartSpecialization" ("Id" SERIAL NOT NULL, "Name" character varying NOT NULL, "ShortName" character varying NOT NULL, "Link" character varying NOT NULL, "Content" character varying, "Desc" character varying, "DepartmentId" integer, CONSTRAINT "PK_7c91dc4338d59d65fe4dbf217c7" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TABLE "sibau_website"."career" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "originalFileName" character varying NOT NULL, "updatedFileName" character varying NOT NULL, "published" character varying NOT NULL, "lastDate" character varying NOT NULL, CONSTRAINT "PK_5f694c0aa9babcae2c4ad61c7d0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."Events" ADD "AllDay" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."Events" ADD "TextColor" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."Employee" ADD CONSTRAINT "UQ_e90d878a2abc0522609397e0136" UNIQUE ("EmployeeId")`);
        await queryRunner.query(`COMMENT ON COLUMN "sibau_website"."Employee"."Phd" IS NULL`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."Gallery" DROP COLUMN "event"`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."Gallery" ADD "event" character varying`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."DepartSpecialization" ADD CONSTRAINT "FK_f389ea39f4efa843880a2b7b6d3" FOREIGN KEY ("DepartmentId") REFERENCES "sibau_website"."Department"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sibau_website"."DepartSpecialization" DROP CONSTRAINT "FK_f389ea39f4efa843880a2b7b6d3"`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."Gallery" DROP COLUMN "event"`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."Gallery" ADD "event" character varying(100) NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "sibau_website"."Employee"."Phd" IS 'It is manualy added in database. pgAdmin. I don''t know wether it will be generated by TypeORM migrations. It was not generated in my case'`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."Employee" DROP CONSTRAINT "UQ_e90d878a2abc0522609397e0136"`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."Events" DROP COLUMN "TextColor"`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."Events" DROP COLUMN "AllDay"`);
        await queryRunner.query(`DROP TABLE "sibau_website"."career"`);
        await queryRunner.query(`DROP TABLE "sibau_website"."DepartSpecialization"`);
        await queryRunner.query(`DROP TABLE "sibau_website"."DynamicPage"`);
        await queryRunner.query(`DROP TABLE "sibau_website"."employee_info"`);
        await queryRunner.query(`DROP TABLE "sibau_website"."rfq"`);
        await queryRunner.query(`DROP TABLE "sibau_website"."semester_data"`);
        await queryRunner.query(`DROP TABLE "sibau_website"."tender"`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."Gallery" RENAME COLUMN "event" TO "AltText"`);
    }

}
