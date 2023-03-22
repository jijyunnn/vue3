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
    port: 3001,
    //포트가 이미 사용 중일 경우, 사용 가능한 다음 포트를 자동으로 시도하지 않도록 하려면 true로 설정
    strictPort: true,
    //proxy 설정
    proxy: {
      //proxy 요청을 보낼 api의 시작 부분
      "/api": {
        //proxy 요청을 보낼 서버의 주소
        target: "http://theme.sunflower.kr/wp-json/wp/v2",
        //http-proxy 모듈의 설명과 같이 대상 서버 구성에 따라 호스트 헤더가 변경되도록 설정
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  css: {
    devSourcemap: true,
  },
});
