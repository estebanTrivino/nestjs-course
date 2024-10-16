import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateTaskDto, Task } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";



@Injectable()
export class TasksService {

    private tasks: Task[] = [];

    getTasks(): Task[] {
        return this.tasks;
    }

    getTask(id: number): any {
        const taskFound = this.tasks.find(task => task.id === id);
        if(!taskFound) {
            return new NotFoundException('Task not found');
        }
        return taskFound;
    }

    createTasks(task: CreateTaskDto) {
        this.tasks.push({
            id: this.tasks.length+1,
            ...task
        });
        return task
    }

    updateTasks(task: UpdateTaskDto) {
        console.log(task);
        return 'Actualizando Tarea'
    }

    deleteTasks() {
        return 'Eliminando Tarea'
    }

    updateTaskStatus() {
        return 'Actualizando estado de una tarea'
    }
}