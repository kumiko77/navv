<template>
  <div h-screen>
    <div h-14 bg-pink-200></div>
    <div absolute top-14 left-0 right-0 bottom-0 bg-pink-100 flex="~">
      <div w-90 h-full bg-pink-300 shrink="0">
        <sideMenu />
      </div>
      <div flex="1" h-full overflow-auto bg-blue>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import sideMenu from "./modules/sideMenu.vue";
</script>
