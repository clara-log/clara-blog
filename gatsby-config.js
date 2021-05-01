module.exports = {
  siteMetadata: {
    title: `Clara Blog`,
    name: `Clara Blog`,
    siteUrl: `https://clarayun.space`,
    description: `클라라의 생각과 경험을 기록합니다.`,
    hero: {
      heading: `클라라의 블로그입니다`,
      maxWidth: 652,
    },
    social: [
      {
        name: `github`,
        url: `https://github.com/clara-log`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/jihyunclara`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/jihyun-yun/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Clara Blog`,
        short_name: `Clara`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
