import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "GitHub Copilot ハンズオン",
  description: "VS Code Conference Japan 2024",
  base: "/conf-2024-hands-on-textbook/",
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "イベントページ",
        items: [
          {
            text: "Webサイト",
            link: "https://vscodejp.github.io/conference-2024/",
          },
          {
            text: "connpass カンファレンスページ",
            link: "https://vscode.connpass.com/event/308890/",
          },
          {
            text: "connpass ハンズオンページ",
            link: "https://vscode.connpass.com/event/313606/",
          },
        ],
      },
      {
        text: "GitHub",
        items: [
          {
            text: "テキスト",
            link: "https://github.com/vscodejp/conf-2024-hands-on-textbook",
          },
          {
            text: "ソースコード",
            link: "https://github.com/vscodejp/conf-2024-hands-on-codebase",
          },
        ],
      },
    ],

    sidebar: [
      {
        text: "テキスト",
        items: [
          {
            text: "Getting Started",
            link: "/getting-started",
          },
          {
            text: "Practice",
            link: "/practice",
          },
          {
            text: "Nuxt3によるブログ作成",
            link: "/sample-article",
          },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "discord",
        link: "https://discord.gg/p9UMpyEe7P",
      },
      {
        icon: "github",
        link: "https://github.com/vscodejp",
      },
    ],
  },
});
