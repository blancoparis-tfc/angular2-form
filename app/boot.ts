import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {provide} from 'angular2/core';

bootstrap(AppComponent,[
    , ROUTER_PROVIDERS // proveedor del modulo de router.
    , provide(LocationStrategy, {useClass: HashLocationStrategy}) // La estrategia de cargar usaremos la #.
    ]
);
