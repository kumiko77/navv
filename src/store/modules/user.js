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
    }
  },
  persist: true
})

export const useUserStoreWithOut = () => {
  return useUserStore(store)
}
