<!--<script>-->
<!--import ListPagination from '@/components/ListPagination.vue'-->
<!--import { mapActions, mapGetters } from 'pinia'-->
<!--import { useBlogListStore } from '@/stores/BlogList'-->
<!--import { useRoute } from 'vue-router'-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      // list: [],-->
<!--      useRoute: useRoute(),-->
<!--      listPage: this.$route.params.page || 1,-->
<!--      blogList: {-->
<!--        pagingTotal: 0,-->
<!--        page: 0-->
<!--      }-->
<!--    }-->
<!--  },-->
<!--  components: {-->
<!--    ListPagination: ListPagination-->
<!--  },-->
<!--  computed: {-->
<!--    ...mapGetters(useBlogListStore, ['list', 'pagingTotal', 'loading'])-->
<!--  },-->
<!--  async mounted() {-->
<!--    await this.getPostList(this.$route.params.page || 1)-->
<!--    console.log('list: ', this.list)-->

<!--    this.blogList.pagingTotal = this.pagingTotal-->
<!--    console.log('pagingTotal: ', this.pagingTotal)-->

<!--    this.blogList.page = this.listPage-->
<!--    console.log('listPage: ', this.listPage)-->
<!--  },-->
<!--  watch: {-->
<!--    async '$route.params.page'(page = 1) {-->
<!--      // this.restList()-->
<!--      console.log('-&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;', this.list)-->
<!--      console.log('watch route.params.page', Number(page))-->
<!--      await this.getPostList(Number(page))-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    ...mapActions(useBlogListStore, ['getPostList'])-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<template>-->
<!--  <div>-->
<!--    <h4>StoreBlog Page 입니다.</h4>-->
<!--    <ul>-->
<!--      <div v-if="loading">loading</div>-->
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
<!--    <ListPagination :total="Number(blogList.pagingTotal)" :page="Number(listPage)"></ListPagination>-->
<!--    <hr />-->
<!--    &lt;!&ndash;    <ul class="paging">&ndash;&gt;-->
<!--    &lt;!&ndash;      <li v-for="item in Number(blogList.pagingTotal)" :key="item">&ndash;&gt;-->
<!--    &lt;!&ndash;        <router-link&ndash;&gt;-->
<!--    &lt;!&ndash;          :to="{&ndash;&gt;-->
<!--    &lt;!&ndash;            name: 'storeBlog',&ndash;&gt;-->
<!--    &lt;!&ndash;            params: {&ndash;&gt;-->
<!--    &lt;!&ndash;              id: item&ndash;&gt;-->
<!--    &lt;!&ndash;            }&ndash;&gt;-->
<!--    &lt;!&ndash;          }"&ndash;&gt;-->
<!--    &lt;!&ndash;          >{{ item }}</router-link&ndash;&gt;-->
<!--    &lt;!&ndash;        >&ndash;&gt;-->
<!--    &lt;!&ndash;      </li>&ndash;&gt;-->
<!--    &lt;!&ndash;    </ul>&ndash;&gt;-->
<!--  </div>-->
<!--</template>-->
<!--<style scoped>-->
<!--/*div {*/-->
<!--/*  outline: 1px solid #f00;*/-->
<!--/*}*/-->
<!--h4 {-->
<!--  color: #ff0000;-->
<!--}-->
<!--.paging {-->
<!--  list-style: none;-->
<!--  display: flex;-->
<!--}-->
<!--.paging a {-->
<!--  display: block;-->
<!--  padding: 10px;-->
<!--  border: 1px solid green;-->
<!--  margin: 10px;-->
<!--}-->
<!--</style>-->

<script>
import ListPagination from '@/components/ListPagination.vue'
import { mapActions, mapGetters } from 'pinia'
import { useBlogListStore } from '@/stores/BlogList'
import { useRoute } from 'vue-router'
export default {
  data() {
    return {
      // list: [],
      useRoute: useRoute(),
      listPage: this.$route.params.id || 1,
      blogList: {
        pagingTotal: 0,
        page: 0
      }
    }
  },
  components: {
    ListPagination: ListPagination
  },
  computed: {
    ...mapGetters(useBlogListStore, ['list', 'pagingTotal', 'loading'])
  },
  async mounted() {
    await this.getPostList(this.$route.params.id || 1)
    console.log('list: ', this.list)

    this.blogList.pagingTotal = this.pagingTotal
    console.log('pagingTotal: ', this.pagingTotal)

    this.blogList.page = this.listPage
    console.log('listPage: ', this.listPage)
  },
  watch: {
    async '$route.params.id'(page = 1) {
      // this.restList()
      console.log('---------', this.list)
      console.log('watch route.params.page', Number(page))
      await this.getPostList(Number(page))
    }
  },
  methods: {
    ...mapActions(useBlogListStore, ['getPostList'])
  }
}
</script>

<template>
  <div>
    <h4>StoreBlog Page 입니다.</h4>
    <ul>
      <div v-if="loading">loading</div>
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
    <ListPagination :total="Number(blogList.pagingTotal)" :page="Number(listPage)"></ListPagination>
    <hr />
    <!--    <ul class="paging">-->
    <!--      <li v-for="item in Number(blogList.pagingTotal)" :key="item">-->
    <!--        <router-link-->
    <!--          :to="{-->
    <!--            name: 'storeBlog',-->
    <!--            params: {-->
    <!--              id: item-->
    <!--            }-->
    <!--          }"-->
    <!--          >{{ item }}</router-link-->
    <!--        >-->
    <!--      </li>-->
    <!--    </ul>-->
  </div>
</template>
<style scoped>
/*div {*/
/*  outline: 1px solid #f00;*/
/*}*/
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
