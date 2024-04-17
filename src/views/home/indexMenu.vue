<template>
  <div h-full w-full p="x-3" bg="#f5f5fa" border="~ r-1 solid #e5e5f1">
    <div h="18" m="b-4" border="~ solid #e5e5f1 b-1 l-0 r-0 t-0"></div>
    <div></div>
    <div>
      <ul space-y-2>
        <li
          h="10"
          p="x-2"
          transition-all
          cursor-pointer
          flex="~ items-center"
          text="sm"
          font="bold"
          shadow="item hover:item-hover"
          :class="itemClass(!current)"
          border="rounded"
          @click="onMenuClick()"
        >
          <div
            i-carbon-checkbox-indeterminate
            text="xl"
          />
          <span m="l-3">全部</span>
        </li>
        <li flex="~ items-center" h="10" p="l-2" m="l-2" text="sm">
          <span>分类</span>
        </li>
        <li
          h="10"
          p="x-2"
          transition-all
          cursor-pointer
          flex="~ items-center"
          text="sm"
          border="rounded"
          shadow="item hover:item-hover"
           v-for="item in menuList"
          :key="item.name"
          :class="itemClass(current === item.id)"
          @click="onMenuClick(item.id)"
        >
          <div i-carbon-home text="xl"/>
          <span m="l-3">{{ item.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const current = ref(null);
const menuList = ref([]);

const emit = defineEmits(['change'])


const itemClass = (isActive) => {
  return isActive
    ? ["text-#003DFF", "bg-white", "shadow", "hover:border-transparent"]
    : ["text-#5a5e9a"];
};

const onMenuClick = id => {
  current.value = id;
  emit('change', id)
};

import { getCategoryList } from '@/api/card'

const initCategory = () => {
  getCategoryList().then(res => {
    menuList.value = res.data
  })
}

onMounted(() => {
  initCategory()
});

</script>

<style>
</style>
