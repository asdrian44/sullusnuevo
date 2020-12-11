import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {RequerimientoService} from '../../Services/Requerimiento/requerimiento.service';
import {Nostock, NoStockCompraRequerimiento} from '../../model/noStockCompraRequerimiento';
import {ListaCodigoProductoModelo} from '../../model/listaCodigoProductoModelo';
import {DetallesRequerimientoGeneral, ModeloRequerimientoGeneral} from '../../model/ModeloRequerimientoGeneral';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MomentDateAdapter} from '@angular/material-moment-adapter';

export interface SelectOption {
    id: number;
    requerimiento: string;
}

export const MY_FORMATS = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'YYYY-MM-DD',
        monthYearLabel: 'YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'YYYY',
    },
};


@Component({
    selector: 'app-modal-requerimiento',
    templateUrl: './modal-requerimiento.component.html',
    styleUrls: ['./modal-requerimiento.component.css'],
    providers: [

        {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

        {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    ],
})

export class ModalRequerimientoComponent implements OnInit {
    selectedValue: string;
    selectedValue2: string;
    selectedValue3: string;


    columnasNecesidadCompra: string[] = ['nombre', 'cantidad', 'unidad', 'color', 'talla', 'marca', 'modelo', 'tipo', 'borrar'];
    columnasNecesidadCompraFields: string[] = ['nombre', 'cantidad', 'unidad', 'color', 'talla', 'marca', 'modelo', 'tipo'];

    columnasNoStockCompra: string[] = ['codigo', 'descripcion', 'cantidad', 'borrar'];
    columnasNoStockCompraFields: string[] = ['codigo', 'descripcion', 'cantidad'];


    myformArray = new FormArray([
        new FormGroup({
            descripcion: new FormControl('uno'),
            cantidad: new FormControl('one'),
            unidad: new FormControl('one'),
            color: new FormControl('one'),
            talla: new FormControl('one'),
            marca: new FormControl('one'),
            modelo: new FormControl('one'),
            tipo: new FormControl('one'),


        }),
    ])

    myFormArrayNoStock = new FormArray([]);

    data = this.myformArray.controls;

    dataSource = this.myFormArrayNoStock.controls;

    requerimientos: SelectOption[] = [

        {

            id: 3,
            requerimiento: 'Pedir a otro almacen',
        }
    ];


    almacen: any;
    area: any;


    tipo: any;


    datosBuscador: ListaCodigoProductoModelo[] = [];
    rol: number;

    constructor(public dialog: MatDialog, private requerimentoService: RequerimientoService) {
    }

    ngOnInit(): void {

        this.rol = Number(localStorage.getItem('rol'));


        this.requerimentoService.getTipo().subscribe(value => {

            this.tipo = value;
        });


        this.requerimentoService.cargarAlmacen().subscribe(value => {
            console.log(value)
            this.almacen = value;
        })


    }

    verData() {
        console.log(this.myformArray)
    }


    agregarRequerimientoNoStockCompra(fechaentrega, observaciones) {


        const arrays: any[] = [];


        this.myFormArrayNoStock.controls.forEach(value => {

            // @ts-ignore
            let data = value.controls;
            let a: Nostock = {
                codigo: data.codigo.value,
                cantidad: data.cantidad.value
            }
            arrays.push(a);

        })


        const dataReq: NoStockCompraRequerimiento = {

            fechaEntrega: fechaentrega,
            observaciones: observaciones,
            detalles: arrays,
            idAlmacenEnvia: this.selectedValue
        }

        this.requerimentoService.agregarRequerimientoNoStockCompra(dataReq).subscribe(value => {

            alert('REQUERIMIENTO GUARDADO CON EXITO')
        }, error => {

        })

        this.dialog.closeAll();


    }


    agregarRequerimientoGeneral(fechaentrega, observaciones, almacenes?) {


        const arrays: any[] = [];


        this.myFormArrayNoStock.controls.forEach(value => {

            // @ts-ignore
            let data = value.controls;
            let a: DetallesRequerimientoGeneral = {
                codigo: data.codigo.value,
                cantidad: Number(data.cantidad.value)
            }
            arrays.push(a);

        })


        const dataReq: ModeloRequerimientoGeneral = {
            fechaEntrega: fechaentrega,
            observaciones: observaciones,
            detalles: arrays

        }

        this.requerimentoService.agregarRequerimientoGeneral(dataReq).subscribe(value => {

            alert('requerimiento guardado con exito')
        }, error => {

        })


        this.dialog.closeAll();


    }


    delete(index: number) {
        this.myformArray.removeAt(index);
        this.data = [...this.myformArray.controls];

    }

    deleteNoStock(index: number) {
        this.myFormArrayNoStock.removeAt(index);
        this.dataSource = [...this.myFormArrayNoStock.controls];
    }

    add() {
        const newGroup = new FormGroup({});
        this.columnasNecesidadCompraFields.forEach(x => {
            newGroup.addControl(x, new FormControl())
        })
        this.myformArray.push(newGroup)

        this.data = [...this.myformArray.controls];
    }

    addNoStock(id, nombre) {
        const newGroup = new FormGroup({});
        this.columnasNoStockCompraFields.forEach(x => {


            if (x == 'codigo') {
                newGroup.addControl(x, new FormControl({
                    value: id,
                    disabled: true
                }))
            }
            if (x == 'cantidad') {
                newGroup.addControl(x, new FormControl())
            }
            if (x == 'descripcion') {
                newGroup.addControl(x, new FormControl({
                    value: nombre,
                    disabled: true
                }))
            }


        })
        this.myFormArrayNoStock.push(newGroup)

        this.dataSource = [...this.myFormArrayNoStock.controls];
    }

    buscar(datos: ListaCodigoProductoModelo) {

        const valor: ListaCodigoProductoModelo = {
            codigo: datos.codigo,
            talla: datos.talla,
            modelo: datos.modelo,
            marca: datos.marca,
            color: datos.color,
            descripcion: datos.descripcion,
            tipo: datos.tipo


        };
        this.datosBuscador.push(valor);

        this.seleccionarProducto(valor.codigo, valor.descripcion);


    }

    seleccionarProducto(idProducto, nombre) {

        this.addNoStock(idProducto, nombre);

    }


}
