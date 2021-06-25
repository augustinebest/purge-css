// import Purgecss from 'purgecss'
// const Purgecss = require("purgecss");
// const purgecss = new Purgecss({
//   content: ["src/App.js"],
//   css: ["src/App.css"],
// });
// const purgecssResult = purgecss.purge()

const { PurgeCSS } = require("purgecss");
const purgeCSSResult = new PurgeCSS().purge({
  content: ["src/App.js"],
  css: ["src/App.css"],
  output: "build/assets",
});

purgeCSSResult.then((res) => {
  console.log(res);
});
