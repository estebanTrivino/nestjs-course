import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { TasksService } from "./tasks.servise";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('tasks')
@Controller('/tasks')
export class TasksController {

    constructor(private taskService: TasksService) {}

    
    @Get('')
    @ApiOperation({summary: 'Get all tasks'})
    @ApiResponse({status: 200, description: 'Return all tasks.'})
    getAllTasks(@Query() query: any) {
        console.log(query);
    
        // Se busca en la base de datos
        // Hacer peticion a otro api
        // Se ejecuta la lógica
        return this.taskService.getTasks();
    }

    @Get('/:id')
    getTask(@Param('id') id: string) {
        console.log(id);
        return this.taskService.getTask(+id);
    }

    @Post()
    createTask(@Body() task: CreateTaskDto) {
        console.log(task);
        
        return this.taskService.createTasks(task);
    }

    @Put() 
    updateTask(@Body() task: UpdateTaskDto) {
        return this.taskService.updateTasks(task);
    }

    @Delete()
    deleteTask() {
        return this.taskService.deleteTasks();
    }

    @Patch()
    updateTaskStatus(){
        return this.taskService.updateTaskStatus();
    }
}