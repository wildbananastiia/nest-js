import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EmployeeEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    name: string;

    @Column({ name: 'last_name', nullable: false })
    lastName: string;
}
