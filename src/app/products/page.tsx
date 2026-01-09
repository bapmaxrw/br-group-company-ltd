"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { useSearchParams } from "next/navigation";

import { Suspense } from "react";

function ProductsContent() {
    const { formatPrice, translations } = useApp();
    const searchParams = useSearchParams();
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const category = searchParams.get("category");
        const query = searchParams.get("search");
        if (category) setSelectedCategory(category);
        if (query) setSearchQuery(query.toLowerCase());
    }, [searchParams]);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const url = new URL("/api/products", window.location.origin);
                if (selectedCategory !== "All") url.searchParams.set("category", selectedCategory);
                if (searchQuery) url.searchParams.set("query", searchQuery);

                const res = await fetch(url.toString());
                const data = await res.json();
                setProducts(data);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [selectedCategory, searchQuery]);

    const filteredProducts = products; // Already filtered by API

    return (
        <div className="page" style={{ background: "var(--background-color)", minHeight: "100vh", color: "var(--text-main)" }}>
            <Header />

            <main className="container py-8">
                <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap" }}>
                    {/* Premium Filter Sidebar */}
                    <aside style={{ width: "280px", minWidth: "280px", flexShrink: 0 }}>
                        <div style={{ background: "var(--surface-color)", padding: "2.5rem", borderRadius: "24px", border: "1px solid var(--border-color)", position: "sticky", top: "120px", boxShadow: "var(--shadow-premium)" }}>
                            <h3 style={{ marginBottom: "2rem", fontSize: "1.1rem", fontWeight: "800", letterSpacing: "0.5px" }}>INDUSTRIES</h3>
                            <ul className="flex-col gap-3">
                                {["All", "Machinery", "Electronics", "Apparel", "Beauty", "Home & Garden"].map(cat => (
                                    <li
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        style={{
                                            padding: "0.75rem 1rem",
                                            borderRadius: "12px",
                                            cursor: "pointer",
                                            background: selectedCategory === cat ? "rgba(230, 30, 42, 0.1)" : "transparent",
                                            color: selectedCategory === cat ? "var(--primary-color)" : "var(--text-main)",
                                            fontWeight: selectedCategory === cat ? "700" : "500",
                                            transition: "all 0.2s ease"
                                        }}
                                        className="filter-item"
                                    >
                                        {cat}
                                    </li>
                                ))}
                            </ul>

                            <div style={{ marginTop: "3rem", paddingTop: "3rem", borderTop: "1px solid var(--border-color)" }}>
                                <h3 style={{ marginBottom: "1.5rem", fontSize: "1.1rem", fontWeight: "800" }}>SUPPLIER TRUST</h3>
                                <div className="flex items-center gap-3 mb-4">
                                    <input type="checkbox" id="verified" style={{ width: "18px", height: "18px" }} />
                                    <label htmlFor="verified" style={{ fontSize: "0.95rem", fontWeight: "500" }}>Gold Supplier ✅</label>
                                </div>
                                <div className="flex items-center gap-3 mb-4">
                                    <input type="checkbox" id="assured" style={{ width: "18px", height: "18px" }} />
                                    <label htmlFor="assured" style={{ fontSize: "0.95rem", fontWeight: "500" }}>Trade Assurance 🛡️</label>
                                </div>
                                <div className="flex items-center gap-3">
                                    <input type="checkbox" id="ready" style={{ width: "18px", height: "18px" }} />
                                    <label htmlFor="ready" style={{ fontSize: "0.95rem", fontWeight: "500" }}>Ready to Ship</label>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Product Grid Area */}
                    <section style={{ flex: 1, minWidth: "300px" }}>
                        <div className="flex justify-between items-end mb-10" style={{ flexWrap: "wrap", gap: "1rem" }}>
                            <div>
                                <h1 style={{ fontSize: "2.5rem", fontWeight: "900", marginBottom: "0.5rem", letterSpacing: "-1px" }}>
                                    {searchQuery ? `Search for "${searchQuery}"` : (selectedCategory === "All" ? "Global Marketplace" : `${selectedCategory} Sector`)}
                                </h1>
                                <p style={{ color: "var(--text-light)", fontSize: "1.1rem" }}>{filteredProducts.length} verified listings found</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <span style={{ fontSize: "0.9rem", color: "var(--text-light)", fontWeight: "600" }}>Sort by:</span>
                                <select style={{ padding: "0.75rem 1.5rem", borderRadius: "12px", border: "1px solid var(--border-color)", background: "var(--surface-color)", color: "var(--text-main)", fontWeight: "600", outline: "none" }}>
                                    <option>Most Relevant</option>
                                    <option>Price: Low to High</option>
                                    <option>Rating: High to Low</option>
                                </select>
                            </div>
                        </div>

                        {loading ? (
                            <div style={{ textAlign: "center", padding: "8rem" }}>
                                <div className="spinner" style={{ border: "4px solid rgba(0,0,0,0.1)", borderTop: "4px solid var(--primary-color)", borderRadius: "50%", width: "40px", height: "40px", animation: "spin 1s linear infinite", margin: "0 auto 1rem" }}></div>
                                <p style={{ color: "var(--text-light)", fontWeight: "600" }}>Querying global catalog...</p>
                            </div>
                        ) : filteredProducts.length > 0 ? (
                            <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "2.5rem" }}>
                                {filteredProducts.map(product => {
                                    const displayImage = product.images?.[0] || product.image;
                                    const supplierName = product.supplier?.company || product.supplier?.name || "Verified Supplier";

                                    return (
                                        <div key={product._id} className="product-card-premium" style={{ background: "var(--surface-color)", borderRadius: "24px", overflow: "hidden", border: "1px solid var(--border-color)", transition: "all 0.3s ease" }}>
                                            <div style={{ background: "#f8f9fa", height: "260px", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                                                <div style={{ position: "absolute", top: "15px", left: "15px", background: "white", padding: "6px 12px", borderRadius: "100px", fontSize: "0.7rem", fontWeight: "800", color: "#00b341", boxShadow: "0 4px 12px rgba(0,0,0,0.05)", zIndex: 5 }}>
                                                    🛡️ TRADE ASSURED
                                                </div>
                                                {displayImage && (displayImage.length <= 4 && /\p{Extended_Pictographic}/u.test(displayImage)) ? (
                                                    <span style={{ fontSize: "6rem" }}>{displayImage}</span>
                                                ) : (
                                                    <img src={displayImage} alt={product.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                                )}
                                                {product.location && (
                                                    <div style={{ position: "absolute", bottom: "15px", right: "15px", background: "rgba(0,0,0,0.7)", color: "white", padding: "4px 12px", borderRadius: "10px", fontSize: "0.75rem", fontWeight: "600", backdropFilter: "blur(4px)" }}>
                                                        📍 {product.location}
                                                    </div>
                                                )}
                                            </div>
                                            <div style={{ padding: "2rem" }}>
                                                <div className="flex justify-between items-center mb-3">
                                                    <span style={{ fontSize: "1.5rem", fontWeight: "900", color: "var(--primary-color)" }}>{formatPrice(product.price)}</span>
                                                    <span style={{ fontSize: "0.8rem", color: "#ffc107" }}>★★★★★</span>
                                                </div>
                                                <Link href={`/products/${product._id}`} style={{ display: "-webkit-box", WebkitLineClamp: "2", WebkitBoxOrient: "vertical", fontSize: "1.15rem", fontWeight: "700", color: "var(--text-main)", height: "3rem", overflow: "hidden", marginBottom: "1.5rem", lineHeight: "1.3" }}>
                                                    {product.name}
                                                </Link>

                                                <div style={{ marginBottom: "2rem", padding: "1rem", background: "rgba(0,0,0,0.02)", borderRadius: "12px" }}>
                                                    <div className="flex items-center gap-2">
                                                        <span style={{ fontSize: "0.85rem", color: "var(--text-light)", fontWeight: "600" }}>{supplierName}</span>
                                                        <span title="In-Person Verified" style={{ color: "#00b341", fontSize: "0.85rem" }}>✅</span>
                                                    </div>
                                                    <p style={{ fontSize: "0.75rem", color: "var(--text-light)", marginTop: "4px" }}>Responds in &lt; 2h • 98% On-time</p>
                                                </div>

                                                <Link href={`/products/${product._id}`} className="btn btn-primary" style={{ width: "100%", padding: "1.1rem", borderRadius: "14px", fontWeight: "800" }}>
                                                    Source & Purchase
                                                </Link>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            <div style={{ textAlign: "center", padding: "8rem 2rem", background: "var(--surface-color)", borderRadius: "32px", border: "1px solid var(--border-color)", boxShadow: "var(--shadow-premium)" }}>
                                <div style={{ fontSize: "5rem", marginBottom: "2rem" }}>🔍</div>
                                <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>No matching trade deals</h2>
                                <p style={{ color: "var(--text-light)", fontSize: "1.1rem", maxWidth: "400px", margin: "0 auto 2rem" }}>Try relaxing your filters or searching for general industrial terms.</p>
                                <button onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }} className="btn btn-primary" style={{ padding: "1rem 3rem", borderRadius: "12px" }}>Clear All Filters</button>
                            </div>
                        )}
                    </section>
                </div>
            </main>

            <Footer />

            <style jsx>{`
                .product-card-premium:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 30px 60px rgba(0,0,0,0.08);
                    border-color: var(--primary-color);
                }
                .filter-item:hover {
                    background: rgba(230, 30, 42, 0.05) !important;
                    padding-left: 1.5rem !important;
                }
            `}</style>
        </div>
    );
}

export default function Products() {
    return (
        <Suspense fallback={<div>Loading marketplace...</div>}>
            <ProductsContent />
        </Suspense>
    );
}
