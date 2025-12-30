"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type UserRole = "buyer" | "seller" | null;

interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    phone?: string;
    company?: string;
    bankInfo?: string;
    country?: string;
    verificationStatus?: "unverified" | "pending" | "verified" | "gold";
}

interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string; // Featured image
    images?: string[]; // Multiple detail photos
    location: string; // Product location (City, Country)
    sellerId: string;
    sellerName: string;
    sellerPhone: string;
    sellerBank: string;
}

interface RFQRequest {
    id: number;
    productName: string;
    category: string;
    quantity: number;
    unit: string;
    description: string;
    buyerId: string;
    buyerName: string;
    isUrgent: boolean;
    date: string;
}

interface AppContextType {
    user: User | null;
    setUser: (user: User | null) => void;
    products: Product[];
    addProduct: (product: Product) => void;
    theme: "light" | "dark";
    setTheme: (theme: "light" | "dark") => void;
    language: string;
    setLanguage: (lang: string) => void;
    translations: any;
    currency: "USD" | "EUR" | "AED";
    setCurrency: (currency: "USD" | "EUR" | "AED") => void;
    formatPrice: (priceUSD: number) => string;
    logout: () => void;
    rfqs: RFQRequest[];
    addRFQ: (rfq: RFQRequest) => void;
    country: string;
    setCountry: (country: string) => void;
    verificationStatus: "unverified" | "pending" | "verified" | "gold";
    setVerificationStatus: (status: "unverified" | "pending" | "verified" | "gold") => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [language, setLanguage] = useState<string>("en");
    const [country, setCountry] = useState<string>("United Arab Emirates");
    const [verificationStatus, setVerificationStatus] = useState<"unverified" | "pending" | "verified" | "gold">("unverified");
    const [rfqs, setRfqs] = useState<RFQRequest[]>([
        {
            id: 1,
            productName: "Bulk Cotton Fabric",
            category: "Apparel",
            quantity: 5000,
            unit: "Meters",
            description: "High quality 100% organic cotton fabric needed for uniform manufacturing.",
            buyerId: "b1",
            buyerName: "Global Garments",
            isUrgent: true,
            date: "2024-12-30"
        }
    ]);

    // Initial products with seller payment info
    const [products, setProducts] = useState<Product[]>([
        {
            id: 1,
            name: "Industrial Hydraulic Press 500T",
            price: 12500,
            category: "Machinery",
            image: "🏗️",
            sellerId: "s1",
            sellerName: "Heavy Duty Machinery Co.",
            sellerPhone: "+971 50 123 4567",
            sellerBank: "Emirates NBD: 0987654321",
            location: "Dubai, UAE"
        },
        {
            id: 2,
            name: "Solar Power Inverter 5KW",
            price: 450,
            category: "Machinery",
            image: "📦",
            sellerId: "s2",
            sellerName: "EcoEnergy Ltd.",
            sellerPhone: "+971 55 987 6543",
            sellerBank: "Standard Chartered: 1234567890",
            location: "Abu Dhabi, UAE"
        },
        {
            id: 3,
            name: "Construction Excavator XE215C",
            price: 65000,
            category: "Machinery",
            image: "🚜",
            sellerId: "s3",
            sellerName: "Global Construction Hub",
            sellerPhone: "+250 788 123 456",
            sellerBank: "BK Rwanda: 123456789",
            location: "Kigali, Rwanda"
        },
        {
            id: 4,
            name: "High-Performance Laptop Pro",
            price: 1200,
            category: "Electronics",
            image: "💻",
            sellerId: "s4",
            sellerName: "Tech Giants Rwanda",
            sellerPhone: "+250 788 000 111",
            sellerBank: "Cogebanque: 987654321",
            location: "Kigali, Rwanda"
        },
        {
            id: 5,
            name: "Modern Leather Sofa Set",
            price: 850,
            category: "Home & Garden",
            image: "🛋️",
            sellerId: "s5",
            sellerName: "Elite Furniture",
            sellerPhone: "+250 788 222 333",
            sellerBank: "I&M Bank: 555444333",
            location: "Gisenyi, Rwanda"
        },
        {
            id: 6,
            name: "Premium Cotton T-Shirt Bulk Pack",
            price: 5,
            category: "Apparel",
            image: "👕",
            sellerId: "s6",
            sellerName: "Textile Exports RW",
            sellerPhone: "+250 123 456 789",
            sellerBank: "BK Rwanda: 000111222",
            location: "Kigali, Rwanda"
        },
        {
            id: 7,
            name: "Organic Honey from Nile Basin",
            price: 12,
            category: "Food",
            image: "🍯",
            sellerId: "s7",
            sellerName: "Nile Harvest",
            sellerPhone: "+250 788 777 888",
            sellerBank: "GT Bank: 999888777",
            location: "Cairo, Egypt"
        },
        {
            id: 8,
            name: "Natural Shea Butter 1kg",
            price: 25,
            category: "Beauty",
            image: "🧴",
            sellerId: "s8",
            sellerName: "African Glow",
            sellerPhone: "+250 788 999 000",
            sellerBank: "Ecobank: 777666555",
            location: "Accra, Ghana"
        }
    ]);

    const addProduct = (product: Product) => {
        setProducts((prev) => [...prev, product]);
    };

    // Basic translation map for core UI
    const translations = {
        en: {
            welcome: "Welcome",
            signin: "Sign In",
            register: "Join Free",
            sell: "Sell on BR Group",
            products: "Products",
            homeHero: "The Global Trade Platform For Small & Medium Business",
            explore: "Explore",
            categories: "Categories",
            featured: "Featured Products",
            secure: "Secure Payment",
            marketplace: "Marketplace",
            rfq: "RFQ",
            settings: "Settings",
            search: "Search",
            myHub: "My Hub",
            dispute: "Open a Dispute",
            orderId: "Order ID",
            reason: "Reason",
            describe: "Description"
        },
        fr: {
            welcome: "Bienvenue",
            signin: "Se Connecter",
            register: "S'inscrire",
            sell: "Vendre sur BR Group",
            products: "Produits",
            homeHero: "La plateforme de commerce mondial pour les PME",
            explore: "Explorer",
            categories: "Catégories",
            featured: "Produits en vedette",
            secure: "Paiement sécurisé",
            marketplace: "Marché",
            rfq: "Demande de prix",
            settings: "Paramètres",
            search: "Recherche",
            myHub: "Mon Hub",
            dispute: "Ouvrir un litige",
            orderId: "ID de commande",
            reason: "Raison",
            describe: "Description"
        },
        ar: {
            welcome: "مرحباً",
            signin: "تسجيل الدخول",
            register: "انضم مجاناً",
            sell: "بيع على BR Group",
            products: "منتجات",
            homeHero: "منصة التجارة العالمية للمشاريع الصغيرة والمتوسطة",
            explore: "استكشف",
            categories: "الفئات",
            featured: "منتجات مميزة",
            secure: "دفع آمن",
            marketplace: "السوق",
            rfq: "طلب عرض سعر",
            settings: "الإعدادات",
            search: "بحث",
            myHub: "مركزي",
            dispute: "فتح نزاع",
            orderId: "رقم الطلب",
            reason: "السبب",
            describe: "الوصف"
        },
        rw: {
            welcome: "Murakaza neza",
            signin: "Injira",
            register: "Kwiyandikisha",
            sell: "Gura kuri BR Group",
            products: "Ibikoresho",
            homeHero: "Urubuga rw'ubucuruzi mpuzamahanga ku bigo bito n'ibiciriritse",
            explore: "Shakisha",
            categories: "Ibyiciro",
            featured: "Ibikoresho by'ingenzi",
            secure: "Kwishura neza",
            marketplace: "Soko",
            rfq: "Gusaba igiciro",
            settings: "Igenamiterere",
            search: "Shaka",
            myHub: "Iwanjye",
            dispute: "Kurega",
            orderId: "Inomero y'ibyo waguze",
            reason: "Impamvu",
            describe: "Sobanura neza"
        }
    };

    const [currency, setCurrency] = useState<"USD" | "EUR" | "AED">("USD");

    const currencyRates = {
        USD: 1,
        EUR: 0.92,
        AED: 3.67
    };

    const formatPrice = (priceUSD: number) => {
        const converted = priceUSD * currencyRates[currency];
        const symbols = { USD: "$", EUR: "€", AED: "AED " };
        return `${symbols[currency]}${converted.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    };

    // Sync theme with document element
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    // Sync language with document element
    useEffect(() => {
        document.documentElement.setAttribute("lang", language);
        document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    }, [language]);

    const logout = () => {
        setUser(null);
        window.location.href = "/";
    };

    const addRFQ = (rfq: RFQRequest) => {
        setRfqs(prev => [...prev, rfq]);
    };

    return (
        <AppContext.Provider value={{
            user, setUser,
            products, addProduct,
            theme, setTheme,
            language, setLanguage,
            translations: (translations as any)[language] || translations.en,
            currency, setCurrency,
            formatPrice,
            logout,
            rfqs, addRFQ,
            country, setCountry,
            verificationStatus, setVerificationStatus
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => {
    const context = useContext(AppContext);
    if (!context) throw new Error("useApp must be used within an AppProvider");
    return context;
};
