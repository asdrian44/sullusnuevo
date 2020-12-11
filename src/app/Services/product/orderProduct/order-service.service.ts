import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UrlAPI} from '../../urlAPI';
import {OrdenCompra} from '../../../model/ordenCompra';
import {OrdenCompraNoStock} from '../../../model/ordenCompraNoStock';

@Injectable({
    providedIn: 'root'
})
export class OrderServiceService {


    constructor(private http: HttpClient, private URL: UrlAPI) {
    }


    ordenCompraNuevo(orden: OrdenCompra): Observable<any> {

        return this.http.post(this.URL.getURL() + 'inventario/order/compra', orden);

    }

    ordenNoStockNuevo(orden: OrdenCompraNoStock) {
        return this.http.post(this.URL.getURL() + 'inventario/order/nostock',orden);
    }
}
