import {Component, OnInit} from '@angular/core';
import {OrderServiceService} from '../../Services/product/orderProduct/order-service.service';
import {RequerimientoService} from '../../Services/Requerimiento/requerimiento.service';
import {MatDialog} from '@angular/material/dialog';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {MY_FORMATS} from '../../requerimiento/modal-requerimiento/modal-requerimiento.component';
import {ListaCodigoProductoModelo} from '../../model/listaCodigoProductoModelo';
import {DetallesOrden, OrdenCompra} from '../../model/ordenCompra';


@Component({
    selector: 'app-orden-compra',
    templateUrl: './orden-compra.component.html',
    styleUrls: ['./orden-compra.component.css'],
    providers: [

        {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

        {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    ],
})
export class OrdenCompraComponent implements OnInit {

    displayedColumns: string[] = ['codigo', 'descripcion', 'talla', 'tipo', 'marca', 'color', 'modelo', 'cantidad', 'precioUnitario', 'descuento', 'borrar'];
    displayedColumnsfields: string[] = ['codigo', 'descripcion', 'talla', 'tipo', 'marca', 'color', 'modelo', 'cantidad', 'precioUnitario', 'descuento'];

    tipoRequerimiento: any;


    tipo: any;


    selectedValue: string;
    monedas: string[] = ['PEN', 'USD'];


    grupo = new FormGroup({

        numeroComprobante: new FormControl(),
        observaciones: new FormControl(),
        formaPago: new FormControl(),
        condicionPago: new FormControl(),
        direccionEntrega: new FormControl(),
        fechaEntrega: new FormControl(),
        ruc: new FormControl(),
        nombre: new FormControl(),
        correo: new FormControl(),
        telefono: new FormControl(),
        direccion: new FormControl(),
        monedas: new FormControl(),

    });


    myFormArrayNoStock = new FormArray([]);

    myformArray = new FormArray([])
    data = this.myformArray.controls;


    constructor(public dialog: MatDialog, private http: OrderServiceService, private requerimentoService: RequerimientoService) {


    }

    async ngOnInit() {


    }

    cargaTipo() {
        this.requerimentoService.getTipo().subscribe(value => {

            this.tipo = value;
        });
    }

    //displayedColumnsfields: string[] = ['codigo', 'nombre', 'cantidad', 'unidad', 'color', 'talla', 'marca', 'modelo', 'tipo'];
    add(data: ListaCodigoProductoModelo) {
        const newGroup = new FormGroup({});
        this.displayedColumnsfields.forEach(x => {

            switch (x) {

                case 'codigo':

                    newGroup.addControl(x, new FormControl(data.codigo))
                    break;
                case 'talla':
                    newGroup.addControl(x, new FormControl(data.talla))
                    break;
                case 'tipo':
                    newGroup.addControl(x, new FormControl(data.tipo))
                    break;
                case 'descripcion':
                    newGroup.addControl(x, new FormControl(data.descripcion))
                    break;
                case 'marca':
                    newGroup.addControl(x, new FormControl(data.marca))
                    break;
                case 'color':
                    newGroup.addControl(x, new FormControl(data.color))
                    break;
                case 'modelo':
                    newGroup.addControl(x, new FormControl(data.modelo))
                    break;

                case 'cantidad':
                    newGroup.addControl(x, new FormControl())
                    break;

                case 'precioUnitario':
                    newGroup.addControl(x, new FormControl())
                    break;

                case 'descuento':
                    newGroup.addControl(x, new FormControl())
                    break;


            }


        })
        this.myformArray.push(newGroup)

        this.data = [...this.myformArray.controls];
    }

    delete(index: number) {
        this.myformArray.removeAt(index);
        this.data = [...this.myformArray.controls];

    }


    buscar(event: ListaCodigoProductoModelo) {

        this.add(event)


    }

    /*    numeroComprobante: new FormControl(),
            observaciones: new FormControl(),
            formaPago: new FormControl(),
            condicionPago: new FormControl(),
            direccionEntrega: new FormControl(),
            fechaEntrega: new FormControl(),
            ruc: new FormControl(),
            nombre: new FormControl(),
            correo: new FormControl(),
            telefono: new FormControl(),
            direccion: new FormControl(),
            monedas: new FormControl(),*/
    confirmarOrden() {


        let array: DetallesOrden[] = [];


        this.data.forEach(value => {

            // @ts-ignore
            let date = value.controls;
            let a: DetallesOrden = {
                codigo: date.codigo.value,
                cantidad: date.cantidad.value,
                descuento: date.descuento.value,
                precioUnitario: date.precioUnitario.value,
                tipo: date.tipo.value

            }
            array.push(a);


        })


        const arriba: OrdenCompra = {
            numeroComprobante: this.grupo.controls.numeroComprobante.value,
            observaciones: this.grupo.controls.observaciones.value,
            formaPago: this.grupo.controls.formaPago.value,
            fechaEntrega: this.grupo.controls.fechaEntrega.value,
            direccionEntrega: this.grupo.controls.direccionEntrega.value,
            monedas: this.grupo.controls.monedas.value,
            condicionPago: this.grupo.controls.condicionPago,
            proveedor: {
                telefono: this.grupo.controls.telefono.value,
                ruc: this.grupo.controls.ruc.value,
                correo: this.grupo.controls.correo.value,
                nombre: this.grupo.controls.nombre.value,
                direccion: this.grupo.controls.direccion.value
            },
            detalles:array


        }


    }
}
