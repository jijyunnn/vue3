<script>
import ListPagination from '@/components/ListPagination.vue'
import { mapActions, mapGetters } from 'pinia'
import { useBlogListStore } from '@/stores/BlogList'

export default {
  data() {
    return {
      // list: [],
      listPage: 1,
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
    ...mapGetters(useBlogListStore, ['list', 'pagingTotal'])
  },
  async mounted() {
    await this.getPostList()
    console.log('list: ', this.list)

    this.blogList.pagingTotal = this.pagingTotal
    console.log('pagingTotal: ', this.pagingTotal)

    this.blogList.page = this.listPage
    console.log('listPage: ', this.listPage)
  },
  methods: {
    ...mapActions(useBlogListStore, ['getPostList'])
  }
}
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
