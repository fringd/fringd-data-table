import {createPackageBuildTasks} from './packaging/build-tasks-gulp';

/** Create gulp tasks to build the different packages in the project. */
createPackageBuildTasks('fringd-table');
createPackageBuildTasks('fringd-table-examples', ['fringd-table']);

import './tasks/ci';
import './tasks/clean';
import './tasks/default';
import './tasks/development';
import './tasks/e2e';
import './tasks/publish';
import './tasks/unit-test';
import './tasks/aot';
import './tasks/fringd-table-release';
