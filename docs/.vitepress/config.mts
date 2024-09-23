import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ted Birkland",
  lang: "en-US",
  description: "A VitePress Site",
  cleanUrls: false,
  rewrites: {
    "/projects": "/projects/index.md",
    "/blog": "/blog/index.md",
  },
  themeConfig: {
    nav: [
      { text: "🏠 Home", link: "/" },
      { text: "📃 Projects", link: "/projects/index" },
      { text: "📢 Blog", link: "/blog/index" },
      { text: "🧑 About", link: "/about" },
    ],

    sidebar: {
      "/projects/": [
        {
          text: "Projects",
          link: "/projects",
          collapsed: false,

          items: [
            { text: "ALS Helper", link: "/projects/als-helper" },
            { text: "Student Database in C++", link: "/projects/student-database" },
            { text: "Terminal Minesweeper", link: "/projects/terminal-minesweeper" },
            { text: "Concealed Crossings", link: "/projects/concealed-crossings" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/sephonix/portfolio" },
      { icon: "linkedin", link: "https://www.linkedin.com/in/ted-birkland/" },
      { icon: "instagram", link: "https://www.instagram.com/ted.mov/" },
      { icon: "youtube", link: "https://www.youtube.com/Sephonix/" },
    ],

    footer: {
      message: "Made with ❤️ by Ted Birkland",
      copyright: '© 2024 Sephonix. <a href="/privacy-policy">Privacy Policy</a>',
    },
    search: {
      provider: 'local'
    }
  },
  markdown: {
    math: true,
  },
});
