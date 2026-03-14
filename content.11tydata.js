import slugify from "@sindresorhus/slugify";
export default {
  layout: "page",
  eleventyComputed: {
    permalink: (data) => {
      // Respect frontmatter override
      if (data.permalink) return data.permalink;

      const slug = slugify(data.title || data.page.fileSlug, {
        lower: true,
        strict: true,
      });

      if (!data.page.date) return `/${slug}/`;

      const date = new Date(data.page.date);

      const yyyy = date.getFullYear();
      const mm = String(date.getMonth() + 1).padStart(2, "0");
      const dd = String(date.getDate()).padStart(2, "0");

      return `/${yyyy}/${mm}/${dd}/${slug}/`;
    },
  },
};
