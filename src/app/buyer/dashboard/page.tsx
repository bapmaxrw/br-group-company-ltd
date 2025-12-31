"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";
import { useApp } from "@/context/AppContext";

export default function BuyerDashboard() {
    const { user } = useApp();
    const [activeTab, setActiveTab] = useState("orders");

    const myOrders = [
        { id: "ORD-7721", product: "Hydraulic Press 500T", date: "2024-12-28", amount: "$12,500", status: "Shipped", supplier: "Heavy Duty Machinery Co." },
        { id: "ORD-7718", product: "Bulk Cotton T-Shirts", date: "2024-12-15", amount: "$1,750", status: "Delivered", supplier: "Global Apparel Group" },
    ];

    const watchlist = [
        { name: "Solar Power Inverter", price: "$450.00", supplier: "EcoEnergy Ltd.", image: "📦" },
        { name: "Industrial Coffee Grinder", price: "$320.00", supplier: "CafeTech Solutions", image: "📦" },
    ];

    return (
        <div className="page" style={{ background: "var(--background-color)", minHeight: "100vh", color: "var(--text-main)" }}>
            <Header />

            <main className="container py-4 flex gap-8 flex-wrap">
                {/* Buyer Sidebar */}
                <aside style={{ width: "260px", flexShrink: 0, minWidth: "260px" }}>
                    <div style={{ background: "var(--surface-color)", borderRadius: "16px", padding: "1.5rem", border: "1px solid var(--border-color)" }}>
                        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                            <div style={{ width: "80px", height: "80px", background: "rgba(0,0,0,0.05)", borderRadius: "50%", margin: "0 auto 1rem", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem" }}>👤</div>
                            <h3 style={{ fontSize: "1.25rem" }}>{user?.name || "Global Buyer"}</h3>
                            <p style={{ fontSize: "0.85rem", color: "var(--text-light)" }}>Elite Buyer Member</p>
                        </div>

                        <nav className="flex-col gap-2">
                            {[
                                { id: "orders", label: "My Orders", icon: "📦" },
                                { id: "watchlist", label: "Watchlist", icon: "❤️" },
                                { id: "disputes", label: "My Disputes", icon: "⚖️" },
                                { id: "messages", label: "Messages", icon: "💬" },
                            ].map(item => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveTab(item.id)}
                                    style={{
                                        textAlign: "left",
                                        padding: "0.85rem 1rem",
                                        borderRadius: "8px",
                                        background: activeTab === item.id ? "rgba(230, 30, 42, 0.1)" : "transparent",
                                        color: activeTab === item.id ? "var(--primary-color)" : "var(--text-main)",
                                        border: "none",
                                        cursor: "pointer",
                                        fontWeight: "600"
                                    }}
                                >
                                    {item.icon} {item.label}
                                </button>
                            ))}
                            <Link
                                href="/settings"
                                style={{ textAlign: "left", padding: "0.85rem 1rem", borderRadius: "8px", background: "transparent", color: "var(--text-main)", border: "none", cursor: "pointer", fontWeight: "600", marginTop: "2rem", display: "block", textDecoration: "none" }}
                            >
                                👤 Profile Settings
                            </Link>
                        </nav>
                    </div>
                </aside>

                {/* Buyer Content */}
                <section style={{ flex: 1, minWidth: "400px" }}>
                    <h1 style={{ fontSize: "2rem", marginBottom: "2.5rem" }}>My Sourcing Hub</h1>

                    {activeTab === "orders" && (
                        <div style={{ background: "var(--surface-color)", padding: "2rem", borderRadius: "16px", border: "1px solid var(--border-color)" }}>
                            <h2 style={{ fontSize: "1.25rem", marginBottom: "1.5rem" }}>Direct Purchase History</h2>
                            <div className="flex-col gap-4">
                                {myOrders.map((order, i) => (
                                    <div key={i} style={{ padding: "1.5rem", borderRadius: "12px", border: "1px solid var(--border-color)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
                                        <div>
                                            <p style={{ fontWeight: "700", marginBottom: "0.25rem", fontSize: "1.1rem" }}>{order.product}</p>
                                            <p style={{ fontSize: "0.9rem", color: "var(--text-light)" }}>ID: {order.id} • Supplier: {order.supplier}</p>
                                            <p style={{ fontSize: "0.85rem", color: "var(--text-light)", marginTop: "0.5rem", opacity: 0.7 }}>Placed on {order.date}</p>
                                        </div>
                                        <div style={{ textAlign: "right", minWidth: "120px" }}>
                                            <p style={{ fontWeight: "700", fontSize: "1.25rem", marginBottom: "0.5rem", color: "var(--primary-color)" }}>{order.amount}</p>
                                            <span style={{
                                                padding: "0.25rem 0.75rem",
                                                borderRadius: "20px",
                                                fontSize: "0.85rem",
                                                background: order.status === "Delivered" ? "rgba(46,125,50,0.1)" : "rgba(230, 30, 42, 0.1)",
                                                color: order.status === "Delivered" ? "#2e7d32" : "var(--primary-color)",
                                                marginBottom: "0.75rem",
                                                display: "inline-block"
                                            }}>
                                                {order.status}
                                            </span>
                                            <Link href={`/track?id=${order.id}`} className="btn" style={{ fontSize: "0.80rem", padding: "0.4rem 0.8rem", border: "1px solid var(--border-color)", display: "block", color: "var(--text-main)", textAlign: "center" }}>Track Shipment</Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === "watchlist" && (
                        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
                            {watchlist.map((item, i) => (
                                <div key={i} style={{ background: "var(--surface-color)", padding: "1.5rem", borderRadius: "16px", border: "1px solid var(--border-color)" }}>
                                    <div style={{ background: "rgba(0,0,0,0.02)", height: "180px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "4rem", marginBottom: "1rem" }}>
                                        {item.image}
                                    </div>
                                    <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>{item.name}</h3>
                                    <p style={{ color: "var(--primary-color)", fontWeight: "700", fontSize: "1.5rem", marginBottom: "0.5rem" }}>{item.price}</p>
                                    <p style={{ fontSize: "0.9rem", color: "var(--text-light)", marginBottom: "1.5rem" }}>Supplier: {item.supplier}</p>
                                    <button className="btn btn-primary" style={{ width: "100%", padding: "1rem" }}>Quick Buy</button>
                                </div>
                            ))}
                        </div>
                    )}
                    {activeTab === "disputes" && (
                        <div style={{ background: "var(--surface-color)", padding: "2rem", borderRadius: "16px", border: "1px solid var(--border-color)" }}>
                            <div className="flex justify-between items-center mb-6">
                                <h2 style={{ fontSize: "1.25rem" }}>Active Dispute Claims</h2>
                                <Link href="/disputes" className="btn" style={{ border: "1px solid #FF4136", color: "#FF4136", fontSize: "0.85rem" }}>Open New Dispute</Link>
                            </div>
                            <div style={{ textAlign: "center", padding: "3rem 0", background: "rgba(0,0,0,0.02)", borderRadius: "12px", border: "1px dashed var(--border-color)" }}>
                                <span style={{ fontSize: "2.5rem", display: "block", marginBottom: "1rem" }}>⚖️</span>
                                <p style={{ color: "var(--text-light)" }}>You have no active disputes. Your sourcing is running smoothly!</p>
                            </div>
                        </div>
                    )}
                </section>
            </main>

            <Footer />
        </div>
    );
}
