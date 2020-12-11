import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {FooterComponent} from './footer/footer.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {StickyComponent} from './sticky/sticky.component';
import {ModalComponent} from './modal/modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import {OrdenCompraComponent} from '../productos/orden-compra/orden-compra.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {ModalRequerimientoComponent} from '../requerimiento/modal-requerimiento/modal-requerimiento.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {ModalEditarRequerimientoComponent} from '../requerimiento/modal-editar-requerimiento/modal-editar-requerimiento.component';
import {SalidaModalComponent} from '../movimientos/salida-modal/salida-modal.component';
import {EntradaModalComponent} from '../movimientos/entrada-modal/entrada-modal.component';
import {NgxMatSelectSearchModule} from 'ngx-mat-select-search';
import { SearchComponent } from './search/search.component';
import {OrdenesModalComponent} from '../ordenes/ordenes-modal/ordenes-modal.component';
import { ModalErrorComponent } from './modal-error/modal-error.component';
import { SearchTrasladoComponent } from './search-traslado/search-traslado.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatDialogModule,
        FormsModule, ReactiveFormsModule, MatTableModule, MatInputModule, MatFormFieldModule,
        MatSelectModule, MatDatepickerModule, MatNativeDateModule,NgxMatSelectSearchModule
    ],
    declarations: [
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        StickyComponent,
        ModalComponent,
        OrdenCompraComponent,
        ModalRequerimientoComponent, ModalEditarRequerimientoComponent,SalidaModalComponent,EntradaModalComponent, SearchComponent,
        OrdenesModalComponent,
        ModalErrorComponent,
        SearchTrasladoComponent
    ],
    exports: [
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        StickyComponent,

    ],

})
export class ComponentsModule {
}
