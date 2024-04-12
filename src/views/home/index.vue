<template>
  <div h-screen s-screen flex>
    <div w-56>
      <indexMenu />
    </div>
    <div flex-1 p="x-8">
      <div h-18 border="~ solid #e5e5f1 b-1 l-0 r-0 t-0"></div>
      <indexList />
    </div>
  </div>
</template>

<script setup>
import indexMenu from './indexMenu.vue'
import indexList from './indexList.vue'
</script>

<style>

</style>
