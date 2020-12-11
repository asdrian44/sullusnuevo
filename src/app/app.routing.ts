import {NgModule} from '@angular/core';
import {CommonModule,} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthGuardGuard} from './guards/auth-guard.guard';

import {LoginGuardGuard} from './guards/login-guard.guard';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';

const routes: Routes = [
        {
        path: '',
        redirectTo: 'home',

        pathMatch: 'full',
        canActivate: [AuthGuardGuard]
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate:[LoginGuardGuard]
    },

    {
        path: '',
        component: AdminLayoutComponent,
        children: [{
            path: '',

            loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule',
            canActivate: [AuthGuardGuard]
        }], canActivate: [AuthGuardGuard]
    },

    {
        path: '**',
        component: LoginComponent, canActivate: [AuthGuardGuard]
    },
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, {
            useHash: false
        })
    ],
    exports: [],
})
export class AppRoutingModule {
}
