import {task, src, dest} from 'gulp';
import {join} from 'path';
import {writeFileSync} from 'fs';
import {Bundler} from 'scss-bundle';
import {sequenceTask} from '../util/task_helpers';
import {COMPONENTS_DIR, DIST_FRINGD_TABLE, DIST_RELEASES} from '../constants';
import {composeRelease} from '../packaging/build-release';

// There are no type definitions available for these imports.
const gulpRename = require('gulp-rename');

// Path to the release output of fringd-table.
const releasePath = join(DIST_RELEASES, 'fringd-table');
// The entry-point for the scss theming bundle.
const themingEntryPointPath = join(COMPONENTS_DIR, 'core', 'theming', '_all-theme.scss');
// Output path for the scss theming bundle.
const themingBundlePath = join(releasePath, '_theming.scss');
// Matches all pre-built theme css files
const prebuiltThemeGlob = join(DIST_FRINGD_TABLE, '**/theming/prebuilt/*.css?(.map)');
// Matches all SCSS files in the library.
const allScssGlob = join(COMPONENTS_DIR, '**/*.scss');

/**
 * Overwrite the release task for the fringd-table package. The fringd-table release will include special
 * files, like a bundled theming SCSS file or all prebuilt themes.
 */
task('fringd-table:build-release', ['fringd-table:prepare-release'], () => composeRelease('fringd-table'));

/**
 * Task that will build the fringd-table package. It will also copy all prebuilt themes and build
 * a bundled SCSS file for theming
 */
task('fringd-table:prepare-release', sequenceTask(
  'fringd-table:build',
  ['fringd-table:copy-prebuilt-themes', 'fringd-table:bundle-theming-scss']
));

/** Copies all prebuilt themes into the release package under `prebuilt-themes/` */
task('fringd-table:copy-prebuilt-themes', () => {
  src(prebuiltThemeGlob)
    .pipe(gulpRename({dirname: ''}))
    .pipe(dest(join(releasePath, 'prebuilt-themes')));
});

/** Bundles all scss requires for theming into a single scss file in the root of the package. */
task('fringd-table:bundle-theming-scss', () => {
  // Instantiates the SCSS bundler and bundles all imports of the specified entry point SCSS file.
  // A glob of all SCSS files in the library will be passed to the bundler. The bundler takes an
  // array of globs, which will match SCSS files that will be only included once in the bundle.
  new Bundler().Bundle(themingEntryPointPath, [allScssGlob]).then(result => {
    writeFileSync(themingBundlePath, result.bundledContent);
  });
});
