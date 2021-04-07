<script lang="ts">
  export let title = '';
  export let links = [];
</script>

<div class="flex flex-wrap sticky top-0">
  <div class="w-full">
    <nav
      class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-black"
    >
      <div
        class="container px-4 mx-auto flex flex-wrap items-center justify-between"
      >
        <div
          class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start"
        >
          <a
            class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white hover:opacity-75"
            href="/"
            sveltekit:prefetch
          >
            {title}
          </a>
        </div>
        <div class="flex lg:flex-grow items-center">
          <ul class="flex flex-col lg:flex-row list-none ml-auto">
            {#each links as link}
              <li class="nav-item">
                {#if link.prefetch}
                  <a
                    class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href={link.href}
                    sveltekit:prefetch
                  >
                    {link.text}
                  </a>
                {:else}
                  <a
                    class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href={link.href}
                  >
                    {link.text}
                  </a>
                {/if}
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </nav>
  </div>
</div>
