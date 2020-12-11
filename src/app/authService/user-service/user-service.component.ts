import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UrlAPI} from '../../Services/urlAPI';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


export interface UserModel {

    idUser: string;
    usuario: string;

}

@Component({
    selector: 'app-user-service',
    templateUrl: './user-service.component.html',
    styleUrls: ['./user-service.component.css']
})
export class UserServiceComponent implements OnInit {

    constructor(private http: HttpClient, private url: UrlAPI) {
    }

    ngOnInit(): void {
    }

    public getUser(): Observable<UserModel[]> {

        return this.http.get(this.url.getURL() + '/empleado').pipe(map((value: UserModel[]) => {

            return value;

        }));
    }


}
