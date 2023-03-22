<script setup>
// props 받아오기 위해 defineProps import
import { ref, onMounted, watch } from "vue";
import comment from "./BlogComment.vue";

//defineProps를 사용하여 props 선언
const props = defineProps({
  //댓글 불러오기
  commentData: {
    type: Array,
    default: () => [],
  },
  //대댓글 Depth만큼 불러오기 위한 부모 ID값 받아오기
  parentId: {
    type: Number,
    default: 0,
  },
});

const comments = ref([]);

watch(
  () => props.commentData,
  (cmt) => {
    console.log(3333333333, cmt);
    comments.value = cmt;
  }
);

onMounted(() => {
  comments.value = props.commentData;
  // console.log("2222", props.commentData);
});
</script>
<template>
  <div>
    <div
      style="margin: 10px; border: 1px solid #ccc; padding: 10px"
      v-for="cmt in comments.filter((value) => value.parent === props.parentId)"
      :key="cmt.id"
    >
      나 : {{ cmt.id }}
      <div v-html="cmt.content.rendered"></div>
      <comment :comment-data="comments" :parent-id="cmt.id"></comment>
    </div>
  </div>
</template>
