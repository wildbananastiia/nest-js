import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeController } from './controller/employee.controller';
import { EmployeeEntity } from './entity/employee.entity';
import { EmployeeService } from './service/employee.service';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeEntity])],
  controllers: [EmployeeController],
  providers: [EmployeeService]
})
export class EmployeeModule { }
