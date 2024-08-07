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
          },
        },
      ],
    })

    return config
  },
}

export default nextConfig
