<template>
  <div grid="~ gap-4 cols-5" py-4>
    <div
      v-for="item in filterCardList"
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
import { computed } from 'vue'

const props = defineProps({
  filterId: {
    type: String,
    default: null
  }
})

const filterCardList = computed(() => {
  if(!props.filterId) {
    return cardList.value
  }
  if (props.filterId) {
    return cardList.value.filter(item => item.categoryId === props.filterId)
  }
})

const onMenuClick = e => {
  window.open(e.url, '_blank')
}

import { getNavList } from '@/api/card'

const cardList = ref([])

const initCategory = () => {
  getNavList().then(res => {
    cardList.value = res.data
  })
}

onMounted(() => {
  initCategory()
});
</script>

<style>
</style>
