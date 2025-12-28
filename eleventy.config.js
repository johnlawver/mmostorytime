module.exports = function (eleventyConfig) {
  // Pass through the Graffiti CSS/JS if you have local files,
  // or we can load them via CDN in the HTML.

  // Return your config settings
  return {
    dir: {
      input: "src",
      output: "_site",
      data: "_data",
    },
  };
};
