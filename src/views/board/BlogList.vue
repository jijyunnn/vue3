<script setup>
import { ref, onMounted, watch } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
// import commentWrap from "@/views/board/BlogCommentWrap.vue";
import PageNation from '@/components/board/ListPagination.vue'

const route = useRoute()
const list = ref()
const listPage = ref(route.params.id || 1)
const pagingTotal = ref(0)

const getPostList = async () => {
  const { data, headers } = await axios({
    method: 'get',
    url: '/api/posts',
    params: {
      per_page: 3,
      page: listPage.value
    }
  })
  // console.log(data);
  // console.log(headers["x-wp-totalpages"]);
  list.value = data
  pagingTotal.value = headers['x-wp-totalpages']
}

watch(
  () => route.params.id,
  (page) => {
    listPage.value = page || 1
    getPostList()
  }
)

onMounted(() => {
  getPostList()
})
</script>

<template>
  <div>
    <h4>BlogList Page 입니다.</h4>
    <ul>
      <li v-for="post in list" :key="post.id">
        <!-- a, b -->
        <router-link
          :to="{
            name: 'blogDetail',
            params: {
              detailId: post.id
            }
          }"
          >{{ post.title.rendered }}</router-link
        >
        <!--        <comment-wrap :detail-id="post.id"></comment-wrap>-->
      </li>
    </ul>
    <PageNation :total="Number(pagingTotal)" :page="Number(listPage)"></PageNation>
  </div>
</template>
<style scoped>
div {
  outline: 1px solid #f00;
}
h4 {
  color: #ff0000;
}
</style>
