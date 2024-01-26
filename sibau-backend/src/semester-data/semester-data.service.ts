import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SemesterData } from './entities/semester-datum.entity';

@Injectable()
export class SemesterDataService {
  constructor(
    @InjectRepository(SemesterData)
    private readonly semesterDataRepository: Repository<SemesterData>,
  ) {}

  async getAll() {
    return await this.semesterDataRepository.find();
  }
  async createNewSemester(
    departmentName: string,
    semesterNumber: number,
    courses: string,
  ) {
    const department = await this.semesterDataRepository.findOne({
      where: { departmentName, semester: semesterNumber },
    });
    if (department) {
      throw new NotFoundException(
        `SemesterData Exist with department  '${departmentName}' and semester ${semesterNumber} `,
      );
    }

    const newSemester = new SemesterData();
    // Update or create semester data
    console.log(typeof semesterNumber, 'semester Number');
    newSemester.departmentName = departmentName;
    newSemester.semester = semesterNumber;
    newSemester.courses = JSON.stringify(courses);

    await this.semesterDataRepository.save(newSemester);

    return department;
  }

  async createOrUpdateSemesterData(
    departmentName: string,
    semesterNumber: number,
    courses: string,
  ) {
    const department = await this.semesterDataRepository.findOne({
      where: { departmentName },
    });

    if (!department) {
      throw new NotFoundException(
        `SemesterData with name '${departmentName}' not found.`,
      );
    }

    // Update or create semester data
    department.semester = semesterNumber;
    department.courses = JSON.stringify(courses);

    await this.semesterDataRepository.save(department);

    return department;
  }

  async deleteSemesterData(departmentName: string, semesterNumber: number) {
    const department = await this.semesterDataRepository.findOne({
      where: { departmentName, semester: semesterNumber },
    });

    if (!department) {
      throw new NotFoundException(
        `SemesterData with name '${departmentName}' not found.`,
      );
    }

    // Remove semester data
    department.courses = null;

    await this.semesterDataRepository.save(department);
  }

  async findSemesterData(departmentName: string, semesterNumber: number) {
    const semesterData = await this.semesterDataRepository.findOne({
      where: { departmentName, semester: semesterNumber },
      order: { semester: 'ASC' }, // Sort by semester in ascending order
    });

    if (!semesterData) {
      throw new NotFoundException(
        `SemesterData with name '${departmentName}' not found.`,
      );
    }

    return semesterData;
  }

  async findSemestersDataByDepartment(departmentName: string) {
    const semesterData = await this.semesterDataRepository.find({
      where: { departmentName },
      order: { semester: 'ASC' }, // Sort by semester in ascending order
    });

    if (!semesterData) {
      throw new NotFoundException(
        `SemesterData with name '${departmentName}' not found.`,
      );
    }

    return semesterData;
  }
}
