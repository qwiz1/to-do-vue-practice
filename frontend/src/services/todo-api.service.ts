import type { CreateTodo } from '@/components/common/types/create-todo.type';
import type { Todo } from '@/components/common/types/todo.type';
import type { UpdateTodo } from '@/components/common/types/update-todo.type';

class TodoApi {
  apiUrl: string;

  constructor() {
    this.apiUrl = '/todo';
  }

  public async getAll(): Promise<Todo[]> {
    const response = await fetch(this.apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  }

  public async create(todo: CreateTodo) {
    const response = await fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  }

  public async update(id: string, payload: UpdateTodo) {
    const response = await fetch(`${this.apiUrl}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  }

  public async delete(id: string) {
    const response = await fetch(`${this.apiUrl}/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  }
}

export { TodoApi };
