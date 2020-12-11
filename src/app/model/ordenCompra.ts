export interface OrdenCompra {


    numeroComprobante;
    proveedor: DetallesProveedor;
    detalles: DetallesOrden[];
    fechaEntrega;
    direccionEntrega;
    monedas;
    condicionPago;
    formaPago;
    observaciones;


}

export interface DetallesProveedor {

    ruc;
    nombre;
    correo;
    telefono;
    direccion;
}

export interface DetallesOrden {

    codigo;
    tipo;
    precioUnitario;
    descuento;
    cantidad;


}
