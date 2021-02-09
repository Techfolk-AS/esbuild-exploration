// scripts/start.ts

import { build } from "esbuild";
import { watch } from "chokidar";
import { commonBuildOptions, paths } from "./common";
import liveServer from "live-server";
import { promises } from "fs";

(async () => {
  await promises.rmdir(paths.outDev, { recursive: true });
  await promises.mkdir(paths.outDev);
  await promises.copyFile(paths.index, `${paths.outDev}/index.html`);

  const builder = await build({
    ...commonBuildOptions,
    outdir: paths.outDev,
    sourcemap: false,
    incremental: true,
  });

  watch("src/**/*.(ts|tsx|css)").on("all", () => {
    builder.rebuild();
  });

  liveServer.start({
    root: paths.outDev,
    port: 3000,
    host: "localhost",
    logLevel: 0,
  });
})();
