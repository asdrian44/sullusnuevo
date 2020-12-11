import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {BaseObject, RequerimientoService} from '../../Services/Requerimiento/requerimiento.service';
import {FormBuilder} from '@angular/forms';

@Component({
    selector: 'app-ordenes-modal',
    templateUrl: './ordenes-modal.component.html',
    styleUrls: ['./ordenes-modal.component.css']
})
export class OrdenesModalComponent implements OnInit {


    columnas: string[] = ['codigo', 'nombre', 'talla', 'color', 'modelo', 'marca', 'tipo', 'cantidad', 'unidadMedida', 'precioUnitario', 'descuento', 'total'];
    @Input()
    codigo;


    titulos: string[] = ['codigo', 'fecha de la orden', 'Realizado por ', 'Codigo del requerimiento', 'Estado de la orden', 'RUC', 'Nombre del proveedor', 'Direccion del proveedor',
        'telefono del proveedor', 'fecha de entrega', 'direccion de entrega', 'moneda', 'condicion de pago', 'forma de pago']
    data: BaseObject;

    datos: string[] = [];


    constructor(public dialog: MatDialog, private req: RequerimientoService) {


    }


    async ngOnInit() {
        await this.cargarDatos();


    }

    confirmarOrden() {
        this.req.confirmarOrden({codigoOrden: this.codigo}).subscribe(value => {

        });
        alert("Orden confirmada");
        this.dialog.closeAll();
    }

    async cargarDatos() {
        await this.req.detallesOrdenes(this.codigo).subscribe(value => {

            this.data = value;
            this.datos = [this.data.data.codigo, this.data.data.fechaOrden, this.data.data.usuarioEmite, this.data.data.codigoRequerimiento, this.data.data.estadoOrden, this.data.data.ruc, this.data.data.proveedor, this.data.data.direccion, this.data.data.telefono, this.data.data.fechaEntrega, this.data.data.direccionEntrega, this.data.data.moneda, this.data.data.condicionPago, this.data.data.formaPago];
            console.log(this.data);
        })
    }
}
