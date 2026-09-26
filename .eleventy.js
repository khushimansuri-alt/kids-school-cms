module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");

  // Force every page to use base.njk, no matter what the page's own
  // front matter says (or doesn't say). This protects us from Pages CMS
  // stripping the "layout" field when it saves a file.
  eleventyConfig.addGlobalData("layout", "base.njk");

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
