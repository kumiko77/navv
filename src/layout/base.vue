<template>
  <div h-screen>
    <div px-4 flex="~ items-center justify-between" bg="#fff" border="~ t-0 l-0 r-0 solid #ebebeb">
      <sideMenu />
      <headerAvatar />
    </div>
    <div mt-6 mx-auto w="400">
      <div mb-6>
        <inputPro />
      </div>
      <router-view />  
    </div>
  </div>
</template>

<script setup>
import sideMenu from "@/components/routeHeader.vue";
import inputPro from "@/components/inputPro.vue";
import headerAvatar from "@/components/headerAvatar.vue";
</script>
