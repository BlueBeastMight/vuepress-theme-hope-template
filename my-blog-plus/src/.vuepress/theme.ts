import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "www.chiou.icu",
  favicon: "/favicon.ico",
  logo: "/logo.gif",
  logoDark:"/logoDark.gif",
  iconAssets: "iconfont",
  repo: "https://github.com/BlueBeastMight",
  author: {
    name: "chiou",
    url: "http://redflavor.github.io",
  },
  blog: {
    name: 'chiou',
    avatar: '/profile.jpg',
    roundAvatar: true,
    description: "一个后端开发者",
    medias: {
      Email: "https://example.com",
      BiliBili: "https://example.com",
      GitHub: "https://example.com",
      Gmail: "https://example.com",
      QQ: "https://example.com",
      Wechat: "https://example.com",
      Baidu: "https://example.com",
      Bitbucket: "https://example.com",
      Dingding: "https://example.com",
      Discord: "https://example.com",
      Dribbble: "https://example.com",
      Evernote: "https://example.com",
      Facebook: "https://example.com",
      Flipboard: "https://example.com",
      Gitee: "https://example.com",
      Gitlab: "https://example.com",
      Instagram: "https://example.com",
      Lark: "https://example.com",
      Lines: "https://example.com",
      Linkedin: "https://example.com",
      Pinterest: "https://example.com",
      Pocket: "https://example.com",
      Qzone: "https://example.com",
      Reddit: "https://example.com",
      Rss: "https://example.com",
      Steam: "https://example.com",
      Twitter: "https://example.com",
      Weibo: "https://example.com",
      Whatsapp: "https://example.com",
      Youtube: "https://example.com",
      Zhihu: "https://example.com",
    },
  },

  locales: {
    "/": {
      // navbar
      navbar: zhNavbar,
      // sidebar
      sidebar: zhSidebar,
      footer: "ICP备案号: <a href='https://beian.miit.gov.cn/' target='_blank' rel='noopener'>赣ICP备2023003426号-1</a>",
      displayFooter: true,
      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  //加密页面
  encrypt: {
    config: {
      // "/framework/simple/logger/": ["1234"],
    },
  },

  plugins: {
    'prismjs': {
      light: 'one-dark',
      dark: 'one-dark'
    },
    //启用博客
    blog: true,
    //版权信息
    copyright: true,
    //网站评论和浏览量
    // comment: {
    //   provider: "Waline",
    //   pageview: true,
    //   serverURL: "xxxxxx",
    // },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,

      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
  },
});