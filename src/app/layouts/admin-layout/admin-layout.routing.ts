import {Routes} from '@angular/router';

import {DashboardComponent} from '../../dashboard/dashboard.component';
import {UserProfileComponent} from '../../user-profile/user-profile.component';
import {TableListComponent} from '../../productos/table-list.component';
import {TypographyComponent} from '../../typography/typography.component';
import {IconsComponent} from '../../icons/icons.component';
import {MapsComponent} from '../../maps/maps.component';
import {NotificationsComponent} from '../../notifications/notifications.component';
import {RequerimientoComponent} from '../../requerimiento/requerimiento.component';
import {MovimientosComponent} from '../../movimientos/movimientos.component';
import {OrdenesComponent} from '../../ordenes/ordenes.component';
import {ReportTablaComponent} from '../../reporte/report-tabla/report-tabla.component';


export const AdminLayoutRoutes: Routes = [

    {path: 'home', component: DashboardComponent},
    {path: 'user-profile', component: UserProfileComponent},
    {path: 'productos', component: TableListComponent},
    {path: 'typography', component: TypographyComponent},
    {path: 'icons', component: IconsComponent},
    {path: 'maps', component: MapsComponent},
    {path: 'notifications', component: NotificationsComponent},
    {path: 'requerimientos', component: RequerimientoComponent},
    {path: 'movimientos', component: MovimientosComponent},
    {path: 'ordenes', component: OrdenesComponent},
    {path: 'reporte', component: ReportTablaComponent}

];
