import * as path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  resolve: {
    alias: {
      "uezui-taro-vue": path.join(__dirname, "./components"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {},
    },
  },
  plugins: [
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
      mergeProps: false,
      enableObjectSlots: false,
    }),
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
  ],
});
