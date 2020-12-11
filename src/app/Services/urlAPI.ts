import {Injectable} from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class UrlAPI {


    getURL(): string {
        return ' https://14a5299e1038.ngrok.io/';
    }
}
