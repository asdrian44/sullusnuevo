export interface ProductModel {

    codigo;
    descripcion;
    modelo;
    color;
    marca;
    talla;

    precio;
    tipo: TipoProduct;
}

export interface TipoProduct {
    idTipo;
    tipoproducto;
}
