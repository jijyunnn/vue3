<!--<script setup>-->
<!--import { ref, onMounted, watch } from 'vue'-->
<!--import axios from 'axios'-->
<!--import { useRoute } from 'vue-router'-->
<!--// import commentWrap from "@/views/board/BlogCommentWrap.vue";-->
<!--import PageNation from '@/components/ListPagination.vue'-->

<!--const route = useRoute()-->
<!--const list = ref()-->
<!--const listPage = ref(route.params.id || 1)-->
<!--const pagingTotal = ref(0)-->

<!--const getPostList = async () => {-->
<!--  const { data, headers } = await axios({-->
<!--    method: 'get',-->
<!--    url: '/api/posts',-->
<!--    params: {-->
<!--      per_page: 3,-->
<!--      page: listPage.value-->
<!--    }-->
<!--  })-->
<!--  // console.log(data);-->
<!--  // console.log(headers["x-wp-totalpages"]);-->
<!--  list.value = data-->
<!--  pagingTotal.value = headers['x-wp-totalpages']-->
<!--}-->

<!--watch(-->
<!--  () => route.params.id,-->
<!--  (page) => {-->
<!--    listPage.value = page || 1-->
<!--    getPostList()-->
<!--  }-->
<!--)-->

<!--onMounted(() => {-->
<!--  getPostList()-->
<!--})-->
<!--</script>-->

<!--<template>-->
<!--  <div>-->
<!--    <h4>BlogList Page 입니다.</h4>-->
<!--    <ul>-->
<!--      <li v-for="post in list" :key="post.id">-->
<!--        &lt;!&ndash; a, b &ndash;&gt;-->
<!--        <router-link-->
<!--          :to="{-->
<!--            name: 'blogDetail',-->
<!--            params: {-->
<!--              detailId: post.id-->
<!--            }-->
<!--          }"-->
<!--          >{{ post.title.rendered }}</router-link-->
<!--        >-->
<!--        &lt;!&ndash;        <comment-wrap :detail-id="post.id"></comment-wrap>&ndash;&gt;-->
<!--      </li>-->
<!--    </ul>-->
<!--    <PageNation :total="Number(pagingTotal)" :page="Number(listPage)"></PageNation>-->
<!--  </div>-->
<!--</template>-->
<!--<style scoped>-->
<!--div {-->
<!--  outline: 1px solid #f00;-->
<!--}-->
<!--h4 {-->
<!--  color: #ff0000;-->
<!--}-->
<!--</style>-->

<script>
import { mapGetters, mapActions } from 'pinia'
import { useBlogListStore } from '@/stores/BlogList'
import pagination from '@/components/ListPagination.vue'
// import { useRoute } from 'vue-router'
// const route = useRoute()
export default {
  data() {
    return {
      // list: [],
      listPage: 0,
      blogList: {
        pagingTotal: 0,
        page: 0,
        init: '',
        aaa: ''
      }
    }
  },
  computed: {
    ...mapGetters(useBlogListStore, ['list', 'pagingTotal', 'loading'])
  },
  components: {
    pagination: pagination
  },
  async mounted() {
    await this.getPostList(this.$route.params.page || 1)

    // this.blogList.pagingTotal = this.pagingTotal

    this.blogList = {
      ...this.blogList,
      pagingTotal: this.pagingTotal,
      add: 'test'
    }

    console.log('=====', this.blogList)

    this.blogList.page = this.listPage
  },
  watch: {
    async '$route.params.page'(page) {
      // this.restList()
      console.log('---------', this.list)
      console.log('watch route.params.page', Number(page))
      await this.getPostList(Number(page))
    }
  },
  methods: {
    ...mapActions(useBlogListStore, ['getPostList', 'restList'])
  }
}
</script>

<template>
  <div>
    <!--    <ul v-if="list.length > 0">-->
    <div v-if="loading">loading</div>
    <ul>
      <li v-for="post in list" :key="post.id">
        <router-link
          :to="{
            name: 'blogDetail',
            params: {
              detailId: post.id
            }
          }"
          >{{ post.title.rendered }}</router-link
        >
        <!--        <div style="border: 1px solid red">-->
        <!--          <h2>comment</h2>-->
        <!--          &lt;!&ndash;          <comment-wrap :page-id="post.id"></comment-wrap>&ndash;&gt;-->
        <!--        </div>-->
      </li>
    </ul>
    <!--    <div v-else>loading</div>-->

    <hr />

    <pagination :total="Number(blogList.pagingTotal)" :page="Number(listPage)"></pagination>
  </div>
</template>
