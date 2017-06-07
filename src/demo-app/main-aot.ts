/**
 * This is the main entry-point for the AOT compilation. File will be used to test AOT support.
 */

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModuleNgFactory} from './app.module.ngfactory';

platformBrowserDynamic().bootstrapModuleFactory(AppModuleNgFactory);
