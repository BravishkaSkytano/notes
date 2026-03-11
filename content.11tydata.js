export default {
  layout: "page",
  eleventyComputed: {
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
