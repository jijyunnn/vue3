<script setup>
import { ref, onMounted } from 'vue'

const list = ref([])
const itemTotal = ref(0)

onMounted(async () => {
  const { data: listItem, ...totalData } = await fetch(
    'https://reqres.in/api/users?per_page=6'
  ).then((res) => res.json())

  // list.value = data; data 이름 재정의
  list.value = listItem
  itemTotal.value = totalData
})
</script>
<!--<script>-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      list: [],-->
<!--      itemTotal: 0,-->
<!--    };-->
<!--  },-->
<!--  mounted() {-->
<!--    this.getList();-->
<!--  },-->
<!--  methods: {-->
<!--    async getList() {-->
<!--      const { data: listItem, ...itemTotal } = await fetch(-->
<!--        "https://reqres.in/api/users?per_page=6"-->
<!--      ).then((res) => res.json());-->
<!--      this.list = listItem;-->
<!--      this.itemTotal = itemTotal;-->
<!--    },-->
<!--  },-->
<!--};-->
<!--</script>-->

<template>
  <div>
    <h4>총 갯수 : {{ itemTotal.total }}</h4>
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
