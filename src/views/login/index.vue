<template>
  <div absolute top-0 left-0 right-0 bottom-0 flex="~ items-center justify-center">
    <div text-center>
      <div text="3xl #171717" font="bold" >Log in to Navv</div>
      <div flex="~ col" mt-8 space="y-4">
        <a-input w-80 size="large" v-model:value="parameter.userName" placeholder="请输入用户名"/>
        <a-input-password size="large" v-model:value="parameter.password" placeholder="请输入密码"/>
      </div>
      <div mt-10>
        <a-button w-full size="large" type="primary" @click="onLogin">Log in</a-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import md5 from 'md5'
import { useUserStoreWithOut } from '@/store/modules/user'
const userStore = useUserStoreWithOut()
const router = useRouter()
const parameter = ref({
  userName: '13055598844',
  password: '123456'
})

const onLogin = async () => {
  const cloneParameter = {...parameter.value}
  cloneParameter.password = md5(cloneParameter.password)
  
  const [err, res] = await to (userStore.login(cloneParameter))
  if(!err) {
    message.success('登录成功')
    router.push('/')
  }
}
</script>

<style>

</style>
