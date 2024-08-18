import path from 'path'

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Добавляем правило для обработки файлов .tgs
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
