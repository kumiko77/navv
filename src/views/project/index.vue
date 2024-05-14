<template>
  <div>
    <div flex="1" ml-4 space="y-8">
      <div v-for="(item, index) in projectNavList" :key="index">
        <div text="xl" font="bold" my-2>{{ item.name }}</div>
        <div grid="~ gap-4 cols-6">
          <div v-for="(cItem, cIndex) in item.list" p-2 class="nav-item" transition-all relative cursor-pointer
            :key="cIndex" border="~ solid #e3e3e3 hover:#c7c7c7" shadow="hover:md" rounded @click="onNavClick(cItem)">
            <div flex="~ items-center">
              <div p-2 text="base" leading-none font="bold" rounded-lg overflow-hidden bg="#00000008" :style="{color: getRandomColor()}">
                {{ cItem.name.substring(0, 1)}}
              </div>
              <div text="base #171717" ml-2 font="bold">{{ cItem.name }}</div>
            </div>
            <div flex="~" mt-4 space="x-2" transition-all>
              <div v-if="cItem.test" rounded p-1 text="#fff" bg="#81DAD0 hover:#32c5b5" @click="onTagClick(cItem, 'test')">TEST</div>
              <div v-if="cItem.prod" rounded p-1 text="#fff" bg="#FFD6D6 hover:#db7676" @click="onTagClick(cItem, 'prod')">PROD</div>
              <div v-if="cItem.ui" rounded p-1 text="#fff" bg="#abb2bd hover:#596475" @click="onTagClick(cItem, 'ui')">UI</div>
              <div v-if="cItem.doc" rounded p-1 text="#fff" bg="#A8BFF0 hover:#4162a9" @click="onTagClick(cItem, 'doc')">DOC</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue"
import { getProjectNavList } from '@/api/project'

const projectNavList = ref([])

const getNav = async () => {
  const parameter = {}
  const [err, res] = await to(getProjectNavList(parameter))
  if (!err) {
    projectNavList.value = res.data
  }
}

const onTagClick = (el, type) => {
  window.open(el[type], '_blank')
}

const getRandomColor = () => {
  const lowContrastLetters = '89ABCDEF'; // Excluding high-contrast colors: '0123456789ABCDEF' -> '89ABCDEF'
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += lowContrastLetters[Math.floor(Math.random() * lowContrastLetters.length)];
  }
  return color;
}

onMounted(() => {
  getNav()
})
</script>

<style></style>
