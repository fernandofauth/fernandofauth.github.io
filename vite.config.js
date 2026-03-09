import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { viteSingleFile } from "vite-plugin-singlefile"

export default defineConfig(({ mode }) => {
  const isSingleFileBuild = mode === "single"

  return {
    plugins: [react(), isSingleFileBuild ? viteSingleFile() : null].filter(Boolean),
    // Use relative asset URLs so the built site works when opened directly
    // (file://) and when hosted under a sub-path.
    base: "./",
    build: isSingleFileBuild
      ? {
        cssCodeSplit: false,
        assetsInlineLimit: Number.MAX_SAFE_INTEGER,
      }
      : undefined,
  }
})
