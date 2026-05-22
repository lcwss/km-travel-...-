# 🗺️ 长沙旅行攻略 — 3天深度游

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/zh-CN/docs/Web/HTML)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-online-brightgreen)](http://47.106.110.251)

一份精心策划的长沙3日旅行攻略，纯静态页面，开箱即用。每天6个景点，覆盖美食、人文、山水，附带可交互的SVG手绘风格路线地图。

> 🔗 **在线预览**：[http://47.106.110.251](http://47.106.110.251)

## 🗓️ 3日行程概览

| 日期 | 主题 | 主要景点 |
|------|------|----------|
| **Day1** 周四 | 🏮 老城烟火线 | 五一广场 → 太平老街 → 坡子街 → 杜甫江阁 → 南门口 → 相声社 |
| **Day2** 周五 | ⛰️ 山水人文线 | 橘子洲 → 岳麓山 → 岳麓书院 → 爱晚亭 → 麓山南路 → 后湖 |
| **Day3** 周六 | 🏺 文化休闲线 | 潮宗街 → 荷花池市场 → 古开福寺 → 湖南博物院 → 万家丽 → 扬帆夜市 |

每个景点都标注了交通方式、建议游玩时长和参考价格。

## ✨ 功能特性

- **可交互路线地图** — SVG 手绘风格，点击按钮切换 Day1/Day2/Day3/全览，路线及景点动态渲染
- **天气信息** — 3天天气预报卡片，渐变色区分每一天
- **出行建议** — 每个行程日附带交通方式和总距离参考
- **实用贴士** — 预约提醒、错峰建议、拍照机位、美食红黑榜
- **响应式适配** — 桌面端卡片网格布局，移动端横滑+压缩排版

## 🚀 快速开始

### 本地预览

```bash
git clone https://github.com/<your-username>/km-travel.git
cd km-travel
# 直接用浏览器打开 index.html
```

### 启用 GitHub Pages

1. 仓库页面进入 **Settings → Pages**
2. Source 选择 `main` 分支，目录选 `/ (root)`
3. 保存后等待几秒，访问 `https://<your-username>.github.io/km-travel`

## 📁 项目结构

```
km-travel/
├── index.html      # 主页面
├── css/
│   └── style.css   # 样式（含响应式断点）
├── js/
│   └── map.js      # SVG地图渲染与交互逻辑
├── README.md
└── .gitignore
```

## 🛠️ 技术栈

纯 HTML / CSS / JavaScript，零依赖，零构建步骤。SVG 地图数据在 JS 中以坐标点 + 路径数组驱动渲染。

## 📄 License

MIT — 随意 fork、修改、用于个人或商业用途。
