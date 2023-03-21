import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  //서버 설정
  server: {
    //서버 port 번호
    port: 3000,
    strictPort: true,
    //proxy 설정
    proxy: {
      //proxy 요청을 보낼 api의 시작 부분
      "/api": {
        //proxy 요청을 보낼 서버의 주소
        target: "http://theme.sunflower.kr/wp-json/wp/v2",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  css: {
    devSourcemap: true,
  },
});
