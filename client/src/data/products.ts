import { Products } from "../models/Products";
import { Categories } from "../models/Categories";

export const products: Products[] = [
    new Products("Product 1", 100, "Women Clothes", "Dresses"),
    new Products("Product 2", 200, "Men Fashion", "Shirts"),
    new Products("Product 3", 300, "Kids", "Boys"),
    new Products("Product 4", 400, "Electronics", "Phones"),
    new Products("Product 5", 500, "Women Clothes", "Tops"),
    new Products("Product 6", 600, "Beauty & Health", "Skincare"),
    new Products("Product 7", 700, "Home & Kitchen", "Furniture"),
];

// Example usage
const categories = new Categories({
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
const newArrivalProducts = categories.getProductsByCategory("Women Clothes", "Dresses", products);
console.log(newArrivalProducts);