import { dataSourceOptions } from './../db/data-source';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DepartmentModule } from './department/department.module';
import { OrganizationModule } from './organization/organization.module';
import { EmployeeModule } from './employee/employee.module';
import { ProgramModule } from './program/program.module';
import { PublicationModule } from './publication/publication.module';
import { ExperienceModule } from './experience/experience.module';
import { EducationModule } from './education/education.module';
import { RecognitionModule } from './recognition/recognition.module';
import { NewsModule } from './news/news.module';
import { AnnouncementModule } from './announcement/announcement.module';
import { SliderModule } from './slider/slider.module';
import { EventModule } from './event/event.module';
import { GalleryModule } from './gallery/gallery.module';
import { ResourceTypeModule } from './resource-type/resource-type.module';
import { ResourceModule } from './resource/resource.module';
import { SkillModule } from './skill/skill.module';
import { SpecializationModule } from './specialization/specialization.module';
import { DeptwiseProgramSpecailzationModule } from './deptwise-program-specailzation/deptwise-program-specailzation.module';
import { FileDataModule } from './file-data/file-data.module';
import { MapResourceModule } from './map-resource/map-resource.module';
import { RfqsModule } from './rfqs/rfqs.module';
import { TenderModule } from './tender/tender.module';
import { CareersModule } from './careers/careers.module';
import { DepartSpecializationModule } from './depart-specialization/depart-specialization.module';
import { DynamicPageModule } from './dynamic-page/dynamic-page.module';
import { SemesterDataModule } from './semester-data/semester-data.module';
import { EmployeeInfoModule } from './employee-info/employee-info.module';

import { ServeStaticModule } from '@nestjs/serve-static';
import { join, resolve } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot(
      { rootPath: './uploads/slider-images', serveRoot: '/slider-images' },
      (() => {
        const publicDir = resolve('./uploads/document/');

        const servePath = '/file-data-images';

        return { rootPath: publicDir, serveRoot: servePath };
      })(),
      (() => {
        const publicDir = resolve('./uploads/profile/');

        const servePath = '/employee-images';

        return { rootPath: publicDir, serveRoot: servePath };
      })(),
      (() => {
        const publicDir = resolve('./uploads/publication/');

        const servePath = '/publication-images';

        return { rootPath: publicDir, serveRoot: servePath };
      })(),
      (() => {
        const publicDir = resolve('./uploads/department/');

        const servePath = '/department-images';

        return { rootPath: publicDir, serveRoot: servePath };
      })(),
      (() => {
        const publicDir = resolve('./uploads/orgonization/');

        const servePath = '/organization-images';

        return { rootPath: publicDir, serveRoot: servePath };
      })(),
      (() => {
        const publicDir = resolve('./uploads/news/');

        const servePath = '/news-images';

        return { rootPath: publicDir, serveRoot: servePath };
      })(),
      (() => {
        const publicDir = resolve('./uploads/announcement/');

        const servePath = '/announcement-images';

        return { rootPath: publicDir, serveRoot: servePath };
      })(),
      (() => {
        const publicDir = resolve('./uploads/gallery/');

        const servePath = '/gallery-images';

        return { rootPath: publicDir, serveRoot: servePath };
      })(),
      (() => {
        const publicDir = resolve('./uploads/resource/');

        const servePath = '/resource-images';

        return { rootPath: publicDir, serveRoot: servePath };
      })(),
      (() => {
        const publicDir = resolve('./uploads/dynamic-page/');

        const servePath = '/dynamic-page-images';

        return { rootPath: publicDir, serveRoot: servePath };
      })()
    ),
    TypeOrmModule.forRoot(dataSourceOptions),

    EmployeeModule,
    EventModule,
    PublicationModule,
    DepartmentModule,
    OrganizationModule,
    ProgramModule,
    ExperienceModule,
    RecognitionModule,
    EducationModule,
    SliderModule,
    ResourceTypeModule, // ask from sir, what to do with it?
    FileDataModule,
    MapResourceModule,
    NewsModule,
    AnnouncementModule,
    GalleryModule,
    ResourceModule,
    SkillModule,

    SemesterDataModule,

    SpecializationModule,
    DeptwiseProgramSpecailzationModule,
    RfqsModule,
    TenderModule,
    CareersModule,
    DepartSpecializationModule,

    DynamicPageModule,

    EmployeeInfoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
