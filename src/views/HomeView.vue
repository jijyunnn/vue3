<script>
import { defineAsyncComponent } from "vue";
import TheWelcome from "../components/TheWelcome.vue";

export default {
  data() {
    return {
      message: "안녕하세요",
    };
  },
  components: {
    TheWelcome: TheWelcome,
    TheTest: defineAsyncComponent(() => import("@/components/TheTest.vue")),
  },
  methods: {
    onHi(obj) {
      console.log("hi", obj.a);
    },
  },
};
</script>
<template>
  <main>
    <the-test
      :message="message"
      @hi="onHi"
      class="aaaaa"
      data-test="test"
    ></the-test>
    <the-test
      :message="message"
      @hi="onHi"
      class="bbbbb"
      data-test="test"
    ></the-test>
    aaaa : {{ message }}
    <hr />
    <div class="box">cccc</div>
    <TheWelcome />
  </main>
</template>
