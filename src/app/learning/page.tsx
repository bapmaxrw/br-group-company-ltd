"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import Link from "next/link";

const categories = [
    { name: "Sourcing & Procurement", icon: "🔍", count: 42 },
    { name: "Logistics & Shipping", icon: "🚢", count: 28 },
    { name: "Payments & Escrow", icon: "💳", count: 15 },
    { name: "Selling & Marketing", icon: "📈", count: 34 },
    { name: "Quality & Compliance", icon: "🛡️", count: 21 },
];

const paths = [
    {
        title: "New Buyer Onboarding",
        desc: "Everything you need to know to make your first secure purchase on BR Group.",
        lessons: 8,
        time: "45 mins",
        color: "#0074D9"
    },
    {
        title: "Seller Growth Track",
        desc: "Master global RFQs and optimize your factory profile for maximum visibility.",
        lessons: 12,
        time: " business days",
        color: "#FF851B"
    },
    {
        title: "Logistics Expert",
        desc: "Deep dive into Incoterms 2024, container optimization, and port regulations.",
        lessons: 15,
        time: "2 hours",
        color: "#2ECC40"
    }
];

export default function LearningCenter() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div className="page" style={{ background: "var(--background-color)", minHeight: "100vh", color: "var(--text-main)" }}>
            <Header />

            <main>
                {/* Modern Hero Section */}
                <section style={{
                    background: "linear-gradient(135deg, #001f3f 0%, #003366 100%)",
                    padding: "8rem 0",
                    color: "white",
                    textAlign: "center",
                    position: "relative",
                    overflow: "hidden"
                }}>
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.1, background: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}></div>
                    <div className="container" style={{ position: "relative", zIndex: 1 }}>
                        <div style={{ background: "rgba(255,255,255,0.1)", display: "inline-block", padding: "8px 20px", borderRadius: "30px", fontSize: "0.9rem", fontWeight: "700", marginBottom: "1.5rem", backdropFilter: "blur(5px)", border: "1px solid rgba(255,255,255,0.2)" }}>
                            🎓 BR GROUP ACADEMY
                        </div>
                        <h1 style={{ fontSize: "4.5rem", fontWeight: "900", marginBottom: "1.5rem", letterSpacing: "-2px", color: "white" }}>Master Global Trade</h1>
                        <p style={{ fontSize: "1.4rem", maxWidth: "800px", margin: "0 auto 3rem", opacity: 0.8, lineHeight: "1.6" }}>
                            Empowering millions of entrepreneurs with expert knowledge, logistical tools, and data-driven insights to conquer international markets.
                        </p>

                        <div style={{ maxWidth: "700px", margin: "0 auto", position: "relative" }}>
                            <input
                                type="text"
                                placeholder="What would you like to learn today? (e.g. 'Payment Escrow', 'Shipping to EU')"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                style={{
                                    width: "100%",
                                    padding: "1.5rem 2rem",
                                    borderRadius: "100px",
                                    border: "none",
                                    fontSize: "1.1rem",
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                                    background: "white",
                                    color: "#333",
                                    outline: "none"
                                }}
                            />
                            <button style={{ position: "absolute", right: "10px", top: "10px", bottom: "10px", padding: "0 2.5rem", borderRadius: "100px", background: "var(--primary-color)", color: "white", border: "none", fontWeight: "800", cursor: "pointer" }}>Search</button>
                        </div>
                    </div>
                </section>

                {/* Categories Grid */}
                <section className="container" style={{ marginTop: "-50px", position: "relative", zIndex: 2 }}>
                    <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
                        {categories.map((cat, i) => (
                            <div key={i} style={{ background: "white", padding: "2rem 1.5rem", borderRadius: "24px", textAlign: "center", boxShadow: "0 10px 30px rgba(0,0,0,0.05)", border: "1px solid var(--border-color)", cursor: "pointer", transition: "transform 0.3s ease" }} className="cat-card">
                                <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>{cat.icon}</div>
                                <h4 style={{ fontSize: "0.95rem", marginBottom: "0.25rem" }}>{cat.name}</h4>
                                <p style={{ fontSize: "0.8rem", color: "var(--text-light)" }}>{cat.count} Articles</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Learning Paths */}
                <section className="container py-8">
                    <div className="flex justify-between items-end mb-4">
                        <div>
                            <h2 style={{ fontSize: "2.5rem", fontWeight: "800" }}>Curated Learning Paths</h2>
                            <p style={{ color: "var(--text-light)", fontSize: "1.1rem" }}>Step-by-step tracks to master platform features.</p>
                        </div>
                        <Link href="/courses" style={{ color: "var(--primary-color)", fontWeight: "700", textDecoration: "none" }}>View all courses →</Link>
                    </div>

                    <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
                        {paths.map((path, i) => (
                            <div key={i} style={{ background: "var(--surface-color)", borderRadius: "32px", border: "1px solid var(--border-color)", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                                <div style={{ height: "10px", background: path.color }}></div>
                                <div style={{ padding: "3rem" }}>
                                    <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>{path.title}</h3>
                                    <p style={{ color: "var(--text-light)", lineHeight: "1.6", marginBottom: "2rem", minHeight: "80px" }}>{path.desc}</p>
                                    <div className="flex gap-4 mb-3" style={{ fontSize: "0.85rem", color: "var(--text-light)", fontWeight: "600" }}>
                                        <span>📚 {path.lessons} Lessons</span>
                                        <span>⏱️ {path.time}</span>
                                    </div>
                                    <div style={{ background: "rgba(0,0,0,0.03)", height: "8px", borderRadius: "10px", marginBottom: "2rem" }}>
                                        <div style={{ width: "0%", height: "100%", background: path.color, borderRadius: "10px" }}></div>
                                    </div>
                                    <button className="btn" style={{ width: "100%", border: `2px solid ${path.color}`, color: path.color, fontWeight: "800", borderRadius: "14px" }}>Start Path</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Video & Webinar Section */}
                <section style={{ background: "rgba(0,0,0,0.02)", padding: "8rem 0" }}>
                    <div className="container">
                        <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
                            <div>
                                <h2 style={{ fontSize: "3rem", marginBottom: "1.5rem", fontWeight: "900" }}>Live Expert Webinars</h2>
                                <p style={{ fontSize: "1.2rem", color: "var(--text-light)", lineHeight: "1.7", marginBottom: "3rem" }}>
                                    Join our weekly live sessions with trade lawyers, logistics CEOs, and top-tier manufacturers. Get your questions answered in real-time.
                                </p>
                                <div className="flex-col gap-4">
                                    {[
                                        { title: "Navigating African Trade Corridors", date: "Jan 12, 10:00 AM", speaker: "Dr. Jean Kamanzi" },
                                        { title: "E-Commerce Logistics in Dubai", date: "Jan 15, 02:00 PM", speaker: "Sara Al-Maktoum" },
                                        { title: "Smart Contracts for B2B Payments", date: "Jan 20, 11:30 AM", speaker: "Tech Team Hub" },
                                    ].map((event, i) => (
                                        <div key={i} style={{ display: "flex", gap: "1.5rem", background: "white", padding: "1.5rem", borderRadius: "20px", border: "1px solid var(--border-color)", transition: "all 0.2s" }} className="event-card">
                                            <div style={{ width: "60px", height: "60px", background: "rgba(255,106,0,0.1)", borderRadius: "15px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem" }}>📅</div>
                                            <div>
                                                <h4 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>{event.title}</h4>
                                                <p style={{ fontSize: "0.85rem", color: "var(--text-light)" }}>{event.date} • {event.speaker}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <button className="btn btn-primary" style={{ marginTop: "3rem", padding: "1.25rem 3.5rem" }}>Reserve Your Seat</button>
                            </div>
                            <div style={{ position: "relative" }}>
                                <div style={{
                                    width: "100%",
                                    aspectRatio: "16/9",
                                    background: "url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop') center/cover",
                                    borderRadius: "40px",
                                    boxShadow: "0 30px 60px rgba(0,0,0,0.2)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                    <div style={{ width: "90px", height: "90px", background: "rgba(255,255,255,0.9)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: "2rem", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>▶️</div>
                                </div>
                                <div style={{ position: "absolute", bottom: "-30px", right: "-30px", background: "white", padding: "2rem", borderRadius: "24px", boxShadow: "0 20px 40px rgba(0,0,0,0.1)", border: "1px solid var(--border-color)" }}>
                                    <h4 style={{ fontSize: "1.2rem", fontWeight: "800" }}>300k+</h4>
                                    <p style={{ fontSize: "0.8rem", color: "var(--text-light)" }}>Educated Businesses</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="container py-4" style={{ marginBottom: "8rem" }}>
                    <div style={{ background: "var(--primary-color)", padding: "5rem", borderRadius: "40px", color: "white", textAlign: "center", position: "relative", overflow: "hidden" }}>
                        <div style={{ position: "absolute", top: -50, right: -50, width: "300px", height: "300px", background: "rgba(255,255,255,0.1)", borderRadius: "50%" }}></div>
                        <h2 style={{ fontSize: "3rem", color: "white", marginBottom: "1.5rem" }}>Ready to scale your factory?</h2>
                        <p style={{ fontSize: "1.3rem", color: "rgba(255,255,255,0.8)", marginBottom: "3rem", maxWidth: "600px", margin: "0 auto 3rem" }}>Join our Verified Gold program and get access to exclusive market data reports.</p>
                        <Link href="/register?role=seller" className="btn" style={{ background: "white", color: "var(--primary-color)", padding: "1.5rem 4rem", fontSize: "1.2rem", fontWeight: "900", borderRadius: "20px" }}>Apply for Gold Membership</Link>
                    </div>
                </section>
            </main>

            <Footer />
            <style jsx>{`
                .cat-card:hover {
                    transform: translateY(-5px);
                    border-color: var(--primary-color);
                    box-shadow: 0 15px 35px rgba(255,106,0,0.1);
                }
                .event-card:hover {
                    border-color: var(--primary-color);
                    transform: translateX(10px);
                }
            `}</style>
        </div>
    );
}
