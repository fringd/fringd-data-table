import {join} from 'path';
import {DIST_BUNDLES, DIST_ROOT, SOURCE_ROOT, PROJECT_ROOT} from '../constants';
import {copyFiles} from '../util/copy-files';
import {addPureAnnotationsToFile} from './pure-annotations';
import {updatePackageVersion} from './package-versions';
import {inlinePackageMetadataFiles} from './metadata-inlining';
import {createTypingsReexportFile} from './typings-reexport';
import {createMetadataReexportFile} from './metadata-reexport';

/**
 * Copies different output files into a folder structure that follows the `angular/angular`
 * release folder structure. The output will also contain a README and the according package.json
 * file. Additionally the package will be Closure Compiler and AOT compatible.
 */
export function composeRelease(packageName: string) {
  // To avoid refactoring of the project the package fringd-table will map to the source path `lib/`.
  const sourcePath = join(SOURCE_ROOT, packageName === 'fringd-table' ? 'lib' : packageName);
  const packagePath = join(DIST_ROOT, 'packages', packageName);
  const releasePath = join(DIST_ROOT, 'releases', packageName);

  inlinePackageMetadataFiles(packagePath);

  copyFiles(packagePath, '**/*.+(d.ts|metadata.json)', join(releasePath, 'typings'));
  copyFiles(DIST_BUNDLES, `${packageName}.umd?(.min).js?(.map)`, join(releasePath, 'bundles'));
  copyFiles(DIST_BUNDLES, `${packageName}?(.es5).js?(.map)`, releasePath);
  copyFiles(PROJECT_ROOT, 'LICENSE.md', releasePath);
  copyFiles(SOURCE_ROOT, 'README.md', releasePath);
  copyFiles(sourcePath, 'package.json', releasePath);

  updatePackageVersion(releasePath);
  createTypingsReexportFile(releasePath, packageName);
  createMetadataReexportFile(releasePath, packageName);
  addPureAnnotationsToFile(join(releasePath, `${packageName}.es5.js`));
}
