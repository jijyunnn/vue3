<script setup>
import comment from "@/views/board/BlogComment.vue";
import axios from "axios";
import { onMounted, ref } from "vue";
// import { useRoute } from "vue-router";
// const route = useRoute();

// const detailId = ref(Number(route.params.detailId));
const props = defineProps({
  detailId: {
    type: Number,
    default: 0,
  },
});
const comments = ref([]);
const getComments = async () => {
  const { data } = await axios({
    method: "get",
    url: `/api/comments`,
    params: {
      // props로 받아온 값으로 데이터 불러옴
      // post: detailId.value,
      post: props.detailId,
      per_page: 100,
      order: "asc",
    },
  });
  comments.value = data;
};

onMounted(() => {
  getComments();
});
</script>

<template>
  <div>
    <comment :comment-data="comments"></comment>
  </div>
</template>
