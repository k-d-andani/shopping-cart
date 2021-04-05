import { Component, Input, OnInit } from '@angular/core';
import { ProductCategory } from '../../models/product.model';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


    @Input()
    menu: ProductCategory[] | null = [];

    constructor() { }

    ngOnInit(): void {
    }

}
