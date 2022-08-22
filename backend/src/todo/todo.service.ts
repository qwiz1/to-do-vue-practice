import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo, TodoDocument } from './schemas/todo.schema';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(Todo.name) private readonly todoModel: Model<TodoDocument>,
  ) {}

  async create(createTodoDto: CreateTodoDto): Promise<Todo> {
    const createdTodo = await this.todoModel.create(createTodoDto);
    return createdTodo;
  }

  async getAll(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }

  async update(id: string, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    const existingTodo = await this.todoModel.findById(id);
    if (!existingTodo) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    existingTodo.description =
      updateTodoDto.description ?? existingTodo.description;
    existingTodo.done = updateTodoDto.done ?? existingTodo.done;
    existingTodo.updated_at = new Date();
    return existingTodo.save();
  }

  async delete(id: string) {
    return this.todoModel.findByIdAndRemove(id).exec();
  }
}
