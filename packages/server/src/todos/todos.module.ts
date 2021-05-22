import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { TodosController } from './todos.controller';
import { todosProviders } from './todos.providers';
import { TodosService } from './todos.service';

@Module({
  imports: [DatabaseModule],
  controllers: [TodosController],
  providers: [TodosService, ...todosProviders],
})
export class TodosModule {}
