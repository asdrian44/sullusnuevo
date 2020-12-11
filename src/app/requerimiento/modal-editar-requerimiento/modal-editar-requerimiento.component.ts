import {Component, Input, OnInit} from '@angular/core';
import {RequerimientoService} from '../../Services/Requerimiento/requerimiento.service';
import {MatDialog} from '@angular/material/dialog';


@Component({
    selector: 'app-modal-editar-requerimiento',
    templateUrl: './modal-editar-requerimiento.component.html',
    styleUrls: ['./modal-editar-requerimiento.component.css']
})
export class ModalEditarRequerimientoComponent implements OnInit {
    displayedColumns: string[] = ['codigo', 'descripcion', 'cantidad'];

    almacen: any;
    area: any;

    data: any;

    rol: any;
    @Input()
    private idRequerimiento: string;
    @Input()
    private op: number;

    @Input()
    private tipo: string;

    constructor(public dialog: MatDialog, private requerimentoService: RequerimientoService) {


    }

    ngOnInit(): void {
        alert(this.tipo);

        this.rol = localStorage.getItem('rol');

        this.requerimentoService.buscarRequerimiento(this.idRequerimiento).subscribe(value => {


            this.data = value;
        })

    }

    confirmarRequerimiento() {


        if (this.data.tipoRequerimiento === 'NECESIDAD') {
            this.requerimentoService.confirmarRequerimiento(this.idRequerimiento).subscribe(value => {
                alert('Requerimiento Confirmado');
            });


            this.dialog.closeAll();

        }

        if (this.data.tipoRequerimiento === 'NOSTOCK') {
            this.requerimentoService.confirmarRequerimientoReciboTraslado(this.idRequerimiento).subscribe(value => {
                alert('Requerimiento Confirmado');
            });


            this.dialog.closeAll();

        }


    }

    confirmarRequerimientoReciboTraslado() {

        this.requerimentoService.confirmarRequerimientoReciboTraslado(this.idRequerimiento).subscribe(value => {
        });

        alert('Requerimiento Confirmado del traslado');
        this.dialog.closeAll();


    }
}
