<script>
  import Card from "./Card.svelte";
  export let todo;

  function handleDelete(todoId) {
    TodoStore.update((currentTodo) => {
      return currentTodo.filter((todo) => todo.id != todoId);
    });
  }
</script>

<Card class="item">
  <div class="num-display">
    {todo.date}
  </div>
  <button class="close" on:click={() => handleDelete(todo.id)}>X</button>
  <p class="text-display">
    {todo.title}
  </p>
</Card>

<style>
  .close {
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
    background: none;
    border: none;
    color: #fff;
  }
</style>
