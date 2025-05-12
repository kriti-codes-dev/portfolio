import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Replace 'your-repo-name' with the actual repo name on GitHub
export default defineConfig({
 base: "/portfolio/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
