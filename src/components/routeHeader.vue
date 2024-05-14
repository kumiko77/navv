<template>
  <div relative>
    <div absolute transition-all rounded h-8 top="50%" translate="y--2/4" bg="#ebebeb"
      :style="{ width: `${sliderWidth}px`, left: `${sliderLeft}px` }" />
    <div flex="~ items-center" space="x-2" px-4>
      <div rounded z-3 v-for="(item, index) in routeList" :key="index" @mouseenter="onMouseEnter"
        @mouseleave="onMouseLeave">
        <router-link no-underline :to="item.path">
          <span py-3 px-3 inline-block text="sm #666 hover:#171717">{{ item.name }}</span>
          <div v-if="item.path === currentRoutePath" h="2px" bg="#000" w-full relative bottom="-1px" rounded />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const sliderWidth = ref(0)
const sliderLeft = ref(0)
const routeList = [
  {
    name: '首页',
    path: '/base/nav'
  },
  {
    name: '项目',
    path: '/base/project'
  }
]

const router = useRouter()
const onMouseEnter = e => {
  sliderWidth.value = e.target.offsetWidth
  sliderLeft.value = e.target.offsetLeft
}

const onMouseLeave = () => {
  sliderWidth.value = 0
  sliderLeft.value = 0
}

const currentRoutePath = computed(() => router.currentRoute.value.fullPath)

</script>

<style></style>
