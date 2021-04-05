import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../models/product.model';
import { OrderService } from '../../../services/order.service';
import { UpdateOrderAction } from './../../../models/product.model';

@Component({
    selector: 'app-menu-item',
    templateUrl: './menu-item.component.html',
    styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

    @Input()
    product!: Product;

    @Output()
    click = new EventEmitter<UpdateOrderAction>();

    amount: number = 0;
    orderId!: string;

    constructor(private orderService: OrderService) {
        this.orderService.clearOrder$.subscribe(() => {
            this.amount = 0;
            sessionStorage.removeItem(`${this.orderId}-${this.product.name}`)
        })
    }

    ngOnInit() {
    }

    handleClick() {
        event?.stopPropagation();
        if (this.amount < 1) {
            this.amount = 1;
            this.emitAction("add");
        }
    }

    increaseAmount() {
        event?.stopPropagation();
        this.amount = this.amount + 1;
        this.emitAction("add");
    }

    decreaseAmount() {
        event?.stopPropagation();
        this.amount = Math.max(this.amount - 1, 0);
        this.emitAction("remove");
    }


    private emitAction(action: "add" | "remove") {
        this.click.emit({
            action,
            name: this.product.name,
            price: this.product.price || 0
        });
    }

}
