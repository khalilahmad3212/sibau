import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOperator, Repository } from 'typeorm';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { GetEmployeetDto } from './dto/get-employee-.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';
import { GetPhdsDto } from './dto/get-phds-dto';
import { Department } from 'src/department/entities/department.entity';
import { UpdateEmployeeProfileDto } from './dto/update-employee-profile.dto';

@Injectable()
export class EmployeeService {
  findByDepartmentId(departmentId: number): Promise<Employee[]> {
    const employees = this.employeeRepository
      .createQueryBuilder()
      .select('employee')
      .from(Employee, 'employee')
      .where('employee.DepartmentId = :departmentId', { departmentId })
      .getMany();
    return employees;
  }

  findByEmployeeID(id: string) {
    return this.employeeRepository.findOne({
      where: { EmployeeId: id },
    });
  }

  findByCMS(cms: string): Promise<Employee> {
    return this.employeeRepository.findOne({
      where: { CMS_id: cms },
    });
  }

  findByEmployeeId(employeeId: string): Promise<Employee> {
    try {
      const found = this.employeeRepository.findOne({
        where: { EmployeeId: employeeId },
      });
      if (found) return found;
      else throw new NotFoundException('Not Found');
    } catch (e) {
      throw new Error(e);
    }
  }

  findPhds(getPhdsDto: GetPhdsDto): Promise<Employee[]> {
    return this.employeeRepository.find({
      where: { Phd: getPhdsDto.phd || true },
    });
  }
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) { }

  async create(dto: CreateEmployeeDto, departmentFound: Department) {
    const employee = new Employee();

    employee.FirstName = dto.FirstName;
    employee.LastName = dto.LastName;
    employee.Designation = dto.Designation;
    employee.Email = dto.Email;
    employee.CMS_id = dto.CMS_id;
    employee.OfficeExtension = dto.OfficeExtension;
    employee.OfficeAddress = dto.OfficeAddress;
    employee.Type = dto.Type;
    employee.Skills = dto.Skills;
    employee.Biography = dto.Biography;
    employee.Image = dto.Image;
    employee.Phd = dto?.Phd || false;
    employee.CurrentStatus = dto.CurrentStatus;
    employee.Message = dto.Message;
    employee.BPS = dto.BPS;
    employee.EmployeeId = dto.EmployeeId;

    // Assuming that the Department entity already exists in the database

    employee.Department = departmentFound;

    return await this.employeeRepository.save(employee);
  }

  async findAll(): Promise<Employee[]> {
    // const options: FindManyOptions<Employee> = {};

    // if (getEmployeeDto.Filter) {
    //   options.where = getEmployeeDto.Filter;
    // }

    // if (getEmployeeDto.Limit) {
    //   options.take = Number(getEmployeeDto.Limit);
    // }

    // if (getEmployeeDto.Page) {
    //   options.skip = getEmployeeDto.Limit || 10 * (getEmployeeDto.Page - 1);
    // }

    return this.employeeRepository.find({ relations: ['Department'] });
  }

  async findOne(id: number) {
    return await this.employeeRepository.findOne({
      where: { Id: id },
      relations: ['Department']
    });
  }

  async update(
    id: number,
    updateEmployeeDto: UpdateEmployeeDto,
    departmentFound: Department,
  ) {
    const employee = await this.findOne(id);

    if (!employee) {
      throw new NotFoundException(`Employee with ID ${id} not found.`);
    }

    employee.FirstName = updateEmployeeDto.FirstName;
    employee.LastName = updateEmployeeDto.LastName;
    employee.Designation = updateEmployeeDto.Designation;
    employee.Email = updateEmployeeDto.Email;
    employee.CMS_id = updateEmployeeDto.CMS_id;
    employee.OfficeExtension = updateEmployeeDto.OfficeExtension;
    employee.OfficeAddress = updateEmployeeDto.OfficeAddress;
    employee.Type = updateEmployeeDto.Type;
    employee.Skills = updateEmployeeDto.Skills;
    employee.Biography = updateEmployeeDto.Biography;
    employee.Image = updateEmployeeDto.Image;
    employee.Phd = updateEmployeeDto.Phd;
    employee.CurrentStatus = updateEmployeeDto.CurrentStatus;
    employee.Message = updateEmployeeDto.Message;
    employee.BPS = updateEmployeeDto.BPS;
    employee.EmployeeId = updateEmployeeDto.EmployeeId;

    employee.Department = departmentFound;

    return await this.employeeRepository.save(employee);
  }

  // async changePassword(
  //   id: number,
  //   changePassword: any
  // ) {
  //   const employee = await this.findOne(id);

  //   if (!employee) {
  //     throw new NotFoundException(`Employee with ID ${id} not found.`);
  //   }

  //   employee.Password = changePassword.newPassword
  //   return await this.employeeRepository.save(employee);
  // }

  async updateProfile(
    id: number,
    updateEmployeeDto: UpdateEmployeeProfileDto
  ) {
    const employee = await this.findOne(id);

    if (!employee) {
      throw new NotFoundException(`Employee with ID ${id} not found.`);
    }

    console.log('update: ', updateEmployeeDto);

    employee.FirstName = updateEmployeeDto.FirstName;
    employee.LastName = updateEmployeeDto.LastName;
    employee.Email = updateEmployeeDto.Email;
    employee.Skills = updateEmployeeDto.Skills;
    employee.Image = updateEmployeeDto.Image;
    employee.Message = updateEmployeeDto.Message;
    employee.Biography = updateEmployeeDto.Biography;
    employee.Phd = updateEmployeeDto.Phd;

    return await this.employeeRepository.save(employee);
  }
  async remove(id: number) {
    return await this.employeeRepository.delete(id);
  }
}
