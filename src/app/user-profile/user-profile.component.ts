import {Component, OnInit} from '@angular/core';
import {ServiceOAuthService} from '../authService/service-oauth.service';
import {UserProfile} from '../model/UserProfile';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {


    private user: UserProfile;

    constructor(private auth: ServiceOAuthService) {
    }

    ngOnInit() {

        this.user = this.auth.getData();
    }

}
