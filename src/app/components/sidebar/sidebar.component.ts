import {Component, OnInit} from '@angular/core';

declare const $: any;

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    {path: '/home', title: 'Dashboard', icon: 'dashboard', class: ''},
    {path: '/user-profile', title: 'User Profile', icon: 'person', class: ''},
    {path: '/productos', title: 'Productos', icon: 'content_paste', class: ''},
    {path: '/requerimientos', title: 'Requerimientos', icon: 'dashboard', class: ''},
    {path: '/movimientos', title: 'Movimientos', icon: 'content_paste', class: ''},
    {path: '/ordenes', title: 'Mis ordenes de compra', icon: 'content_paste', class: ''},
    {path: '/reporte', title: 'Reporte', icon: 'content_paste', class: ''}

];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    menuItems: any[];

    constructor() {
    }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
}
