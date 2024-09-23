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
            { text: "Project 1", link: "/projects/project1" },
            { text: "Project 2", link: "/projects/project2" },
            { text: "Project 3", link: "/projects/project3" },
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
