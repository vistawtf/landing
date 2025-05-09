import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import node from "@astrojs/node";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  output: "server",

  integrations: [react()],

  adapter: node({
    mode: "standalone",
  }),

  server: {
    host: "0.0.0.0",
  },
});