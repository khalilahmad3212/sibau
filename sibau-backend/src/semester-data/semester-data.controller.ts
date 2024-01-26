import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { SemesterDataService } from './semester-data.service';
import { CreateSemesterDatumDto } from './dto/create-semester-datum.dto';

@Controller('semester-data')
export class SemesterDataController {
  constructor(private readonly semesterDataService: SemesterDataService) {}

  @Post(':departmentName/:semesterNumber') // POST /semester-data/:departmentName/:semesterNumber
  createNew(
    @Param('departmentName') departmentName: string,
    @Param('semesterNumber') semesterNumber: string,
    @Body('courses') courses: string,
  ) {
    console.log(courses, 'courses ');
    return this.semesterDataService.createNewSemester(
      departmentName,
      Number(semesterNumber),
      courses,
    );
  }

  @Put(':departmentName/:semesterNumber') // POST /semester-data/:departmentName/:semesterNumber
  createOrUpdate(
    @Param('departmentName') departmentName: string,
    @Param('semesterNumber') semesterNumber: number,
    @Body() createSemesterDatumDto: CreateSemesterDatumDto,
  ) {
    return this.semesterDataService.createOrUpdateSemesterData(
      departmentName,
      semesterNumber,
      createSemesterDatumDto.courses,
    );
  }

  @Get()
  findAllToView() {
    return this.semesterDataService.getAll();
  } // GET /semester-data/:departmentName/:semesterNumber

  @Get(':departmentName/:semesterNumber') // GET /semester-data/:departmentName/:semesterNumber
  find(
    @Param('departmentName') departmentName: string,
    @Param('semesterNumber') semesterNumber: number,
  ) {
    return this.semesterDataService.findSemesterData(
      departmentName,
      semesterNumber,
    );
  }

  @Get(':departmentName') // GET /semester-data/:departmentName
  findAllByDepartment(@Param('departmentName') departmentName: string) {
    return this.semesterDataService.findSemestersDataByDepartment(
      departmentName,
    );
  }

  @Patch(':departmentName/:semesterNumber') // PATCH /semester-data/:departmentName/:semesterNumber
  update(
    @Param('departmentName') departmentName: string,
    @Param('semesterNumber') semesterNumber: number,
  ) {
    return this.semesterDataService.deleteSemesterData(
      departmentName,
      semesterNumber,
    );
  }

  @Delete(':departmentName/:semesterNumber') // DELETE /semester-data/:departmentName/:semesterNumber
  remove(
    @Param('departmentName') departmentName: string,
    @Param('semesterNumber') semesterNumber: number,
  ) {
    return this.semesterDataService.deleteSemesterData(
      departmentName,
      semesterNumber,
    );
  }
}
