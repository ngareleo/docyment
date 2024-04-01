async function init() {
  const defaultConfig = __dirname + "/archive/defaultConfigFile.ts";
  const config = await Bun.file(defaultConfig).text();
  Bun.write("./docyment.config.ts", config);
}

async function generate() {}

(function parseCli() {
  const argv = process.argv.slice(2);
  if (argv.includes("init")) {
    init();
  } else if (argv.includes("generate")) {
    generate();
  }
})();
