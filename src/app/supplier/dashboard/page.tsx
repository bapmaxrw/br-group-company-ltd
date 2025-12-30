"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";
import { useApp } from "@/context/AppContext";

export default function SupplierDashboard() {
    const { user, products, verificationStatus, rfqs } = useApp();
    const [activeTab, setActiveTab] = useState("overview");

    const getStatusText = () => {
        switch (verificationStatus) {
            case "gold": return "Verified Gold Supplier";
            case "verified": return "Verified Member";
            case "pending": return "Verification Pending";
            default: return "Unverified Seller";
        }
    };

    const getStatusColor = () => {
        switch (verificationStatus) {
            case "gold": return "#FFD700";
            case "verified": return "#00b341";
            case "pending": return "#0074D9";
            default: return "rgba(0,0,0,0.4)";
        }
    };

    const myProducts = products.filter(p => p.sellerId === user?.id);

    const stats = [
        { label: "Total Sales", value: "$428,500", icon: "💰", trend: "+12.5%" },
        { label: "Active Products", value: myProducts.length, icon: "📦", trend: "+2" },
        { label: "Open RFQs", value: rfqs.length, icon: "📢", trend: "Live" },
        { label: "Trust Score", value: "98/100", icon: "🛡️", trend: "Excellent" },
    ];

    const recentOrders = [
        { id: "ORD-9921", buyer: "Tech Solutions Inc.", date: "Dec 30, 2024", amount: "$12,500", status: "Shipped", type: "Electronics" },
        { id: "ORD-9918", buyer: "Global Sourcing Ltd.", date: "Dec 28, 2024", amount: "$8,200", status: "Processing", type: "Machinery" },
        { id: "ORD-9915", buyer: "EuroTrade Group", date: "Dec 26, 2024", amount: "$24,000", status: "Delivered", type: "Industrial" },
    ];

    return (
        <div className="page" style={{ background: "var(--background-color)", minHeight: "100vh" }}>
            <Header />

            <main className="container py-8 flex gap-8 flex-wrap" style={{ alignItems: "flex-start" }}>
                {/* Dashboard Navigation Sidebar */}
                <aside style={{ width: "300px", flexShrink: 0 }}>
                    <div style={{ background: "var(--surface-color)", borderRadius: "32px", padding: "2.5rem", border: "1px solid var(--border-color)", position: "sticky", top: "120px", boxShadow: "var(--shadow-premium)" }}>
                        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                            <div style={{ position: "relative", width: "100px", height: "100px", margin: "0 auto 1.5rem" }}>
                                <div style={{ width: "100%", height: "100%", background: "#f8f9fa", borderRadius: "32px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2.5rem", border: "1px solid var(--border-color)" }}>🏢</div>
                                <div style={{ position: "absolute", bottom: "-5px", right: "-5px", background: getStatusColor(), width: "28px", height: "28px", borderRadius: "50%", border: "4px solid white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem", color: "white" }}>✓</div>
                            </div>
                            <h3 style={{ fontSize: "1.4rem", fontWeight: "900", letterSpacing: "-0.5px" }}>{user?.company || "Global Exports Ltd"}</h3>
                            <div style={{ fontSize: "0.75rem", fontWeight: "800", color: getStatusColor(), background: `${getStatusColor()}15`, padding: "6px 12px", borderRadius: "100px", display: "inline-block", marginTop: "8px", textTransform: "uppercase", letterSpacing: "1px" }}>
                                {getStatusText()}
                            </div>
                        </div>

                        <nav className="flex-col gap-2">
                            {[
                                { id: "overview", label: "Market Command", icon: "📊" },
                                { id: "rfqs", label: "RFQ Feed", icon: "📢" },
                                { id: "products", label: "Inventory", icon: "📦" },
                                { id: "orders", label: "Sales & Logistics", icon: "📜" },
                                { id: "disputes", label: "Trust Center", icon: "⚖️" },
                                { id: "messages", label: "Communications", icon: "💬" },
                            ].map(item => (
                                <button
                                    key={item.id}
                                    onClick={() => setActiveTab(item.id)}
                                    style={{
                                        textAlign: "left",
                                        padding: "1rem 1.25rem",
                                        borderRadius: "16px",
                                        background: activeTab === item.id ? "var(--primary-color)" : "transparent",
                                        color: activeTab === item.id ? "white" : "var(--text-main)",
                                        border: "none",
                                        cursor: "pointer",
                                        fontWeight: "800",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "12px",
                                        transition: "all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)"
                                    }}
                                    className="nav-btn"
                                >
                                    <span style={{ fontSize: "1.2rem" }}>{item.icon}</span>
                                    {item.label}
                                </button>
                            ))}

                            {verificationStatus !== "gold" && (
                                <Link
                                    href="/supplier/verify"
                                    style={{
                                        marginTop: "2rem",
                                        padding: "2rem 1.5rem",
                                        borderRadius: "24px",
                                        background: "linear-gradient(135deg, #0074D9 0%, #001f3f 100%)",
                                        display: "block",
                                        textDecoration: "none",
                                        textAlign: "center",
                                        color: "white",
                                        boxShadow: "0 10px 30px rgba(0,116,217,0.3)"
                                    }}
                                >
                                    <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>🛡️</div>
                                    <div style={{ fontSize: "0.9rem", fontWeight: "900", marginBottom: "0.25rem" }}>
                                        {verificationStatus === "pending" ? "Syncing Identity..." : "Verify Business"}
                                    </div>
                                    <p style={{ fontSize: "0.7rem", opacity: 0.7 }}>Gain Gold status to unlock global buyers</p>
                                </Link>
                            )}
                        </nav>
                    </div>
                </aside>

                {/* Main Action Workspace */}
                <section style={{ flex: 1, minWidth: "500px" }}>
                    <div className="flex justify-between items-center mb-10 flex-wrap gap-6">
                        <div>
                            <h1 style={{ fontSize: "2.5rem", fontWeight: "900", letterSpacing: "-1.5px" }}>Store Command Center</h1>
                            <p style={{ color: "var(--text-light)", fontSize: "1.1rem" }}>Managing distribution across 3 global hubs.</p>
                        </div>
                        <Link href="/supplier/post-product" className="btn btn-primary" style={{ padding: "1.2rem 2.5rem", borderRadius: "16px", fontWeight: "900" }}>
                            + List New Inventory
                        </Link>
                    </div>

                    {activeTab === "overview" && (
                        <div className="animate-up">
                            {/* High-Impact Stat Wall */}
                            <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2rem", marginBottom: "3rem" }}>
                                {stats.map((stat, i) => (
                                    <div key={i} style={{ background: "white", padding: "2.5rem", borderRadius: "24px", border: "1px solid var(--border-color)", boxShadow: "var(--shadow-premium)" }}>
                                        <div className="flex justify-between items-start mb-4">
                                            <div style={{ fontSize: "2rem" }}>{stat.icon}</div>
                                            <span style={{ fontSize: "0.75rem", fontWeight: "800", color: "#00b341", background: "rgba(0,179,65,0.1)", padding: "4px 10px", borderRadius: "100px" }}>{stat.trend}</span>
                                        </div>
                                        <p style={{ color: "var(--text-light)", fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "0.5rem" }}>{stat.label}</p>
                                        <h2 style={{ fontSize: "2.2rem", fontWeight: "900", color: "var(--text-main)" }}>{stat.value}</h2>
                                    </div>
                                ))}
                            </div>

                            {/* Main Performance Grid */}
                            <div style={{ background: "white", padding: "3rem", borderRadius: "32px", border: "1px solid var(--border-color)", boxShadow: "var(--shadow-premium)", overflow: "hidden" }}>
                                <div className="flex justify-between items-center mb-8">
                                    <h2 style={{ fontSize: "1.5rem", fontWeight: "900" }}>Global Settlement Stream</h2>
                                    <button style={{ background: "none", border: "none", color: "var(--primary-color)", fontWeight: "800", cursor: "pointer" }}>Export Activity (CSV) ⬇</button>
                                </div>
                                <div style={{ overflowX: "auto" }}>
                                    <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 12px" }}>
                                        <thead>
                                            <tr style={{ textAlign: "left", color: "var(--text-light)", fontSize: "0.85rem", fontWeight: "800", textTransform: "uppercase" }}>
                                                <th style={{ padding: "1rem" }}>Trade ID</th>
                                                <th style={{ padding: "1rem" }}>Counterparty</th>
                                                <th style={{ padding: "1rem" }}>Sector</th>
                                                <th style={{ padding: "1rem" }}>Volume</th>
                                                <th style={{ padding: "1rem" }}>Logistics Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {recentOrders.map((order, i) => (
                                                <tr key={i} style={{ background: "rgba(0,0,0,0.02)", borderRadius: "16px" }} className="table-row">
                                                    <td style={{ padding: "1.5rem 1rem", fontWeight: "900", borderRadius: "16px 0 0 16px" }}>{order.id}</td>
                                                    <td style={{ padding: "1.5rem 1rem" }}>
                                                        <div style={{ fontWeight: "700" }}>{order.buyer}</div>
                                                        <div style={{ fontSize: "0.8rem", color: "var(--text-light)" }}>{order.date}</div>
                                                    </td>
                                                    <td style={{ padding: "1.5rem 1rem" }}>
                                                        <span style={{ fontSize: "0.8rem", fontWeight: "700", opacity: 0.6 }}>{order.type}</span>
                                                    </td>
                                                    <td style={{ padding: "1.5rem 1rem", fontWeight: "900", color: "var(--primary-color)" }}>{order.amount}</td>
                                                    <td style={{ padding: "1.5rem 1rem", borderRadius: "0 16px 16px 0" }}>
                                                        <span style={{
                                                            padding: "8px 16px",
                                                            borderRadius: "100px",
                                                            fontSize: "0.75rem",
                                                            fontWeight: "800",
                                                            background: order.status === "Delivered" ? "#00b341" : "#FFC107",
                                                            color: "white"
                                                        }}>
                                                            {order.status.toUpperCase()}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "products" && (
                        <div className="animate-up">
                            <div style={{ background: "white", padding: "3rem", borderRadius: "32px", border: "1px solid var(--border-color)", boxShadow: "var(--shadow-premium)" }}>
                                <div className="flex justify-between items-center mb-10">
                                    <h2 style={{ fontSize: "1.75rem", fontWeight: "900" }}>Inventory Management</h2>
                                    <div className="flex gap-2">
                                        <button className="btn glass" style={{ color: "var(--text-main)", border: "1px solid var(--border-color)", borderRadius: "12px" }}>Bulk Update</button>
                                        <Link href="/supplier/post-product" className="btn btn-primary" style={{ borderRadius: "12px" }}>+ New SKU</Link>
                                    </div>
                                </div>
                                {myProducts.length > 0 ? (
                                    <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "2rem" }}>
                                        {myProducts.map(product => (
                                            <div key={product.id} style={{ borderRadius: "24px", overflow: "hidden", border: "1px solid var(--border-color)", background: "#f8f9fa", transition: "all 0.3s" }} className="sku-card">
                                                <div style={{ height: "180px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "4rem", background: "white" }}>
                                                    {product.image}
                                                </div>
                                                <div style={{ padding: "1.5rem" }}>
                                                    <p style={{ fontWeight: "900", fontSize: "1.25rem", color: "var(--primary-color)", marginBottom: "0.25rem" }}>${product.price}</p>
                                                    <p style={{ fontSize: "0.95rem", fontWeight: "700", color: "var(--text-main)", display: "-webkit-box", WebkitLineClamp: "1", WebkitBoxOrient: "vertical", overflow: "hidden" }}>{product.name}</p>
                                                    <div style={{ flex: 1, height: "1rem" }}></div>
                                                    <button className="btn" style={{ width: "100%", padding: "0.8rem", borderRadius: "12px", background: "white", border: "1px solid var(--border-color)", fontWeight: "800", fontSize: "0.8rem" }}>Edit Catalog</button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div style={{ textAlign: "center", padding: "10rem 0" }}>
                                        <div style={{ fontSize: "5rem", marginBottom: "2rem", opacity: 0.1 }}>📦</div>
                                        <h3 style={{ fontSize: "1.5rem", fontWeight: "900", marginBottom: "1rem" }}>No active listings detected.</h3>
                                        <p style={{ color: "var(--text-light)", maxWidth: "400px", margin: "0 auto 2rem" }}>Start reaching global buyers by cataloging your first industrial product.</p>
                                        <Link href="/supplier/post-product" className="btn btn-primary" style={{ padding: "1rem 3rem" }}>Create First SKU</Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {activeTab === "rfqs" && (
                        <div className="animate-up">
                            <div style={{ background: "white", padding: "3.5rem", borderRadius: "32px", border: "1px solid var(--border-color)", boxShadow: "var(--shadow-premium)" }}>
                                <div className="flex justify-between items-center mb-10">
                                    <h2 style={{ fontSize: "1.75rem", fontWeight: "900" }}>Market Opportunity Feed</h2>
                                    <span style={{ background: "rgba(255,106,0,0.1)", color: "var(--primary-color)", padding: "6px 16px", borderRadius: "100px", fontSize: "0.85rem", fontWeight: "900" }}>{rfqs.length} REQUESTS LIVE</span>
                                </div>

                                <div className="flex-col gap-6">
                                    {rfqs.map((rfq) => (
                                        <div key={rfq.id} style={{ padding: "2.5rem", borderRadius: "24px", border: "1px solid var(--border-color)", background: rfq.isUrgent ? "rgba(255,0,0,0.01)" : "#fcfcfc", transition: "all 0.3s" }} className="rfq-row">
                                            <div className="flex justify-between items-start mb-4">
                                                <div>
                                                    <h3 style={{ fontSize: "1.4rem", fontWeight: "900", letterSpacing: "-0.5px", marginBottom: "0.5rem" }}>{rfq.productName}</h3>
                                                    <div className="flex gap-3 items-center">
                                                        <span style={{ fontSize: "0.85rem", fontWeight: "800", color: "var(--text-light)", background: "rgba(0,0,0,0.05)", padding: "4px 12px", borderRadius: "100px" }}>{rfq.quantity} {rfq.unit}</span>
                                                        {rfq.isUrgent && <span style={{ fontSize: "0.7rem", background: "#FF4136", color: "white", padding: "4px 10px", borderRadius: "6px", fontWeight: "900", letterSpacing: "0.5px" }}>DUE SOON</span>}
                                                    </div>
                                                </div>
                                                <div style={{ textAlign: "right" }}>
                                                    <p style={{ fontSize: "0.85rem", color: "var(--text-light)", fontWeight: "700" }}>Market Tag: {rfq.category || "General"}</p>
                                                    <p style={{ fontSize: "1.1rem", fontWeight: "900", color: "var(--primary-color)", marginTop: "4px" }}>Buyer: {rfq.buyerName}</p>
                                                </div>
                                            </div>
                                            <p style={{ fontSize: "1rem", color: "var(--text-main)", marginBottom: "2.5rem", lineHeight: "1.7", opacity: 0.8 }}>{rfq.description}</p>
                                            <Link href={`/supplier/rfqs/${rfq.id}`} className="btn btn-primary" style={{ width: "100%", padding: "1.25rem", borderRadius: "14px", fontWeight: "900", fontSize: "1.1rem" }}>
                                                Transmit Quotation (Bid)
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "disputes" && (
                        <div className="animate-up">
                            <div style={{ background: "white", padding: "4rem", borderRadius: "32px", border: "1px solid var(--border-color)", boxShadow: "var(--shadow-premium)" }}>
                                <div className="flex justify-between items-center mb-10">
                                    <h2 style={{ fontSize: "1.75rem", fontWeight: "900" }}>Trade Assurance Monitoring</h2>
                                    <span style={{ background: "#00b341", color: "white", padding: "6px 16px", borderRadius: "100px", fontSize: "0.8rem", fontWeight: "900" }}>ESCROW ACTIVE 🛡️</span>
                                </div>

                                <div style={{ textAlign: "center", padding: "8rem 2rem", background: "rgba(0,179,65,0.02)", borderRadius: "32px", border: "1px dashed #00b341" }}>
                                    <div style={{ fontSize: "5rem", marginBottom: "2rem" }}>🥇</div>
                                    <h2 style={{ fontSize: "2rem", fontWeight: "900", marginBottom: "1rem" }}>Clean Trade History</h2>
                                    <p style={{ color: "var(--text-light)", fontSize: "1.1rem", maxWidth: "500px", margin: "0 auto" }}>
                                        You have 0 active disputes. Maintain high quality standards and clear billing to keep your Platinum Trust ranking.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </section>
            </main>

            <Footer />
            <style jsx>{`
                .animate-up { animation: fadeInUp 0.6s cubic-bezier(0.165, 0.84, 0.44, 1); }
                @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
                .nav-btn:hover { background: rgba(255,106,0,0.05) !important; padding-left: 1.75rem !important; }
                .table-row:hover { background: rgba(0,0,0,0.04) !important; }
                .sku-card:hover { transform: translateY(-8px); border-color: var(--primary-color) !important; box-shadow: var(--shadow-premium); }
                .rfq-row:hover { border-color: var(--primary-color) !important; transform: scale(1.005); }
            `}</style>
        </div>
    );
}
