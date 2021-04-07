<script lang="ts" context="module">
  export async function load({ page, fetch, session, context }) {
    const gameStatePromise = fetch('api/gamestate');
    const teamsPromise = fetch('api/teams');

    const [
      { value: gameStateResponse },
      { value: teamsResponse },
    ] = await Promise.allSettled([gameStatePromise, teamsPromise]);
    if (!gameStateResponse.ok || !teamsResponse.ok) {
      return {
        status: 302,
        redirect: '/',
      };
    }
    const gameState = await gameStateResponse.json();
    const teams = await teamsResponse.json();

    return {
      props: {
        gameState,
        teams,
      },
    };
  }
</script>

<script>
  export let gameState;
  export let teams;

  $: console.log({ gameState, teams });
</script>
