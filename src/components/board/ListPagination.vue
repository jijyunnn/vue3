<script setup>
const props = defineProps({
  total: {
    type: Number,
    default: 0,
  },
  page: {
    type: Number,
    default: 1,
  },
});
console.log(">>>>>>>>>>.", props.page);
</script>

<template>
  <h3>current: {{ props.page }}</h3>
  <div class="pagination">
    <!--  first btn  -->
    <router-link
      :to="{
        name: 'blogList',
        params: {
          id: 1,
        },
      }"
      v-if="props.page !== 1"
      >first</router-link
    >
    <!--  prev btn  -->
    <router-link
      :to="{
        name: 'blogList',
        params: {
          id: props.page - 1,
        },
      }"
      v-if="props.page - 1 !== 0"
      >prev</router-link
    >
    <!--  pagination btn  -->
    <router-link
      v-for="item in props.total"
      :key="item"
      :to="{
        name: 'blogList',
        params: {
          id: item,
        },
      }"
      :class="{
        active: item === props.page,
      }"
      >{{ item }}</router-link
    >
    <!--  next btn  -->
    <router-link
      :to="{
        name: 'blogList',
        params: {
          id: props.page + 1,
        },
      }"
      v-if="props.page + 1 <= props.total"
      >next</router-link
    >
    <!--  last btn  -->
    <router-link
      :to="{
        name: 'blogList',
        params: {
          id: props.total,
        },
      }"
      v-if="props.page !== props.total"
      >last</router-link
    >
  </div>
</template>
<style scoped>
.pagination {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
a {
  padding: 10px;
  border: 1px solid #ccc;
  margin: 10px;
}
.router-link-exact-active {
  color: #ff0000;
}
.active {
  color: red;
}
</style>
