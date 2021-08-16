import { Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { query } from 'express';
import { LessonType } from './lesson.type';

@Resolver(of => LessonType)
export class LessonResolver {
    @Query(returns => LessonType)
    lesson() {
        return {
            id: 'asdjo123',
            name: 'Physics Class',
            startDate: (new Date().toISOString()),
            endDate: (new Date().toISOString())
        };

    }
}