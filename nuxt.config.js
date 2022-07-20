export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "GOLDTOWN",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
      {
        name: "google-site-verification",
        content: "u_37E3Rpb4SfMxGXACc1o3y8lrb0htB95vvsCVlMqO4",
      },
      {
        property: "og:title",
        content: "Gold Town",
      },
      {
        property: "og:site_name",
        content: "Gold town",
      },
      {
        property: "og:url",
        content: "http://gt.org.ua/",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "facebook-domain-verification",
        content: "sxcn3qo36qjwihq5f7placcdo4a5gu",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@styles/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~plugins/vs-pagination", mode: "client" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/google-gtag",
    "@nuxtjs/gtm",
    [
      "nuxt-i18n",
      {
        //trailingSlashes: true,
        //trailingSlash: true,
        seo: true,
        detectBrowserLanguage: false,
        locales: [
          { code: "ru", iso: "ru-RU" },
          { code: "ua", iso: "uk-UA" },
        ],
        defaultLocale: "ua",
        baseUrl: "http://gt.org.ua",
        vueI18n: {
          fallbackLocale: "ua",
          messages: {
            ru: require("./lang/ru.json"),
            ua: require("./lang/ua.json"),
          },
        },
      },
    ],
    "@nuxtjs/sitemap",
    "@nuxtjs/redirect-module",
  ],
  // serverMiddleware: ["~/serverMiddleware/redirects"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  redirect: {
    rules: [
      {
        from: "/purchase/all",
        to: "/purchase/house",
        statusCode: 301,
      },
    ],
  },
  axios: {
    baseURL: "https://api.goldtowncompany.com",
  },
  gtm: {
    id: "GTM-MB7DQRJ",
  },
  sitemap: {
    path: "/sitemap.xml",
    hostname: "http://gt.org.ua/",
    gzip: true,
    i18n: true,
    routes: async () => {
      let routes = [];

      // let blogs = await axios.get(
      //   "https://zikzak.com.ua/hwp/wp-json/wp/v2/news?per_page=100&skip_cache=true&head_tags_skip_cache=true"
      // );
      // _.map(blogs.data, (post) => {
      //   routes.push(`/blog/${post.slug}`);
      //   routes.push(`/ru/blog/${post.slug}`);
      //   routes.push(`/en/blog/${post.slug}`);
      // })

      return routes;
    },
    // redirect: [
    //   {
    //     from: "/contacts",
    //     to: "/commerce/all",
    //     statusCode: 301,
    //   },
    // ],
  },

  "google-gtag": {
    id: "UA-228249365-1", // required
    config: {
      // this are the config options for `gtag
      // check out official docs: https://developers.google.com/analytics/devguides/collection/gtagjs/
      anonymize_ip: true, // anonymize IP
      send_page_view: false, // might be necessary to avoid duplicated page track on page reload
      linker: {
        domains: ["gt.org.ua", "goldtown.kiev.ua", "goldtowncompany.com"],
      },
    },
    debug: true, // enable to track in dev mode
    disableAutoPageTrack: false, // disable if you don't want to track each page route with router.afterEach(...)
    // optional you can add more configuration like [AdWords](https://developers.google.com/adwords-remarketing-tag/#configuring_the_global_site_tag_for_multiple_accounts)
    additionalAccounts: [
      {
        id: "UA-228249365-1", // required if you are adding additional IDs
        config: {
          send_page_view: false, // optional configurations
        },
      },
    ],
  },
};
