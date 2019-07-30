var scrollBehavior = function(to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  var position = false;

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 };
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 };
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition;
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once("triggerScroll", () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash;
        // CSS.escape() is not supported with IE and Edge.
        if (
          typeof window.CSS !== "undefined" &&
          typeof window.CSS.escape !== "undefined"
        ) {
          hash = "#" + window.CSS.escape(hash.substr(1));
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash };
          }
        } catch (e) {
          console.warn(
            "Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape)."
          );
        }
      }
      resolve(position);
    });
  });
};

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "Ribbon Blockchain",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      },
      { name: "msapplication-TileColor", content: "#ffffff" },
      {
        name: "msapplication-TileImage",
        content: "/favicon/ms-icon-144x144.png"
      },
      { name: "theme-color", content: "#ffffff" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", type: "text/css", href: "styles/bootstrap.min.css" },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "styles/material-kit.min.css"
      },
      { rel: "stylesheet", type: "text/css", href: "styles/aos.css" },
      { rel: "stylesheet", type: "text/css", href: "styles/normalize.css" },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "styles/owl.carousel.min.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "styles/owl.theme.default.min.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "styles/magnific-popup.css"
      },
      { rel: "stylesheet", type: "text/css", href: "styles/swiper.css" },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://use.fontawesome.com/releases/v5.0.8/css/all.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "styles/animation-spin.css"
      },
      { rel: "stylesheet", type: "text/css", href: "styles/style.css" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Hind:300,400,500,600,700"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Work+Sans:400,500,600,700,900"
      },
      {
        rel: "apple-touch-icon",
        sizes: "57x57",
        href: "/favicon/apple-icon-57x57.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "60x60",
        href: "/favicon/apple-icon-60x60.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "72x72",
        href: "/favicon/apple-icon-72x72.png"
      },
      {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "/favicon/apple-icon-144x144.png"
      },
      {
        rel: "manifest",
        href: "/favicon/manifest.json"
      }
    ],
    script: [
      {
        src: "/scripts/jquery-1.12.4.min.js",
        type: "text/javascript"
      },
      {
        src: "/scripts/vendor/bootstrap.min.js",
        type: "text/javascript"
      },
      {
        src: "/scripts/vendor/popper.min.js",
        type: "text/javascript"
      },
      {
        src: "/scripts/vendor/bootstrap-material-design.min.js",
        type: "text/javascript"
      },
      {
        src: "/scripts/vendor/material-kit.min.js",
        type: "text/javascript"
      },
      {
        src: "/scripts/vendor/aos.js",
        type: "text/javascript"
      },
      {
        src: "/scripts/vendor/owl-carousel.js",
        type: "text/javascript"
      },
      {
        src: "/scripts/vendor/isotop.js",
        type: "text/javascript"
      },
      {
        src: "/scripts/vendor/magnifice-js.js",
        type: "text/javascript"
      },
      {
        src: "/scripts/vendor/swiper.js",
        type: "text/javascript"
      },
      {
        src: "/scripts/vendor/easing.js",
        type: "text/javascript"
      },
      {
        src: "/scripts/vendor/modernizr.js",
        type: "text/javascript"
      },
      {
        src: "/scripts/main.js",
        type: "text/javascript"
      }
    ]
  },
  router: {
    scrollBehavior: function(to, from, savedPosition) {
      return { x: 0, y: 0 };
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  // modules: ['@nuxtjs/eslint-module'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
