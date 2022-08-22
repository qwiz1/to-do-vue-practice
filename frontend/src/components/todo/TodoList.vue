<template>
  <ul>
    <li v-for="(todo, index) in props.todos" :key="todo._id">
      <div class="task-wrapper" v-if="todo.done === filterIsDone">
        <input
          :id="index + '_task-checkbox'"
          class="task-checkbox"
          :class="{ checked: todo.done }"
          type="checkbox"
          v-model="todo.done"
          @click="$emit('update', todo._id, { done: !todo.done })"
        />
        <label :for="index + '_task-checkbox'">
          <fa-icons
            color="#4EA2FF"
            size="lg"
            icon="fa-circle-check"
            class="check-icon"
            :class="{ checked: todo.done }"
          />
        </label>
        <input
          :disabled="todo.done"
          @focusout="
            $emit('update', todo._id, { description: todo.description })
          "
          type="text"
          class="input-update"
          :class="{ done: todo.done }"
          v-model="todo.description"
        />
        <button @click="$emit('remove', todo._id)" class="remove-btn">
          <fa-icons size="xl" icon="fa-xmark" />
        </button>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { Todo } from '../common/types/todo.type';

const props = defineProps<{
  todos: Todo[];
  filterIsDone: boolean;
}>();
</script>

<style scoped lang="scss">
ul {
  list-style: none;

  li {
    margin-bottom: 10px;

    &:first-child {
      margin-top: 20px;
    }

    &:last-child {
      margin-bottom: 20px;
    }

    .task-wrapper {
      display: flex;
      position: relative;
    }

    input,
    button {
      border: none;
      outline: none;
      background: none;
    }

    .task-checkbox {
      visibility: hidden;
      position: absolute;
      top: 20px;
      left: 20px;
      width: 20px;
      height: 20px;
    }

    label {
      position: absolute;
      top: 20px;
      left: 20px;
      width: 20px;
      height: 20px;
      border: 2px solid #67697a;
      border-radius: 50%;
      cursor: pointer;

      .check-icon {
        visibility: hidden;

        &.checked {
          position: absolute;
          top: -2px;
          left: -2px;
          visibility: visible;
        }
      }
    }

    .remove-btn {
      position: absolute;
      top: 20px;
      right: 20px;
      width: 20px;
      height: 20px;
      color: #9799ad;

      &:hover {
        color: #ffffff;
      }
    }

    .input-update {
      background: #383a4c;
      border-radius: 10px;
      width: 100%;
      height: 60px;
      color: white;
      font-weight: 500;
      font-size: 16px;
      padding: 20px 20px 20px 60px;
    }

    .input-update.done {
      text-decoration: line-through;
      color: #9799ad;
    }
  }
}
</style>
