import { CiLock, CiMapPin, CiSettings, CiUser } from "react-icons/ci";
import { FaBell, FaHeart, FaPlus, FaTag, FaUsers } from "react-icons/fa";
import { LuPackage } from "react-icons/lu";
import { RiBuilding2Fill } from "react-icons/ri";
import { TbLayoutGridAdd } from "react-icons/tb";

export const CatagoryData = [
  { id: 1, name: "Fruits", icon: "🍊", link: "fruits" },
  { id: 2, name: "Vegetables", icon: "🥦", link: "vegetables" },
  { id: 3, name: "Milk", icon: "🥛", link: "Dairy" },
  { id: 4, name: "Bakery", icon: "🥖", link: "Breakfast" },
  { id: 5, name: "Personal-Care", icon: "🧴", link: "personal-care" },
  { id: 6, name: "Grains", icon: "🌾", link: "Herbs" },
  { id: 7, name: "Chicken & Egg", icon: "🍗", link: "Meat" },
  { id: 7, name: "Juice", icon: "🥤", link: "Beverages" },
];

export const PopProducts = [
  {
    id: 1,
    name: "Red Carrot Vegetables",
    image: "/products/carrot.png",
    price: 4.99,
    Fakeprice: 4.99,
  },
  {
    id: 2,
    name: "Cauliflower 1 pc",
    image: "/products/Cauliflower.png",
    Fakeprice: 4.99,
    price: 4.99,
  },
  {
    id: 3,
    name: "Cilantro (2 Pc)",
    image: "/products/Cilantro.png",
    price: 4.99,
    Fakeprice: 4.99,
  },
  {
    id: 4,
    name: "Fresh Green Capsicum (500gm)",
    image: "/products/Fresh Green Capsicum.png",
    Fakeprice: 4.99,
    price: 4.99,
  },
  {
    id: 5,
    name: "Fresh Mango From Mexico (1Kg)",
    image: "/products/Fresh Mango From Mexico.png",
    price: 4.99,
    Fakeprice: 4.99,
  },
  {
    id: 6,
    name: "Fresh Orange 6 pcs",
    image: "/products/Fresh Orange.png",
    Fakeprice: 4.99,
    price: 4.99,
  },
];

export const products = [
  {
    id: "1",
    name: "Foster Farms Takeout Crispy Classic",
    category: "Baking material",
    price: 17.85,
    originalPrice: 19.8,
    discount: 10,
    image:
      "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=300&q=80",
    rating: 0,
    brand: "Country Crock",
  },
  {
    id: "2",
    name: "Organic Cage Grade A Large Eggs",
    category: "Baking material",
    price: 21.0,
    originalPrice: 24.0,
    discount: 13,
    image:
      "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=300&q=80",
    rating: 0,
    brand: "Hambger Hel",
  },
  {
    id: "3",
    name: "Haagen Caramel Cone Ice Cream Boxed",
    category: "Milks & Dairies",
    price: 22.85,
    originalPrice: 24.9,
    discount: 8,
    image:
      "https://images.unsplash.com/photo-1570197571499-166b36435e9f?w=300&q=80",
    rating: 1,
    brand: "Hambger Hel",
  },
  // Add more products as needed
];

export const DrawerCategories = {
  fruits: [
    {
      name: "Apples",
      image:
        "https://plus.unsplash.com/premium_photo-1667049292983-d2524dd0ef08?q=80&w=1749&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      items: ["Red Delicious", "Granny Smith", "Fuji"],
      link: "fruits"
    },
    {
      name: "Bananas",
      image:
        "https://plus.unsplash.com/premium_photo-1724250081102-cab0e5cb314c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      items: ["Cavendish", "Plantain", "Red Banana"],
      link: "fruits"
    },
    {
      name: "Berries",
      image:
        "https://images.unsplash.com/photo-1613082410785-22292e8426e7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      items: ["Strawberries", "Blueberries", "Raspberries"],
      link: "fruits"
    },
  ],
  vegetables: [
    {
      name: "Leafy Greens",
      image:
        "https://plus.unsplash.com/premium_photo-1705056545505-942aff49cd9e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      items: ["Spinach", "Kale", "Lettuce"],
      link: "vegetables"
    },
    {
      name: "Root Vegetables",
      image:
        "https://images.unsplash.com/photo-1635450672547-bf600c193d3d?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      items: ["Carrots", "Potatoes", "Beets"],
      link: "vegetables"
    },
    {
      name: "Cruciferous",
      image:
        "https://images.unsplash.com/photo-1598030343246-eec71cb44231?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      items: ["Broccoli", "Cauliflower", "Cabbage"],
      link: "vegetables"
    },
  ],
  milk: [
    {
      name: "Cow Milk",
      image:
        "https://plus.unsplash.com/premium_photo-1682129071833-65eed17bcf11?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      items: ["Whole Milk", "Skim Milk", "2% Milk"],
      link: "dairy"
    },
    {
      name: "Plant-Based Milk",
      image:
        "https://plus.unsplash.com/premium_photo-1664647903702-8ffc5bdea812?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      items: ["Almond Milk", "Soy Milk", "Oat Milk"],
      link: "dairy"
    },
  ],
  breakfast: [
    {
      name: "Breads",
      image:
        "https://plus.unsplash.com/premium_photo-1675788939191-713c2abf3da6?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      items: ["White Bread", "Wheat Bread", "Sourdough"],
      link: "breakfast"
    },
    {
      name: "Pastries",
      image:
        "https://plus.unsplash.com/premium_photo-1669253517254-3a5ce28cfb25?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      items: ["Croissants", "Muffins", "Danish"],
      link: "breakfast"
    },
  ],
  "personal-care": [
    {
      name: "Skin Care",
      image:
        "https://plus.unsplash.com/premium_photo-1682096423780-41ca1b04af68?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      items: ["Face Wash", "Moisturizer", "Sunscreen"],
      link: "personal-care"
    },
    {
      name: "Hair Care",
      image:
        "https://images.unsplash.com/photo-1553148619-669d4311dd55?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      items: ["Shampoo", "Conditioner", "Hair Oil"],
      link: "personal-care"
    },
    {
      name: "Oral Care",
      image:
        "https://images.unsplash.com/photo-1593010997571-7ebe6c593d8e?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      items: ["Toothpaste", "Toothbrush", "Mouthwash"],
      link: "personal-care"
    },
  ],
  grains: [
    {
      name: "Rice",
      image:
        "https://plus.unsplash.com/premium_photo-1705338026411-00639520a438?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      items: ["Basmati", "Brown Rice", "Jasmine"],
      link: "herbs"
    },
    {
      name: "Wheat",
      image:
        "https://images.unsplash.com/photo-1600626337876-9cda4528ec74?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      items: ["Whole Wheat Flour", "Semolina", "Bulgur"],
      link: "herbs"
    },
    {
      name: "Oats",
      image:
        "https://images.unsplash.com/photo-1590080876351-941da357bde6?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      items: ["Rolled Oats", "Steel-Cut Oats", "Oatmeal"],
      link: "herbs"
    },
  ],
  "meat": [
    {
      name: "Chicken",
      image:
        "https://images.unsplash.com/photo-1462027076063-1ceabb252dbd?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      items: ["Chicken Breast", "Chicken Thighs", "Whole Chicken"],
      link: "meat"
    },
    {
      name: "Eggs",
      image:
        "https://images.unsplash.com/photo-1477506410535-f12fe9af97cc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      items: ["Chicken Eggs", "Duck Eggs", "Quail Eggs"],
      link: "meat"
    },
  ],
  beverages: [
    {
      name: "Fruit Juice",
      image:
        "https://images.unsplash.com/photo-1619241638225-14d56e47ae64?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      items: ["Orange Juice", "Apple Juice", "Mango Juice"],
      link: "beverages"
    },
    {
      name: "Vegetable Juice",
      image:
        "https://images.unsplash.com/photo-1528498033373-3c6c08e93d79?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      items: ["Carrot Juice", "Beetroot Juice", "Tomato Juice"],
      link: "beverages"
    },
  ],
};

export const DrawerHome =   [
  {
    label: "Admin",
    items: [
      { label: "Products Store", link: "AddProduct#products" },
      { label: "Add Product", link: "AddProduct#AddProduct" },
      { label: "Tracking Order", link: "ordertracking" },
    ],
  },

  {
    label: "Pages",
    items: [
      {
        label: "About Us",
        link: "AboutUs",
      },
      {
        label: "Privacy",
        link: "Privacy",
      },
      {
        label: "Login",
        link: "signin",
      },
      {
        label: "Register",
        link: "signup",
      },
      {
        label: "Forgot Password",
        link: "forgotpassword",
      },
      {
        label: "Order Tracking",
        link: "Ordertracking",
      },
    ],
  },
]

export const orderStatus = {
  orderId: "#ORD-2024-1234",
  status: "in-transit",
  estimatedDelivery: "March 15, 2024",
  currentLocation: "Local Distribution Center",
  steps: [
    {
      id: 1,
      title: "Order Confirmed",
      date: "March 12, 2024 9:00 AM",
      completed: true,
    },
    {
      id: 2,
      title: "Processing",
      date: "March 12, 2024 2:30 PM",
      completed: true,
    },
    {
      id: 3,
      title: "In Transit",
      date: "March 13, 2024 10:15 AM",
      completed: true,
    },
    {
      id: 4,
      title: "Out for Delivery",
      date: "Pending",
      completed: false,
    },
    {
      id: 5,
      title: "Delivered",
      date: "Pending",
      completed: false,
    },
  ],
  items: [
    {
      id: 1,
      name: "Organic Vegetables Bundle",
      quantity: 1,
      price: 24.99,
      image:
        "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      name: "Fresh Fruits Pack",
      quantity: 2,
      price: 19.99,
      image:
        "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&q=80",
    },
  ],
};

export const wishlistItems = [
  {
    id: 1,
    name: "Organic Avocados",
    price: 4.99,
    image:
      "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80",
    inStock: true,
  },
  {
    id: 2,
    name: "Fresh Strawberries",
    price: 3.99,
    image:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&q=80",
    inStock: true,
  },
  {
    id: 3,
    name: "Organic Honey",
    price: 8.99,
    image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80",
    inStock: false,
  },
];

export const stats = [
  {
    icon: <RiBuilding2Fill className="w-6 h-6" />,
    value: "150+",
    label: "Stores Nationwide",
  },
  {
    icon: <FaUsers className="w-6 h-6" />,
    value: "1M+",
    label: "Happy Customers",
  },
  {
    icon: <CiLock className="w-6 h-6" />,
    value: "24/7",
    label: "Customer Support",
  },
  {
    icon: <CiMapPin className="w-6 h-6" />,
    value: "50+",
    label: "Cities Served",
  },
];

export const user = {
  name: "John Doe",
  email: "john.doe@example.com",
  avatar:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
};

export const tabs = [
  { id: "profile", label: "Profile", icon: <CiUser className="w-5 h-5" /> },
  { id: "orders", label: "Orders", icon: <LuPackage className="w-5 h-5" /> },
  {
    id: "notifications",
    label: "Notifications",
    icon: <FaBell className="w-5 h-5" />,
  },
  {
    id: "settings",
    label: "Settings",
    icon: <CiSettings className="w-5 h-5" />,
  },
];

export const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    bio: "20+ years of experience in retail",
  },
  {
    name: "Michael Chen",
    role: "Head of Operations",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    bio: "Expert in supply chain management",
  },
  {
    name: "Emma Williams",
    role: "Quality Assurance",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    bio: "Certified food safety specialist",
  },
];

export const notifications = [
  {
    id: 1,
    type: "order",
    message: "Your order #ORD-2024-1234 has been delivered",
    time: "2 hours ago",
    icon: <LuPackage className="w-5 h-5" />,
  },
  {
    id: 2,
    type: "promo",
    message: "20% off on all organic products this weekend!",
    time: "1 day ago",
    icon: <FaTag className="w-5 h-5" />,
  },
  {
    id: 3,
    type: "wishlist",
    message: "Organic Honey is back in stock!",
    time: "2 days ago",
    icon: <FaHeart className="w-5 h-5" />,
  },
];

export const orders = [
  {
    id: "ORD-2024-1234",
    date: "March 12, 2024",
    total: 89.99,
    status: "Delivered",
    items: 5,
  },
  {
    id: "ORD-2024-1233",
    date: "March 5, 2024",
    total: 45.5,
    status: "Delivered",
    items: 3,
  },
];

export const recommendations = [
  {
    id: 1,
    name: "Organic Quinoa",
    price: 6.99,
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Fresh Blueberries",
    price: 4.99,
    image:
      "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Almond Milk",
    price: 3.99,
    image:
      "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80",
  },
];

export const similarItems = [
  {
    id: 1,
    name: "Organic Chia Seeds",
    price: 7.99,
    image:
      "https://images.unsplash.com/photo-1514733670139-4d87a1941d55?auto=format&fit=crop&q=80",
    category: "Superfoods",
  },
  {
    id: 2,
    name: "Raw Almonds",
    price: 9.99,
    image:
      "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?auto=format&fit=crop&q=80",
    category: "Nuts & Seeds",
  },
];

export const deals = [
  {
    image:
      "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=300&q=80",
    name: "Organic Cage Grade A Large Eggs",
    brand: "Hambger Hel",
    price: 21.0,
    originalPrice: 24.0,
    endTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
  },
  {
    image:
      "https://images.unsplash.com/photo-1570197571499-166b36435e9f?w=300&q=80",
    name: "Naturally Flavored Cinnamon Vanilla",
    brand: "Hambger Hel",
    price: 51.0,
    originalPrice: 55.0,
    endTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
  },
  {
    image:
      "https://images.unsplash.com/photo-1589927986089-35812388d1f4?w=300&q=80",
    name: "Seeds of Change Organic Carrots",
    brand: "Hambger Hel",
    price: 61.5,
    originalPrice: 66.0,
    endTime: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000),
  },
  {
    image:
      "https://images.unsplash.com/photo-1573500883495-6c9b16d88d8c?w=300&q=80",
    name: "Dried fruit: apricots, figs, prunes",
    brand: "USA Noodle Soup",
    price: 56.0,
    originalPrice: 76.0,
    endTime: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
  },
];

export const fixedCards = [
  {
    id: 1,
    name: "Everday Fresh & Clead With Our Products",
    image: "/images/banner-1.png",
    link: "vegetables",
  },
  {
    id: 2,
    name: "Make your Breakfast Healthy",
    image: "/images/banner-2.png",
    link: "milk",
  },
  {
    id: 3,
    name: "The best Organic Products Online",
    image: "/images/banner-3.png",
    link: "fruits",
  },
];


export const navigation = [
  { name: 'Products', icon: TbLayoutGridAdd },
  { name: 'Add Product', icon: FaPlus },
];
export const categories = [
  'Fruits & Vegetables',
  'Meat & Seafood',
  'Dairy & Eggs',
  'Bakery',
  'Pantry',
  'Beverages',
  'Snacks',
  'Frozen Foods',
];
