import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1686487368752 implements MigrationInterface {
    name = 'Migrations1686487368752'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sibau_website"."career" DROP COLUMN "category"`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."career" DROP COLUMN "contact"`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."Program" ADD "Link" character varying(100) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sibau_website"."Program" DROP COLUMN "Link"`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."career" ADD "contact" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."career" ADD "category" character varying NOT NULL`);
    }

}
