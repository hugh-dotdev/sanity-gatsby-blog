export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62de4482a363657f4c531634",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-i9ufkezj",
                  apiId: "b13bcc3c-75c7-481a-9d14-3e02bdb280bd",
                },
                {
                  buildHookId: "62de44834c2bea7eabaabcf4",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-byp8yydh",
                  apiId: "a4438f81-e9e6-4d90-a9f0-8eb59dfc2c50",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/hugh-dotdev/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-byp8yydh.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
