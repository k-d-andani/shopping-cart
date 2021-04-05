import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { Observable, Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { v4 as uuid } from 'uuid';
import { Order, UpdateOrderAction } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class OrderService {

    private _clear$ = new Subject<void>();

    constructor(
        private router: Router,
        private afs: AngularFirestore
    ) {
    }

    createOrder() {
        let orderId = uuid();
        sessionStorage.setItem('current_order', orderId)
        this.afs.collection("orders").doc<Order>(orderId).set({ products: [] })
            .then(_ => {
                this.router.navigate(['/'], { queryParams: { 'order': orderId } });
            })
            .catch(err => {
                console.error(err);
            })
    }

    getOrder(orderId: string | null): Observable<Order | undefined> {
        const orderDoc = this.afs.doc<Order>(`orders/${orderId}`);
        return orderDoc.valueChanges();
    }

    async updateOrder(orderId: string | null, update: UpdateOrderAction) {
        const order = await this.afs.doc<Order>(`orders/${orderId}`).valueChanges().pipe(take(1)).toPromise();

        if (update.action == "add") {
            this.afs.doc<Order>(`orders/${orderId}`).update({
                products: <any>firebase.firestore.FieldValue.arrayUnion({
                    id: uuid(),
                    name: update.name,
                    category: update.category,
                    price: update.price
                })
            })
        }
        else {
            const productIds = order?.products.filter(d => d.name == update.name).map(d => d.id);
            const idToRemove = productIds && productIds[0];
            if (!idToRemove) return;
            this.afs.doc<Order>(`orders/${orderId}`).update({
                products: <any>firebase.firestore.FieldValue.arrayRemove({
                    id: idToRemove,
                    name: update.name,
                    category: update.category,
                    price: update.price
                })
            })
        }
    }

    get clearOrder$() {
        return this._clear$.asObservable();
    }

    clearOrder(orderId: string | null) {
        this.afs.doc<Order>(`orders/${orderId}`).update({
            products: []
        })
        this._clear$.next();
    }
    handleOrderClearing() {
        this._clear$.next();
    }
}
