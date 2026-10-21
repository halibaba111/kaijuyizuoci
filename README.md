# 开局一座祠，家族全靠我

买良田、考状元、娶娇妻 —— 我家族业自己拼。

一款中式家族经营题材的 H5 网页游戏：从一座祠堂起步，安排族人读书、习武、经商、成婚、生育，在一次次科举、灾荒与家族变故中把家业传下去。

## 在线游玩

部署到 GitHub Pages 后可直接打开：

<https://halibaba111.github.io/kaijuyizuoci/>

## 本地运行

本项目是已经构建好的纯静态站点，无需安装依赖或编译，只要用任意静态文件服务器打开根目录即可：

```bash
# 任选一种
python -m http.server 8080
npx serve .
```

然后访问 <http://localhost:8080/>。

> 直接双击 `index.html`（`file://` 协议）可能因浏览器模块限制而无法运行，请使用本地服务器。

## 项目结构

```text
.
├─ index.html                 # 游戏入口
├─ favicon.svg                # 站点图标
├─ icon-2048.png              # 2048×2048 商店图标
├─ assets/                    # 构建产物：脚本、样式、美术与音效
│  ├─ index-*.js              # 游戏主逻辑
│  ├─ index-*.css             # 游戏样式
│  ├─ backgrounds/            # 场景背景
│  ├─ portraits/              # 人物立绘与头像
│  ├─ icons/                  # 资源与产业图标
│  ├─ ui/                     # 界面素材
│  └─ sounds/                 # 音效与背景音乐
└─ lamps/                     # Lamps 开放平台激励视频桥接脚本
```

## 广告与平台说明

`lamps/` 下是 Lamps 开放平台的激励视频桥接脚本，仅在平台容器内生效；在普通浏览器或 GitHub Pages 中会安全降级，不影响游戏主流程。

- 作品 ID（workSessionId）：`5456299a-91dc-40f7-9f89-1400ba1da8b8`
- 脚本加载顺序：`reward-ad-config.js` → `reward-ad-bridge.js` → `reward-ad-platform.js`

## 部署

推送到 `main` 分支后，在仓库 **Settings → Pages** 中选择：

- Source：`Deploy from a branch`
- Branch：`main` / `(root)`

发布完成后即可通过 <https://halibaba111.github.io/kaijuyizuoci/> 访问。

## 版权

游戏内容与美术素材版权归项目作者所有，未经许可请勿用于商业用途。
