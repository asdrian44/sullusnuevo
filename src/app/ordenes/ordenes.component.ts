import {Component, OnInit} from '@angular/core';
import {RequerimientoService} from '../Services/Requerimiento/requerimiento.service';
import {MatDialog} from '@angular/material/dialog';
import {ModalComponent} from '../components/modal/modal.component';

@Component({
    selector: 'app-ordenes',
    templateUrl: './ordenes.component.html',
    styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {

    data: any;

    constructor(private req: RequerimientoService, public dialog: MatDialog,) {
    }

    ngOnInit(): void {


        this.req.cargarOrdenes().subscribe(value => {
            console.log(value);
            this.data = value;

        });

    }

    detallesOrden(codigo) {


        this.dialog.open(ModalComponent, {
            data: {
                data: 'ORDENESDETALLES',
                codigo: codigo
            }


        });

        this.dialog.afterAllClosed.subscribe(value => {

            this.req.cargarOrdenes().subscribe(value1 => {
                console.log(value1);
                this.data = value1;

            });
        })


    }
}
