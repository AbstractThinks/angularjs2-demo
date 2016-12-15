import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from '../index/index.component';
import {LoginComponent} from '../login/login.component';

const routes: Routes = [
    { path: 'index', component: IndexComponent },
    { path: 'login', component: LoginComponent }
];

export const Routing = RouterModule.forRoot(routes);
