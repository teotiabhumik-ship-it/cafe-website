export const CAFE_INFO = {
  name: "Cafe ElleBee",
  tagline: "Where Cozy Aromas Meet Vibrant Evenings",
  description: "A sanctuary of artisanal coffees, gourmet comfort food, and warm ambient aesthetics nestled in the heart of RDC, Raj Nagar, Ghaziabad.",
  address: "B-19, Ground Floor, RDC, Raj Nagar, Ghaziabad, Uttar Pradesh 201002",
  landmark: "Ground Floor, RDC Commercial Hub, Raj Nagar",
  coordinates: {
    lat: 28.6738898,
    lng: 77.443433,
  },
  googleMapsUrl: "https://www.google.com/maps/place/Cafe+ElleBee/@28.6738898,77.443433,17z/data=!4m10!1m2!2m1!1scafe+in+rajnagar!3m6!1s0x390cf1fe3a63e043:0xc2c1914e08ee5c48!8m2!3d28.6738898!4d77.443433",
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=28.6738898,77.443433&hl=en&z=17&output=embed",
  phoneNumbers: ["+91 93544 60764", "+91 99992 86130"],
  whatsappNumber: "+919354460764",
  instagramHandle: "cafe_ellebee",
  instagramUrl: "https://www.instagram.com/cafe_ellebee/",
  hours: "11:00 AM – 11:00 PM",
  days: "Monday – Sunday (Open All 7 Days)",
  costForTwo: "₹600 – ₹900",
  rating: 4.6,
  reviewCount: "1,200+",
  swiggyUrl: "https://www.swiggy.com/restaurants/cafe-ellebee-rdc-raj-nagar-ghaziabad",
  zomatoUrl: "https://www.zomato.com/ncr/cafe-ellebee-raj-nagar-ghaziabad",
};

export const CAFE_GALLERY = [
  {
    title: "Main Lounge & Skylight Ceiling",
    category: "Interior",
    image: "/images/cafe_interior_main.jpg",
    caption: "Teal leather banquettes, floral blossom feature wall, and wooden coffered ceiling."
  },
  {
    title: "Exterior Entrance & Neon Sign",
    category: "Facade",
    image: "/images/cafe_entrance_signboard.jpg",
    caption: "Official neon script Elle Bee sign and glass-grid entrance at RDC Raj Nagar."
  },
  {
    title: "Signature Branded Coolers",
    category: "Brew Bar",
    image: "/images/cafe_branded_drinks.jpg",
    caption: "Iced mocktails and refresher brews served in custom ElleBee glass cans."
  },
  {
    title: "Artisan Pink Sauce Pasta",
    category: "Kitchen",
    image: "/images/cafe_pasta_dish.jpg",
    caption: "Penne pasta rolled in creamy rosé sauce served with toasted garlic bread."
  },
  {
    title: "Paneer Tikka Fattoush Platter",
    category: "Specialty",
    image: "/images/cafe_paneer_nachos.jpg",
    caption: "Smoked paneer tikka, seasoned greens, and crunchy spiced pita crisps."
  },
  {
    title: "Private Party Celebration Setup",
    category: "Lounge",
    image: "/images/cafe_party_celebration.jpg",
    caption: "Dedicated celebration wing with balloon canopies and celebration platters."
  },
  {
    title: "Cozy Dining Booths & Planters",
    category: "Seating",
    image: "/images/cafe_booths_seating.jpg",
    caption: "Comfortable booth seating framed with warm accent lighting and green planters."
  },
  {
    title: "Full Hall Perspective",
    category: "Ambiance",
    image: "/images/cafe_full_dining_hall.jpg",
    caption: "Wide view across the dining hall showing patterned tile floors and warm acoustics."
  },
  {
    title: "Architectural Cozy Corner",
    category: "Vibes",
    image: "/images/cafe_aesthetic_corner.jpg",
    caption: "Intimate table corners curated for quiet dates, studying, and conversations."
  }
];

export const MENU_CATEGORIES = [
  { id: "all", label: "All Items" },
  { id: "italian", label: "Pizzas & Pastas" },
  { id: "starters", label: "Bites & Starters" },
  { id: "asian", label: "Pan-Asian & Dim Sum" },
  { id: "burgers", label: "Burgers" },
  { id: "beverages", label: "Coffee & Coolers" }
];

export const MENU_ITEMS = [
  // Pizzas & Pastas
  {
    id: 1,
    name: "Signature Pink Sauce Penne Pasta",
    category: "italian",
    price: 289,
    description: "Al dente penne pasta rolled in our house rosé cream sauce with herbs, served with golden garlic bread.",
    tag: "Bestseller",
    isVeg: true,
    rating: 4.9,
    image: "/images/cafe_pasta_dish.jpg"
  },
  {
    id: 2,
    name: "Classic Margherita Pizza",
    category: "italian",
    price: 299,
    description: "Hand-tossed crust, San Marzano tomato reduction, fragrant fresh basil leaves, and bubbling mozzarella.",
    tag: "Classic",
    isVeg: true,
    rating: 4.8,
    image: "/images/cafe_dish_margherita_pizza.jpg"
  },
  {
    id: 3,
    name: "Rustic Farmhouse Veggie Pizza",
    category: "italian",
    price: 349,
    description: "Abundant sautéed mushrooms, bell peppers, sweet corn, black olives, and stretchy mozzarella cheese pull.",
    tag: "Chef Special",
    isVeg: true,
    rating: 4.9,
    image: "/images/cafe_dish_farmhouse_pizza.jpg"
  },
  {
    id: 4,
    name: "Fiery Penne Arrabbiata",
    category: "italian",
    price: 269,
    description: "Slow-simmered spicy Italian tomato sauce with garlic, black olives, crushed chili flakes, and toasted herb bread.",
    tag: "Spicy & Bold",
    isVeg: true,
    rating: 4.7,
    image: "/images/cafe_dish_red_pasta.jpg"
  },
  {
    id: 5,
    name: "Creamy Basil Pesto Pasta",
    category: "italian",
    price: 299,
    description: "Fragrant basil pesto sauce folded into rich garlic cream over tender penne, served with crispy garlic toast.",
    tag: "Specialty",
    isVeg: true,
    rating: 4.8,
    image: "/images/cafe_dish_pesto_pasta.jpg"
  },

  // Bites & Starters
  {
    id: 6,
    name: "Baked Loaded Cheese Nachos",
    category: "starters",
    price: 219,
    description: "Stone-ground corn chips layered with bubbling melted mozzarella, sliced black olives, and tangy homemade salsa.",
    tag: "Bestseller",
    isVeg: true,
    rating: 4.9,
    image: "/images/cafe_dish_loaded_nachos.jpg"
  },
  {
    id: 7,
    name: "Crispy Cheese Cigar Rolls",
    category: "starters",
    price: 229,
    description: "Hand-rolled crispy cigar rolls filled with molten cheese, served vertically in a shot-glass flight over spicy dips.",
    tag: "Chef Special",
    isVeg: true,
    rating: 4.8,
    image: "/images/cafe_dish_cigar_rolls.jpg"
  },
  {
    id: 8,
    name: "Paneer Tikka Fattoush Platter",
    category: "starters",
    price: 199,
    description: "Tandoori smoked paneer cubes tossed with garden greens, crisp seasoned pita crisps, and Mediterranean dressing.",
    tag: "House Special",
    isVeg: true,
    rating: 4.9,
    image: "/images/cafe_paneer_nachos.jpg"
  },
  {
    id: 9,
    name: "Cheese Corn Croquettes",
    category: "starters",
    price: 199,
    description: "Golden crumbed croquettes with sweet corn and melting cheese centers, presented on a wooden platter with duo dips.",
    tag: "Popular",
    isVeg: true,
    rating: 4.7,
    image: "/images/cafe_dish_croquettes.jpg"
  },
  {
    id: 10,
    name: "Crispy Golden Spring Rolls",
    category: "starters",
    price: 189,
    description: "Thin flaky rolls stuffed with julienned wok vegetables, served hot with sweet chili sauce and garden garnish.",
    tag: "Crispy",
    isVeg: true,
    rating: 4.8,
    image: "/images/cafe_dish_spring_rolls.jpg"
  },
  {
    id: 11,
    name: "Crispy Honey Chilli Potato",
    category: "starters",
    price: 199,
    description: "Fried crisp potato strips wok-glazed in sweet honey, roasted chili flakes, sesame seeds, and capsicum.",
    tag: "Customer Favorite",
    isVeg: true,
    rating: 4.8,
    image: "/images/cafe_dish_honey_chilli_potato.jpg"
  },
  {
    id: 12,
    name: "Traditional Dahi Ke Kebabs",
    category: "starters",
    price: 219,
    description: "Golden crisp spiced yogurt patties served on shredded garden salad with house mint-coriander emulsion.",
    tag: "Traditional",
    isVeg: true,
    rating: 4.8,
    image: "/images/cafe_dish_dahi_kebabs.jpg"
  },

  // Pan-Asian Wok & Dim Sum
  {
    id: 13,
    name: "Steamed Veg Dim Sums / Momos",
    category: "asian",
    price: 189,
    description: "Hand-pleated thin dumplings steamed to perfection in a wooden box, served with fiery red pepper chutney.",
    tag: "Handcrafted",
    isVeg: true,
    rating: 4.9,
    image: "/images/cafe_dish_steamed_momos.jpg"
  },
  {
    id: 14,
    name: "Wok-Tossed Chilli Paneer",
    category: "asian",
    price: 249,
    description: "Crispy cottage cheese cubes tossed with bell peppers, sweet onions, and spicy dark soya sauce at high flame.",
    tag: "Indo-Chinese",
    isVeg: true,
    rating: 4.8,
    image: "/images/cafe_dish_chilli_paneer.jpg"
  },
  {
    id: 15,
    name: "Street Style Chilli Garlic Noodles",
    category: "asian",
    price: 219,
    description: "Wok-seared hakka noodles tossed with scallions, bell peppers, paneer chunks, and fiery chili garlic sauce.",
    tag: "Popular",
    isVeg: true,
    rating: 4.7,
    image: "/images/cafe_dish_hakka_noodles.jpg"
  },
  {
    id: 16,
    name: "Cafe ElleBee Signature Wok Noodles",
    category: "asian",
    price: 229,
    description: "Freshly prepared noodle bowl tossed in house oriental spices, served with traditional chopsticks.",
    tag: "House Special",
    isVeg: true,
    rating: 4.8,
    image: "/images/cafe_dish_wok_noodles.jpg"
  },
  {
    id: 17,
    name: "Aromatic Vegetable Fried Rice",
    category: "asian",
    price: 219,
    description: "Fragrant basmati grains wok-fried with finely chopped garden vegetables, scallions, and sweet chili sauce.",
    tag: "Wok Special",
    isVeg: true,
    rating: 4.7,
    image: "/images/cafe_dish_fried_rice.jpg"
  },

  // Burgers
  {
    id: 18,
    name: "Gourmet ElleBee Double Decker Burger",
    category: "burgers",
    price: 189,
    description: "Crisp seasoned veggie patty layered with melted cheese, crisp lettuce, tomato, onions, tortilla chips, and dipping sauces.",
    tag: "Bestseller",
    isVeg: true,
    rating: 4.8,
    image: "/images/cafe_dish_burger.jpg"
  },

  // Beverages & Coffee
  {
    id: 19,
    name: "Signature ElleBee Branded Iced Coolers",
    category: "beverages",
    price: 179,
    description: "Refreshing citrus and berry coolers served in custom ElleBee glass cans with fresh mint and fizz.",
    tag: "Signature",
    isVeg: true,
    rating: 4.9,
    image: "/images/cafe_branded_drinks.jpg"
  },
  {
    id: 20,
    name: "Classic Artisanal Cold Coffee",
    category: "beverages",
    price: 199,
    description: "Single-origin espresso pulled fresh, blended with chilled creamy milk, chocolate syrup, and silky froth.",
    tag: "Bestseller",
    isVeg: true,
    rating: 4.9,
    image: "/images/cafe_branded_drinks.jpg"
  }
];

export const REVIEWS = [
  {
    id: 1,
    author: "Aakash Sharma",
    name: "Aakash Sharma",
    rating: 5,
    time: "2 weeks ago",
    date: "2 weeks ago",
    comment: "Hands down the coziest cafe in RDC Raj Nagar! The ambience with the warm lighting and floral skylight ceiling is breathtaking. Their Pink Sauce Pasta and signature coolers are unmatched."
  },
  {
    id: 2,
    author: "Pooja Verma",
    name: "Pooja Verma",
    rating: 5,
    time: "1 month ago",
    date: "1 month ago",
    comment: "We hosted my sister's 21st birthday party here and the team at Cafe ElleBee made it unforgettable! Super courteous staff, amazing music, delicious food, and tons of aesthetic photo spots."
  },
  {
    id: 3,
    author: "Rohan Malhotra",
    name: "Rohan Malhotra",
    rating: 5,
    time: "3 weeks ago",
    date: "3 weeks ago",
    comment: "Perfect date spot in Ghaziabad. Quiet and snug during late afternoons, with the best pasta, loaded nachos, and cold coffee in town. Great parking availability nearby in RDC as well."
  },
  {
    id: 4,
    author: "Sneha Tyagi",
    name: "Sneha Tyagi",
    rating: 5,
    time: "Last month",
    date: "Last month",
    comment: "The Dim Sums and Cheese Cigar Rolls are pure perfection! Also love that they have prompt service and a genuinely warm, hospitable atmosphere. Will definitely be visiting regularly."
  }
];

export const CELEBRATION_PACKAGES = [
  {
    id: "birthday",
    title: "The Birthday Glow Package",
    tagline: "Turn another year bolder under our warm ceiling lighting & balloon canopy",
    price: "₹699",
    priceUnit: "per guest (Min 8 guests)",
    badge: "Most Popular",
    features: [
      "Custom balloon canopy & warm ambient lounge setup",
      "Welcome signature coolers in ElleBee glass cans",
      "3-course finger bites (Loaded nachos, croquettes, dim sums)",
      "Choice of stone-baked gourmet pizzas & pasta platters",
      "Complimentary cake cutting ceremony & celebration soundtrack"
    ],
    popularFor: "Birthdays & Youth Milestones"
  },
  {
    id: "couples",
    title: "Candlelit Date & Anniversary",
    tagline: "An intimate, quiet booth enveloped in warm ambient shadows",
    price: "₹1,299",
    priceUnit: "per couple",
    badge: "Intimate Evening",
    features: [
      "Reserved cozy booth with candlelit table styling",
      "2 Handcrafted artisanal coolers or cold coffees",
      "Choice of gourmet pizza or signature pink sauce pasta",
      "Complimentary celebration dessert plate",
      "Priority personalized hospitality"
    ],
    popularFor: "Anniversaries & Romantic Dates"
  },
  {
    id: "lounge",
    title: "The Friends & Kitty Lounge",
    tagline: "Spacious private seating zone for reunions and celebrations",
    price: "₹599",
    priceUnit: "per guest (Min 10 guests)",
    badge: "Group Favorite",
    features: [
      "Exclusive lounge wing for 10 to 30+ guests",
      "Endless pitchers of iced teas & refreshing coolers",
      "Platters: Loaded nachos, burger sliders, cigar rolls & noodles",
      "Curated lo-fi / party playlist control",
      "Seamless billing and group packages"
    ],
    popularFor: "Kitty Parties, Reunions & College Farewell"
  }
];
