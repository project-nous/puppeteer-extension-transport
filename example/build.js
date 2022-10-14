const esbuild = require('esbuild');
const copyStaticFiles = require('esbuild-copy-static-files');

esbuild.build({
  entryPoints: ['./background.ts'],
  outfile: '../dist/example/background.js',
  bundle: true,
  minify: true,
  sourcemap: false,
  watch: false,
  external: [
    'net',
    'tls',
    'crypto',
    'http',
    'https',
    'stream',
    'zlib',
    'fs',
    'url',
    'events',
  ],
  plugins: [
    copyStaticFiles({
      src: './manifest.json',
      dest: '../dist/example/manifest.json',
    }),
  ],
});
