<script>
  import { v4 as uuidv4 } from "uuid";
  import Button from "./Button.svelte";

  import { TodoStore } from "../TodoStore";

  let isVisible = false;
  let title = "";
  let date = " ";

  function handleSubmit() {
    const newTodo = {
      id: uuidv4(),
      title: title,
      date: date,
    };

    TodoStore.update((currentTodo) => {
      return [newTodo, ...currentTodo];
    });

    title = "";
    date = "";
  }
</script>

<div class="feedback_form">
  <header>Welcome to Svlt-kit Todo App</header>
  <form on:submit|preventDefault={handleSubmit}>
    <div class="input-group">
      <Button type="button" bind:isVisible>Add A todo</Button>
    </div>
    {#if isVisible}
      <input
        type="text"
        placeholder="Add a todo"
        class="input"
        bind:value={title}
      />
      <input type="date" bind:value={date} />
      <Button type="submit" on:click={handleSubmit}>+ Todo</Button>
    {/if}
  </form>
</div>

<style>
  header {
    font-size: 22px;
    font-weight: 600;
    text-align: center;
  }

  .input-group {
    display: flex;
    flex-direction: row;
    padding: 8px 10px;
    border-radius: 8px;
    margin-top: 15px;
  }

  input {
    flex-grow: 2;
    font-size: 16px;
    display: block;
    width: 20em;
    margin-bottom: 2em;
  }

  input:focus {
    outline: none;
  }
  .feedback_form {
    margin-top: 5em;
    margin-left: 3em;
  }
</style>
