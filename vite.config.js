import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";

const VERSION = "1.1.1";

export default defineConfig({
    plugins: [
        laravel(["resources/js/app.js"]),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    resolve: {
        alias: {
            "@": "/resources/js",
        },
    },
    build: {
        rollupOptions: {
          output: {
              entryFileNames: `[name].${VERSION}.js`,
              chunkFileNames: `[name].${VERSION}.js`,
              assetFileNames: `[name].${VERSION}.[ext]`
          }
        }
    },
});
