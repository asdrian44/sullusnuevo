import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {UserProfile} from '../model/UserProfile';
import {UrlAPI} from '../Services/urlAPI';

declare var gapi: any;


@Injectable({
    providedIn: 'root'
})
export class ServiceOAuthService {
    public gapiSetup: boolean = false;
    public authInstance: gapi.auth2.GoogleAuth;
    public error: string;
    public user: gapi.auth2.GoogleUser;
    state = {isSignedIn: null};


    constructor(private router: Router, private http: HttpClient, private URL: UrlAPI) {

    }

    setUser(user) {
        this.user = user;
    }

    async initGoogleAuth(): Promise<void> {
        //  Create a new Promise where the resolve function is the callback
        // passed to gapi.load
        const pload = new Promise((resolve) => {
            gapi.load('auth2', resolve);
        });

        // When the first promise resolves, it means we have gapi loaded
        // and that we can call gapi.init
        return pload.then(async () => {
            await gapi.auth2
                .init({
                    client_id: '583458414138-ktvu19p22476kqobfauu66r5olulppjg.apps.googleusercontent.com',
                    scope: 'https://www.googleapis.com/auth/userinfo.profile',


                })
                .then(auth => {
                    this.gapiSetup = true;
                    this.authInstance = auth;

                });
        });
    }


    async authenticate(): Promise<any> {


        if (!this.gapiSetup) {
            await this.initGoogleAuth();
        }


        return new Promise(async () => {
            await this.authInstance.signIn().then(
                user => {

                    localStorage.setItem('gmail', 'true');
                    // @ts-ignore
                    localStorage.setItem('token', JSON.stringify(user.xc.access_token));
                    this.user = user
                    this.handleAuthChange();
                    this.authInstance.isSignedIn.listen(this.handleAuthChange);

                },
                error => {
                    this.error = error
                });
            this.router.navigate(['']);


        });

    }

    async checkIfUserAuthenticated(): Promise<boolean> {
        // Initialize gapi if not done yet
        if (!this.gapiSetup) {
            await this.initGoogleAuth();
        }

        return this.authInstance.isSignedIn.get();
    }

    async refresh() {

        console.log(await this.user.reloadAuthResponse());
    }


    async initAuth() {
        if (await this.checkIfUserAuthenticated()) {

            this.user = this.authInstance.currentUser.get();

        }
    }

    handleAuthChange() {
        this.state = ({isSignedIn: this.authInstance.isSignedIn.get()});
    };

    getUser() {

        return this.user;
    }

    check() {

        return this.http.get(this.URL.getURL() + 'oauth/check');
    }


    getData(): UserProfile {


        const user = new UserProfile();
        const basicProfile = this.user.getBasicProfile();
        user.name = basicProfile.getFamilyName();
        user.lastName = basicProfile.getGivenName();
        user.photo = basicProfile.getImageUrl();
        user.email = basicProfile.getEmail();
        return user;

    }


}
