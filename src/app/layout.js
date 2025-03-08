import "./globals.css"

export const metadata = {
  title: "网址收藏导航",
  description: "一个简洁美观的网址收藏导航工具，支持标签筛选和关键词搜索",
  keywords: ["网址导航", "收藏夹", "在线工具", "开发工具", "设计资源"],
  authors: [{ name: "FridayCoder" }]
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
      </body>
    </html>
  )
}
