const productIconKey = "analytics";

module.exports = {
  product: "Analytics",
  pathPrefix: "/analytics",
  productIconKey,
  contentRepo: "cloudflare/cloudflare-docs",
  contentRepoFolder: "products/analytics",
  logoSVGContent: '<svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M23.2499 39C19.7986 39.0013 16.4641 37.7495 13.8662 35.4773C11.2683 33.2051 9.58364 30.067 9.12533 26.6462C8.66702 23.2253 9.46621 19.7545 11.3744 16.8785C13.2826 14.0026 16.1699 11.9173 19.4999 11.01V7.9125C16.4834 8.58434 13.7028 10.0542 11.4488 12.1684C9.19477 14.2827 7.55012 16.9636 6.68678 19.931C5.82345 22.8984 5.77314 26.0432 6.54112 29.0366C7.3091 32.0301 8.86716 34.7623 11.0524 36.9475C13.2377 39.1328 15.9698 40.6908 18.9633 41.4588C21.9568 42.2268 25.1016 42.1765 28.069 41.3132C31.0363 40.4498 33.7173 38.8052 35.8315 36.5511C37.9457 34.2971 39.4156 31.5165 40.0874 28.5H36.9899C36.1597 31.51 34.3673 34.1656 31.8864 36.0615C29.4055 37.9574 26.3723 38.9894 23.2499 39Z" /><path d="M23.9999 4.5L22.4999 6V24L23.9999 25.5H41.9999L43.4999 24C43.4942 18.83 41.4379 13.8735 37.7822 10.2178C34.1265 6.56206 29.1699 4.50576 23.9999 4.5ZM25.4999 22.5V7.5675C29.3401 7.92344 32.9349 9.61101 35.6619 12.338C38.3889 15.0651 40.0765 18.6599 40.4324 22.5H25.4999Z" /></svg>',
  externalLinks: [
    {
      title: "Cloudflare homepage",
      url: "https://cloudflare.com",
    },
  ],
  search: {
    indexName: "developers-cloudflare",
    apiKey: "b23088ab4d346409f9d3ece6606344c3",
    algoliaOptions: { facetFilters: '["project:analytics"]' },
  },
  siteMetadata: {
    title: "Cloudflare Analytics docs",
    description: "With the GraphQL Analytics API, all of your performance, security, and reliability data is available from one endpoint. And you can select exactly what you need, from one metric for a domain to multiple metrics aggregated for your account.",
    author: "@cloudflare",
    url: "https://developers.cloudflare.com/analytics",
    image: "https://www.cloudflare.com/img/cf-twitter-card.png",
  },
};