import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app2",
      filename: "remoteEntry.js",
      exposes: { "./App": "./src/App.tsx" },
      remotes: {
        shell:
          "https://mitkoarsov.github.io/microfrontends-parent/assets/remoteEntry.js",
      },
      shared: [
        "react",
        "react-dom",
        "react-redux",
        "@reduxjs/toolkit",
        "use-sync-external-store",
        "@mui/material",
        "@emotion/react",
        "@emotion/styled",
      ],
    }),
  ],
  // server: { port: 5175, strictPort: true, cors: true },
  // preview: {
  //   port: 5175,
  //   strictPort: true,
  //   headers: { "Access-Control-Allow-Origin": "*" },
  // },
  // optimizeDeps: {
  //   exclude: ["shell", "shell/global"],
  //   include: [
  //     "react",
  //     "react-dom",
  //     "react-redux",
  //     "@reduxjs/toolkit",
  //     "use-sync-external-store",
  //     "use-sync-external-store/shim",
  //     "use-sync-external-store/shim/with-selector",
  //     "use-sync-external-store/with-selector",
  //   ],
  // },
  resolve: {
    dedupe: ["react", "react-dom", "react-redux", "use-sync-external-store"],
  },
  // build: {
  //   target: "esnext",
  //   modulePreload: false,
  //   chunkSizeWarningLimit: 1500,
  // },
});
