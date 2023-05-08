import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      text: "如何使用",
      icon: "creative",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文章",
      icon: "note",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
    "slides",
  ],
  "/zh/navbar/": [
    {
      text: "自定义侧边栏1",
      icon: "structure",
      children: [
        { text: '1、页面1-page1', icon: "waline", link: 'page1.md' },
        { text: '2、页面2-page2', icon: "waline", link: 'page2.md' },
        { text: '3、页面3-page3', icon: "waline", link: 'page3.md' },
      ],
    },
    {
      text: "自定义侧边栏2",
      icon: "software",
      children: [
        { text: '1、页面1-page1', icon: "waline", link: 'page1.md' },
        { text: '2、页面2-page2', icon: "waline", link: 'page2.md' },
        { text: '3、页面3-page3', icon: "waline", link: 'page3.md' },
      ],
    },
  ],
});
