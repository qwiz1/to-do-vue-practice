<template>
  <main>
    <h1>To-do list</h1>
    <form class="form-add-todo" @submit.prevent="todosStore.createTodo">
      <button class="btn-add">
        <fa-icons size="2xl" icon="fa-solid fa-plus" />
      </button>
      <input
        class="input-create"
        placeholder="Add-task"
        v-model="todosStore.newDescription"
      />
    </form>

    <TodoList
      :todos="todosStore.todos"
      :filterIsDone="false"
      @update="todosStore.updateTodo"
      @remove="todosStore.removeTodoById"
    />
    <hr class="dividing-line" size="1px" color="#383A4C" />
    <div class="tag-completed" v-if="todosStore.todos.length">
      <fa-icons icon="fa-check" />
      <span>Completed</span>
    </div>
    <TodoList
      :todos="todosStore.todos"
      :filterIsDone="true"
      @update="todosStore.updateTodo"
      @remove="todosStore.removeTodoById"
    />
  </main>
</template>

<script setup lang="ts">
import TodoList from './TodoList.vue';
import { useTodoStore } from '@/stores/todos';

const todosStore = useTodoStore();
todosStore.getTodos();
</script>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;

  max-width: 800px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 106px 0 44px 0;

  .tag-completed {
    margin-top: 20px;
    width: 114px;
    height: 29px;
    background: #1e446e;
    color: #4ea2ff;
    border-radius: 4px;
    padding: 6px 8px;
    font-size: 14px;
    font-weight: 500;
    text-align: right;

    span {
      margin-left: 10px;
    }
  }
  h1 {
    text-align: center;
    color: #535568;
  }

  .form-add-todo {
    margin-top: 30px;
    position: relative;

    .input-create,
    .btn-add {
      border: none;
      outline: none;
      background: none;
    }

    .input-create {
      color: #ffffff;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;

      width: 100%;
      height: 60px;
      padding: 20px 20px 20px 60px;

      border: 1px solid #535568;
      border-radius: 10px;

      &:focus {
        background-color: #383a4c;
      }
    }

    .btn-add {
      display: inline;
      position: absolute;
      top: 17px;
      left: 20px;
      cursor: pointer;
      color: #7a7c8d;

      &:hover {
        color: #ffffff;
      }
    }
  }
}
</style>
