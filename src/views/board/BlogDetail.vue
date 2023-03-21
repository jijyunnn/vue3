<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import BlogComment from "@/views/board/BlogComment.vue";

const route = useRoute();

const detailId = ref(route.params.detailId);
const detail = ref({});
//rendered error 처리를 위한 데이터 불러온지 체크하는 변수 선언
const detailLoaded = ref(false);

const getPostDetail = async () => {
  detailLoaded.value = false;
  const { data } = await axios({
    method: "get",
    url: `/api/posts/${detailId.value}`,
  });

  detail.value = data;
  detailLoaded.value = true;
};

onMounted(() => {
  getPostDetail();
});
</script>

<template>
  <div class="blogDetail">
    <h4>blogDetail Page 입니다.</h4>
    <div class="postContent" v-if="detailLoaded">
      <h2>{{ detail.title.rendered }}</h2>
      <hr />
      <div class="post" v-html="detail.content.rendered"></div>
      <hr />
      <BlogComment></BlogComment>
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
