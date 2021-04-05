import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductCategory } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    constructor() { }

    getMenu(): Observable<ProductCategory[]> {
        return of([
            {
                "name": "First dishes",
                "products": [
                    {
                        "id": 1,
                        "name": "Chicken soup",
                        "sku": 300,
                        "price": 100
                    },
                    {
                        "id": 1,
                        "name": "Borscht",
                        "sku": "300/110",
                        "price": 150
                    },
                    {
                        "id": 1,
                        "name": "Mushroom cream soup",
                        "sku": 300,
                        "price": 150
                    },
                    {
                        "id": 1,
                        "name": "Okroshka",
                        "sku": 300,
                        "price": 120
                    }
                ]
            },
            {
                "name": "Sausages",
                "products": [
                    {
                        "id": 1,
                        "name": "Pig-Beef Sausages",
                        "sku": 100,
                        "price": 95
                    },
                    {
                        "id": 1,
                        "name": "Chicken with bacon",
                        "sku": 100,
                        "price": 85
                    },
                    {
                        "id": 1,
                        "name": "Sausages with lamb",
                        "sku": 100,
                        "price": 95
                    }
                ]
            },
            {
                "name": "Salads",
                "products": [
                    {
                        "id": 1,
                        "name": "Salad with cabbage and sour cream",
                        "description": "Filled with sour cream",
                        "sku": 200,
                        "price": 105
                    },
                    {
                        "id": 1,
                        "name": "Vegetable salad",
                        "description": "Filled with vegetable oil",
                        "sku": 200,
                        "price": 105
                    },
                    {
                        "id": 1,
                        "name": "Salad with smoked salmon",
                        "sku": 150,
                        "price": 160
                    },
                    {
                        "id": 1,
                        "name": "Salad with grilled chicken",
                        "description": "Honey-mustard fill",
                        "sku": 150,
                        "price": 140
                    }
                ]
            },
            {
                "name": "Side dishes",
                "products": [
                    {
                        "id": 1,
                        "name": "French fries",
                        "sku": 120,
                        "price": 60
                    },
                    {
                        "id": 1,
                        "name": "Tagliatelle",
                        "sku": 150,
                        "price": 65
                    },
                    {
                        "id": 1,
                        "name": "Spaghetti",
                        "sku": 150,
                        "price": 50
                    },
                    {
                        "id": 1,
                        "name": "Potato pancakes with creamy mushroom sauce",
                        "sku": 180,
                        "price": 110
                    }
                ]
            }
        ])
    }
}
