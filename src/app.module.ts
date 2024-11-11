import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PruebasModule } from './pruebas/pruebas.module';

@Module({
  imports: [TasksModule, ProjectsModule, AuthModule, UsersModule, PruebasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
