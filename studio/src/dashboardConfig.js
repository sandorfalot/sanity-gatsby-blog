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
                    "60b66c53d539eb00b18a2b8b",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-sueswv8c",
                  apiId: "f7d9700b-e294-435b-a388-87c94f0f37ed",
                },
                {
                  buildHookId: "60b66c53f1c9360099f5291d",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-dyccicrz",
                  apiId: "5f1b9bdd-60ca-4956-a8bc-53e21a750426",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/sandorfalot/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-dyccicrz.netlify.app",
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
