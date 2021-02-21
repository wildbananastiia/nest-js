import { Body, Controller, Get, Post } from '@nestjs/common';
import { EmployeeDto } from '../dto/employee.dto';
import { EmployeeService } from '../service/employee.service';

@Controller('employees')
export class EmployeeController {

  constructor(private employeeService: EmployeeService) { }

  @Get()
  async findAll(): Promise<EmployeeDto[]> {
    return this.employeeService.findAll();
  }

  @Post()
  async create(@Body() employee: EmployeeDto): Promise<EmployeeDto> {
    return this.employeeService.create(employee);
  }
}
