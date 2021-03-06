/**
 * Main Section
 *
 * Consists of a single component that uses directives/components from
 * the UI module
 */

import angular from 'angular';

import core from '../core/core.module';
import ui from '../ui/ui.module';

import routes from './main.routes';
import mainComponent from './main.component';

const depends = [core, ui];

export const main =
  angular
    .module('app.main', depends)
    .config(routes)
    .component('main', mainComponent);

export default main.name;
