<template>
  <div>
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      w-full
      mode="inline"
      :items="getMenu()"
      @click="onMenuClick"
    />
  </div>
</template>
<script setup>
import { getMenu } from "@/router/util";
import { onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { findAncestorsPathDFS } from "@/utils/array";

const router = useRouter();
const route = useRoute();

const selectedKeys = ref([]);
const openKeys = ref([]);

onMounted(() => {
  setMenu(route.path);
  setOpenKey(route.path)
});

const onMenuClick = ({ item }) => {
  const { path } = item;
  router.push(path);
};

const setMenu = (path) => {
  selectedKeys.value = [path]
};

const setOpenKey = (path) => {
  const ancestors = findAncestorsPathDFS(getMenu(), path);
  openKeys.value = ancestors
};

</script>

<style>
</style>
