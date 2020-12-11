import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {RequerimientoService} from '../../Services/Requerimiento/requerimiento.service';

@Component({
    selector: 'app-salida-modal',
    templateUrl: './salida-modal.component.html',
    styleUrls: ['./salida-modal.component.css']
})
export class SalidaModalComponent implements OnInit {


    detalles: any;
    displayedColumns: string[] = ['idproduct', 'nombre', 'cantidad', 'tipoProducto'];
    grupo: FormGroup = new FormGroup({
        combustible: new FormControl('ninguno'),
        empresa: new FormControl('ninguno'),
        equipo: new FormControl('sulluscocha'),
        modelo: new FormControl('ninguno'),
        placa: new FormControl('ninguno'),
        valeSalida: new FormControl('ninguno')
    });
    private data: any;
    @Input()
    private codigo: string;


    constructor(public dialog: MatDialog, private req: RequerimientoService, private builder: FormBuilder) {


    }

    ngOnInit(): void {

        this.req.buscarSalida(this.codigo).subscribe(value => {
            this.data = value;
            console.log(value)

        });





    }


    confirmarSalida() {

        console.log(this.grupo)
        const data = {

            combustible: this.grupo.controls.combustible.value,
            empresa: this.grupo.controls.empresa.value,
            equipo: this.grupo.controls.equipo.value,
            modelo: this.grupo.controls.modelo.value,
            placa: this.grupo.controls.placa.value,
            valeSalida: this.grupo.controls.valeSalida.value

        }


        this.req.confirmarSalida(this.codigo, data).subscribe(value => {

        }, error => {
            console.log(error);
        });
        this.dialog.closeAll();
    }
}
