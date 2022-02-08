<script>
  import FeedBackForm from "./FeedBackForm.svelte";
  import TodoItem from "./TodoItem.svelte";
  import TodoList from "./TodoList.svelte";
</script>

<div class="grid-container">
  <div class="left_item">
    <FeedBackForm />
  </div>
  <div class="right_item">
    <TodoList />
  </div>
</div>

<style>
  .left_item {
    grid-area: left_item;
    margin-right: 3em;
  }
  .right_item {
    grid-area: right_item;
  }
  .grid-container {
    display: grid;
    grid-gap: 10px;
    grid-template-areas: "left_item left_item right_item right_item right_item right_item";
  }
</style>
