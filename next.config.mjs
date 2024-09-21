import path from 'path'
/** @type {import('next').NextConfig} */
const nextConfig = {
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
}

export default nextConfig
