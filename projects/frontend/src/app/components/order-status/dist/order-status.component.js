"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OrderStatusComponent = void 0;
var core_1 = require("@angular/core");
var OrderStatusComponent = /** @class */ (function () {
    function OrderStatusComponent() {
    }
    OrderStatusComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(OrderStatusComponent.prototype, "dishes", {
        get: function () {
            if (!this.order || !this.order.dishes)
                return [];
            return this.order.dishes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderStatusComponent.prototype, "categorizedDishes", {
        get: function () {
            return this.dishes.reduce(function (prev, current) {
                if (!prev[current.category]) {
                    prev[current.category] = [{
                            name: current.name,
                            amount: 1
                        }];
                }
                else {
                    var productsInCategory = prev[current.category];
                    var currentDishIndex = productsInCategory.findIndex(function (p) { return p.name == current.name; });
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
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderStatusComponent.prototype, "dishCategories", {
        get: function () {
            return Object.keys(this.categorizedDishes);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OrderStatusComponent.prototype, "totalPrice", {
        get: function () {
            return this.dishes.reduce(function (p, c) {
                return p + c.price;
            }, 0);
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        core_1.Input()
    ], OrderStatusComponent.prototype, "order");
    OrderStatusComponent = __decorate([
        core_1.Component({
            selector: 'app-order-status',
            templateUrl: './order-status.component.html',
            styleUrls: ['./order-status.component.scss']
        })
    ], OrderStatusComponent);
    return OrderStatusComponent;
}());
exports.OrderStatusComponent = OrderStatusComponent;
