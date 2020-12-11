import {nostock} from './noStockCompraRequerimiento';

export interface NoStockTrasladoRequerimiento {
    idAlmacenEntrega: number;
    fechaEmision: string;
    fechaEntrega: string;
    condicionRequerimiento: string;
    detallesRequerimiento: nostock[];
    observaciones: string;
}

