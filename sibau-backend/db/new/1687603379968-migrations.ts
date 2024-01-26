import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1687603379968 implements MigrationInterface {
  name = 'Migrations1687603379968';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "sibau_website"."DynamicPage" ADD "link" character varying(50) NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "sibau_website"."DynamicPage" DROP COLUMN "link"`,
    );
  }
}
