<script>
  import { TodoStore } from "./../TodoStore";
  import TodoItem from "./TodoItem.svelte";
  import { fade, scale } from "svelte/transition";
</script>

<div>
  {#each $TodoStore as td (td.id)}
    <div in:scale out:fade={{ duration: 500 }}>
      <TodoItem todo={td} />
    </div>
  {/each}
</div>
