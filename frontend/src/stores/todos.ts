import type { Todo } from '@/components/common/types/todo.type';
import type { UpdateTodo } from '@/components/common/types/update-todo.type';
import { TodoApi } from '@/services/todo-api.service';
import { defineStore } from 'pinia';

const todoApi = new TodoApi();
export const useTodoStore = defineStore({
  id: 'todos',
  state: () => ({
    newDescription: '' as string,
    todos: [] as Todo[],
  }),
  actions: {
    async getTodos(): Promise<void> {
      this.todos = await todoApi.getAll();
    },

    async createTodo(): Promise<void> {
      if (!this.newDescription) {
        return;
      }
      const newTodo = await todoApi.create({
        description: this.newDescription,
        done: false,
      });

      this.todos.unshift(newTodo);
      this.newDescription = '';
    },

    async updateTodo(id: string, payload: UpdateTodo): Promise<void> {
      const updatedTodo = await todoApi.update(id, payload);
    },

    async removeTodoById(id: string): Promise<void> {
      const deletedTodo = await todoApi.delete(id);
      this.todos = this.todos.filter((t) => t._id !== deletedTodo._id);
    },
  },
});
