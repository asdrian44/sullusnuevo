import {Component, OnInit} from '@angular/core';
import {CardsServiceService, DetalleReporte, ReporteModel} from '../../Services/cards-service.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
    selector: 'app-report-tabla',
    templateUrl: './report-tabla.component.html',
    styleUrls: ['./report-tabla.component.css']
})
export class ReportTablaComponent implements OnInit {


    data: ReporteModel;
    dataSource: MatTableDataSource<DetalleReporte>;
    private columnas: string[] = ['codigo',
        'descripcion',
        'modelo',
        'marca',
        'color',
        'talla',
        'tipo',
        'unidadMedida',
        'entradas',
        'salidas',
        'stock',
        'sumaTotales',
        'precioUnitario',
        'existenciasEntradas',
        'existenciasSalidas',
        'totalExistencias']

    constructor(private req: CardsServiceService) {
        this.req.cargarReporte().subscribe(value => {

            this.data = value;
            this.dataSource = new MatTableDataSource<DetalleReporte>(value.detalles);
        })
    }

    ngOnInit(): void {
    }


    cargarReporte() {


    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

}
