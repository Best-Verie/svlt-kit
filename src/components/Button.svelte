<script>
  export let style = "primary";
  export let type = "button";
  export let isVisible;
  export let id;
  export function handleClick() {
    console.log(isVisible);
    isVisible = isVisible == true ? false : true;
  }

  //   export function changeButtonVisibility(){}
</script>

<button {type} {id} class={style} on:click={handleClick}>
  <slot />
</button>

<style>
  button {
    color: #fff;
    border: 0;
    /* border-radius: 8px; */
    color: #fff;
    width: 20em;
    height: 40px;
    cursor: pointer;
  }

  .primary {
    background-color: #202142;
  }

  .secondary {
    background: #ff6a95;
  }

  button:hover {
    transform: scale(0.98);
    opacity: 0.9;
  }

  button:disabled {
    background-color: #cccccc;
    color: #333;
    cursor: auto;
  }

  button:disabled:hover {
    transform: scale(1);
    opacity: 1;
  }
</style>
