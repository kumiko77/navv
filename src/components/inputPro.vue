<template>
  <div flex="~ items-center" space-x-4>
    <div v-if="userStore.getToken" flex="~ items-center" space-x-4>
      <div @click="onItemClick(jenkinsUrl)">
        <img h-10 w-10 cursor-pointer src="https://navv-resource.kami77.cn/jenkinsImage.png">
      </div>
      <div @click="onItemClick(zentaoUrl)">
        <img h-10 w-10 cursor-pointer src="https://navv-resource.kami77.cn/zentao.png">
      </div>
      <div @click="onItemClick(gitlabUrl)">
        <img h-10 w-10 cursor-pointer src="https://navv-resource.kami77.cn/gitlab.png">
      </div>
    </div>
    <div flex="1">
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
    </div>
  </div>
</template>

<script setup>
import { useUserStoreWithOut } from '@/store/modules/user'
const userStore = useUserStoreWithOut()

const searchTypeOption = [
  { value: "百度", icon: "https://navv-resource.kami77.cn/baidu.png" },
  { value: "谷歌", icon: "https://navv-resource.kami77.cn/google.png" },
  { value: "github", icon: "https://navv-resource.kami77.cn/github.png" },
  { value: "掘金", icon: "https://navv-resource.kami77.cn/juejin.png" },
];
const jenkinsUrl = 'http://211.161.195.73:30200/'
const zentaoUrl = 'zentao.awsagroup.com:5657'
const gitlabUrl = 'http://211.161.195.73:30280/dashboard/projects'
const searchType = ref("百度");
const serachText = ref("");

const onSearchTypeChange = () => {};

const onSearch = () => {
  if (searchType.value === "百度") {
    window.open(`https://www.baidu.com/s?wd=${serachText.value}`, "_blank");
  }
  if (searchType.value === "github") {
    window.open(
      `https://github.com/search?q=${serachText.value}&type=repositories`,
      "_blank"
    );
  }
  if (searchType.value === "谷歌") {
    window.open(
      `https://www.google.com/search?q=${serachText.value}`,
      "_blank"
    );
  }
  if (searchType.value === "掘金") {
    window.open(`https://juejin.cn/search?query=${serachText.value}`, "_blank");
  }
};

const onItemClick = (url) => {
  window.open(url, '_blank')
}
</script>

<style>
</style>
