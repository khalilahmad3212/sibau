import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1686391343640 implements MigrationInterface {
    name = 'Migrations1686391343640'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sibau_website"."Gallery" RENAME COLUMN "AltText" TO "event"`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."Program" ADD "Link" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."Gallery" DROP COLUMN "event"`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."Gallery" ADD "event" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sibau_website"."Gallery" DROP COLUMN "event"`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."Gallery" ADD "event" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."Program" DROP COLUMN "Link"`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."Gallery" RENAME COLUMN "event" TO "AltText"`);
    }

}
