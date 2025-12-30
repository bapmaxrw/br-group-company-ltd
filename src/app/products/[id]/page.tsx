"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { useParams, useRouter } from "next/navigation";

export default function ProductDetail() {
    const { products, user, formatPrice } = useApp();
    const params = useParams();
    const router = useRouter();

    const product = products.find(p => p.id === Number(params.id)) || products[0];
    const [quantity, setQuantity] = useState(1);
    const [includeInspection, setIncludeInspection] = useState(false);
    const [selectedImage, setSelectedImage] = useState(product.image);

    const inspectionFee = product.category === "Machinery" ? 250 : 50;

    const handleImmediatePurchase = () => {
        if (!user) {
            alert("Please login as a buyer to purchase.");
            router.push("/login");
            return;
        }
        router.push(`/checkout?productId=${product.id}&qty=${quantity}&inspection=${includeInspection}`);
    };

    const isEmoji = (str: string) => str && str.length <= 4 && /\p{Extended_Pictographic}/u.test(str);

    return (
        <div className="page" style={{ background: "var(--background-color)", minHeight: "100vh", color: "var(--text-main)" }}>
            <Header />

            <main className="container py-4">
                {/* Breadcrumbs */}
                <div style={{ marginBottom: "1.5rem", fontSize: "0.9rem", color: "var(--text-light)" }}>
                    <Link href="/">Home</Link> / <Link href="/products">Products</Link> / <span style={{ color: "var(--primary-color)" }}>{product.name}</span>
                </div>

                <div className="flex gap-6" style={{ flexWrap: "wrap", alignItems: "flex-start" }}>
                    {/* Gallery Side */}
                    <div style={{ flex: "1", minWidth: "350px", position: "sticky", top: "100px" }}>
                        <div style={{ background: "var(--surface-color)", padding: "1rem", borderRadius: "24px", border: "1px solid var(--border-color)", boxShadow: "var(--shadow-premium)" }}>
                            <div style={{ background: "#f9f9f9", width: "100%", height: "450px", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", marginBottom: "1rem" }}>
                                {isEmoji(selectedImage) ? (
                                    <span style={{ fontSize: "12rem" }}>{selectedImage}</span>
                                ) : (
                                    <img src={selectedImage} alt={product.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                                )}
                            </div>

                            {/* Thumbnails */}
                            {product.images && product.images.length > 1 && (
                                <div className="flex gap-3 justify-center">
                                    {product.images.map((img, i) => (
                                        <div
                                            key={i}
                                            onClick={() => setSelectedImage(img)}
                                            style={{
                                                width: "60px",
                                                height: "60px",
                                                borderRadius: "8px",
                                                border: `2px solid ${selectedImage === img ? "var(--primary-color)" : "var(--border-color)"}`,
                                                cursor: "pointer",
                                                overflow: "hidden",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                background: "white"
                                            }}
                                        >
                                            {isEmoji(img) ? <span>{img}</span> : <img src={img} style={{ width: "100%", height: "100%", objectFit: "cover" }} />}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Details & Payment Side */}
                    <div style={{ flex: "1.2", minWidth: "350px" }}>
                        <div style={{ background: "var(--surface-color)", padding: "2.5rem", borderRadius: "24px", border: "1px solid var(--border-color)", marginBottom: "2rem", boxShadow: "var(--shadow-premium)" }}>
                            <div className="flex justify-between items-start mb-2">
                                <h1 style={{ fontSize: "2.5rem", margin: 0, lineHeight: 1.2 }}>{product.name}</h1>
                                {product.category === "Machinery" && <span style={{ background: "#0074D9", color: "white", padding: "4px 10px", borderRadius: "6px", fontSize: "0.7rem", fontWeight: "700" }}>🛡️ Trade Assurance</span>}
                            </div>

                            <div className="flex items-center gap-2 mb-6" style={{ color: "var(--text-light)", fontSize: "0.9rem" }}>
                                <span>📍 Stock Location:</span>
                                <span style={{ fontWeight: "700", color: "var(--text-main)" }}>{product.location}</span>
                            </div>

                            <div style={{ color: "var(--primary-color)", fontSize: "2.5rem", fontWeight: "800", marginBottom: "2rem" }}>
                                {formatPrice(product.price)}
                            </div>

                            {/* Direct Settlement Info */}
                            <div style={{ background: "rgba(255,106,0,0.05)", padding: "2rem", borderRadius: "16px", border: "1px solid var(--primary-color)", marginBottom: "2rem" }}>
                                <div className="flex gap-2 items-center mb-4">
                                    <span style={{ fontSize: "1.5rem" }}>💳</span>
                                    <h3 style={{ fontSize: "1.1rem", margin: 0 }}>Verified Seller Settlement</h3>
                                </div>
                                <div className="flex-col gap-4">
                                    <div className="flex justify-between items-center" style={{ background: "white", padding: "10px 15px", borderRadius: "8px" }}>
                                        <p style={{ fontWeight: "700", fontSize: "0.85rem", color: "var(--text-light)", margin: 0 }}>Country Code</p>
                                        <p style={{ fontWeight: "800", color: "var(--primary-color)", margin: 0, fontSize: "1.1rem" }}>{product.sellerPhone.split(' ')[0]}</p>
                                    </div>
                                    <div className="flex justify-between items-center" style={{ background: "white", padding: "10px 15px", borderRadius: "8px" }}>
                                        <p style={{ fontWeight: "700", fontSize: "0.85rem", color: "var(--text-light)", margin: 0 }}>MoMo Number</p>
                                        <p style={{ fontWeight: "800", margin: 0, fontSize: "1.1rem" }}>{product.sellerPhone.split(' ').slice(1).join(' ')}</p>
                                    </div>
                                    <div style={{ background: "rgba(0,0,0,0.03)", padding: "15px", borderRadius: "8px" }}>
                                        <p style={{ fontWeight: "700", fontSize: "0.85rem", color: "var(--text-light)", marginBottom: "5px" }}>Bank / IBAN</p>
                                        <p style={{ fontWeight: "600", margin: 0, fontSize: "0.95rem" }}>{product.sellerBank}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Sourcing Calculator */}
                            <div style={{ background: "rgba(0,0,0,0.02)", padding: "1.5rem", borderRadius: "16px", border: "1px solid var(--border-color)", marginBottom: "2rem" }}>
                                <div className="flex justify-between items-center mb-4">
                                    <h4 style={{ margin: 0 }}>Sourcing Calculator</h4>
                                    <span style={{ fontSize: "0.75rem", background: "rgba(0,187,65,0.1)", color: "#00b341", padding: "2px 8px", borderRadius: "4px", fontWeight: "700" }}>Bulk Rates Applied</span>
                                </div>
                                <div className="flex gap-4 items-center mb-4">
                                    <div style={{ flex: 1 }}>
                                        <label style={{ fontSize: "0.75rem", color: "var(--text-light)", display: "block", marginBottom: "0.4rem" }}>Quantity</label>
                                        <input
                                            type="number"
                                            min="1"
                                            value={quantity}
                                            onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                                            style={{ width: "100%", padding: "0.75rem", borderRadius: "10px", border: "1px solid var(--border-color)", background: "white", color: "inherit", fontWeight: "700" }}
                                        />
                                    </div>
                                    <div style={{ flex: 1, textAlign: "right" }}>
                                        <p style={{ fontSize: "0.75rem", color: "var(--text-light)", marginBottom: "0.25rem" }}>Total Estimate</p>
                                        <p style={{ fontSize: "1.75rem", fontWeight: "800", color: "var(--primary-color)", margin: 0 }}>
                                            {formatPrice(product.price * quantity + (includeInspection ? inspectionFee : 0))}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3" style={{ padding: "1rem", background: "white", borderRadius: "12px", border: "1px solid var(--border-color)" }}>
                                    <input
                                        type="checkbox"
                                        id="inspection"
                                        checked={includeInspection}
                                        onChange={(e) => setIncludeInspection(e.target.checked)}
                                        style={{ width: "20px", height: "20px", cursor: "pointer" }}
                                    />
                                    <div style={{ cursor: "pointer" }} onClick={() => setIncludeInspection(!includeInspection)}>
                                        <label htmlFor="inspection" style={{ fontSize: "0.9rem", fontWeight: "700", color: "var(--text-main)", cursor: "pointer" }}>
                                            Book Quality Inspection (+{formatPrice(inspectionFee)})
                                        </label>
                                        <p style={{ fontSize: "0.7rem", color: "var(--text-light)", margin: 0 }}>Safety check before cross-border shipping.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <button
                                    onClick={handleImmediatePurchase}
                                    className="btn btn-primary"
                                    style={{ flex: 2, padding: "1.5rem", fontSize: "1.2rem", fontWeight: "800" }}
                                >
                                    Purchase via Settlement
                                </button>
                                <button
                                    onClick={() => router.push('/messages')}
                                    className="btn"
                                    style={{ flex: 1, border: "1px solid var(--border-color)", color: "var(--text-main)", fontWeight: "600" }}
                                >
                                    Message
                                </button>
                            </div>
                        </div>

                        {/* Supplier Card */}
                        <div style={{ background: "var(--surface-color)", padding: "2rem", borderRadius: "24px", border: "1px solid var(--border-color)", boxShadow: "0 10px 20px rgba(0,0,0,0.02)" }}>
                            <div className="flex justify-between items-center mb-4">
                                <h3 style={{ margin: 0, fontSize: "1.1rem" }}>Supplier Information</h3>
                                <span style={{ color: "#00b341", fontWeight: "700", fontSize: "0.75rem" }}>✅ VERIFIED</span>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div style={{ width: "50px", height: "50px", background: "rgba(0,0,0,0.05)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem" }}>🏢</div>
                                <div>
                                    <Link href={`/supplier/${product.sellerId}`} style={{ fontWeight: "700", fontSize: "1.2rem", color: "inherit", textDecoration: "none" }}>{product.sellerName}</Link>
                                    <p style={{ color: "var(--text-light)", fontSize: "0.85rem" }}>Global Exporter • {product.location.split(',')[1]?.trim() || "Verified Region"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
