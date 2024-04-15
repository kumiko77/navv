<template>
  <div grid="~ gap-4 cols-5" py-4>
    <div
      v-for="item in filterMock"
      :key="item.name"
      h="20"
      flex="~"
      transition-all
      shadow="item hover:item-hover"
      cursor-pointer
      @click="onMenuClick(item)"
    >
      <div h-full w-25 flex="~ items-center justify-center" bg="#f5f5fa">
        <img max-w="50%" :src="item.image" />
      </div>
      <div p-2 text-xl>{{item.name}}</div>
    </div>
  </div>
</template>

<script setup>
import mock from '@/mock/card'
import { computed } from 'vue'

const props = defineProps({
  filterName: {
    type: String,
    default: null
  }
})

const filterMock = computed(() => {
  if(props.filterName === '全部') {
    return mock
  }
  if (props.filterName) {
    return mock.filter(item => item.type === props.filterName)
  }
})

const onMenuClick = e => {
  window.open(e.url, '_blank')
}
</script>

<style>
</style>
