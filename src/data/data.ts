import { Data } from '@/types/data'

const data: Data = [
  { id: 1, name: 'Excalidraw', desc: '绘制手绘风格的流程图', url: 'https://excalidraw.com', tags: ['流程图'] },
  { id: 2, name: 'PDFREAL', desc: '实现 PDF 合并、分割、压缩、转换、水印等多种功能', url: 'https://pdfreal.com', tags: ['文档处理', 'PDF'] },
  { id: 3, name: 'Smallpdf', desc: '实现 PDF 转换、合并、压缩、编辑等多种功能', url: 'https://smallpdf.com', tags: ['文档处理', 'PDF'] },
  { id: 4, name: 'Regex-Vis', desc: '正则表达式可视化，实时查看输入的正则解释', url: 'https://regex-vis.com', tags: ['开发', '正则'] },
  {
    id: 5,
    name: 'Cool Backgrounds',
    desc: '生成简单朴素风格的背景图',
    url: 'https://coolbackgrounds.io',
    tags: ['图片', '设计', '背景', '插画']
  },
  { id: 6, name: 'Magdeleine', desc: '免费的照片分享站', url: 'https://magdeleine.co', tags: ['图片', '背景'] },
  { id: 7, name: 'Unsplash', desc: '免费的照片分享站', url: 'https://unsplash.com', tags: ['图片', '背景'] },
  { id: 8, name: 'Dribbble', desc: '高质量的创作设计社交分享站', url: 'https://dribbble.com', tags: ['图片', '设计', '背景', '插画'] },
  { id: 9, name: 'freepik', desc: '免费的插画分享站', url: 'https://undraw.co/illustrations', tags: ['图片', '插画'] },
  { id: 10, name: 'Humaaans', desc: '免费的插画分享站', url: 'https://www.humaaans.com', tags: ['图片', '插画'] },
  { id: 11, name: 'Open Doodles', desc: '免费的插画分享站', url: 'https://www.opendoodles.com', tags: ['图片', '插画'] },
  { id: 12, name: 'Pexels', desc: '免费的照片分享站', url: 'https://www.pexels.com', tags: ['图片', '背景'] },
  { id: 13, name: 'Picography', desc: '免费的照片分享站', url: 'https://picography.co', tags: ['图片', '背景'] },
  { id: 14, name: 'DOTOWN', desc: '免费的像素画分享', url: 'https://dotown.maeda-design-room.net', tags: ['图片', '像素画', '插画'] },
  { id: 15, name: 'blush', desc: '免费的插画分享站，可在线创建自定义形象', url: 'https://blush.design', tags: ['图片', '插画'] },
  {
    id: 16,
    name: 'NGINXConfig',
    desc: '在线生成 NGINX 配置',
    url: 'https://www.digitalocean.com/community/tools/nginx',
    tags: ['开发', 'NGINX']
  },
  { id: 17, name: 'DiG GUI', desc: '在线版的 dig 命令', url: 'https://www.diggui.com', tags: ['开发', 'dig'] },
  { id: 18, name: 'Anon Addy', desc: '邮件转发，可惜免费版不能自定义邮件名', url: 'https://anonaddy.com', tags: ['邮件'] },
  { id: 19, name: 'draw.io', desc: '绘制标准的流程图，功能非常丰富', url: 'https://app.diagrams.net', tags: ['流程图'] },
  { id: 20, name: 'isoflow.io', desc: '绘制流程示意图，主要是网络拓扑展示', url: 'https://isoflow.io', tags: ['流程图'] },
  { id: 21, name: 'Carbon', desc: '把代码转成好看的图片', url: 'https://carbon.now.sh', tags: ['开发', '代码转图'] },
  { id: 22, name: 'Codeimg', desc: '把代码转成好看的图片', url: 'https://codeimg.io', tags: ['开发', '代码转图'] },
  { id: 23, name: 'asciiflow', desc: '使用 ASCII 绘制流程图，可以直接粘贴文本出来', url: 'https://asciiflow.com', tags: ['流程图'] },
  { id: 24, name: 'Debuggex', desc: '正则表达式在线调试', url: 'https://www.debuggex.com', tags: ['开发', '正则'] },
  { id: 25, name: 'Happy Hues', desc: '提供大量配色方案可以选择', url: 'https://www.happyhues.co', tags: ['配色'] },
  { id: 26, name: 'Picular', desc: '根据输入的名字提供配色方案，但是好像不是太准', url: 'https://picular.co', tags: ['配色'] },
  { id: 27, name: 'Shields.io', desc: '在线生成项目的标签，比如代码覆盖率、大小、协议、版本等', url: 'https://shields.io', tags: ['开发', '标签'] },
  {
    id: 28,
    name: 'UI BUTTONS',
    desc: '使用 CSS 完成按钮的各种动效设计',
    url: 'https://ui-buttons.web.app',
    tags: ['开发', '动效', 'CSS', '按钮']
  },
  {
    id: 29,
    name: 'reveal.js',
    desc: '使用 Markdown 来制作 PPT',
    url: 'https://revealjs.com',
    tags: ['开发', 'PPT', 'Markdown']
  },
  {
    id: 30,
    name: '档铺',
    desc: '在线文档转换，如 Word 转 HTML，Excel 合并，PPT 转图片等',
    url: 'http://www.docpe.com',
    tags: ['文档处理', 'Word', 'Excel', 'PPT', 'PDF']
  },
  {
    id: 31,
    name: 'the right way to curl the weather!',
    desc: '可以在命令行中查看的天气预报',
    url: 'https://wttr.in',
    tags: ['天气', '命令行']
  },
  { id: 32, name: 'Lorem Picsum', desc: '宠物、风景风格的图片占位符', url: 'https://picsum.photos', tags: ['开发', '图片', '占位符'] },
  {
    id: 33,
    name: 'Lorem Picsum',
    desc: '各种浏览器 CSS/JS HACK 写法，非常全面',
    url: 'http://browserhacks.com',
    tags: ['开发', 'HACK']
  },
  {
    id: 34,
    name: 'Lorem Picsum',
    desc: '查看 NPM 包各个版本的大小尺寸以及下载速度',
    url: 'https://bundlephobia.com',
    tags: ['开发', 'NPM']
  },
  { id: 35, name: 'Badgen', desc: '在线生成项目的标签，比如代码覆盖率、大小、协议、版本等', url: 'https://badgen.net', tags: ['开发', '标签'] },
  {
    id: 36,
    name: 'SCREEN SIZ.ES',
    desc: '查询各个移动、平板设备屏幕分辨率等信息，不过更新不是很快',
    url: 'https://screensiz.es',
    tags: ['开发', '设备', '屏幕']
  },
  { id: 37, name: 'CSS LAYOUT', desc: '使用 CSS 完成网页各种组件设计', url: 'https://csslayout.io', tags: ['开发', 'CSS', '布局'] },
  {
    id: 38,
    name: 'CSS Gradient',
    desc: '可视化 CSS 渐变设计，此外还提供背景渐变等设计',
    url: 'https://cssgradient.io',
    tags: ['开发', 'CSS', '渐变']
  },
  {
    id: 39,
    name: 'Polyfill.io',
    desc: '生成在线的官方 polyfill 文件 URL，可以自动对不同浏览器返回不同内容',
    url: 'https://polyfill.io/v3/url-builder',
    tags: ['开发', 'polyfill']
  },
  {
    id: 40,
    name: 'PlanetScale',
    desc: '数据库托管平台，有免费的版本',
    url: 'https://planetscale.com',
    tags: ['开发', '数据库']
  }

]

export default data
