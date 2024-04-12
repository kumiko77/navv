<template>
  <div grid="~ gap-4 cols-5" p-4>
    <div
      v-for="item in mock"
      :key="item.name"
      h="20"
      flex="~"
      transition-all
      shadow="item hover:item-hover"
      cursor-pointer
    >
      <div h-full w-25 flex="~ items-center justify-center" bg="#f5f5fa">
        <img max-w="50%" :src="item.image" />
      </div>
      <div p-2>{{item.name}}</div>
    </div>
  </div>
</template>

<script setup>
import mock from '@/mock/card'
</script>

<style>
</style>
