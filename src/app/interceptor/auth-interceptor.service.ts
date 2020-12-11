import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {ModalErrorComponent} from '../components/modal-error/modal-error.component';

@Injectable({
    providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {


    constructor(private router: Router, public modal: MatDialog) {
    }

    getToken(): string {
        return <string>localStorage.getItem('token');
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


        const token = this.getToken();
        let request = req;
        if (token || token != undefined || token != null) {

            request = req.clone({

                setHeaders: {
                    Authorization: 'Bearer ' + token,
                    'Content-type': 'application/json'
                }

            });

        }
        return next.handle(request).pipe(
            catchError((err: HttpErrorResponse) => {
                console.log(err)
                let status = err.status;
                    /*    if (status == 500 || status == 401 || status == 0) {
                    this.modal.open(ModalErrorComponent, {
                        data: {
                            message: 'Error en el servidor'
                        }
                    })


                    this.modal.afterAllClosed.subscribe(value => {
                    //    this.router.navigate(['/login']);
                     //   localStorage.removeItem('token');
                     //   localStorage.removeItem('gmail');
                    })

                }


                if (status == 404) {

                    this.modal.open(ModalErrorComponent, {
                        data: {
                            message: 'Usted no tiene permiso para acceder a este recurso'
                        }

                    });
                    this.modal.afterAllClosed.subscribe(value => {
                        this.router.navigate(['/home']);


                    });


                }*/


                return throwError(err);

            })
        )


    }
}
