/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Next.js 13+ 版本支持的静态导出方式
  images: {
    unoptimized: true, // 让 `next/image` 也能支持静态导出
  },
}

export default nextConfig