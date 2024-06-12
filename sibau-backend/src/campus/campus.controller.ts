// campus.controller.ts

import { Controller, Get, Post, Put, Delete, Body, Param, UseInterceptors, UploadedFiles, Patch } from '@nestjs/common';
import { CampusService } from './campus.service';
import { Campus } from './campus.entity';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { deleteFile, uploadFile } from '../utils/common.util';

const docPath = 'campus';

@Controller('campus')
export class CampusController {
  constructor(private readonly campusService: CampusService) { }

  @Get('list')
  getNames() {
    return this.campusService.findNames();
  }

  @Get()
  async findAll(): Promise<Campus[]> {
    return this.campusService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Campus> {
    return this.campusService.findOne(id);
  }

  @Post()
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'gallery', maxCount: 10 },
    { name: 'logo', maxCount: 1 },
    { name: 'cover', maxCount: 1 },
    { name: 'MissionImage', maxCount: 1 },
    { name: 'VisionImage', maxCount: 1}
  ]))
  async create(
    @Body() campusData: any,
    @UploadedFiles() files: any
  )
  // : Promise<Campus> 
  {

    console.log('files: ', files);
    console.log('body: ', campusData);

    const logoFile = files?.logo?.[0];
    const coverFile = files?.cover?.[0];
    const missionFile = files?.MissionImage?.[0];
    const visionFile = files?.VisionImage?.[0];

    const logoFileName = logoFile ? uploadFile(logoFile, docPath) : '';
    const coverFileName = coverFile ? uploadFile(coverFile, docPath) : '';
    const missionFileName = missionFile ? uploadFile(missionFile, docPath) : '';
    const visionFileName = visionFile ? uploadFile(visionFile, docPath) : '';

    console.log('logoFileName: ', logoFileName);
    console.log('coverFileName: ', coverFileName);
    console.log('missionFileName: ', missionFileName);
    console.log('visionFileName: ', visionFileName);

    campusData.Logo = logoFileName;
    campusData.Cover = coverFileName;
    campusData.MissionImage = missionFileName;
    campusData.VisionImage = visionFileName;

    let filesName: string[];
    if (files && files.gallery && files.gallery.length > 0) {
      filesName = await Promise.all(files?.gallery?.map(file => uploadFile(file, docPath)));
      campusData.Gallery = filesName.join('###');
    } else {
      campusData.Gallery = '';
    }
    console.log('gallery: ', campusData.Gallery);

    return this.campusService.create(campusData);
  }

  @Patch(':id')
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'gallery', maxCount: 10 },
    { name: 'logo', maxCount: 1 },
    { name: 'cover', maxCount: 1 },
    { name: 'MissionImage', maxCount: 1 },
    { name: 'VisionImage', maxCount: 1}
  ]))
  async update(
    @Param('id') id: number,
    @Body() campusData: any,
    @UploadedFiles() files: any
  ) {

    const campus = await this.campusService.findOne(id);

    let filesName: string[];
    if (files && files.gallery && files.gallery.length > 0) {
      filesName = await Promise.all(files.gallery.map(file => uploadFile(file, docPath)));
      campusData.Gallery = filesName.join('###');
    } else {
      campusData.Gallery = campus.Gallery;
    }

    const logoFile = files?.logo?.[0];
    const coverFile = files?.cover?.[0];
    const missionFile = files?.MissionImage?.[0];
    const visionFile = files?.VisionImage?.[0];

    const logoFileName = logoFile ? uploadFile(logoFile, docPath) : '';
    const coverFileName = coverFile ? uploadFile(coverFile, docPath) : '';
    const missionFileName = missionFile ? uploadFile(missionFile, docPath) : '';
    const visionFileName = visionFile ? uploadFile(visionFile, docPath) : '';

    console.log('logoFileName: ', logoFileName);
    console.log('coverFileName: ', coverFileName);
    console.log('missionFileName: ', missionFileName);
    console.log('visionFileName: ', visionFileName);

    if (logoFileName) {
      campusData.Logo = logoFileName;
    } else {
      campusData.Logo = campus.Logo;
    }

    if (coverFileName) {
      campusData.Cover = coverFileName;
    } else {
      campusData.Cover = campus.Cover;
    }

    if (missionFileName) {
      campusData.MissionImage = missionFileName;
    } else {
      campusData.MissionImage = campus.MissionImage;
    }

    if (visionFileName) {
      campusData.VisionImage = visionFileName;
    } else {
      campusData.VisionImage = campus.VisionImage;
    }
    // Delete previous images if any
    if (campus.Gallery) {
      const previousImages = campus.Gallery.split('###');
      const imagesToDelete = previousImages.filter(image => !campusData.oldImages.includes(image));
      const retainedImages = previousImages.filter(image => campusData.oldImages.includes(image));
      campusData.Gallery = [...campusData.Gallery?.split('###'), ...retainedImages].join('###');
      await Promise.all(imagesToDelete.map(image => deleteFile(docPath, image)));
    }

    console.log('data: ', campusData);
    delete campusData.oldImages;

    return this.campusService.update(id, campusData);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.campusService.delete(id);
  }


  @Get(':id/basic-info')
  async getBasicInfo(@Param('id') id: number): Promise<{ id: number; name: string }> {
    const campus = await this.campusService.findOne(id);
    return { id: campus.Id, name: campus.Name };
  }
}
