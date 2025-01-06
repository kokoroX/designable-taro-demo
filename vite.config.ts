import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { createStyleImportPlugin } from 'vite-plugin-style-import'


// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    define: {
      'process.env.TARO_ENV': JSON.stringify(env.TARO_ENV),
      ENABLE_INNER_HTML: true,
      ENABLE_ADJACENT_HTML: true,
      ENABLE_CLONE_NODE: true,
      ENABLE_CONTAINS: true,
      ENABLE_SIZE_APIS: true,
      ENABLE_TEMPLATE_CONTENT: true,
      DEPRECATED_ADAPTER_COMPONENT: true,
    },
    plugins: [
      // createStyleImportPlugin({
      //   libs: [
      //     {
      //       libraryName: '@antmjs/vantui',
      //       esModule: true,
      //       resolveStyle: (name) => `@antmjs/vantui/es/${name}/style`,
      //     },
      //   ],
      // }), react()
      react()
    ],
  }
})
