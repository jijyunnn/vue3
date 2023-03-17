<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

const route = useRoute();
const detail = ref({
  title: "",
  content: "",
});
const detailId = ref(route.params.detailId);
console.log(route.params);
const getPostDetail = async () => {
  const { data } = await axios({
    method: "get",
    url: `https://theme.sunflower.kr/wp-json/wp/v2/posts/${detailId.value}`,
  });
  console.log(route);
  console.log(data);
  // console.log(detailId.value);
  detail.value = data;
};
onMounted(() => {
  getPostDetail();
});
</script>

<template>
  <div class="blogDetail">
    blogDetail Page 입니다.
    <div class="postContent">
      <h2>{{ detail.title.rendered }}</h2>
      <div v-html="detail.content.rendered"></div>
    </div>
  </div>
</template>

<style scoped>
.blogDetail {
  width: 100%;
  height: 400px;
  padding: 20px;
}
.postContent {
  outline: 1px solid #000;
  width: 600px;
  height: 300px;
}
</style>
