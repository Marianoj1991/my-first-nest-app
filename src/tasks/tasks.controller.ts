import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { createTaskDto } from './dto/create-task.dto';


@Controller('tasks')
export class TasksController {

  // ESTA ES LA VERSION MAS LARGA
  // private taskServices: TasksService;

  // constructor(taskServices: TasksService) {
  //   this.taskServices = taskServices;
  // }

  // VERSION CORTA
  constructor(private taskServices: TasksService) {}


  @Get()
  getAllUsers(@Query() params: Record<string, any>) {
    const limit = params?.limit
    return this.taskServices.getAllTasks(limit);
  }

  @Get('/:id')
  getUser(@Param('id', ParseIntPipe) param: number) {
    return this.taskServices.getTask(param);
  }

  @Post('/')
  postUser(@Body() body: createTaskDto): string {
    this.taskServices.postTask(body);
    return 'Task added succesfully';
  }

  @Put('/:id')
  putUser() {
    return this.taskServices.putTask();
  }

  @Delete('/:id')
  delteUser() {
    return this.taskServices.deleteTask();
  }
}
