export interface NoStockCompraRequerimiento {

    idAlmacenEnvia;
    fechaEntrega;
    observaciones;
    detalles: Nostock[];


}

export interface Nostock {
    codigo;
    cantidad;

}

