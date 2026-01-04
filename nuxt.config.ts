export default defineNuxtConfig({
  site: {
    name: "Slate",
    url: "https://docs.tryrice.com",
  },
  llms: {
    domain: "docs.tryrice.com",
  },
  content: {
    build: {
      markdown: {
        highlight: {
          langs: [
            "typescript",
            "javascript",
            "python",
            "bash",
            "json",
            "yaml",
            "markdown",
          ],
        },
      },
    },
  },
  app: {
    head: {
      script: [
        {
          defer: true,
          src: "https://cloud.umami.is/script.js",
          "data-website-id": "617904df-11ac-44ca-9878-79b6fcb7c1cc",
        },
      ],
    },
  },
});
