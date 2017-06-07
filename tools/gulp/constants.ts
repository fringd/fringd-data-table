import {join} from 'path';

export const FRINGD_TABLE_VERSION = require('../../package.json').version;

export const PROJECT_ROOT = join(__dirname, '../..');
export const SOURCE_ROOT = join(PROJECT_ROOT, 'src');

/** Root build output directory */
export const DIST_ROOT = join(PROJECT_ROOT, 'dist');

/** Output subdirectory where all bundles will be written (flat ES modules and UMD) */
export const DIST_BUNDLES = join(DIST_ROOT, 'bundles');

/** Output subdirectory where all library artifacts will be written (compiled JS, CSS, etc.) */
export const DIST_FRINGD_TABLE = join(DIST_ROOT, 'packages', 'fringd-table');
export const DIST_DEMOAPP = join(DIST_ROOT, 'packages', 'demo-app');
export const DIST_E2EAPP = join(DIST_ROOT, 'packages', 'e2e-app');
export const DIST_EXAMPLES = join(DIST_ROOT, 'packages', 'examples');

export const DIST_RELEASES = join(DIST_ROOT, 'releases');

export const COVERAGE_RESULT_FILE = join(DIST_ROOT, 'coverage', 'coverage-summary.json');

export const HTML_MINIFIER_OPTIONS = {
  collapseWhitespace: true,
  removeComments: true,
  caseSensitive: true,
  removeAttributeQuotes: false
};

export const LICENSE_BANNER = `/**
  * @license fringd-table v${FRINGD_TABLE_VERSION}
  * Copyright (c) 2017 Ram Dobson (fringd@gmail.com)
  * License: MIT
  */`;

export const COMPONENTS_DIR = join(SOURCE_ROOT, 'lib');
