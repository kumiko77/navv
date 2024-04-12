<template>
  <div grid="~ gap-4 cols-5" p-4>
    <div
      v-for="i in 20"
      :key="i"
      h="20"
      flex="~"
      transition-all
      shadow="item hover:item-hover"
      cursor-pointer
    >
      <div h-full w-25 flex="~ items-center justify-center" bg="#f5f5fa">
        <img max-w="50%" src="../../assets/images/card/base.png" />
      </div>
      <div p-2>名称名称名称</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
