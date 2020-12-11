import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {ServiceOAuthService} from '../authService/service-oauth.service';

declare var gapi: any;

@Injectable({
    providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {


    constructor(private router: Router, private ouath: ServiceOAuthService) {

    }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        console.log('Entre aca')
        const user = this.ouath.getUser();//undefined
        const loged = localStorage.getItem('gmail');//null
        console.log(user);
        console.log(loged);


        if (user !== undefined && loged === 'true') {


            return true;
        } else {


            this.router.navigate(['/login']);

        }


    }


}
