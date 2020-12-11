import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ReplaySubject, Subject} from 'rxjs';
import {ListaCodigoProductoModelo} from '../../model/listaCodigoProductoModelo';
import {RequerimientoService} from '../../Services/Requerimiento/requerimiento.service';
import {takeUntil, tap} from 'rxjs/operators';

@Component({
    selector: 'app-search-traslado',
    templateUrl: './search-traslado.component.html',
    styleUrls: ['./search-traslado.component.css']
})
export class SearchTrasladoComponent implements OnInit, OnDestroy {
    @Input()
    idAlmacen: any = 0;

    public bankServerSideCtrl: FormControl = new FormControl();

    public bankServerSideFilteringCtrl: FormControl = new FormControl();

    public searching = false;

    public filteredServerSideBanks: ReplaySubject<ListaCodigoProductoModelo[]> = new ReplaySubject<ListaCodigoProductoModelo[]>(1);
    @Output() producto = new EventEmitter<any>();

    protected banks: ListaCodigoProductoModelo[];

    protected _onDestroy = new Subject<void>();

    constructor(private req: RequerimientoService) {
    }

    ngOnInit(): void {
        this.bankServerSideFilteringCtrl.valueChanges.pipe(tap(x => {
            this.searching = true
        }), takeUntil(this._onDestroy))
            .subscribe(filteredBanks => {

                    this.req.buscarProductoAlmacen(filteredBanks, this.idAlmacen).subscribe(value => {

                        this.banks = value;
                        this.searching = false;
                        this.filteredServerSideBanks.next(this.banks);
                    });


                },
                error => {
                    // no errors in our simulated example
                    this.searching = false;
                    // handle error...
                });
    }

    seleccionarProducto(producto: any) {
        this.producto.emit(producto);
    }

    ngOnDestroy() {
        this._onDestroy.next();
        this._onDestroy.complete();
    }


}
