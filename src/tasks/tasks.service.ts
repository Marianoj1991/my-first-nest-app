import { Injectable } from '@nestjs/common';
import { createTaskDto } from './dto/create-task.dto';


@Injectable()
export class TasksService {
  private tasks: createTaskDto[] = [];

  getAllTasks(limit: number | any): createTaskDto[] {
    console.log(limit)
    if (limit != 0) {
      console.log('Entré')
      const tasksSlice = this.tasks.slice(0, limit);
      return tasksSlice
    }
    console.log('No Entré')
    return this.tasks;
  }

  getTask(id: number) {
    const task = this.tasks.find(task => task.id === id)
    return [task]
  }

  postTask(task: createTaskDto) {
    this.tasks.push({
      ...task,
      id: this.tasks.length + 1
    });
  }

  putTask() {
    return 'Actualizando Usuario';
  }

  deleteTask() {
    return 'Eliminando Usuario';
  }
}

