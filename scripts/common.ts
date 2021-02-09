import { BuildOptions } from "esbuild";
import { resolve } from "path";

const root = process.cwd();

export const paths = {
  entry: resolve(root, "./src/index.tsx"),
  cssEntry: resolve(root, "./src/index.css"),
  index: resolve(root, "./public/index.html"),
  out: resolve(root, "./dist"),
  outDev: resolve(root, "./local"),
};

export const commonBuildOptions: BuildOptions = {
  entryPoints: [paths.entry],
  bundle: true,
  color: true,
  loader: {
    ".svg": "file",
  },
};
