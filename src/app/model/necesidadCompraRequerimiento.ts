export interface NecesidadCompraRequerimiento {

    fechaEmision: string;
    fechaEntrega: string;
    condicionRequerimiento: string;
    detallesRequerimiento: detallesCompraRequerimientoNecesidad[];
    observaciones: string;

}

export interface detallesCompraRequerimientoNecesidad {
    descripcion: string;
    cantidad: number;
    unidadMedida: string;
    color: string;
    talla: string;
    marca: string;
    modelo: string;
    idTipo: number
}
