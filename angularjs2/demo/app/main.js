import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode, provide} from '@angular/core';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { FORM_PROVIDERS, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';
import { environment } from './core/core';

import { AppComponent } from './components/app/app.component';

require('../node_modules/font-awesome/css/font-awesome.min.css');
require('../node_modules/admin-lte/bootstrap/css/bootstrap.min.css');
require('../node_modules/admin-lte/dist/css/AdminLTE.min.css');
require('../node_modules/admin-lte/dist/css/skins/skin-blue.min.css');
require('../node_modules/font-awesome/css/font-awesome.min.css');
require('../node_modules/ionicons/dist/css/ionicons.min.css');

if(environment) {
	//enableProdMode();
}

bootstrap(AppComponent, [
  FORM_PROVIDERS,
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(LocationStrategy, { useClass: HashLocationStrategy }),
  provide(environment, { useValue: 'production' })
]);



