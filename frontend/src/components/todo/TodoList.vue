
<template>
  <main>
    <h1>To-do list</h1>
    <form class="add-todo">
      <input class="input-description">
      <button class="btn-add">Add Todo</button>
    </form>
    <ul>
      <li>
        <div class="round">
          <input type="checkbox" />
        </div>
        <input type="text" />
        <button class="cross-stand-alone">
          <fa icon="fa-xmark" />
        </button>
      </li>
    </ul>
    <fa color="#4EA2FF" size="lg" icon="fa-circle-check" />
  </main>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;

  max-width: 1080px;
  max-height: 720px;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {

    input,
    button {
      border: none;
      outline: none;
    }

  }

  ul {
    list-style: none;

    li {
      display: flex;

      input,
      button {
        border: none;
        outline: none;
      }
    }
  }
}
</style>






