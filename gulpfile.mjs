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
  json: {
    src: "src/json/**/*.json",
    dest: "dist/json/",
  },
  componentAssets: {
    src: "src/js/customElements/**/*.scss",
    dest: "dist/js/customElements/",
  },
  images: {
    src: "src/images/**/*.{jpg,jpeg,png,svg}",
    dest: "dist/images/",
  },
  icons: {
    src: "src/icons/**/*.svg",
    dest: "dist/icons/",
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

// Copy json to dist
export function json() {
  return src(paths.json.src, { encoding: false })
    .pipe(dest(paths.json.dest))
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
// Copy icons to dist
export function icons() {
  return src(paths.icons.src, { encoding: false })
    .pipe(dest(paths.icons.dest))
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

// Add this to your build task
export const build = series(
  clean,
  parallel(
    html,
    styles,
    scripts,
    json,
    componentAssets,
    images,
    favicon,
    icons,
  ),
);

// Default task
export default series(build, serve);
