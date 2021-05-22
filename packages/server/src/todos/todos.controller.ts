import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Todo } from './todo.entity';
import { TodosService } from './todos.service';

@Controller('todos')
@ApiTags('todos')
export class TodosController {
  constructor(private readonly service: TodosService) {}

  @Get()
  @ApiOperation({ summary: 'TODO一覧取得', operationId: 'getTodos' })
  @ApiResponse({ status: 200, type: Todo, isArray: true })
  getTodos(): Promise<Todo[]> {
    return this.service.getTodos();
  }
  @Post()
  @ApiOperation({ summary: 'TODO追加', operationId: 'addTodo' })
  @ApiResponse({ status: 200, type: Todo })
  addTodo(@Body() body: Todo): Promise<Todo> {
    return this.service.addTodo(body);
  }
  @Put(':id')
  @ApiOperation({ summary: 'TODO編集', operationId: 'updateTodo' })
  @ApiResponse({ status: 200, type: Todo })
  updateTodo(@Param('id') id: number, @Body() body: Todo): Promise<Todo> {
    return this.service.updateTodo(id, body);
  }
  @Delete(':id')
  @ApiOperation({ summary: 'TODO削除', operationId: 'deleteTodo' })
  @ApiResponse({ status: 200, type: Number })
  deleteTodo(@Param('id') id: number): Promise<number> {
    return this.service.deleteTodo(id);
  }
}
