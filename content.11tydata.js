export default {
  layout: "page",
  eleventyComputed: {
    // tags: (data) => {
    //   // normalize tags to an array
    //   const input = Array.isArray(data.tags)
    //     ? data.tags
    //     : [data.tags].filter(Boolean);

    //   const expanded = new Set();

    //   input.forEach((tag) => {
    //     if (typeof tag !== "string") return;

    //     // keep the original tag
    //     expanded.add(tag);

    //     // expand hierarchical tags
    //     if (tag.includes("/")) {
    //       const parts = tag.split("/");
    //       let current = "";

    //       parts.forEach((part) => {
    //         current = current ? current + "/" + part : part;
    //         expanded.add(current);
    //       });
    //     }
    //   });

    //   return [...expanded];
    // },
    permalink: (data) => {
      // Respect frontmatter permalink
      if (data.permalink) {
        return data.permalink;
      }

      const parts = data.page.filePathStem
        .replace(/^\/?content\//, "")
        .split("/")
        .map((p) => p.toLowerCase().replace(/\s+/g, "-"));

      return `${parts.join("/")}/`;
    },
  },
};
