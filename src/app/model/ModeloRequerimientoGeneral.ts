export interface ModeloRequerimientoGeneral {

    fechaEntrega;
    observaciones;


    detalles: DetallesRequerimientoGeneral[];
}

export interface DetallesRequerimientoGeneral {
    codigo;
    cantidad;

}
