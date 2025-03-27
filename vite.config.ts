import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/MapmyRealm/",
  resolve: {
    alias: {
      routes: resolve(__dirname, "./src/routes"),
      components: resolve(__dirname, "./src/components"),
    },
  },
});
