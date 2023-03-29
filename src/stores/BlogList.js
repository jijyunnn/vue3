import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useBlogListStore = defineStore('blogList', () => {
  const list = ref([])
  // const listPage = ref(1)
  const pagingTotal = ref(0)
  const getPostList = async (pageId) => {
    const { data, headers } = await axios({
      method: 'get',
      url: '/api/posts',
      params: {
        per_page: 5,
        // page: listPage.value,
        page: pageId
      }
    })
    list.value = data
    pagingTotal.value = headers['x-wp-totalpages']
  }

  return { list, getPostList, pagingTotal }
})
