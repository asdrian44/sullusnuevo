import {Component, OnInit} from '@angular/core';
import {ServiceOAuthService} from '../authService/service-oauth.service';


const scopeGoogle = {
    scope: 'https://www.googleapis.com/auth/userinfo.profile',
    access_type: 'offline',
    response_type: 'code',
    prompt: 'consent'
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


    constructor(private auth: ServiceOAuthService) {
    }

    async ngOnInit() {

        await this.auth.initAuth();

    }


    async authenticate() {
        await this.auth.authenticate();



    }
}
