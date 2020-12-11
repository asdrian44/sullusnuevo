import {Component, Input, OnInit} from '@angular/core';
import {ModalComponent} from '../components/modal/modal.component';
import {MatDialog} from '@angular/material/dialog';
import {RequerimientoService} from '../Services/Requerimiento/requerimiento.service';

@Component({
    selector: 'app-requerimiento',
    templateUrl: './requerimiento.component.html',
    styleUrls: ['./requerimiento.component.css']
})
export class RequerimientoComponent implements OnInit {

    cargacompleta = false;
    cargacompleta2 = false;
    datos: any;

    solicitudes: any;
    rol: any;

    @Input()
    public nameComponent: string;

    constructor(public dialog: MatDialog, private req: RequerimientoService) {
    }


    ngOnInit(): void {

        this.cargarTodo();

    }

    cargarTodo() {
        this.req.cargarTodosRequerimientos().subscribe(value => {

            this.datos = value;


        });


    }

    cargarsolicitudes() {
        this.req.cargarRequerimientos().subscribe(value => {
            this.solicitudes = value;
        })
    }


    editarRequerimiento(componente, codigo, tipo?) {
        this.dialog.open(ModalComponent, {
            data: {
                data: componente,
                codigo: codigo,
                tipo: tipo
            }
        })

        this.dialog.afterAllClosed.subscribe(value => {

            this.cargarTodo();

        })

    }

    verRequerimiento(componente, codigo, tipo?) {
        this.dialog.open(ModalComponent, {
            data: {
                data: componente,
                codigo: codigo,
                tipo: tipo
            }
        })

        this.dialog.afterAllClosed.subscribe(value => {

            this.cargarTodo();

        })
    }

    agregaRequerimiento() {
        this.dialog.open(ModalComponent, {
            data: {
                data: 'requerimiento'

            }
        })
        this.dialog.afterAllClosed.subscribe(value => {

            this.cargarTodo();
            console.log('Se cargo todo')

        })
    }
}
