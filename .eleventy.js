module.exports = function(eleventyConfig) {
  // Pass through any assets if needed
  eleventyConfig.addPassthroughCopy("src/assets");

  // Pass through PWA files
  eleventyConfig.addPassthroughCopy("src/manifest.json");
  eleventyConfig.addPassthroughCopy("src/sw.js");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    }
  };
};
