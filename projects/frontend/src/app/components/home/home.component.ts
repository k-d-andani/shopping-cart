import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { Order, ProductCategory, UpdateOrderAction } from '../../models/product.model';
import { OrderService } from '../../services/order.service';
import { ProductsService } from '../../services/products.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    menu$!: Observable<ProductCategory[] | null>;
    orderId!: string | null;
    order$!: Observable<Order | undefined>;

    constructor(
        private activatedRoute: ActivatedRoute,
        private productService: ProductsService,
        private orderService: OrderService
    ) { }

    async ngOnInit() {
        const order = this.activatedRoute.snapshot.queryParams.order;

        if (!order) {
            await this.orderService.createOrder();
            this.orderId = sessionStorage.getItem('current_order');
        }
        else {
            this.orderId = order;
            sessionStorage.setItem('current_order', order);
        }

        this.menu$ = this.productService.getMenu().pipe(take(1));

        this.order$ = this.orderService.getOrder(this.orderId);
        this.order$.pipe(filter(order => !!order)).subscribe(order => {
            if (order?.products && !order?.products.length) {
                this.orderService.handleOrderClearing();
            }
        })
    }

    updateOrder(orderUpdate: UpdateOrderAction) {
        this.orderService.updateOrder(this.orderId, orderUpdate);
    }

    clearOrder() {
        alert(this.orderId);
        this.orderService.clearOrder(this.orderId);
    }

}
