import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: [
      "react",
      "react-dom",
      "three",
      "@react-three/fiber",
      "@react-three/drei",
      "@react-three/postprocessing",
    ],
  },
  optimizeDeps: {
    include: [
      "three",
      "@react-three/fiber",
      "postprocessing",
      "@react-three/postprocessing",
    ],
    exclude: ["@react-three/fiber"], // important: avoid a second prebundle copy
  },
});
