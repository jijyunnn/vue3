<script setup>
// props 받아오기 위해 defineProps import
import { ref, onMounted, defineProps, watch } from 'vue'
// import axios from "axios";
import comment from './BlogComment.vue'

//defineProps를 사용하여 props 선언
const props = defineProps({
  detailId: {
    type: Number,
    default: 0
  },
  //댓글 불러오기
  commentData: {
    type: Array,
    default: () => []
  },
  //대댓글 Depth만큼 불러오기 위한 부모 ID값 받아오기
  parentId: {
    type: Number,
    default: 0
  }
})

//props에 선언한것으로 detailId 재정의
// const detailId = ref(props.detailId);

const comments = ref([])

// const emit = defineEmits(["cmtClick"]);

// const getComments = async () => {
//   const { data } = await axios({
//     method: "get",
//     url: `/api/comments`,
//     params: {
//       // props로 받아온 값으로 데이터 불러옴
//       post: detailId.value,
//       per_page: 100,
//       order: "asc",
//     },
//   });
//   comments.value = data;
// };

// const onClickEvent = (id, content) => {
//   console.log("-----onClickEvent-----");
//
//   emit("cmtClick", {
//     id: id,
//     content: content,
//   });
// };
watch(
  () => props.commentData,
  (cmt) => {
    console.log(3333333333, cmt)
    comments.value = cmt
  }
)

onMounted(() => {
  comments.value = props.commentData

  console.log('2222', props.commentData)
})
</script>
<template>
  <div>
    <!--    <button :detailId="detailId">Props</button>-->

    <div
      style="margin: 10px; border: 1px solid #ccc; padding: 10px"
      v-for="cmt in comments.filter((value) => value.parent === props.parentId)"
      :key="cmt.id"
    >
      나 : {{ cmt.id }}
      <div v-html="cmt.content.rendered"></div>
      <!--      <button type="button" @click="onClickEvent(cmt.id, cmt.content)">-->
      <!--        Emit-->
      <!--      </button>-->
      <!--      <div v-html="cmt.content.rendered"></div>-->
      <!--      <div-->
      <!--        v-for="child in comments.filter((value) => value.parent === cmt.id)"-->
      <!--        :key="child.id + 'child'"-->
      <!--        style="margin: 10px; border: 1px solid #ccc; padding: 10px"-->
      <!--      >-->
      <!--        부모 : {{ child.parent }}-->
      <!--        <div v-html="child.content.rendered"></div>-->
      <!--      </div>-->
      <comment :detail-id="props.detailId" :comment-data="comments" :parent-id="cmt.id"></comment>
    </div>
  </div>
</template>
