import { Component, Input, OnInit } from '@angular/core';
import { ProductCategory } from '../../../models/product.model';

@Component({
    selector: 'app-menu-category',
    templateUrl: './menu-category.component.html',
    styleUrls: ['./menu-category.component.scss']
})
export class MenuCategoryComponent implements OnInit {

    @Input()
    category!: ProductCategory;

    constructor() { }

    ngOnInit(): void {
    }

}
