<script>
  import Card from "./Card.svelte";
  import Button from "./Button.svelte";

  import TodoStore from "./../store/TodoStore";
  let isVisible = false;
  let title = "";
  let todoDate = new Date();

  function handleSubmit() {
    const newTodo = {
      id: uuidv4(),
      title: title,
      todoDate: todoDate,
    };

    TodoStore.update((currentTodo) => {
      return [newTodo, ...currentTodo];
    });

    title = "";
    // todoDate = "";
  }
</script>

<Card>
  <header>Welcome to Svlt-kit Todo App</header>

  <form action="">
    <div class="input-group">
      <Button type="button" bind:isVisible>Add A todo</Button>
      <!-- <Button type="submit" isDisplayed={bntDisplayed} >+ Todo</Button> -->
    </div>
    {#if isVisible}
      <input type="text" placeholder="Add a todo" class="input" />
      <input type="date" />
      <Button type="submit" on:click={handleSubmit}>+ Todo</Button>
    {/if}
  </form>
</Card>

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
</style>
