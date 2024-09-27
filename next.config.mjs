import { createRequire } from 'module' // Импортируем createRequire для использования require
import path from 'path'

const require = createRequire(import.meta.url) // Создаем require на основе текущего модуля

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Отключение строгого режима
  reactStrictMode: false,

  images: {
    domains: ['i.pinimg.com'], // Разрешите загрузку изображений с этого домена
  },

  webpack: (config, { isServer }) => {
    // Дополнительные настройки вебпака, если они нужны
    config.module.rules.push({
      test: /\.tgs$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            publicPath: '/_next',
            outputPath: 'static/chunks/',
            context: path.resolve(process.cwd(), 'src'),
            emitFile: !isServer,
          },
        },
      ],
    })

    return config
  },

  // Настройка postcss
  postcss: {
    plugins: {
      'postcss-custom-properties-fallback': {
        importFrom: require.resolve('react-spring-bottom-sheet/defaults.json'),
      },
    },
  },
}

export default nextConfig
