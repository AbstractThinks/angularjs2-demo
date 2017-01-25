import {Component}     from '@angular/core';

/**
 * [Component description]
 * @param  {'my-app'} {selector [description]
 * @param  {`                                          <nav>                    <a routerLink="index" routerLinkActive="active">index</a>                    <a routerLink="login" routerLinkActive="active">login</a>                    <a routerLink="/" routerLinkActive="active">info</a>                </nav>                <router-outlet></router-outlet>        `} template [description]
 * @param  {[type]}   }         [description]
 * @return {[type]}             [description]
 */
@Component({
        selector: 'my-app',
        template:  `<router-outlet></router-outlet>`,
        styleUrls: [require('./assets/style/main.css')],
})

export class AppComponent { }
