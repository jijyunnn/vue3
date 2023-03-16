<template>
  <div class="box">bbbb : {{ message }}</div>

  <button @click="onClick" v-bind="$attrs">emit</button>
  <button @click="$emit('someEvent')">직접 사용자 정의 이벤트</button>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: "-----",
    },
  },
  methods: {
    onClick() {
      console.log("-------");

      this.$emit("hi", {
        a: "aaaa",
        b: "bbbb",
      });
    },
  },
};
</script>

<style scoped>
.box {
  border: 1px solid red;
}
</style>
