import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {RequerimientoService} from '../Services/Requerimiento/requerimiento.service';
import {ModalComponent} from '../components/modal/modal.component';

@Component({
    selector: 'app-salidas',
    templateUrl: './movimientos.component.html',
    styleUrls: ['./movimientos.component.css']
})
export class MovimientosComponent implements OnInit {

    datos: any;
    datos2: any;


    constructor(public dialog: MatDialog, private req: RequerimientoService) {


    }

    ngOnInit(): void {
        this.cargarEntrada();
        this.cargarSalidas();
    }

    cargarSalidas() {
        this.req.cargarSalida().subscribe(value => {
            this.datos2 = value;
        });
    }

    cargarEntrada() {
        this.req.cargarEntrada().subscribe(value => {
            console.log(value);
            this.datos = value;
        })
    }


    verDetalleSalida(detallesSalida, codigoRequerimiento) {

        this.dialog.open(ModalComponent, {
            data: {
                data: detallesSalida,
                codigo: codigoRequerimiento,

            }
        })
        this.dialog.afterAllClosed.subscribe(value => {


            this.cargarSalidas();

        })

    }


    verDetallesEntrada(detallesEntrada, codigoRequerimiento, tipo) {






        this.dialog.open(ModalComponent, {
            data: {
                data: detallesEntrada,
                codigo: codigoRequerimiento,
                tipo: tipo
            }
        })
        this.dialog.afterAllClosed.subscribe(value => {


            this.cargarEntrada();

        })
    }
}
