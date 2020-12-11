import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {RequerimientoService} from '../../Services/Requerimiento/requerimiento.service';

@Component({
    selector: 'app-entrada-modal',
    templateUrl: './entrada-modal.component.html',
    styleUrls: ['./entrada-modal.component.css']
})
export class EntradaModalComponent implements OnInit {


    columnasCompra: string[] = ['item', 'nombre', 'talla', 'marca', 'color', 'modelo', 'unidadMedida', 'cantidad', 'total'];
    columnasTraslado: string[] = ['item', 'nombre', 'talla', 'marca', 'color', 'modelo', 'unidadMedida', 'cantidad', 'total'];


    @Input()
    tipoEntrada: number;


    listaEmpleado;

    @Input()
    codigo: number;

    data:any = [];
    usuarioseleccionado: any;

    constructor(public dialog: MatDialog, private req: RequerimientoService) {
    }

    ngOnInit(): void {
        this.cargarData();
        this.req.cargarEmpleados().subscribe(value => {
            console.log(value);
            this.listaEmpleado = value;
            console.log(this.listaEmpleado)
        })

    }

    cargarData() {

        this.req.buscarEntrada(this.codigo, this.tipoEntrada).subscribe(value => {

            this.data = value;
            console.log(this.data);

        })
    }

    confirmarEntradaTraslado() {
        this.req.confirmarEntrada(this.codigo, this.usuarioseleccionado).subscribe(value => {

        });
        this.dialog.closeAll();
    }

    confirmarEntrada() {

        const empleado = {
            idEmpleado: this.usuarioseleccionado
        };


        console.log(empleado);
        this.req.confirmarEntraCompra(this.codigo, empleado).subscribe(value => {

        });
        this.dialog.closeAll();
    }

    seleccionarUsuario(iduser) {
        console.log(iduser)
        alert(iduser)
        this.usuarioseleccionado = iduser;
    }
}
