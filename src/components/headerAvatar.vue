<template>
  <div>
    <a-dropdown>
      <a class="ant-dropdown-link" @click.prevent>
        <div
          cursor-pointer
          w-8
          h-8
          border="2 solid #fff hover:#8EFBF7"
          rounded-full
        >
          <img
            w-full
            h-full
            src="https://navv-resource.kami77.cn/baseAvatar.png"
          />
        </div>
      </a>
      <template #overlay>
        <a-menu v-if="userStore.getToken">
          <a-menu-item>
            <a href="javascript:;" @click="onLogout">退出登录</a>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script setup>
import { useUserStoreWithOut } from '@/store/modules/user'
import { Modal } from 'ant-design-vue';
const userStore = useUserStoreWithOut()
const onLogout = () => {
  Modal.confirm({
    title: '确定要退出登录吗？',
    okText: '确定',
    okType: 'danger',
    okButtonProps: {type: 'primary'},
    cancelText: '取消',
    onOk() {
      userStore.logout()
      location.reload()
    }
  });
}
</script>

<style>
</style>
