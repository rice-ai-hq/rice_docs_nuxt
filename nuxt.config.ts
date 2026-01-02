export default defineNuxtConfig({
  site: {
    name: 'Rice',
    url: 'https://docs.tryrice.com',
  },
  llms: {
    domain: 'docs.tryrice.com',
  },
  app: {
    head: {
      script: [
        {
          defer: true,
          src: 'https://cloud.umami.is/script.js',
          'data-website-id': '617904df-11ac-44ca-9878-79b6fcb7c1cc',
        },
      ],
    },
  },
})
