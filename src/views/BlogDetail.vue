//BlogDetail.vue
<script>
//XSS
export default {
  data() {
    return {
      detail: {
        title: '',
        content: '',
        date: ''
      },
      postId: 0
    }
  },
  // created() {
  //   console.log(this.$route.params.postId);
  // },
  watch: {
    content() {}
  },
  // props: [
  //   "postId"
  // ],
  mounted() {
    console.log(this.$route.params.postId)
    this.postId = this.$route.params.postId
    this.init()
  },
  methods: {
    init() {
      this.getDetail()
    },
    async getDetail() {
      const data = await fetch(`https://theme.sunflower.kr/wp-json/wp/v2/posts/${this.postId}/`)
        .then((r) => r.json())
        .catch((err) => console.log(err.message))
      this.detail = data
    }
  }
}
</script>
<template>
  <main>
    <h2>{{ detail.title.rendered }}</h2>
    <div class="postDetail" v-html="detail.content.rendered"></div>
    <h5>작성일 : {{ detail.date }}</h5>
  </main>
</template>
<style scoped>
.postDetail {
  height: 300px;
  border: 0.5px solid gray;
  margin-top: 20px;
}
</style>
