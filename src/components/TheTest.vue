<template>
  <div class="box">bbbb : {{ message }}</div>

  <button @click="onClick" v-bind="$attrs">emit</button>
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
