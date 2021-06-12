<script>
  import { fade } from 'svelte/transition';
  export let data = {};

  const statKeys = ['Mat', 'Runs', '50', '100', 'Ave', 'SR', 'HS'];

  const statKeyLabels = {
    Mat: 'Matches',
    Runs: 'Runs',
    '50': '50s',
    '100': '100s',
    Ave: 'Average',
    SR: 'Strike Rate',
    HS: 'Highest Score',
  };

  const roleIconMapping = {
    batsman: 'http://localhost:4000/cricket-bat.png',
    bowler: '',
    wicketkeeper: 'http://localhost:4000/wicket-keeper.png',
    allrounder: '',
  };
</script>

<div class="flex flex-col items-stretch rounded w-52">
  <div class="w-full">
    <img src={data.Img} alt={data.Name} />
  </div>
  <div class="text-center text-lg font-semibold">
    <span>{data.Name}</span>
  </div>
  <div class="flex flex-col items-stretch">
    {#each statKeys as statKey}
      <div
        class="flex justify-between border rounded m-0.5 bg-green-400 text-black border border-white"
      >
        <span class="px-2">{statKeyLabels[statKey]}</span>
        <span class="px-2">{data[statKey]}</span>
      </div>
    {/each}
  </div>
</div>
