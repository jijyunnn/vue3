<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const list = ref([]);
// const itemTotal = ref(0);

onMounted(async () => {
  // await axios({
  //   method: "get",
  //   url: "https://reqres.in/api/users",
  //   params: {
  //     per_page: 4,
  //     page: 1,
  //   },
  // }).then((res) => {
  //   console.log(res.data.total);
  //   console.log(res.data.data);
  //   list.value = res.data.data;
  //   itemTotal.value = res.data.total;
  // });
  const { data } = await axios.get("https://reqres.in/api/users", {
    params: {
      per_page: 4,
      page: 1,
    },
  });
  // console.log(`axios: ${data}`);

  // const { data } = await fetch(
  //   "https://reqres.in/api/users?page=1&per_page=4"
  // ).then((res) => res.json());
  // console.log(`fetch ${data}`);
  // console.log(totalData);
  list.value = data.data;
  // itemTotal.value = totalData;
});
</script>

<template>
  <div>
    <!--    <h4>총 갯수 : {{ itemTotal }}</h4>-->
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <img :src="item.avatar" alt="" />
        <p>{{ item.email }}</p>
      </li>
    </ul>
  </div>
</template>
<style scoped>
div {
  outline: 1px solid #06f;
}
h4 {
  text-align: right;
}
ul {
  display: flex;
  flex-wrap: wrap;
}
li {
  list-style: none;
  width: 200px;
  /*outline: 1px solid #f00;*/
  text-align: center;
}
img {
  height: 100px;
}
</style>
