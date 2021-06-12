<div class="trapezoid">
  <div class="flex justify-center gap-2 relative top-0 text-gray-400">
    <slot />
  </div>
</div>

<!-- https://tailwindcomponents.com/component/curvy-buttons -->
<style>
  .trapezoid {
    @apply h-0;
    @apply text-center;
    @apply my-2;
    border-bottom: 3ch solid #6262ff;
    border-left: 0ch solid transparent;
    border-right: 2ch solid transparent;
  }
</style>
