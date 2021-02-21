import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeDto } from 'src/employee/dto/employee.dto';
import { Repository } from 'typeorm';
import { EmployeeEntity } from '../entity/employee.entity';

@Injectable()
export class EmployeeService {
    constructor(
        @InjectRepository(EmployeeEntity)
        private employeeRepository: Repository<EmployeeEntity>
    ) { }

    create(employee: EmployeeDto): Promise<EmployeeDto> {
        return this.employeeRepository.save(employee);
    }

    findAll(): Promise<EmployeeDto[]> {
        return this.employeeRepository.find();
    }
}
