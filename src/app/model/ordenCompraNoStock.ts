import {DetallesOrden, DetallesProveedor} from './ordenCompra';

export interface OrdenCompraNoStock {




    codigoRequerimiento;
    numeroComprobante;
    proveedor: DetallesProveedor;
    fecha;
    detallesOrdenNoStocks: DetallesOrdenNostock[];
    fechaEntrega;
    direccionEntrega;
    moneda;
    condicionPago;
    formaPago;
    observaciones;

}
export interface DetallesOrdenNostock{

    idDetalle;
    precioUnitario;
    descuento;
}
