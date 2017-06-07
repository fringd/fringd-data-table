import {task} from 'gulp';
import {copySync} from 'fs-extra';
import {DIST_DEMOAPP, DIST_RELEASES} from '../constants';
import {sequenceTask, execNodeTask} from '../util/task_helpers';
import {join} from 'path';

const tsconfigFile = join(DIST_DEMOAPP, 'tsconfig-aot.json');

/** Builds the demo-app and fringd-table. To be able to run NGC, apply the metadata workaround. */
task('aot:deps', sequenceTask(
  'build:devapp',
  ['fringd-table:build-release'],
  'aot:copy-release'
));

// As a workaround for https://github.com/angular/angular/issues/12249, we need to
// copy the Material and CDK ESM output inside of the demo-app output.
task('aot:copy-release', () => {
  copySync(join(DIST_RELEASES, 'fringd-table'), join(DIST_DEMOAPP, 'fringd-table'));
});

/** Build the demo-app and a release to confirm that the library is AOT-compatible. */
task('aot:build', sequenceTask('aot:deps', 'aot:compiler-cli'));

/** Build the demo-app and a release to confirm that the library is AOT-compatible. */
task('aot:compiler-cli', execNodeTask(
  '@angular/compiler-cli', 'ngc', ['-p', tsconfigFile]
));
