import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useBlogListStore = defineStore('blogList', () => {
  // const listPage = ref(1)
  const list = ref([])
  const pagingTotal = ref(0)
  const loading = ref(false)

  const getPostList = async (page) => {
    loading.value = true
    const { data, headers } = await axios.get('/api/posts', {
      params: {
        per_page: 3,
        page: page || 1
      }
    })

    list.value = data

    pagingTotal.value = headers['x-wp-totalpages']
    loading.value = false

    // pagingTotal.value = headers['x-wp-totalpages']
  }

  const restList = () => {
    list.value = []
  }

  return { list, getPostList, restList, pagingTotal, loading }
})
