
export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  fullDescription: string;
  image: string;
  images: string[];
  category: string;
  collection: string;
  material: string;
  featured: boolean;
  bestseller: boolean;
  new: boolean;
  inStock: boolean;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Eternal Diamond Ring",
    price: 1299,
    description: "Elegant solitaire diamond ring in 18k gold setting.",
    fullDescription: "This timeless Eternal Diamond Ring features a brilliant-cut diamond of exceptional clarity, set in 18k gold. The minimalist design emphasizes the diamond's natural beauty, making it the perfect symbol of enduring love. Each ring is carefully crafted by our master jewelers to ensure both beauty and durability.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1589674781759-c21c37956a44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    ],
    category: "Rings",
    collection: "Classic",
    material: "Gold",
    featured: true,
    bestseller: true,
    new: false,
    inStock: true
  },
  {
    id: 2,
    name: "Sapphire Azure Necklace",
    price: 1850,
    description: "Stunning sapphire pendant with diamond accents on white gold chain.",
    fullDescription: "The Sapphire Azure Necklace features a vivid blue natural sapphire surrounded by a halo of brilliant-cut diamonds. Set in 18k white gold, this pendant hangs from a delicate chain that adds movement and catches the light. The rich blue gemstone symbolizes wisdom and royalty, making this piece a truly sophisticated addition to any jewelry collection.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1602753558631-58ad95e28ab6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1588891557302-54def2b0e4d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    ],
    category: "Necklaces",
    collection: "Gemstone",
    material: "White Gold",
    featured: true,
    bestseller: false,
    new: true,
    inStock: true
  },
  {
    id: 3,
    name: "Pearl Cascade Earrings",
    price: 850,
    description: "Elegant freshwater pearl drop earrings with silver accents.",
    fullDescription: "The Pearl Cascade Earrings feature lustrous freshwater pearls of exceptional quality that seem to float from the ear. Each pearl is carefully selected for its color, luster, and shape, then paired with sterling silver accents that add a contemporary touch to this classic design. These earrings move gracefully with every turn of the head, catching the light in a way that illuminates your face.",
    image: "https://images.unsplash.com/photo-1635767798638-3e25273a5600?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    images: [
      "https://images.unsplash.com/photo-1635767798638-3e25273a5600?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1633810541770-0f06ab2c3c2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    ],
    category: "Earrings",
    collection: "Pearl",
    material: "Silver",
    featured: false,
    bestseller: true,
    new: false,
    inStock: true
  },
  {
    id: 4,
    name: "Emerald Halo Bracelet",
    price: 2450,
    description: "Luxurious emerald and diamond bracelet in platinum setting.",
    fullDescription: "The Emerald Halo Bracelet features five vibrant green emeralds, each surrounded by a halo of brilliant-cut diamonds. Set in platinum for durability and a contemporary look, this bracelet combines the timeless allure of emeralds with the sparkle of diamonds. The articulated design allows the bracelet to move fluidly with the wrist, creating a comfortable fit and a stunning visual effect as light plays across the gemstones.",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1622398925373-3f91b1ad0a83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    ],
    category: "Bracelets",
    collection: "Gemstone",
    material: "Platinum",
    featured: true,
    bestseller: false,
    new: false,
    inStock: true
  },
  {
    id: 5,
    name: "Vintage Rose Gold Watch",
    price: 3299,
    description: "Elegant rose gold timepiece with diamond-set bezel.",
    fullDescription: "The Vintage Rose Gold Watch combines classic design with modern craftsmanship. The warm rose gold case and bracelet are complemented by a diamond-set bezel that adds a touch of luxury. The mother-of-pearl dial features Roman numerals and hands that have been meticulously crafted for precision and beauty. Powered by a high-quality Swiss movement, this watch is as reliable as it is beautiful.",
    image: "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    images: [
      "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    ],
    category: "Watches",
    collection: "Vintage",
    material: "Rose Gold",
    featured: false,
    bestseller: true,
    new: false,
    inStock: true
  },
  {
    id: 6,
    name: "Ruby Passion Pendant",
    price: 1675,
    description: "Vibrant ruby heart pendant surrounded by diamonds.",
    fullDescription: "The Ruby Passion Pendant features a heart-shaped natural ruby of vibrant red color, surrounded by a halo of brilliant-cut diamonds. Set in 18k yellow gold, this pendant symbolizes passionate love and deep commitment. The ruby's rich color is beautifully complemented by the sparkle of diamonds, creating a piece that's both romantic and luxurious. Comes with an adjustable gold chain.",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    images: [
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1599458252573-56ae36120de1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1598560917506-59a3a3c2f66b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    ],
    category: "Necklaces",
    collection: "Gemstone",
    material: "Gold",
    featured: false,
    bestseller: false,
    new: true,
    inStock: true
  },
  {
    id: 7,
    name: "Diamond Tennis Bracelet",
    price: 5499,
    description: "Classic diamond tennis bracelet with 3 carats of diamonds.",
    fullDescription: "The Diamond Tennis Bracelet is a timeless piece featuring 3 carats of round brilliant-cut diamonds set in 18k white gold. Each diamond is carefully matched for color, clarity, and size, creating a seamless line of sparkling brilliance. The secure clasp ensures safety while being easy to use. This classic design has been a staple in fine jewelry collections for generations, and for good reason—it pairs perfectly with everything from casual to formal attire.",
    image: "https://images.unsplash.com/photo-1573408301819-1d346a0e7c4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    images: [
      "https://images.unsplash.com/photo-1573408301819-1d346a0e7c4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1622398925373-3f91b1ad0a83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    ],
    category: "Bracelets",
    collection: "Classic",
    material: "White Gold",
    featured: true,
    bestseller: true,
    new: false,
    inStock: true
  },
  {
    id: 8,
    name: "Opal Dreamscape Ring",
    price: 1290,
    description: "Unique Australian opal ring with diamond side stones.",
    fullDescription: "The Opal Dreamscape Ring features a vibrant Australian opal that displays a mesmerizing play of colors. No two opals are alike, making each ring uniquely yours. The opal is flanked by small brilliant-cut diamonds and set in 18k yellow gold to enhance its natural beauty. This statement piece is perfect for those who appreciate one-of-a-kind jewelry with both color and sparkle.",
    image: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    images: [
      "https://images.unsplash.com/photo-1608042314453-ae338d80c427?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    ],
    category: "Rings",
    collection: "Gemstone",
    material: "Gold",
    featured: false,
    bestseller: false,
    new: true,
    inStock: true
  }
];

export const categories = [
  { id: 'rings', name: 'Rings' },
  { id: 'necklaces', name: 'Necklaces' },
  { id: 'earrings', name: 'Earrings' },
  { id: 'bracelets', name: 'Bracelets' },
  { id: 'watches', name: 'Watches' }
];

export const collections = [
  { id: 'classic', name: 'Classic' },
  { id: 'gemstone', name: 'Gemstone' },
  { id: 'pearl', name: 'Pearl' },
  { id: 'vintage', name: 'Vintage' }
];

export const materials = [
  { id: 'gold', name: 'Gold' },
  { id: 'whitegold', name: 'White Gold' },
  { id: 'silver', name: 'Silver' },
  { id: 'platinum', name: 'Platinum' },
  { id: 'rosegold', name: 'Rose Gold' }
];

// Generate a random UPI ID for demo purposes
export const getUpiId = () => {
  return "jewelry@upi";
};
