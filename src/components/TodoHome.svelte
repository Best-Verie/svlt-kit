<script>
  import FeedBackForm from "./FeedBackForm.svelte";
  import TodoItem from "./TodoItem.svelte";
</script>

<div class="grid-container">
  <div class="left_item">
    <FeedBackForm />
  </div>
  <div class="right_item">
    <TodoItem />
  </div>
</div>

<style>
  .left-item {
    grid-area: left_item;
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
