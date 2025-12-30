"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Sustainability() {
    return (
        <div className="page" style={{ background: "var(--background-color)", minHeight: "100vh" }}>
            <Header />

            <main>
                {/* High Impact ESG Hero */}
                <section style={{
                    background: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop') center/cover",
                    padding: "12rem 0",
                    color: "white",
                    textAlign: "center"
                }}>
                    <div className="container">
                        <span style={{ background: "#2ECC40", color: "white", padding: "8px 20px", borderRadius: "100px", fontSize: "0.9rem", fontWeight: "800", letterSpacing: "1px", marginBottom: "2rem", display: "inline-block" }}>OUR COMMITMENT</span>
                        <h1 style={{ fontSize: "5rem", fontWeight: "900", color: "white", letterSpacing: "-3px", lineHeight: "1", marginBottom: "2rem" }}>A Greener Path <br />for Global Trade.</h1>
                        <p style={{ fontSize: "1.4rem", maxWidth: "800px", margin: "0 auto", opacity: 0.9, lineHeight: "1.6" }}>
                            Sustainability is not an option; it's our operating model. We are digitizing supply chains to reduce waste, optimize routes, and ensure ethical sourcing.
                        </p>
                    </div>
                </section>

                {/* ESG Pillars */}
                <section className="container py-8" style={{ marginTop: "-60px" }}>
                    <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2.5rem" }}>
                        {[
                            {
                                title: "Environmental",
                                color: "#2ECC40",
                                desc: "Achieving Net Zero by 2030 through AI-optimized logistics and solar-powered fulfillment centers.",
                                metrics: ["-40% Carbon since 2021", "100% Recyclable Packaging"]
                            },
                            {
                                title: "Social",
                                color: "#0074D9",
                                desc: "Empowering 10M+ local artisans and SME factories with access to high-value global markets.",
                                metrics: ["Fair Labor Certification", "Education Hubs"]
                            },
                            {
                                title: "Governance",
                                color: "#333",
                                desc: "Radical transparency in payments and trade reporting to ensure zero-tolerance for corruption.",
                                metrics: ["Uncorruptible Ledgers", "Global Compliance"]
                            }
                        ].map((pillar, i) => (
                            <div key={i} style={{ background: "white", borderRadius: "32px", border: "1px solid var(--border-color)", borderTop: `8px solid ${pillar.color}`, padding: "4rem 3rem", boxShadow: "0 20px 50px rgba(0,0,0,0.06)" }}>
                                <h3 style={{ fontSize: "2rem", fontWeight: "900", marginBottom: "1.5rem" }}>{pillar.title}</h3>
                                <p style={{ color: "var(--text-light)", fontSize: "1.1rem", lineHeight: "1.7", marginBottom: "2.5rem" }}>{pillar.desc}</p>
                                <div className="flex-col gap-3">
                                    {pillar.metrics.map((m, j) => (
                                        <div key={j} style={{ display: "flex", alignItems: "center", gap: "10px", fontWeight: "700", color: pillar.color }}>
                                            <span>✓</span> {m}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Responsible Sourcing Map Section */}
                <section style={{ padding: "8rem 0", background: "white", borderTop: "1px solid var(--border-color)" }}>
                    <div className="container">
                        <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
                            <div style={{ position: "relative" }}>
                                <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop" alt="ESG" style={{ width: "100%", height: "550px", objectFit: "cover", borderRadius: "40px", boxShadow: "0 30px 60px rgba(0,0,0,0.1)" }} />
                                <div style={{ position: "absolute", top: "40px", right: "-30px", background: "#2ECC40", color: "white", padding: "2rem", borderRadius: "24px", boxShadow: "0 20px 40px rgba(46,204,64,0.3)" }}>
                                    <h4 style={{ fontSize: "1.4rem", fontWeight: "900" }}>40% Growth</h4>
                                    <p style={{ fontSize: "0.85rem", opacity: 0.9 }}>in Sustainable Listings</p>
                                </div>
                            </div>
                            <div>
                                <h2 style={{ fontSize: "3rem", fontWeight: "900", marginBottom: "2.5rem", letterSpacing: "-1px" }}>Our Responsible <br />Sourcing Policy.</h2>
                                <p style={{ fontSize: "1.2rem", color: "var(--text-light)", lineHeight: "1.8", marginBottom: "3rem" }}>
                                    We don't just verify businesses; we verify their ethics. Every factory on the BR Group platform must sign the **Global Ethics Pledge**, covering living wages, carbon offsets, and safe working conditions.
                                </p>
                                <button className="btn btn-primary" style={{ background: "#2ECC40", padding: "1.5rem 4rem", borderRadius: "100px", fontWeight: "800" }}>Read Our Ethics Pledge</button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Community Impact CTA */}
                <section className="container py-8" style={{ marginBottom: "8rem" }}>
                    <div style={{ background: "#001f3f", padding: "7rem 4rem", borderRadius: "48px", textAlign: "center", color: "white", position: "relative", overflow: "hidden" }}>
                        <div style={{ position: "absolute", top: -100, right: -100, width: "400px", height: "400px", background: "rgba(46,204,64,0.1)", borderRadius: "50%" }}></div>
                        <h2 style={{ fontSize: "3.5rem", fontWeight: "900", color: "white", marginBottom: "1.5rem", letterSpacing: "-2px" }}>Join the Ethical Revolution.</h2>
                        <p style={{ fontSize: "1.3rem", opacity: 0.9, maxWidth: "600px", margin: "0 auto 3.5rem" }}>Whether you are a solar manufacturer or a fair-trade coffee grower, we want to scale your impact globally.</p>
                        <button className="btn" style={{ background: "#2ECC40", color: "white", padding: "1.5rem 4rem", fontSize: "1.10rem", fontWeight: "900", borderRadius: "20px" }}>Apply as a Sustainable Supplier</button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
