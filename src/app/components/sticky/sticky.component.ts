import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ModalComponent} from '../modal/modal.component';


@Component({
    selector: 'app-sticky',
    templateUrl: './sticky.component.html',
    styleUrls: ['./sticky.component.css']
})
export class StickyComponent implements OnInit {


    @Input()
    public nameComponent: string;

    constructor(public dialog: MatDialog) {
    }

    ngOnInit(): void {
    }

    addClick() {
        this.dialog.open(ModalComponent, {
            data: {
                data: this.nameComponent

            }
        })
    }
}
