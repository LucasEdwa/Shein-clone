import { Products } from "./Products";

export class Categories {
    constructor(public categories: { [key: string]: string[] } = {}) {}

    getProductsByCategory(category: string, subcategory: string, products: Products[]): Products[] {
        return products.filter(product => product.category === category && product.subcategory === subcategory);
    }
}

export const categories = new Categories({
    "Women Clothes": ["Dresses", "Tops", "Bottoms"],
    "Curve": ["Plus Size Dresses", "Plus Size Tops"],
    "Men Fashion": ["Shirts", "Pants"],
    "Kids": ["Boys", "Girls"],
    "Baby & Maternity": ["Baby Clothes", "Maternity Wear"],
    "Women Lingerie & Sleep": ["Lingerie", "Sleepwear"],
    "Women Jewelry & Accs": ["Necklaces", "Earrings"],
    "Bags and Luggage": ["Handbags", "Suitcases"],
    "Women Shoes": ["Heels", "Flats"],
    "Sport & Outdoors": ["Activewear", "Equipment"],
    "Beauty & Health": ["Skincare", "Makeup"],
    "Home & Kitchen": ["Furniture", "Appliances"],
    "Tools & Home Improvement": ["Tools", "Hardware"],
    "Office & School Supplies": ["Stationery", "Office Furniture"],
    "Electronics": ["Phones", "Computers"],
    "Toys": ["Action Figures", "Dolls"],
    "Home Textile & Sewing": ["Bedding", "Fabrics"],
    "Pet Supplies": ["Pet Food", "Pet Toys"],
    "Appliances": ["Kitchen Appliances", "Home Appliances"],
    "Automotive": ["Car Accessories", "Car Parts"]
});