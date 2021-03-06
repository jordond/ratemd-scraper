/**
 * Entry-point for the angular application
 *
 * Loads the core module which contains all app-wide deps,
 * and each main page/section. (Currently only one)
 */

import angular from 'angular';

// App modules
import core from './core/core.module';

// Sections
import main from './main/main.module';
import config from './config/config.module';

const app =
  angular.module('app', [
    core,
    main,
    config
  ]);

export default app;
