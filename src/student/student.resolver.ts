import { Resolver, Mutation, Args , Query } from '@nestjs/graphql';
import { StudentService } from './student.service';
import { StudentType } from './student.type';
import { CreateStudentInput } from './create-students.input';

@Resolver(of => StudentType)
export class StudentResolver {
    constructor(
        private studentService: StudentService
    ){}

    @Query(returns => StudentType)
    async student(
        @Args('id') id: string,
    ) {
        return this.studentService.getstudent(id)
    }

    @Query(returns => [StudentType])
    async students() {
        return this.studentService.getStudents();
    }

    @Mutation(returns => StudentType)
    async createStudent(
        @Args('createStudentInput') createStudentInput: CreateStudentInput 
    ) {
        return this.studentService.createStudent(createStudentInput);
    }
}
