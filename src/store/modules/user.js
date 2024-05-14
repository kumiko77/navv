import { login } from '@/api/user'
import { defineStore } from 'pinia'
import { store } from '../index'
export const useUserStore = defineStore('user', {
  state: () => {
    return {
      token: '',
    }
  },
  getters: {
    getToken() {
      return this.token
    },
  },
  actions: {
    setToken(token) {
      this.token = token
    },
    login (parameter) {
      return new Promise(async (resolve, reject) => {
        const [err, res] = await to(login(parameter))
        if(err) {
          reject()
        } else {
          this.setToken(res.data)
          resolve()
        }
      })
    },
    logout() {
      this.setToken('')
    }
  },
  persist: true
})

export const useUserStoreWithOut = () => {
  return useUserStore(store)
}
