<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

const route = useRoute();

const detailId = ref(route.params.detailId);

const comments = ref([]);

const getComments = async () => {
  const { data } = await axios({
    method: "get",
    url: `/api/comments?order=asc&orderby=date`,
    params: {
      post: detailId.value,
      per_page: 100,
    },
  });
  comments.value = data;
};

onMounted(() => {
  getComments();
});
</script>
<template>
  <div class="blogComments">
    <!--    <div-->
    <!--      class="cmt"-->
    <!--      v-for="item in comments.filter((value) => value.parent === 0)"-->
    <!--      :key="item.id"-->
    <!--    >-->
    <!--      댓글 아이디{{ item.id }}-->
    <!--      <div class="cmt" v-html="item.content.rendered"></div>-->
    <!--      <div-->
    <!--        class="cmt"-->
    <!--        v-for="child in comments.filter((value) => value.parent === item.id)"-->
    <!--        :key="child.id"-->
    <!--      >-->
    <!--        부모: {{ child.parent }} 인것 {{ child.content }}-->
    <!--      </div>-->
    <!--    </div>-->
    <div class="cmt" v-for="item in comments" :key="item.id">
      {{ item.id }}
      {{ item.content?.rendered }}
      <div
        class="cmt"
        v-for="child in comments.filter((value) => value.parent === item.id)"
        :key="child.id"
      >
        {{ item.id }}
        {{ child.id }}
        {{ child.content?.rendered }}
        <div
          class="cmt"
          v-for="secChild in comments.filter(
            (value) => value.parent === child.id
          )"
          소
          :key="secChild.id"
        >
          {{ child.id }}
          {{ secChild.content?.rendered }}
          <div
            class="cmt"
            v-for="thrChild in comments.filter(
              (value) => value.parent === secChild.id
            )"
          >
            {{ secChild.id }}
            {{ thrChild.content?.rendered }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.cmt {
  margin: 10px;
  border: 1px solid #ccc;
  padding: 10px;
}
h4 {
  color: green;
}
</style>
