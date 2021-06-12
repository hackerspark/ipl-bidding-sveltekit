<button
  class="button p-3 text-center cursor-pointer outline-none text-white bg-green-600 border-none rounded-3xl active:outline-none hover:bg-green-500 hover:translate-y-1 active:bg-green-700"
  ><slot /></button
>

<style>
  .button {
    box-shadow: 0 9px #999;
    outline: none;
  }

  .button:active {
    box-shadow: 0 5px #666;
    transform: translateY(5px);
    outline: none;
  }
</style>
