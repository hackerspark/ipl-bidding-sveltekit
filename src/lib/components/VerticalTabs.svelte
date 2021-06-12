<script>
  import { onMount, createEventDispatcher } from 'svelte';

  export let tabs = [];

  let dispatch = createEventDispatcher();

  let selectedTab;

  onMount(() => {
    if (Array.isArray(tabs) && tabs.length && tabs[0].value) {
      selectedTab = tabs[0].id;
    }
  });

  const handleClick = (id) => () => (
    (selectedTab = id),
    dispatch('select', {
      selectedTab: id,
    })
  );
</script>

<div
  class="inline-flex flex-col border border-solid border-black rounded-tr-lg rounded-br-lg border-l-0 w-12 h-1/3 my-10"
>
  {#each tabs as tab, index}
    {#if index === 0}
      <span
        class="bg-gray-200 p-2 cursor-pointer rounded-tr-lg ease-in-out hover:bg-gray-100"
        on:click={handleClick(tab.id)}
        class:selected={tab.id === selectedTab}
        ><img src={tab.img} alt={tab.id} /></span
      >
    {:else if index === tabs.length - 1}
      <span
        class="bg-gray-200 p-2 cursor-pointer rounded-br-lg ease-in-out hover:bg-gray-100"
        on:click={handleClick(tab.id)}
        class:selected={tab.id === selectedTab}
        ><img src={tab.img} alt={tab.id} /></span
      >
    {:else}
      <span
        class="bg-gray-200 p-2 cursor-pointer ease-in-out hover:bg-gray-100"
        on:click={handleClick(tab.id)}
        class:selected={tab.id === selectedTab}
        ><img src={tab.img} alt={tab.id} /></span
      >
    {/if}
  {/each}
</div>

<style>
  .selected {
    @apply bg-black;
  }
</style>
