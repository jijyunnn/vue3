<template>
  <ul>
    <li v-for="item in posts" :key="item.id">
      <!--      <router-link :to="`/blog/detail/${item.id}`">-->
      <router-link
        :to="{
          name: 'detail',
          params: {
            postId: item.id,
          },
        }"
      >
        {{ item.title.rendered }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
      // totalList: '',
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.getPost();
    },
    async getPost() {
      const data = await fetch(
        "https://theme.sunflower.kr/wp-json/wp/v2/posts?per_page=10"
      ).then((r) => r.json());

      console.log(data);
      this.posts = data;
    },
  },
};
</script>
