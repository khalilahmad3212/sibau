import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1685729092836 implements MigrationInterface {
    name = 'Migrations1685729092836'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "sibau_website"."Announcement" ("Id" SERIAL NOT NULL, "Title" character varying(100) NOT NULL, "File" character varying(200) NOT NULL, "StartDate" date NOT NULL, "EndDate" date NOT NULL, "Description" character varying(1000), "DepartmentId" integer, CONSTRAINT "PK_f02e265ce6282e71ce4c8986fdb" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TABLE "sibau_website"."Experience" ("Id" SERIAL NOT NULL, "StartDate" date NOT NULL, "EndDate" date NOT NULL, "Position" character varying(100) NOT NULL, "Organization" character varying(100) NOT NULL, "EmployeeId" integer, CONSTRAINT "PK_a1d523f86030a0c0e79bef004c3" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TYPE "sibau_website"."Education_degreetype_enum" AS ENUM('MATRIC', 'INTERMEDIATE', 'BS')`);
        await queryRunner.query(`CREATE TABLE "sibau_website"."Education" ("Id" SERIAL NOT NULL, "Link" character varying(200) NOT NULL, "Major" character varying NOT NULL, "DegreeType" "sibau_website"."Education_degreetype_enum" NOT NULL, "Descripiton" character varying(1000), "Institute" character varying NOT NULL, "StartDate" date NOT NULL, "EndDate" date NOT NULL, "EmployeeId" integer, CONSTRAINT "PK_6916188fbb3f61885229032a74d" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TABLE "sibau_website"."Publication" ("Id" SERIAL NOT NULL, "Title" character varying(100) NOT NULL, "Authors" character varying(100) NOT NULL, "Link" character varying(200) NOT NULL, "Year" date NOT NULL, "JounalName" character varying(50) NOT NULL, "Type" character varying NOT NULL, "EmployeeId" integer, CONSTRAINT "PK_ed32fce2539b5d15ee758e5ceb0" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TYPE "sibau_website"."Recoginition_type_enum" AS ENUM('AWARD', 'ACHEIVEMENT', 'CERTIFICATIE', 'MEDAL', 'MEMBERSHIP')`);
        await queryRunner.query(`CREATE TABLE "sibau_website"."Recoginition" ("Id" SERIAL NOT NULL, "Title" character varying(100) NOT NULL, "Designation" character varying(100), "Link" character varying(100), "Organization" character varying(100) NOT NULL, "Type" "sibau_website"."Recoginition_type_enum" NOT NULL, "StartDate" date, "EndDate" date NOT NULL, "EmployeeId" integer, CONSTRAINT "PK_0df7c25c0fb191e6c5af965afb8" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TYPE "sibau_website"."Employee_type_enum" AS ENUM('PERMANENT', 'CONTRACTUAL')`);
        await queryRunner.query(`CREATE TABLE "sibau_website"."Employee" ("Id" SERIAL NOT NULL, "FirstName" character varying(50) NOT NULL, "LastName" character varying(50) NOT NULL, "Designation" character varying(50) NOT NULL, "Email" character varying(100) NOT NULL, "CMS_id" character varying(50), "EmployeeId" integer, "OfficeExtension" character varying(15), "OfficeAddress" character varying(200) NOT NULL, "Type" "sibau_website"."Employee_type_enum" NOT NULL, "Skills" character varying(500) NOT NULL, "Biography" character varying(500), "Image" character varying(200) NOT NULL, "CurrentStatus" character varying, "Message" character varying(500), "BPS" integer, "DepartmentId" integer, CONSTRAINT "UQ_d5fdd84484b5a5d60a50a004a09" UNIQUE ("Email"), CONSTRAINT "UQ_b3bd4d1cf40514023c29ad84199" UNIQUE ("CMS_id"), CONSTRAINT "UQ_e90d878a2abc0522609397e0136" UNIQUE ("EmployeeId"), CONSTRAINT "PK_f0f4637f4649a2b0fb85335cd28" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TYPE "sibau_website"."Program_name_enum" AS ENUM('UNDERGRADUATE', 'GRADUATE', 'POSTGRADUATE', 'FOUNDATION', 'SUMMER', 'WINTER')`);
        await queryRunner.query(`CREATE TABLE "sibau_website"."Program" ("Id" SERIAL NOT NULL, "Name" "sibau_website"."Program_name_enum" NOT NULL, "Duration" character varying(50) NOT NULL, "Description" character varying(1000), "Coordinator" character varying(50) NOT NULL, "Link" character varying(100) NOT NULL, "FocalPersonEmployeeId" integer, CONSTRAINT "REL_f6afb0bda0570a88bfba3529a3" UNIQUE ("FocalPersonEmployeeId"), CONSTRAINT "PK_42741702c324a0f5d0eee147b0f" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TYPE "sibau_website"."Resource_link_enum" AS ENUM('FILE', 'URL')`);
        await queryRunner.query(`CREATE TABLE "sibau_website"."Resource" ("Id" SERIAL NOT NULL, "Name" character varying(100) NOT NULL, "ShortName" character varying(100) NOT NULL, "Link" "sibau_website"."Resource_link_enum" NOT NULL, "AltText" character varying(100) NOT NULL, "LinkLocation" character varying, "DepartmentId" integer, CONSTRAINT "PK_73083aad84ebcf431519adc5147" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TABLE "sibau_website"."specialization" ("Id" SERIAL NOT NULL, "Name" character varying NOT NULL, "ResourceId" integer, CONSTRAINT "REL_d72049faaa6c1f7deaae859337" UNIQUE ("ResourceId"), CONSTRAINT "PK_3ce899c4bc63a08d9d031a2ca6c" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TABLE "sibau_website"."DeptwiseProgramSpecailzation" ("Id" SERIAL NOT NULL, "ProgramId" integer, "DepartmentId" integer, "SpecializationId" integer, CONSTRAINT "PK_9244865f45b3ce42d51b07e5fc1" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TYPE "sibau_website"."Events_eventtype_enum" AS ENUM('WORKSHOP', 'DIPLOMA', 'COURSE', 'CONFERENCE')`);
        await queryRunner.query(`CREATE TABLE "sibau_website"."Events" ("Id" SERIAL NOT NULL, "Title" character varying(100) NOT NULL, "Cost" integer NOT NULL, "OrganizorName" character varying(50) NOT NULL, "OrganizorPhone" character varying(15) NOT NULL, "OrganizorEmail" character varying(30) NOT NULL, "EndDate" date NOT NULL, "EventType" "sibau_website"."Events_eventtype_enum", "Image" character varying(200) NOT NULL, "PosterImage" character varying(200), "StartDate" date NOT NULL, "Venue" character varying(100) NOT NULL, "Sort" integer NOT NULL, "EmbededCode" character varying NOT NULL, "DepartmentId" integer, CONSTRAINT "PK_20df8c3635b948593b60d76c4c2" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TABLE "sibau_website"."News" ("Id" SERIAL NOT NULL, "Title" character varying(100) NOT NULL, "Date" date NOT NULL, "Heading" character varying(100), "Descripiton" character varying(1000), "Image" character varying(200) NOT NULL, "Sort" integer NOT NULL, "DepartmentId" integer, CONSTRAINT "PK_e57fef8316ec9e8dafe07f3b332" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TABLE "sibau_website"."ResourceType" ("Id" SERIAL NOT NULL, "Name" character varying(50) NOT NULL, "Link" character varying(200) NOT NULL, "DepartmentId" integer, CONSTRAINT "PK_19e33a2112412e22d032210bdcd" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TABLE "sibau_website"."Organization" ("Id" SERIAL NOT NULL, "Name" character varying(100) NOT NULL, "History" character varying(1000), "Description" character varying(1000), "Mission" character varying(1000) NOT NULL, "Vision" character varying(1000) NOT NULL, "Founder" character varying(100), "Logo" character varying, "VCEmployeeId" integer, "RegistrarEmployeeId" integer, CONSTRAINT "REL_5bd6f741d697350d86bf20fda9" UNIQUE ("VCEmployeeId"), CONSTRAINT "REL_baa1c8d885079de46e80a9ce58" UNIQUE ("RegistrarEmployeeId"), CONSTRAINT "PK_1a7da32ee48fd92c4bea7ae0f8d" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TABLE "sibau_website"."Department" ("Id" SERIAL NOT NULL, "Name" character varying(100) NOT NULL, "History" character varying(1000), "Mission" character varying(1000) NOT NULL, "Vision" character varying(1000) NOT NULL, "Objectives" character varying(1000), "Description" character varying(1000), "Phone" character varying(15), "Address" character varying(500), "Accreditions" character varying NOT NULL, "Catagory" character varying NOT NULL, "Logo" character varying, "OrganizationId" integer, "HeadEmployeeId" integer, CONSTRAINT "REL_8648bd75e2c5ba4b7afb2a7aef" UNIQUE ("HeadEmployeeId"), CONSTRAINT "PK_910e55bc3393e4333aa120dd808" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TYPE "sibau_website"."Gallery_type_enum" AS ENUM('IMAGE', 'VIDEO')`);
        await queryRunner.query(`CREATE TABLE "sibau_website"."Gallery" ("Id" SERIAL NOT NULL, "Name" character varying(100) NOT NULL, "AltText" character varying(100) NOT NULL, "Type" "sibau_website"."Gallery_type_enum" NOT NULL, "DepartmentId" integer, CONSTRAINT "REL_3dd97ce463ca4bb80b12d465b5" UNIQUE ("DepartmentId"), CONSTRAINT "PK_18d23f41ae3beff484468042adb" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TABLE "sibau_website"."FileData" ("id" SERIAL NOT NULL, "filename" character varying NOT NULL, "filepath" character varying NOT NULL, "page" character varying, "deadline" character varying, "uploadAt" TIMESTAMP, "fileType" character varying, "fileSize" integer, "description" character varying, CONSTRAINT "PK_343c750a13e6143d7cc956529e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sibau_website"."MapResource" ("id" SERIAL NOT NULL, "key" character varying(100) NOT NULL, "value" character varying NOT NULL, "page" character varying(100), "description" character varying, CONSTRAINT "PK_f372779819a98e0bdca08c6ab3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sibau_website"."Skill" ("Id" SERIAL NOT NULL, "Name" character varying(100) NOT NULL, CONSTRAINT "PK_cfd904b15789b485766caac14d9" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`CREATE TABLE "sibau_website"."Slider" ("Id" SERIAL NOT NULL, "Title" character varying(100) NOT NULL, "Headings" character varying NOT NULL, "Link" character varying(100) NOT NULL, "LinkTitle" character varying(100) NOT NULL, "Image" character varying(100) NOT NULL, CONSTRAINT "PK_5c1ed59184c8fe7442e446fc7ea" PRIMARY KEY ("Id"))`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."Announcement" ADD CONSTRAINT "FK_eb1a5fc660620326b62f5889a6e" FOREIGN KEY ("DepartmentId") REFERENCES "sibau_website"."Department"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."Experience" ADD CONSTRAINT "FK_64b443d736f4fceb52c29ea1e8a" FOREIGN KEY ("EmployeeId") REFERENCES "sibau_website"."Employee"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."Education" ADD CONSTRAINT "FK_1c5fdfc2c71f0dae903a01f4e0a" FOREIGN KEY ("EmployeeId") REFERENCES "sibau_website"."Employee"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."Publication" ADD CONSTRAINT "FK_7db9a5054b4cd4ab4ec7790560d" FOREIGN KEY ("EmployeeId") REFERENCES "sibau_website"."Employee"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."Recoginition" ADD CONSTRAINT "FK_16d32b28e1b1b9ffef618740869" FOREIGN KEY ("EmployeeId") REFERENCES "sibau_website"."Employee"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."Employee" ADD CONSTRAINT "FK_6b4a58aa2c8d0d4f46869f07cb0" FOREIGN KEY ("DepartmentId") REFERENCES "sibau_website"."Department"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."Program" ADD CONSTRAINT "FK_f6afb0bda0570a88bfba3529a3c" FOREIGN KEY ("FocalPersonEmployeeId") REFERENCES "sibau_website"."Employee"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."Resource" ADD CONSTRAINT "FK_f1fa957ea163e37cb49cab774df" FOREIGN KEY ("DepartmentId") REFERENCES "sibau_website"."Department"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."specialization" ADD CONSTRAINT "FK_d72049faaa6c1f7deaae859337f" FOREIGN KEY ("ResourceId") REFERENCES "sibau_website"."Resource"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."DeptwiseProgramSpecailzation" ADD CONSTRAINT "FK_d0809f7d8e929c8ae4319448c93" FOREIGN KEY ("ProgramId") REFERENCES "sibau_website"."Program"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."DeptwiseProgramSpecailzation" ADD CONSTRAINT "FK_617cb2fd4b7f1acc4619305643c" FOREIGN KEY ("DepartmentId") REFERENCES "sibau_website"."Department"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."DeptwiseProgramSpecailzation" ADD CONSTRAINT "FK_a637b5c0a0a0373484e2d718cb7" FOREIGN KEY ("SpecializationId") REFERENCES "sibau_website"."specialization"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."Events" ADD CONSTRAINT "FK_618d2e1e6199aab260371d3540c" FOREIGN KEY ("DepartmentId") REFERENCES "sibau_website"."Department"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."News" ADD CONSTRAINT "FK_4a4bb63315b1d40f54fa6c3b1d6" FOREIGN KEY ("DepartmentId") REFERENCES "sibau_website"."Department"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."ResourceType" ADD CONSTRAINT "FK_5e0902799a585955e4ddb21dd7a" FOREIGN KEY ("DepartmentId") REFERENCES "sibau_website"."Department"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."Organization" ADD CONSTRAINT "FK_5bd6f741d697350d86bf20fda9b" FOREIGN KEY ("VCEmployeeId") REFERENCES "sibau_website"."Employee"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."Organization" ADD CONSTRAINT "FK_baa1c8d885079de46e80a9ce581" FOREIGN KEY ("RegistrarEmployeeId") REFERENCES "sibau_website"."Employee"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."Department" ADD CONSTRAINT "FK_1a51b18f5a2e6a4b03af9ae8013" FOREIGN KEY ("OrganizationId") REFERENCES "sibau_website"."Organization"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."Department" ADD CONSTRAINT "FK_8648bd75e2c5ba4b7afb2a7aef9" FOREIGN KEY ("HeadEmployeeId") REFERENCES "sibau_website"."Employee"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."Gallery" ADD CONSTRAINT "FK_3dd97ce463ca4bb80b12d465b5e" FOREIGN KEY ("DepartmentId") REFERENCES "sibau_website"."Department"("Id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "sibau_website"."Gallery" DROP CONSTRAINT "FK_3dd97ce463ca4bb80b12d465b5e"`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."Department" DROP CONSTRAINT "FK_8648bd75e2c5ba4b7afb2a7aef9"`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."Department" DROP CONSTRAINT "FK_1a51b18f5a2e6a4b03af9ae8013"`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."Organization" DROP CONSTRAINT "FK_baa1c8d885079de46e80a9ce581"`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."Organization" DROP CONSTRAINT "FK_5bd6f741d697350d86bf20fda9b"`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."ResourceType" DROP CONSTRAINT "FK_5e0902799a585955e4ddb21dd7a"`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."News" DROP CONSTRAINT "FK_4a4bb63315b1d40f54fa6c3b1d6"`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."Events" DROP CONSTRAINT "FK_618d2e1e6199aab260371d3540c"`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."DeptwiseProgramSpecailzation" DROP CONSTRAINT "FK_a637b5c0a0a0373484e2d718cb7"`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."DeptwiseProgramSpecailzation" DROP CONSTRAINT "FK_617cb2fd4b7f1acc4619305643c"`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."DeptwiseProgramSpecailzation" DROP CONSTRAINT "FK_d0809f7d8e929c8ae4319448c93"`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."specialization" DROP CONSTRAINT "FK_d72049faaa6c1f7deaae859337f"`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."Resource" DROP CONSTRAINT "FK_f1fa957ea163e37cb49cab774df"`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."Program" DROP CONSTRAINT "FK_f6afb0bda0570a88bfba3529a3c"`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."Employee" DROP CONSTRAINT "FK_6b4a58aa2c8d0d4f46869f07cb0"`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."Recoginition" DROP CONSTRAINT "FK_16d32b28e1b1b9ffef618740869"`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."Publication" DROP CONSTRAINT "FK_7db9a5054b4cd4ab4ec7790560d"`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."Education" DROP CONSTRAINT "FK_1c5fdfc2c71f0dae903a01f4e0a"`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."Experience" DROP CONSTRAINT "FK_64b443d736f4fceb52c29ea1e8a"`);
        await queryRunner.query(`ALTER TABLE "sibau_website"."Announcement" DROP CONSTRAINT "FK_eb1a5fc660620326b62f5889a6e"`);
        await queryRunner.query(`DROP TABLE "sibau_website"."Slider"`);
        await queryRunner.query(`DROP TABLE "sibau_website"."Skill"`);
        await queryRunner.query(`DROP TABLE "sibau_website"."MapResource"`);
        await queryRunner.query(`DROP TABLE "sibau_website"."FileData"`);
        await queryRunner.query(`DROP TABLE "sibau_website"."Gallery"`);
        await queryRunner.query(`DROP TYPE "sibau_website"."Gallery_type_enum"`);
        await queryRunner.query(`DROP TABLE "sibau_website"."Department"`);
        await queryRunner.query(`DROP TABLE "sibau_website"."Organization"`);
        await queryRunner.query(`DROP TABLE "sibau_website"."ResourceType"`);
        await queryRunner.query(`DROP TABLE "sibau_website"."News"`);
        await queryRunner.query(`DROP TABLE "sibau_website"."Events"`);
        await queryRunner.query(`DROP TYPE "sibau_website"."Events_eventtype_enum"`);
        await queryRunner.query(`DROP TABLE "sibau_website"."DeptwiseProgramSpecailzation"`);
        await queryRunner.query(`DROP TABLE "sibau_website"."specialization"`);
        await queryRunner.query(`DROP TABLE "sibau_website"."Resource"`);
        await queryRunner.query(`DROP TYPE "sibau_website"."Resource_link_enum"`);
        await queryRunner.query(`DROP TABLE "sibau_website"."Program"`);
        await queryRunner.query(`DROP TYPE "sibau_website"."Program_name_enum"`);
        await queryRunner.query(`DROP TABLE "sibau_website"."Employee"`);
        await queryRunner.query(`DROP TYPE "sibau_website"."Employee_type_enum"`);
        await queryRunner.query(`DROP TABLE "sibau_website"."Recoginition"`);
        await queryRunner.query(`DROP TYPE "sibau_website"."Recoginition_type_enum"`);
        await queryRunner.query(`DROP TABLE "sibau_website"."Publication"`);
        await queryRunner.query(`DROP TABLE "sibau_website"."Education"`);
        await queryRunner.query(`DROP TYPE "sibau_website"."Education_degreetype_enum"`);
        await queryRunner.query(`DROP TABLE "sibau_website"."Experience"`);
        await queryRunner.query(`DROP TABLE "sibau_website"."Announcement"`);
    }

}
