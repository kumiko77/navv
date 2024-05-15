<template>
  <a-input-group compact>
    <a-select
      size="large"
      w-24
      :options="searchTypeOption"
      v-model:value="searchType"
      @change="onSearchTypeChange"
    >
      <template #option="{ icon }">
        <div flex="~ items-center justify-center">
          <img :src="icon" w-8 h-8 />
        </div>
      </template>
    </a-select>
    <a-input
      size="large"
      v-model:value="serachText"
      style="width: calc(100% - 6rem)"
      @pressEnter="onSearch"
    />
  </a-input-group>
</template>

<script setup>
const searchTypeOption = [
  { value: "百度", icon: "https://navv-resource.kami77.cn/baidu.png" },
  { value: "谷歌", icon: "https://navv-resource.kami77.cn/google.png" },
  { value: "github", icon: "https://navv-resource.kami77.cn/github.png" },
  { value: "掘金", icon: "https://navv-resource.kami77.cn/juejin.png" },
];
const searchType = ref('百度');
const serachText = ref("");

const onSearchTypeChange = () => {

}

const onSearch = () => {
  if(searchType.value === '百度') {
    window.open(`https://www.baidu.com/s?wd=${serachText.value}`, '_blank')
  }
  if(searchType.value === 'github') {
    window.open(`https://github.com/search?q=${serachText.value}&type=repositories`, '_blank')
  }
  if(searchType.value === '谷歌') {
    window.open(`https://www.google.com/search?q=${serachText.value}`, '_blank')
  }
  if(searchType.value === '掘金') {
    window.open(`https://juejin.cn/search?query=${serachText.value}`, '_blank')
  }
}
</script>

<style>
</style>
