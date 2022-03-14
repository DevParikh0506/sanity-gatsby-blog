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
                    "622f48823fd1ba0d1ef0a9c0",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-93vw42kf",
                  apiId: "18510572-255e-4c76-900a-b4faf68f35e1",
                },
                {
                  buildHookId: "622f4882636d99146fd401f1",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-to2c7jcn",
                  apiId: "96ca0cf5-1311-4264-ab51-8d5114d14aae",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/dev0506/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-to2c7jcn.netlify.app",
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
