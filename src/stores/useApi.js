import axios from 'axios'
import { useStore } from '@/stores/useStore'

const api = axios.create({
  baseURL: 'http://theme.sunflower.kr/wp-json/wp/v2'
})

export function useApi() {
  const store = useStore()

  async function fetchData() {
    const response = await api.get('/posts')
    store.data = response.data
  }

  return {
    fetchData
  }
}
