import { Categorie } from "./categorie";

export interface  Product {
    id: number; 
    title: string; 
    price: number; 
    description: string; 
    category: Categorie;
    images: string[];
}

 