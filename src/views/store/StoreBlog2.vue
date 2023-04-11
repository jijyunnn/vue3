<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
// import PageNation from '@/components/board/ListPagination.vue'
import { useBlogListStore } from '@/stores/BlogList'

const blogList = useBlogListStore()

const route = useRoute()
const list = ref()

watch(
  () => route.params.id,
  async (page) => {
    // listPage.value = page || 1
    // getPostList()
    await blogList.getPostList(page)
    list.value = blogList.list
    console.log('>>>>>>>>', page)
  }
)

onMounted(async () => {
  // getPostList()
  // store에 있는 getPostList 함수를 호출해 데이터와 통신하고 그걸 다시 list에 넣어주는데 통신하는 중에는 data가 없으니까 async/await
  await blogList.getPostList()
  list.value = blogList.list
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
    <!--    <PageNation :total="Number(pagingTotal)" :page="Number(listPage)"></PageNation>-->
    <hr />
    <ul class="paging">
      <li v-for="item in Number(blogList.pagingTotal)" :key="item">
        <router-link
          :to="{
            name: 'storeBlog',
            params: {
              id: item
            }
          }"
          >{{ item }}</router-link
        >
      </li>
    </ul>
  </div>
</template>
<style scoped>
div {
  outline: 1px solid #f00;
}
h4 {
  color: #ff0000;
}
.paging {
  list-style: none;
  display: flex;
}
.paging a {
  display: block;
  padding: 10px;
  border: 1px solid green;
  margin: 10px;
}
</style>
