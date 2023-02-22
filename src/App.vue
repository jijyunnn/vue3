<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      {{ message }}
      <hr />
      {{ a }}

      <div v-if="loaded === false">loading</div>
      <ul v-else>
        <li v-for="(item, index) in list" :key="index">
          {{ item.id }}
        </li>
      </ul>

      <!--      <pre>{{ list }}</pre>-->

      <button @click="click">button</button>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  components: {
    HelloWorld,
  },
  data() {
    return {
      loaded: true,
      message: "안녕하세요",
      list: [],
    };
  },
  props: {},
  computed: {
    a() {
      if (this.message === "hi") {
        return "00000";
      } else {
        return "11111";
      }
    },
  },
  watch: {
    message(value) {
      console.log("---------", value);
    },
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {
    console.log(this.message);

    // this.init();
  },
  unmounted() {},
  beforeUnmount() {},
  methods: {
    init() {
      this.loaded = false;
      fetch("https://reqres.in/api/users?per_page=5")
        .then((response) => response.json())
        .then(({ data }) => {
          this.list = data;
          this.loaded = true;
        });
    },
    click() {
      this.message = "hi";
      this.init();
    },
  },
};
</script>
<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
