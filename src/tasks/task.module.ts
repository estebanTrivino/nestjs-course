import { Module } from '@nestjs/common';
import { TasksController } from "./tasks.controller";
import { TasksService } from './tasks.servise';

@Module({
    controllers: [TasksController],
    providers: [TasksService]
})
export class TaskModule {

}