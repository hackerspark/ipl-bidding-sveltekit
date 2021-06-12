<script>
  import { createEventDispatcher } from 'svelte';

  export let players = [];

  let dispatch = createEventDispatcher();

  let selectedPlayer;

  const handleClick = (Id) => () => (
    (selectedPlayer = Id), dispatch('select', { selectedPlayer: Id })
  );
</script>

<div class="inline-flex flex-col h-80 w-56 custom-scrollbar">
  {#each players as player, index}
    {#if index === 0}
      <div
        class="bg-green-400 p-2 cursor-pointer text-black rounded-tl-lg hover:bg-green-300 transition duration-500 ease-in-out"
        class:selected={selectedPlayer === player.Id}
        on:click={handleClick(player.Id)}
      >
        {player.Name}
      </div>
    {:else if index === players.length - 1}
      <div
        class="bg-green-400 p-2 cursor-pointer text-black rounded-bl-lg hover:bg-green-300 transition duration-500 ease-in-out"
        class:selected={selectedPlayer === player.Id}
        on:click={handleClick(player.Id)}
      >
        {player.Name}
      </div>
    {:else}
      <div
        class="bg-green-400 p-2 cursor-pointer text-black hover:bg-green-300 transition duration-500 ease-in-out"
        class:selected={selectedPlayer === player.Id}
        on:click={handleClick(player.Id)}
      >
        {player.Name}
      </div>
    {/if}
  {/each}
</div>

<style>
  .custom-scrollbar {
    display: block;
    overflow-y: auto;
  }
  .custom-scrollbar::-webkit-scrollbar {
    width: 5px;
    background-color: white;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: grey;
  }
  .custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: grey white;
  }
  .selected {
    @apply bg-green-300;
  }
</style>
