"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function About() {
    return (
        <div className="page" style={{ background: "var(--background-color)", minHeight: "100vh" }}>
            <Header />

            <main>
                {/* Visual Hero Section */}
                <section style={{
                    background: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop') center/cover",
                    padding: "12rem 0",
                    color: "white",
                    textAlign: "center",
                    position: "relative"
                }}>
                    <div className="container animate-up">
                        <span style={{ background: "var(--primary-color)", color: "white", padding: "8px 20px", borderRadius: "100px", fontSize: "0.9rem", fontWeight: "800", letterSpacing: "1px", marginBottom: "2rem", display: "inline-block" }}>THE MISSION</span>
                        <h1 style={{ fontSize: "5rem", maxWidth: "900px", margin: "0 auto 2rem", fontWeight: "900", letterSpacing: "-3px", lineHeight: "1", color: "white" }}>The World's Largest B2B Network.</h1>
                        <p style={{ fontSize: "1.4rem", maxWidth: "800px", margin: "0 auto", opacity: "0.9", lineHeight: "1.6" }}>
                            BR GROUP COMPANY bridges the geographical, financial, and digital divide between global manufacturing hubs and regional professional buyers.
                        </p>
                    </div>
                </section>

                {/* Impact Metrics */}
                <section className="container" style={{ marginTop: "-80px", position: "relative", zIndex: 10 }}>
                    <div style={{ background: "white", padding: "4rem", borderRadius: "32px", border: "1px solid var(--border-color)", boxShadow: "0 30px 60px rgba(0,0,0,0.1)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "3rem", textAlign: "center" }}>
                        {[
                            { label: "Market Volume", value: "$12.4B", icon: "🌐" },
                            { label: "Verified Suppliers", value: "190k+", icon: "🏢" },
                            { label: "Global Reach", value: "190+", icon: "🌍" },
                            { label: "Protection", value: "100%", icon: "🛡️" }
                        ].map((stat, i) => (
                            <div key={i} style={{ flex: 1, minWidth: "150px" }}>
                                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{stat.icon}</div>
                                <h3 style={{ fontSize: "2.5rem", fontWeight: "900", color: "var(--primary-color)", marginBottom: "0.25rem" }}>{stat.value}</h3>
                                <p style={{ fontWeight: "700", color: "var(--text-light)", fontSize: "0.9rem" }}>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Core Values Section */}
                <section className="container py-8">
                    <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center", margin: "6rem 0" }}>
                        <div>
                            <h2 style={{ fontSize: "3rem", fontWeight: "900", marginBottom: "2rem", letterSpacing: "-1px" }}>Built on Radical Trust.</h2>
                            <div className="flex-col gap-8">
                                {[
                                    { title: "In-Person Verification", desc: "Our field agents physically visit every 'Gold' factory to verify machinery, production capacity, and labor standards." },
                                    { title: "Instant Trade Settlement", desc: "No more 30-day waiting periods. We've built the world's fastest cross-border B2B settlement infrastructure." },
                                    { title: "Legal & ESG Compliance", desc: "All suppliers must adhere to strict environmental and social governance standards monitored by AI." }
                                ].map((val, i) => (
                                    <div key={i} style={{ display: "flex", gap: "1.5rem" }}>
                                        <div style={{ width: "32px", height: "32px", background: "rgba(255,106,0,0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary-color)", fontWeight: "800", flexShrink: 0 }}>{i + 1}</div>
                                        <div>
                                            <h4 style={{ fontSize: "1.2rem", fontWeight: "800", marginBottom: "0.5rem" }}>{val.title}</h4>
                                            <p style={{ color: "var(--text-light)", lineHeight: "1.7" }}>{val.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{ position: "relative" }}>
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" alt="Global Trade" style={{ width: "100%", height: "600px", objectFit: "cover", borderRadius: "40px", boxShadow: "0 30px 60px rgba(0,0,0,0.2)" }} />
                            <div style={{ position: "absolute", bottom: "-30px", left: "-30px", background: "white", padding: "3rem", borderRadius: "32px", boxShadow: "0 20px 40px rgba(0,0,0,0.1)", border: "1px solid var(--border-color)", maxWidth: "250px" }}>
                                <div style={{ fontSize: "1.2rem", fontWeight: "900", marginBottom: "0.5rem" }}>Founded in 2018</div>
                                <p style={{ fontSize: "0.85rem", color: "var(--text-light)" }}>Started in Dubai, now operating 24 hubs globally.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Global Hubs Grid */}
                <section style={{ background: "rgba(0,0,0,0.02)", padding: "8rem 0" }}>
                    <div className="container">
                        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
                            <h2 style={{ fontSize: "3rem", fontWeight: "900" }}>Our Strategic Presence</h2>
                            <p style={{ color: "var(--text-light)", fontSize: "1.2rem" }}>Main operations centers driving global trade.</p>
                        </div>
                        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
                            {[
                                { city: "Dubai, UAE", role: "Global Logistics Hub", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop" },
                                { city: "Kigali, Rwanda", role: "East Africa Trade Corridor", img: "https://images.unsplash.com/photo-1577484643212-076f7f63116a?q=80&w=2070&auto=format&fit=crop" },
                                { city: "Guangzhou, China", role: "Manufacturing Discovery", img: "https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=2073&auto=format&fit=crop" }
                            ].map((hub, i) => (
                                <div key={i} style={{ background: "white", borderRadius: "32px", overflow: "hidden", border: "1px solid var(--border-color)", transition: "transform 0.3s ease" }} className="hub-card">
                                    <div style={{ height: "250px", overflow: "hidden" }}>
                                        <img src={hub.img} alt={hub.city} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                    </div>
                                    <div style={{ padding: "2.5rem" }}>
                                        <h4 style={{ fontSize: "1.4rem", fontWeight: "900", marginBottom: "0.5rem" }}>{hub.city}</h4>
                                        <p style={{ color: "var(--text-light)", fontWeight: "600", fontSize: "0.9rem" }}>{hub.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="container py-8" style={{ marginBottom: "8rem" }}>
                    <div style={{ background: "var(--primary-color)", padding: "7rem 4rem", borderRadius: "48px", textAlign: "center", color: "white", position: "relative", overflow: "hidden" }}>
                        <div style={{ position: "absolute", top: -100, left: -100, width: "400px", height: "400px", background: "rgba(255,255,255,0.1)", borderRadius: "50%" }}></div>
                        <h2 style={{ fontSize: "3.5rem", fontWeight: "900", color: "white", marginBottom: "1.5rem", letterSpacing: "-2px" }}>The future is Trade-without-Boundaries.</h2>
                        <p style={{ fontSize: "1.3rem", opacity: 0.9, maxWidth: "600px", margin: "0 auto 3.5rem" }}>Join the network that is reshaping how products move from production lines to the world.</p>
                        <div className="flex gap-4 justify-center">
                            <Link href="/register" className="btn" style={{ background: "white", color: "var(--primary-color)", padding: "1.5rem 4rem", fontSize: "1.1rem", fontWeight: "900", borderRadius: "20px" }}>Join the Marketplace</Link>
                            <Link href="/careers" className="btn glass" style={{ padding: "1.5rem 4rem", color: "white", borderRadius: "20px" }}>View Careers</Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <style jsx>{`
                .hub-card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.1); border-color: var(--primary-color); }
            `}</style>
        </div>
    );
}
