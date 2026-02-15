// gulpfile.mjs

import { src, dest, watch, series, parallel } from "gulp";
import gulpSass from "gulp-sass";
import * as dartSass from "sass";
import sourcemaps from "gulp-sourcemaps";
import autoprefixer from "gulp-autoprefixer";
import cleanCSS from "gulp-clean-css";
import terser from "gulp-terser";
import htmlmin from "gulp-htmlmin";
import browserSyncLib from "browser-sync";
import { deleteAsync } from "del";

const sass = gulpSass(dartSass);
const browserSync = browserSyncLib.create();

// Paths
const paths = {
  html: {
    src: "src/*.html",
    dest: "dist/",
  },
  styles: {
    src: "src/scss/**/*.scss",
    dest: "dist/css/",
  },
  scripts: {
    src: "src/js/**/*.{js,mjs}",
    dest: "dist/js/",
  },
  componentAssets: {
    src: "src/js/customElements/**/*.scss",
    dest: "dist/js/customElements/",
  },
  images: {
    src: "src/images/**/*.{jpg,jpeg,png,svg}",
    dest: "dist/images/",
  },
  favicon: {
    src: "src/favicon/**/*",
    dest: "dist/favicon/",
  },
};

// Clean dist folder
export function clean() {
  return deleteAsync(["dist/**", "!dist"]);
}

// Compile and minify SCSS files
export function styles() {
  return src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(cleanCSS({ level: 2 }))
    .pipe(sourcemaps.write("."))
    .pipe(dest(paths.styles.dest))
    .pipe(browserSync.stream());
}

// Minify HTML files
export function html() {
  return src(paths.html.src)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest(paths.html.dest))
    .pipe(browserSync.stream());
}

// Minify JS files
export function scripts() {
  return src(paths.scripts.src)
    .pipe(terser({ module: true }))
    .pipe(dest(paths.scripts.dest))
    .pipe(browserSync.stream());
}

// Compile component SCSS assets (used by web components via import.meta.url)
export function componentAssets() {
  return src(paths.componentAssets.src, { base: "src/js/customElements/" })
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(cleanCSS({ level: 2 }))
    .pipe(dest(paths.componentAssets.dest))
    .pipe(browserSync.stream());
}

// Copy favicon files to dist
export function favicon() {
  return src(paths.favicon.src, { encoding: false })
    .pipe(dest(paths.favicon.dest))
    .pipe(browserSync.stream());
}

// Copy images to dist
export function images() {
  return src(paths.images.src, { encoding: false })
    .pipe(dest(paths.images.dest))
    .pipe(browserSync.stream());
}

// Dev Server
export function serve() {
  browserSync.init({
    server: {
      baseDir: "dist/",
    },
  });

  watch(paths.html.src, html);
  watch(paths.styles.src, styles);
  watch(paths.scripts.src, scripts);
  watch(paths.componentAssets.src, componentAssets);
  // Fix the watch path to match the src path
  watch(paths.images.src, images);
  watch(paths.favicon.src, favicon);
}

// Build task
// Add this function to your gulpfile
async function logImageSizes() {
  const { promises: fs } = await import("fs");
  const path = await import("path");

  const srcDir = "src/images";
  const distDir = "dist/images";

  const files = await fs.readdir(srcDir);
  const pngFiles = files.filter((file) => file.endsWith(".png"));
  const svgFiles = files.filter((file) => file.endsWith(".svg"));

  console.log("PNG Optimization Report:");
  console.log("------------------------");

  for (const file of pngFiles) {
    const srcPath = path.join(srcDir, file);
    const distPath = path.join(distDir, file);

    try {
      const srcStat = await fs.stat(srcPath);
      const distStat = await fs.stat(distPath);

      const srcSize = srcStat.size;
      const distSize = distStat.size;
      const savings = (((srcSize - distSize) / srcSize) * 100).toFixed(2);

      console.log(
        `${file}: ${(srcSize / 1024).toFixed(2)}KB → ${(
          distSize / 1024
        ).toFixed(2)}KB (${savings}% saved)`,
      );
    } catch (err) {
      console.log(`Error processing ${file}: ${err.message}`);
    }
  }

  console.log("\nSVG Optimization Report:");
  console.log("------------------------");

  for (const file of svgFiles) {
    const srcPath = path.join(srcDir, file);
    const distPath = path.join(distDir, file);

    try {
      const srcStat = await fs.stat(srcPath);
      const distStat = await fs.stat(distPath);

      const srcSize = srcStat.size;
      const distSize = distStat.size;
      const savings = (((srcSize - distSize) / srcSize) * 100).toFixed(2);

      console.log(
        `${file}: ${(srcSize / 1024).toFixed(2)}KB → ${(
          distSize / 1024
        ).toFixed(2)}KB (${savings}% saved)`,
      );
    } catch (err) {
      console.log(`Error processing ${file}: ${err.message}`);
    }
  }
}

// Add this to your build task
export const build = series(
  clean,
  parallel(html, styles, scripts, componentAssets, images, favicon),
  logImageSizes,
);

// Default task
export default series(build, serve);
