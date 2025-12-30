"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function HelpCenter() {
    const categories = [
        { title: "Ordering & Payments", icon: "💳", q: ["How does Escrow work?", "Supported currencies", "Payment methods"] },
        { title: "Shipping & Logistics", icon: "🚢", q: ["Tracking my order", "Customs clearance help", "Ocean vs Air freight"] },
        { title: "Buyer Protection", icon: "🛡️", q: ["Trade Assurance guide", "Opening a dispute", "Refund policies"] },
        { title: "Selling on BR Group", icon: "🏭", q: ["Verification process", "Listing your products", "Supplier gold membership"] }
    ];

    return (
        <div className="page" style={{ background: "var(--background-color)", minHeight: "100vh" }}>
            <Header />

            <main className="container py-8">
                {/* Search Focused Hero */}
                <div style={{ padding: "6rem 0", textAlign: "center", background: "white", borderRadius: "48px", border: "1px solid var(--border-color)", marginBottom: "4rem", boxShadow: "0 20px 40px rgba(0,0,0,0.03)" }}>
                    <h1 style={{ fontSize: "4rem", fontWeight: "900", letterSpacing: "-2px", marginBottom: "1.5rem" }}>How can we help?</h1>
                    <div style={{ maxWidth: "700px", margin: "0 auto", position: "relative" }}>
                        <input
                            type="text"
                            placeholder="Search help articles (e.g. 'Trade Assurance', 'Refunds')..."
                            style={{ width: "100%", padding: "1.5rem 2.5rem", borderRadius: "100px", border: "1px solid var(--border-color)", background: "#f8f9fa", outline: "none", fontSize: "1.1rem" }}
                        />
                        <button className="btn btn-primary" style={{ position: "absolute", right: "10px", top: "10px", borderRadius: "100px", padding: "0.8rem 2.5rem" }}>Search</button>
                    </div>
                </div>

                {/* Help Topics Grid */}
                <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", marginBottom: "6rem" }}>
                    {categories.map((cat, i) => (
                        <div key={i} style={{ background: "white", padding: "3rem", borderRadius: "32px", border: "1px solid var(--border-color)", transition: "all 0.3s" }} className="help-card">
                            <div style={{ fontSize: "3rem", marginBottom: "1.5rem" }}>{cat.icon}</div>
                            <h3 style={{ fontSize: "1.5rem", fontWeight: "900", marginBottom: "1.5rem" }}>{cat.title}</h3>
                            <ul className="flex-col gap-4">
                                {cat.q.map((q, j) => (
                                    <li key={j}>
                                        <a href="#" style={{ color: "var(--text-light)", fontWeight: "600", fontSize: "0.95rem" }} className="help-link">{q}</a>
                                    </li>
                                ))}
                            </ul>
                            <button style={{ marginTop: "2rem", background: "none", border: "none", color: "var(--primary-color)", fontWeight: "800", cursor: "pointer" }}>View All Items →</button>
                        </div>
                    ))}
                </div>

                {/* Direct Support Options */}
                <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "3rem", marginBottom: "8rem" }}>
                    <div style={{ background: "linear-gradient(135deg, #001f3f 0%, #003366 100%)", padding: "4rem", borderRadius: "32px", color: "white" }}>
                        <h2 style={{ fontSize: "2rem", fontWeight: "900", color: "white", marginBottom: "1rem" }}>24/7 Global Chat</h2>
                        <p style={{ opacity: 0.8, marginBottom: "2.5rem", lineHeight: "1.6" }}>Our AI-powered agents and regional experts are available around the clock to assist with time-sensitive trade issues.</p>
                        <button className="btn btn-primary" style={{ padding: "1rem 3rem", borderRadius: "12px" }}>Start Live Chat</button>
                    </div>
                    <div style={{ background: "white", padding: "4rem", borderRadius: "32px", border: "1px solid var(--border-color)", boxShadow: "var(--shadow-premium)" }}>
                        <h2 style={{ fontSize: "2rem", fontWeight: "900", marginBottom: "1rem" }}>Submit a Ticket</h2>
                        <p style={{ color: "var(--text-light)", marginBottom: "2.5rem", lineHeight: "1.6" }}>For complex logistics disputes or corporate membership inquiries, please open a formal support case.</p>
                        <button className="btn" style={{ border: "2px solid #0074D9", color: "#0074D9", padding: "1rem 3rem", borderRadius: "12px", fontWeight: "800" }}>Open Support Ticket</button>
                    </div>
                </div>
            </main>

            <Footer />
            <style jsx>{`
                .help-card:hover { transform: translateY(-5px); border-color: var(--primary-color); box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
                .help-link:hover { color: var(--primary-color) !important; text-decoration: underline; }
            `}</style>
        </div>
    );
}
