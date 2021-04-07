<script lang="ts">
  import '../global.css';
  import Header from '$lib/components/Header.svelte';
  import { navigating, session } from '$app/stores';

  const title = 'IPL Bidding';
</script>

<Header {title} />
<div
  class="text-gray-400 bg-gray-900 body-font h-screen container px-5 py-5 mx-auto"
>
  {#if $navigating}
    <div class="h-screen flex justify-center items-center">
      <div
        class="spinner-border-top animate-spin border-top ease-linear rounded-full border-8 border-t-8 border-gray-500 h-16 w-16"
      />
    </div>
  {:else}
    <slot />
  {/if}
</div>

<style lang="scss">
  .body-background {
    background: url(https://i2.wp.com/background4free.com/download/blue_black_electric_blue_633655579.jpg?q=100);
  }

  .spinner-border-top {
    border-top-color: #3498db;
  }
</style>
