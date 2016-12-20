import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {InfoComponent} from '../info/info.component';

const routes: Routes = [
    { path: '/', component: LoginComponent },
    { path: '/info', component: InfoComponent },
];

export const Routing = RouterModule.forRoot(routes);
