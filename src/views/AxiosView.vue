<!--<script setup>-->
<!--import { ref, onMounted } from "vue";-->
<!--import axios from "axios";-->
<!--import { useRoute } from "vue-router";-->
<!--import ApiListView from "@/views/ApiListView.vue";-->

<!--const route = useRoute();-->
<!--const list = ref();-->
<!--const listPage = ref(route.params.page || 1);-->
<!--const pagingTotal = ref(0);-->

<!--const getPost = async () => {-->
<!--  const { data } = await axios.get("https://reqres.in/api/users", {-->
<!--    params: {-->
<!--      per_page: 4,-->
<!--      page: listPage.value,-->
<!--    },-->
<!--  });-->
<!--  list.value = data.data;-->
<!--  pagingTotal.value = data.total;-->
<!--  listPage.value = data.page;-->
<!--  console.log("111111", data);-->
<!--  console.log("222222", data.total);-->
<!--  console.log("333333", data.page);-->
<!--};-->

<!--onMounted(() => {-->
<!--  getPost();-->
<!--});-->
<!--</script>-->

<!--<template>-->
<!--  <div>-->
<!--    <ul>-->
<!--      <li v-for="(item, index) in list" :key="index">-->
<!--        <img :src="item.avatar" alt="" />-->
<!--        <p>{{ item.email }}</p>-->
<!--      </li>-->
<!--    </ul>-->
<!--    <router-link-->
<!--      v-for="paging in listPage.value"-->
<!--      :key="paging.id"-->
<!--      :to="{-->
<!--        name: 'ApiListView',-->
<!--        params: {-->
<!--          page: paging,-->
<!--        },-->
<!--      }"-->
<!--      >{{ paging }}</router-link-->
<!--    >-->
<!--  </div>-->
<!--</template>-->
<!--<style scoped>-->
<!--div {-->
<!--  outline: 1px solid #06f;-->
<!--}-->
<!--h4 {-->
<!--  text-align: right;-->
<!--}-->
<!--ul {-->
<!--  display: flex;-->
<!--  flex-wrap: wrap;-->
<!--}-->
<!--li {-->
<!--  list-style: none;-->
<!--  width: 200px;-->
<!--  /*outline: 1px solid #f00;*/-->
<!--  text-align: center;-->
<!--}-->
<!--img {-->
<!--  height: 100px;-->
<!--}-->
<!--</style>-->
<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const message = ref('안녕하세요')

const list = ref([])
const paging = ref({})

/** axios 사용 **/
onMounted(async () => {
  const { data } = await axios.get('https://reqres.in/api/users', {
    params: {
      per_page: 4,
      page: 2
    }
  })

  const { data: lists, total, per_page } = data
  paging.value = {
    total: total,
    perPage: per_page
  }

  console.log(lists, total)

  // pageTotal.value = data

  list.value = data.data

  console.log(list.value)
})
</script>

<template>
  <div>
    {{ message }} <button @click="testFunction">aaa</button>
    <button @click="testFn">bbb</button>
    <!--    <p>total : {{ pageTotal }}</p>-->
    <p>total : {{ paging.total }}, perpage : {{ paging.perPage }}</p>
    <ul>
      <li v-for="(item, key) in list" :key="key">
        {{ item.last_name }}{{ item.first_name }} <br />
        <img :src="item.avatar" alt="" />
      </li>
    </ul>
  </div>
</template>
