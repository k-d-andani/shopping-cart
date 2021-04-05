import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../../models/product.model';

@Component({
    selector: 'app-order-status',
    templateUrl: './order-status.component.html',
    styleUrls: ['./order-status.component.scss']
})
export class OrderStatusComponent implements OnInit {

    @Input()
    order!: Order | undefined;

    ngOnInit() { }

    get products() {
        if (!this.order || !this.order.products) return [];

        return this.order.products;
    }

    get categorizedDishes() {
        return this.products.reduce((prev: any, current: any) => {
            if (!prev[current.category]) {
                prev[current.category] = [{
                    name: current.name,
                    amount: 1
                }]
            }
            else {
                let productsInCategory: { name: string, amount: number }[] = prev[current.category];
                let currentDishIndex = productsInCategory.findIndex(p => p.name == current.name)
                if (currentDishIndex !== -1) {
                    productsInCategory[currentDishIndex].amount++;
                }
                else {
                    productsInCategory.push({
                        name: current.name,
                        amount: 1
                    });
                }

            }
            return prev;
        }, {});
    }

    get dishCategories() {
        return Object.keys(this.categorizedDishes);
    }

    get totalPrice() {
        return this.products.reduce((p, c) => {
            return p + c.price
        }, 0)
    }

}
