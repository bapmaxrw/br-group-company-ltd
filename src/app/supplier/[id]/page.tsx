"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { useParams } from "next/navigation";

export default function SupplierProfile() {
    const { products, formatPrice } = useApp();
    const params = useParams();

    // Find products for this seller (using params.id as sellerId)
    const sellerId = params.id as string;
    const sellerProducts = products.filter(p => p.sellerId === sellerId);
    const seller = sellerProducts[0] || { sellerName: "Global Supplier", sellerPhone: "N/A", sellerBank: "N/A" };

    return (
        <div className="page" style={{ background: "var(--background-color)", minHeight: "100vh", color: "var(--text-main)" }}>
            <Header />

            <main className="container py-4">
                {/* Supplier Banner */}
                <div style={{ background: "linear-gradient(135deg, #333 0%, #000 100%)", height: "200px", borderRadius: "24px 24px 0 0", position: "relative", marginBottom: "5rem" }}>
                    <div style={{ position: "absolute", bottom: "-40px", left: "5rem", display: "flex", alignItems: "flex-end", gap: "2rem" }}>
                        <div style={{ width: "120px", height: "120px", background: "var(--surface-color)", borderRadius: "20px", border: "5px solid var(--background-color)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "4rem", boxShadow: "var(--shadow-premium)" }}>
                            🏢
                        </div>
                        <div style={{ paddingBottom: "1.5rem" }}>
                            <h1 style={{ fontSize: "2.5rem", color: "white", marginBottom: "0.5rem", textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}>{seller.sellerName}</h1>
                            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                                <span style={{ color: "#00b341", fontWeight: "700", background: "white", padding: "4px 12px", borderRadius: "20px", fontSize: "0.85rem" }}>✅ Verified Gold Supplier</span>
                                <span style={{ color: "white", fontSize: "0.9rem", opacity: 0.8 }}>Since 2018 • Industrial Machinery Specialists</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex gap-8" style={{ flexWrap: "wrap" }}>
                    {/* Stats & Info Sidebar */}
                    <aside style={{ width: "300px", flexShrink: 0 }}>
                        <div style={{ background: "var(--surface-color)", padding: "2rem", borderRadius: "20px", border: "1px solid var(--border-color)", marginBottom: "2rem" }}>
                            <h3 style={{ marginBottom: "1.5rem" }}>Business Capability</h3>
                            <div className="flex-col gap-4">
                                <div className="flex justify-between">
                                    <span style={{ color: "var(--text-light)" }}>Response Rate:</span>
                                    <span style={{ fontWeight: "700", color: "#00b341" }}>98%</span>
                                </div>
                                <div className="flex justify-between">
                                    <span style={{ color: "var(--text-light)" }}>On-time Delivery:</span>
                                    <span style={{ fontWeight: "700" }}>95%</span>
                                </div>
                                <div className="flex justify-between">
                                    <span style={{ color: "var(--text-light)" }}>Total Transactions:</span>
                                    <span style={{ fontWeight: "700" }}>2.4k+</span>
                                </div>
                            </div>
                        </div>

                        <div style={{ background: "var(--surface-color)", padding: "2rem", borderRadius: "20px", border: "1px solid var(--border-color)" }}>
                            <h3 style={{ marginBottom: "1.5rem" }}>Direct Contact</h3>
                            <p style={{ fontSize: "0.85rem", color: "var(--text-light)", marginBottom: "0.5rem" }}>Payment Reception Phone:</p>
                            <p style={{ fontWeight: "700", marginBottom: "1.5rem" }}>{seller.sellerPhone}</p>
                            <button className="btn btn-primary" style={{ width: "100%" }}>Message Seller</button>
                        </div>
                    </aside>

                    {/* Product Catalog */}
                    <section style={{ flex: 1 }}>
                        <div className="flex justify-between items-center mb-8">
                            <h2 style={{ fontSize: "1.75rem" }}>Product Catalog ({sellerProducts.length})</h2>
                            <div style={{ borderBottom: "2px solid var(--primary-color)", paddingBottom: "0.5rem", fontWeight: "700" }}>All Products</div>
                        </div>

                        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1.5rem" }}>
                            {sellerProducts.map(product => (
                                <Link href={`/products/${product.id}`} key={product.id} className="product-card" style={{ background: "var(--surface-color)", borderRadius: "16px", overflow: "hidden", border: "1px solid var(--border-color)", transition: "all 0.3s ease" }}>
                                    <div style={{ background: "rgba(0,0,0,0.02)", height: "200px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "4rem" }}>
                                        {product.image}
                                    </div>
                                    <div style={{ padding: "1.5rem" }}>
                                        <p style={{ color: "var(--primary-color)", fontWeight: "700", fontSize: "1.5rem", marginBottom: "0.5rem" }}>{formatPrice(product.price)}</p>
                                        <p style={{ fontWeight: "600", fontSize: "1.1rem" }}>{product.name}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
