import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';
import { string } from 'yargs';

@Entity()
export class Student {
    @ObjectIdColumn()
    _id: string;

    @PrimaryColumn()
    id: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;
}