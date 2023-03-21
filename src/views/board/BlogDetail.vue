<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
import BlogComment from '@/views/board/BlogComment.vue'

const route = useRoute()

//이 값 props로 Comment로 전달할꺼임 / 형식 맞추기 위해 받아오는걸 Number로 변환
const detailId = ref(Number(route.params.detailId))
const detail = ref({})
//rendered error 처리를 위한 데이터 불러온지 체크하는 변수 선언
const detailLoaded = ref(false)

const comments = ref([])

const getPostDetail = async () => {
  detailLoaded.value = false
  const { data } = await axios({
    method: 'get',
    url: `/api/posts/${detailId.value}`
  })

  detail.value = data
  detailLoaded.value = true
}

const getComments = async () => {
  const { data } = await axios({
    method: 'get',
    url: `/api/comments`,
    params: {
      // props로 받아온 값으로 데이터 불러옴
      post: detailId.value,
      per_page: 100,
      order: 'asc'
    }
  })
  comments.value = data
}

// emit test함수
const test = (obj) => {
  console.log(obj.content)
}

onMounted(() => {
  getPostDetail()

  getComments()
})
</script>

<template>
  <div class="blogDetail">
    <h4>blogDetail Page 입니다.</h4>
    <div class="postContent" v-if="detailLoaded">
      <h2>{{ detail.title.rendered }}</h2>
      <hr />
      <div class="post" v-html="detail.content.rendered"></div>
      <hr />
      <!--      detail-id값 전달을 위해 :detail-id="detailId" -->
      <BlogComment :detail-id="detailId" @cmt-click="test" :comment-data="comments"></BlogComment>
    </div>
  </div>
</template>

<style scoped>
.cmt {
  margin: 10px;
  border: 1px solid #ccc;
  padding: 10px;
}
.blogDetail {
  width: 100%;
  padding: 20px;
}
h4 {
  color: green;
}
.postContent {
  outline: 1px solid green;
  width: 600px;
}
.post {
  height: 200px;
}
</style>
