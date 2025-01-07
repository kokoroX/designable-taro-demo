import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginImp from 'vite-plugin-imp'


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
      vitePluginImp({
        libList: [
          // {
          //   libName: 'lodash',
          //   libDirectory: '',
          //   camel2DashComponentName: false
          // },
          {
            libName: '@antmjs/vantui',
            style(name) {
              // use less
              return `@antmjs/vantui/es/${name}/style`
            }
          },
        ]
      }),
      react()
    ],
  }
})
