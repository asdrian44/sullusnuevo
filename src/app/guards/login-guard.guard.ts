import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {ServiceOAuthService} from '../authService/service-oauth.service';

@Injectable({
    providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
    constructor(private router: Router, private ouath: ServiceOAuthService) {

    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


        const user = this.ouath.getUser();//undefined
        const loged = localStorage.getItem('gmail');//null

        console.log(user);
        console.log(loged);

        if (user != undefined && loged==='true') {

            localStorage.setItem('gmail', 'true');
            this.router.navigate(['/home']);
        } else {

            localStorage.removeItem('gmail');
            console.log(this.ouath.error)

            return true;
        }


    }

}
