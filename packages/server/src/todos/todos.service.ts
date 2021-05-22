import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { Todo } from './todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @Inject('TODOS_REPOSITORY')
    private todosRepository: typeof Todo,
  ) {}

  async getTodos(): Promise<Todo[]> {
    return this.todosRepository.findAll<Todo>({ order: ['id'] });
  }
  async addTodo(todo: Todo): Promise<Todo> {
    return this.todosRepository.create<Todo>(todo);
  }
  async updateTodo(id: number, todo: Todo): Promise<Todo> {
    const target = await this.todosRepository.findOne({ where: { id } });
    if (target) {
      target.contents = todo.contents;
      return target.save();
    }
    throw new NotFoundException();
  }
  async deleteTodo(id: number): Promise<number> {
    return this.todosRepository.destroy({ where: { id } });
  }
}
