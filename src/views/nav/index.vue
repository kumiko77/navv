<template>
  <div class="nav-index" flex="~">
    <div w-50 px-2 border="~ solid l-0 t-0 b-0 #ebebeb">
      <div space="y-2">
        <div flex="~" rounded text="sm #666 hover:#000" p-2 cursor-pointer :class="{ selected: menuSelected === '全部' }"
          @click="onCategoryClick('全部')">
          <div ml-2>全部</div>
        </div>
        <div flex="~" rounded text="sm #666 hover:#000" p-2 cursor-pointer
          :class="{ selected: menuSelected === item.name }" v-for="(item, index) in menuList" :key="index"
          @click="onCategoryClick(item.name)">
          <div ml-2>{{ item.name }}</div>
        </div>
      </div>
    </div>
    <div flex="1" ml-4 space="y-8">
      <div v-for="(item, index) in navFilter" :key="index">
        <div text="xl" font="bold" my-2>{{ item.name }}</div>
        <div grid="~ gap-4 cols-6">
          <div v-for="(cItem, cIndex) in item.list" class="nav-item" transition-all relative cursor-pointer :key="cIndex" p-2
            flex="~ items-center" border="~ solid #e3e3e3 hover:#c7c7c7" shadow="hover:md" rounded @click="onNavClick(cItem)">
            <div w-8 h-8 rounded-lg overflow-hidden bg="#00000008">
              <img w-full h-full p-1 :src="cItem.image" />
            </div>
            <div text="base #171717" ml-2 font="bold">{{ cItem.name }}</div>
            <div absolute right-2>
              <div rounded bg="#f5f5f4" class="copy-icon">
                <icon-copy-link text="xl" fill="#000" :strokeWidth="2" @click.stop="onCopy(cItem)" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getNavList } from '@/api/nav'
import { message } from 'ant-design-vue'

const navList = ref([])
const menuList = ref([])
const menuSelected = ref('全部')

const navFilter = computed(() => {
  const clone = [...navList.value].filter(item => item?.list?.length)
  if (menuSelected.value === '全部') return clone
  if (menuSelected.value) {
    return clone.filter(item => menuSelected.value === item.name)
  }
  return clone
})

const getNav = async () => {
  const parameter = {}
  const [err, res] = await to(getNavList(parameter))
  if (!err) {
    menuList.value = res.data.map(item => ({ name: item.name, id: item.id }))
    navList.value = res.data
  }
}

const onNavClick = e => {
  window.open(e.url, '_blank')
}

const onCategoryClick = name => {
  menuSelected.value = name
}

const onCopy = ({ url }) => {
  navigator.clipboard
    .writeText(url)
    .then(function () {
      message.success('复制成功')
    })
    .catch(function (err) {
      console.log(err)
      message.warning('复制失败')
    })

}

onMounted(() => {
  getNav()
})
</script>
<style lang="less" scoped>
.nav-index {
  .selected {
    background-color: #f5f5f5;
    color: #000;
    font-weight: bold;
  }

  .nav-item {
    &:hover {
      .copy-icon {
        opacity: 1;
      }
    }

    .copy-icon {
      color: #999;
      opacity: 0;
      transition: .3s;
      padding: 4px;
    }
  }
}
</style>
