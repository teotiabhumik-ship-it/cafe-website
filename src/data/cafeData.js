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
    title: "Warm Ambient Lounge & Seating",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
    caption: "Intimate table corners crafted for cozy conversations, dates, and warm memories."
  },
  {
    title: "Cozy Dining Corners & Velvet Chairs",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=80",
    caption: "Plush comfortable seating with warm incandescent lighting for relaxing afternoons."
  },
  {
    title: "Aesthetic Neon Glow Photo Wall",
    category: "Vibes",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
    caption: "Our signature neon installation—the go-to photo backdrop for stories and reels."
  },
  {
    title: "Artisanal Coffee & Espresso Bar",
    category: "Brew Bar",
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80",
    caption: "Single-origin espresso beans freshly ground and pulled for velvety lattes & frappes."
  },
  {
    title: "Private Celebrations & Birthday Lounge",
    category: "Events",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80",
    caption: "Dedicated lounge zone with custom balloon setups, party platters, and celebration music."
  },
  {
    title: "Gourmet Stone-Baked Pizzas",
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    caption: "Handcrafted crispy crust loaded with fresh farm toppings and melted mozzarella."
  }
];

export const MENU_CATEGORIES = [
  { id: "all", label: "All Items" },
  { id: "beverages", label: "Coffee & Coolers" },
  { id: "shakes", label: "Gourmet Shakes" },
  { id: "starters", label: "Bites & Starters" },
  { id: "italian", label: "Pizzas & Pastas" },
  { id: "burgers", label: "Burgers & Sandwiches" },
  { id: "asian", label: "Pan-Asian Wok" },
  { id: "desserts", label: "Sweet Treats" },
];

export const MENU_ITEMS = [
  // Beverages & Coffee
  {
    id: 1,
    name: "Classic Artisanal Cold Coffee",
    category: "beverages",
    price: 189,
    description: "Rich espresso blended with chilled creamy milk, chocolate drizzle, and vanilla froth.",
    tag: "Bestseller",
    isVeg: true,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Hazelnut Mocha Frappe",
    category: "beverages",
    price: 219,
    description: "Double shot espresso with roasted hazelnut syrup, dark mocha sauce, topped with fresh whipped cream.",
    tag: "Chef Special",
    isVeg: true,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Blue Curacao Sparkler",
    category: "beverages",
    price: 179,
    description: "Zesty blue citrus mocktail infused with mint sprigs, lime wedge, and sparkling soda.",
    tag: "Refreshing",
    isVeg: true,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Signature Lemon Mint Iced Tea",
    category: "beverages",
    price: 159,
    description: "Freshly brewed Assam tea leaves, chilled with hand-pressed organic lemons and garden mint.",
    tag: "Popular",
    isVeg: true,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80"
  },

  // Shakes
  {
    id: 5,
    name: "Overloaded Nutella Brownie Shake",
    category: "shakes",
    price: 249,
    description: "Decadent thick shake loaded with pure Nutella, fudge brownie chunks, and chocolate flakes.",
    tag: "Must Try",
    isVeg: true,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    name: "Crispy KitKat Crunchy Shake",
    category: "shakes",
    price: 229,
    description: "Crispy wafer KitKat blended in rich vanilla ice cream, topped with KitKat sticks and chocolate swirl.",
    tag: "Bestseller",
    isVeg: true,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
  },

  // Starters & Bites
  {
    id: 7,
    name: "ElleBee Signature Crispy Corn",
    category: "starters",
    price: 219,
    description: "Golden fried sweet corn kernels tossed with fresh scallions, green chillies, and spicy tangy house masala.",
    tag: "Customer Favorite",
    isVeg: true,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1582169296194-e4d644c48063?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    name: "Korean Cream Cheese Garlic Bun",
    category: "starters",
    price: 239,
    description: "Warm brioche bun stuffed with sweet & savoury herb cream cheese and dunked in roasted garlic butter.",
    tag: "Trending",
    isVeg: true,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 9,
    name: "Peri Peri Loaded Cheese Fries",
    category: "starters",
    price: 199,
    description: "Crispy skin-on french fries seasoned with fiery African peri-peri spice and drenched in melted cheddar.",
    tag: "Popular",
    isVeg: true,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 10,
    name: "Steamed Paneer Tikka Dim Sums",
    category: "starters",
    price: 229,
    description: "Delicate translucent dumplings filled with smoked marinated paneer and herbs, served with fiery schezwan dip.",
    tag: "Chef Special",
    isVeg: true,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=600&q=80"
  },

  // Pizzas & Pastas
  {
    id: 11,
    name: "Rustic Farmhouse Gourmet Pizza",
    category: "italian",
    price: 329,
    description: "Crisp hand-tossed crust, san marzano tomato sauce, mozzarella, bell peppers, sweet corn, mushrooms & black olives.",
    tag: "Bestseller",
    isVeg: true,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 12,
    name: "Tandoori Paneer Makhani Pizza",
    category: "italian",
    price: 349,
    description: "Fusion delight featuring clay-oven tandoori paneer cubes, red onions, coriander drizzle, and stringy mozzarella.",
    tag: "Fusion Special",
    isVeg: true,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 13,
    name: "Creamy Truffle Mushroom Alfredo",
    category: "italian",
    price: 299,
    description: "Penne pasta rolled in velvety garlic parmesan cream sauce with sauteed button mushrooms and herb oil.",
    tag: "Chef Special",
    isVeg: true,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281691?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 14,
    name: "Fiery Pink Sauce Rigatoni",
    category: "italian",
    price: 289,
    description: "Perfect harmony of tangy arrabbiata tomato sauce and silky white cheese sauce with fresh basil.",
    tag: "Must Try",
    isVeg: true,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80"
  },

  // Burgers & Sandwiches
  {
    id: 15,
    name: "Double Decker Crisp Cottage Burger",
    category: "burgers",
    price: 219,
    description: "Dual spiced paneer and veggie patty layered with caramelised onions, pickled jalapenos, and molten cheddar in a toasted brioche bun.",
    tag: "Bestseller",
    isVeg: true,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 16,
    name: "Golden Corn & Three Cheese Grilled Sandwich",
    category: "burgers",
    price: 199,
    description: "Jumbo buttered bread stuffed with sweet corn kernels, mozzarella, english cheddar, and aromatic italian herbs.",
    tag: "All Time Classic",
    isVeg: true,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
  },

  // Pan-Asian
  {
    id: 17,
    name: "Wok-Tossed Chilli Paneer Gravy / Dry",
    category: "asian",
    price: 279,
    description: "Crispy batter-coated cottage cheese cubes tossed in spicy soya sauce, fresh green chillies, capsicum, and spring onions.",
    tag: "Indo-Chinese",
    isVeg: true,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 18,
    name: "Street Style Veg Hakka Noodles",
    category: "asian",
    price: 239,
    description: "Hand-pulled noodles tossed at high flame with julienned vegetables, garlic, and oriental spices.",
    tag: "Popular",
    isVeg: true,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=600&q=80"
  },

  // Desserts
  {
    id: 19,
    name: "Sizzling Walnut Brownie with Gelato",
    category: "desserts",
    price: 229,
    description: "Freshly baked rich chocolate walnut brownie served on a smoking hot iron plate with hot fudge and vanilla gelato.",
    tag: "Signature Dessert",
    isVeg: true,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 20,
    name: "Belgian Chocolate Glazed Waffle",
    category: "desserts",
    price: 219,
    description: "Crisp golden Belgian waffle smothered with melted milk & dark chocolate, banana slices, and toasted almond slivers.",
    tag: "Sweet Delight",
    isVeg: true,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=600&q=80"
  }
];

export const REVIEWS = [
  {
    id: 1,
    name: "Aakash Sharma",
    rating: 5,
    date: "2 weeks ago",
    comment: "Hands down the coziest cafe in RDC Raj Nagar! The ambience with the warm neon signs and ambient lighting is breathtaking. Their Crispy Corn and Hazelnut Frappe are unmatched.",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 2,
    name: "Pooja Verma",
    rating: 5,
    date: "1 month ago",
    comment: "We hosted my sister's 21st birthday party here and the team at Cafe ElleBee made it unforgettable! Super courteous staff, amazing music, delicious food, and tons of aesthetic photo spots.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 3,
    name: "Rohan Malhotra",
    rating: 5,
    date: "3 weeks ago",
    comment: "Perfect date spot in Ghaziabad. Quiet and snug during late afternoons, with the best pasta and cold coffee in town. Great parking availability nearby in RDC as well.",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: 4,
    name: "Sneha Tyagi",
    rating: 5,
    date: "Last month",
    comment: "The Korean cream cheese garlic bun is pure heaven! Also love that they have prompt service and a genuinely warm, hospitable atmosphere. Will definitely be visiting regularly.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
  }
];

export const CELEBRATION_PACKAGES = [
  {
    id: "birthday",
    title: "The Birthday Glow Package",
    tagline: "Turn another year bolder under our signature neon lights",
    price: "₹699",
    priceUnit: "per guest (Min 8 guests)",
    badge: "Most Popular",
    features: [
      "Custom Neon backdrop & warm balloon arch setup",
      "Welcome signature mocktails (Blue Curacao / Mojito)",
      "3-course finger bites (Crispy corn, peri peri fries, dim sums)",
      "Choice of gourmet pizzas & pasta platters",
      "Complimentary cake cutting ceremony & birthday soundtrack"
    ],
    popularFor: "Birthdays & Youth Milestones"
  },
  {
    id: "couples",
    title: "Candlelit Date & Anniversary",
    tagline: "An intimate, quiet table enveloped in warm ambient shadows",
    price: "₹1,299",
    priceUnit: "per couple",
    badge: "Intimate Evening",
    features: [
      "Reserved cozy booth with candlelit table styling",
      "2 Handcrafted artisanal beverages or frappes",
      "Choice of wood-fired style pizza or creamy pasta",
      "Signature sizzling walnut brownie with vanilla gelato",
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
      "Massive platters: Nachos, burgers, Korean buns & crispy corn",
      "Curated lo-fi / party playlist control",
      "Seamless billing and group packages"
    ],
    popularFor: "Kitty Parties, Reunions & College Farewell"
  }
];
