<script setup>
import { ref, onMounted, watch } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

const route = useRoute();
const list = ref();
const listPage = ref(route.params.page || 1);
const pagingTotal = ref(0);

const getPostList = async () => {
  const { data, headers } = await axios({
    method: "get",
    url: "https://theme.sunflower.kr/wp-json/wp/v2/posts",
    params: {
      per_page: 5,
      page: listPage.value,
    },
  });
  console.log(data);
  console.log(headers["x-wp-totalpages"]);
  list.value = data;
  pagingTotal.value = headers["x-wp-totalpages"];
};

watch(
  () => route.params.page,
  (page) => {
    listPage.value = page;
    getPostList();
  }
);

onMounted(() => {
  getPostList();
});
</script>

<template>
  <div>
    <h4>BlogList페이지</h4>
    <ul>
      <li v-for="post in list" :key="post.id">
        <router-link to="/board">{{ post.title.rendered }}</router-link>
      </li>
    </ul>
    <ul class="paging">
      <li v-for="key in Number(pagingTotal)" :key="key">
        <router-link
          :to="{
            name: 'blogList',
            params: {
              page: key,
            },
          }"
          >{{ key }}</router-link
        >
      </li>
    </ul>
  </div>
</template>
<style scoped>
div {
  outline: 1px solid #f00;
}
.paging {
  display: flex;
  list-style: none;
  margin-top: 20px;
}
.paging li {
  outline: 1px solid green;
  padding: 10px;
  margin-left: 10px;
}
</style>
