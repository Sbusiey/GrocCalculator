import { Injectable } from "@angular/core";

export interface Contact {
    id: number,
    name: {
        firstName: string,
        lastName: string
    },
    photo?: string,

    price: number

};

@Injectable()
export class ContactService {
    private _contacts: Contact[] = [
        {
            id: 0,
            name: {
                firstName: "Good Morning",
                lastName: ""
            },
            photo: "~/GroceryBudget/GoodBiskuits.jpg",

            price: 25

        },
        {
            id: 1,
            name: {
                firstName: "Liqui Fruit",
                lastName: ""
            },
            photo: "~/GroceryBudget/LiqourFruits.jpg",

            price: 25
        },
        {
            id: 2,
            name: {
                firstName: "Flora",
                lastName: "Bread Spread"
            },
            photo: "~/GroceryBudget/Flora.jpg",
            price: 30
        },
        {
            id: 3,
            name: {
                firstName: "Ola",
                lastName: "Ice Cream"
            },
            photo: "~/GroceryBudget/olaIce.png",
            price: 30
        },
        {
            id: 4,
            name: {
                firstName: "Rainbow",
                lastName: "Mixed Portion"
            },
            photo: "~/GroceryBudget/portions.jpg",
            price: 50
        },
        {
            id: 5,
            name: {
                firstName: "Pringles",
                lastName: "Originals"
            },
            photo: "~/GroceryBudget/Pringles.jpg",
            price: 30
        },
        {
            id: 6,
            name: {
                firstName: "Ultramel",
                lastName: ""
            },
            photo: "~/GroceryBudget/ultramel.jpg",
            price: 20
        }
    ];

    get contacts(): Contact[] {
        return this._contacts;
    }

    findContact(id): Contact {
        return this._contacts.find(contact => contact.id === parseInt(id));
    }
}
