import { defineStore } from 'pinia'

export const useStore = defineStore('myStore', {
  state: () => ({
    data: null
  })
})
