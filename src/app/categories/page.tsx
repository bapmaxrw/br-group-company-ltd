"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const categories = [
    {
        name: "Industrial Machinery",
        icon: "🏗️",
        sub: ["Hydraulic Presses", "CNC Machines", "Solar Inverters", "Textile Machinery", "Construction Equipment"],
        color: "#f3f6ff"
    },
    {
        name: "Electronics & Tech",
        icon: "📱",
        sub: ["Enterprise Servers", "Networking Gears", "Commercial Displays", "Laptops & Tablets", "IoT Devices"],
        color: "#fff9f0"
    },
    {
        name: "Apparel & Textiles",
        icon: "👔",
        sub: ["Workwear & Uniforms", "Raw Fabrics", "Luxury Garments", "Sportswear", "Eco-friendly Textiles"],
        color: "#f0fff4"
    },
    {
        name: "Beauty & Wellness",
        icon: "💄",
        sub: ["Skincare Raw Materials", "Cosmetic Packaging", "Medical Equipment", "Spa Supplies", "Nutritional Supplements"],
        color: "#fff0f6"
    },
    {
        name: "Home & Infrastructure",
        icon: "🏠",
        sub: ["Building Materials", "Smart Home Systems", "Furniture", "Lighting Solutions", "Kitchenware"],
        color: "#fdf2f8"
    },
    {
        name: "Food & Agriculture",
        icon: "🌽",
        sub: ["Organic Produce", "Grains & Cereals", "Processed Food", "Farming Equipment", "Irrigation Systems"],
        color: "#f1f8e9"
    }
];

export default function Categories() {
    return (
        <div className="page" style={{ background: "var(--background-color)", minHeight: "100vh" }}>
            <Header />

            <main className="container py-4">
                <div style={{ padding: "4rem 0", textAlign: "center" }}>
                    <h1 style={{ fontSize: "3.5rem", marginBottom: "1rem", fontWeight: "800" }}>Global Sourcing Directory</h1>
                    <p style={{ fontSize: "1.2rem", color: "var(--text-light)", maxWidth: "700px", margin: "0 auto" }}>
                        Browse millions of high-quality products from verified manufacturers across every major industry.
                    </p>
                </div>

                <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem", marginBottom: "6rem" }}>
                    {categories.map((cat, i) => (
                        <div key={i} style={{ background: "var(--surface-color)", borderRadius: "24px", border: "1px solid var(--border-color)", overflow: "hidden", transition: "transform 0.3s ease, box-shadow 0.3s ease", cursor: "pointer" }} className="category-card">
                            <div style={{ padding: "2.5rem" }}>
                                <div className="flex justify-between items-start mb-6">
                                    <div style={{ width: "60px", height: "60px", background: cat.color, borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem" }}>
                                        {cat.icon}
                                    </div>
                                    <span style={{ fontSize: "0.8rem", fontWeight: "700", color: "var(--primary-color)", background: "rgba(255,106,0,0.05)", padding: "4px 12px", borderRadius: "12px" }}>
                                        12k+ Products
                                    </span>
                                </div>
                                <h2 style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>{cat.name}</h2>
                                <div className="flex-col gap-3">
                                    {cat.sub.map((s, j) => (
                                        <Link key={j} href={`/products?category=${cat.name}`} style={{ color: "var(--text-light)", textDecoration: "none", fontSize: "0.95rem", display: "flex", alignItems: "center", gap: "8px" }} className="sub-link">
                                            <span style={{ width: "6px", height: "6px", background: "var(--border-color)", borderRadius: "50%" }}></span>
                                            {s}
                                        </Link>
                                    ))}
                                </div>
                                <Link href={`/products?category=${cat.name}`} className="btn" style={{ marginTop: "2rem", width: "100%", border: "1px solid var(--border-color)", fontWeight: "700", display: "block", textAlign: "center" }}>
                                    View All {cat.name}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Sourcing Banner */}
                <div style={{ background: "var(--primary-color)", padding: "5rem", borderRadius: "32px", color: "white", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8rem", flexWrap: "wrap", gap: "2rem" }}>
                    <div style={{ flex: 1, minWidth: "300px" }}>
                        <h2 style={{ color: "white", fontSize: "2.5rem", marginBottom: "1rem" }}>Cannot find what you need?</h2>
                        <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "1.2rem" }}>Let our global network of manufacturers find you. One RFQ, many quotes.</p>
                    </div>
                    <Link href="/rfq" className="btn" style={{ background: "white", color: "var(--primary-color)", padding: "1.5rem 3rem", fontSize: "1.1rem", fontWeight: "800", borderRadius: "16px" }}>Post a Free RFQ</Link>
                </div>
            </main>

            <Footer />
            <style jsx>{`
                .category-card:hover {
                    transform: translateY(-8px);
                    box-shadow: var(--shadow-premium);
                    border-color: var(--primary-color);
                }
                .sub-link:hover {
                    color: var(--primary-color) !important;
                    padding-left: 4px;
                    transition: all 0.2s;
                }
            `}</style>
        </div>
    );
}
