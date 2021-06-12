<script lang="ts" context="module">
  export async function load({ page, fetch, session, context }) {
    const gamestateResponse = await fetch('api/gamestate');

    if (!gamestateResponse.ok) {
      return {
        status: 302,
        redirect: '/',
      };
    }
    const [gamestate] = await gamestateResponse.json();

    return {
      props: {
        gamestate: gamestate.state,
        gameID: gamestate.id,
      },
    };
  }
</script>

<script lang="ts">
  import Table from '$lib/components/Table.svelte';
  import PlayerCard from '$lib/components/PlayerCard.svelte';
  import Strip from '$lib/components/Strip.svelte';
  import PushButton from '$lib/components/PushButton.svelte';
  import VerticalTabs from '$lib/components/VerticalTabs.svelte';
  import CurvedList from '$lib/components/CurvedList.svelte';

  export let gamestate;
  export let gameID;

  const tabs = [
    {
      id: 'batsmen',
      title: 'Batsmen',
      img:
        'https://raw.githubusercontent.com/hackerspark/images/main/cricket-bat.png',
    },
    {
      id: 'bowler',
      title: 'Bowler',
      img:
        'https://raw.githubusercontent.com/hackerspark/images/main/cricket-ball.png',
    },
    {
      id: 'wicketkeeper',
      title: 'Wicket Keeper',
      img:
        'https://raw.githubusercontent.com/hackerspark/images/main/wicket-keeper.png',
    },
    {
      id: 'allrounder',
      title: 'All Rounder',
      img:
        'https://raw.githubusercontent.com/hackerspark/images/main/all-rounder.png',
    },
  ];

  $: batsmenSold = gamestate.counts.batsmenSold;
  $: batsmenTotal = gamestate.counts.batsmenTotal;

  $: bowlerSold = gamestate.counts.bowlerSold;
  $: bowlerTotal = gamestate.counts.bowlerTotal;

  $: wicketkeeperSold = gamestate.counts.wicketkeeperSold;
  $: wicketkeeperTotal = gamestate.counts.wicketkeeperTotal;

  $: allrounderSold = gamestate.counts.allrounderSold;
  $: allrounderTotal = gamestate.counts.allrounderTotal;

  let players;
  let selectedTab;
  let selectedPlayer;

  function onTabSelect({ detail: { selectedTab: id } }) {
    selectedTab = id;
    players = gamestate.unsoldPlayers[id];
  }

  function onPlayerSelect({ detail: { selectedPlayer: id } }) {
    selectedPlayer = gamestate.unsoldPlayers[selectedTab].find(
      (player) => player.Id === id
    );
  }
</script>

<div class="flex flex-wrap items-start justify-between">
  <div class="flex flex-col">
    <div class="inline-flex">
      <CurvedList {players} on:select={onPlayerSelect} />
      <VerticalTabs {tabs} on:select={onTabSelect} />
    </div>
    <Strip>
      <svelte:fragment>
        <span>Batsmen</span>
        <span>
          {batsmenSold}/{batsmenTotal}
        </span>
      </svelte:fragment>
    </Strip>
    <Strip>
      <svelte:fragment>
        <span>Bowler</span>
        <span>
          {bowlerSold}/{bowlerTotal}
        </span>
      </svelte:fragment>
    </Strip>
    <Strip>
      <svelte:fragment>
        <span>Wicket Keeper</span>
        <span>
          {wicketkeeperSold}/{wicketkeeperTotal}
        </span>
      </svelte:fragment>
    </Strip>
    <Strip>
      <svelte:fragment>
        <span>All Rounder</span>
        <span>
          {allrounderSold}/{allrounderTotal}
        </span>
      </svelte:fragment>
    </Strip>
  </div>
  <div>
    {#if selectedPlayer}
      <PlayerCard data={selectedPlayer} />
    {/if}
    <!-- <Table data={bidData} /> -->
  </div>
  <div>
    <!-- <Table /> -->
  </div>
  <div><PushButton>Sold!</PushButton></div>
</div>
