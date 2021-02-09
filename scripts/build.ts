// scripts/build.ts

import { build } from "esbuild";
import { promises } from "fs";
import { commonBuildOptions, paths } from "./common";

promises.rmdir(paths.out, { recursive: true });

build({
  ...commonBuildOptions,
  outdir: paths.out,
  define: { ["process.env.NODE_ENV"]: '"production"' },
  minify: true,
  sourcemap: true,
}).then(() => {
  promises.copyFile(paths.index, `${paths.out}/index.html`);
});
