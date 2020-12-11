import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

    private variables = ['orden'];


    constructor(@Inject(MAT_DIALOG_DATA) public data) {

        console.log(data.data)


    }

    ngOnInit(): void {
    }

    validateTemplate() {





    }

}
