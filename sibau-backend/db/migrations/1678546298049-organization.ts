import { MigrationInterface, QueryRunner } from 'typeorm';

export class organization1678546298049 implements MigrationInterface {
  name = 'organization1678546298049';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // await queryRunner.query(`CREATE TYPE "sibau_website"."Employee_type_enum" AS ENUM('PERMANENT', 'CONTRACTUAL')`);
    // await queryRunner.query(`CREATE TABLE "sibau_website"."Employee" ("Id" SERIAL NOT NULL, "FirstName" character varying(50) NOT NULL, "LastName" character varying(50) NOT NULL, "Designation" character varying(50) NOT NULL, "Email" character varying(100) NOT NULL, "CMS_id" character varying(50), "EmployeeId" integer, "OfficeExtension" character varying(15), "OfficeAddress" character varying(200) NOT NULL, "Type" "sibau_website"."Employee_type_enum" NOT NULL, "Skills" character varying(500) NOT NULL, "Biography" character varying(500), "Image" character varying(200) NOT NULL, "CurrentStatus" character varying, "Message" character varying(500), "BPS" integer, "DepartmentId" integer, CONSTRAINT "UQ_d5fdd84484b5a5d60a50a004a09" UNIQUE ("Email"), CONSTRAINT "UQ_b3bd4d1cf40514023c29ad84199" UNIQUE ("CMS_id"), CONSTRAINT "UQ_e90d878a2abc0522609397e0136" UNIQUE ("EmployeeId"), CONSTRAINT "PK_f0f4637f4649a2b0fb85335cd28" PRIMARY KEY ("Id"))`);
    // await queryRunner.query(`CREATE TABLE "sibau_website"."Organization" ("Id" SERIAL NOT NULL, "Name" character varying(100) NOT NULL, "History" character varying(1000), "Description" character varying(1000), "Mission" character varying(1000) NOT NULL, "Vision" character varying(1000) NOT NULL, "Founder" character varying(100), "Logo" character varying, "VCEmployeeId" integer, "RegistrarEmployeeId" integer, CONSTRAINT "REL_5bd6f741d697350d86bf20fda9" UNIQUE ("VCEmployeeId"), CONSTRAINT "REL_baa1c8d885079de46e80a9ce58" UNIQUE ("RegistrarEmployeeId"), CONSTRAINT "PK_1a7da32ee48fd92c4bea7ae0f8d" PRIMARY KEY ("Id"))`);
    // await queryRunner.query(`CREATE TABLE "sibau_website"."Department" ("Id" SERIAL NOT NULL, "Name" character varying NOT NULL, "Vision" character varying NOT NULL, "Mission" character varying NOT NULL, "Objectives" character varying NOT NULL, "History" character varying, "Description" character varying, "Phone" character varying NOT NULL, "Address" character varying NOT NULL, "Accreditions" character varying NOT NULL, "Catagory" character varying NOT NULL, "Logo" character varying NOT NULL, "OrganizationId" integer NOT NULL, "HeadEmployeeId" integer, CONSTRAINT "REL_8648bd75e2c5ba4b7afb2a7aef" UNIQUE ("HeadEmployeeId"), CONSTRAINT "PK_910e55bc3393e4333aa120dd808" PRIMARY KEY ("Id"))`);
    // await queryRunner.query(`ALTER TABLE "sibau_website"."Employee" ADD CONSTRAINT "FK_6b4a58aa2c8d0d4f46869f07cb0" FOREIGN KEY ("DepartmentId") REFERENCES "sibau_website"."Department"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    // await queryRunner.query(`ALTER TABLE "sibau_website"."Organization" ADD CONSTRAINT "FK_5bd6f741d697350d86bf20fda9b" FOREIGN KEY ("VCEmployeeId") REFERENCES "sibau_website"."Employee"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    // await queryRunner.query(`ALTER TABLE "sibau_website"."Organization" ADD CONSTRAINT "FK_baa1c8d885079de46e80a9ce581" FOREIGN KEY ("RegistrarEmployeeId") REFERENCES "sibau_website"."Employee"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    // await queryRunner.query(`ALTER TABLE "sibau_website"."Department" ADD CONSTRAINT "FK_1a51b18f5a2e6a4b03af9ae8013" FOREIGN KEY ("OrganizationId") REFERENCES "sibau_website"."Organization"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    // await queryRunner.query(`ALTER TABLE "sibau_website"."Department" ADD CONSTRAINT "FK_8648bd75e2c5ba4b7afb2a7aef9" FOREIGN KEY ("HeadEmployeeId") REFERENCES "sibau_website"."Employee"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "sibau_website"."Department" DROP CONSTRAINT "FK_8648bd75e2c5ba4b7afb2a7aef9"`,
    );
    await queryRunner.query(
      `ALTER TABLE "sibau_website"."Department" DROP CONSTRAINT "FK_1a51b18f5a2e6a4b03af9ae8013"`,
    );
    await queryRunner.query(
      `ALTER TABLE "sibau_website"."Organization" DROP CONSTRAINT "FK_baa1c8d885079de46e80a9ce581"`,
    );
    await queryRunner.query(
      `ALTER TABLE "sibau_website"."Organization" DROP CONSTRAINT "FK_5bd6f741d697350d86bf20fda9b"`,
    );
    await queryRunner.query(
      `ALTER TABLE "sibau_website"."Employee" DROP CONSTRAINT "FK_6b4a58aa2c8d0d4f46869f07cb0"`,
    );
    await queryRunner.query(`DROP TABLE "sibau_website"."Department"`);
    await queryRunner.query(`DROP TABLE "sibau_website"."Organization"`);
    await queryRunner.query(`DROP TABLE "sibau_website"."Employee"`);
    await queryRunner.query(`DROP TYPE "sibau_website"."Employee_type_enum"`);
  }
}
