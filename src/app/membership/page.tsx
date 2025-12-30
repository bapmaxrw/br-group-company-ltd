"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Membership() {
    return (
        <div className="page" style={{ background: "var(--background-color)", minHeight: "100vh" }}>
            <Header />

            <main>
                {/* Immersive Membership Hero */}
                <section style={{
                    background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2070&auto=format&fit=crop') center/cover",
                    padding: "12rem 0",
                    color: "white",
                    textAlign: "center",
                    position: "relative"
                }}>
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "radial-gradient(circle at 50% 50%, rgba(255,106,0,0.1) 0%, transparent 60%)", pointerEvents: "none" }}></div>
                    <div className="container animate-up">
                        <span style={{ background: "var(--primary-color)", color: "white", padding: "8px 24px", borderRadius: "100px", fontSize: "0.85rem", fontWeight: "900", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "2rem", display: "inline-block" }}>Scale Your Trade</span>
                        <h1 style={{ fontSize: "5rem", maxWidth: "900px", margin: "0 auto 2rem", fontWeight: "900", letterSpacing: "-3px", lineHeight: "1", color: "white" }}>Membership Solutions for Global Leaders.</h1>
                        <p style={{ fontSize: "1.5rem", maxWidth: "800px", margin: "0 auto 4rem", opacity: 0.9, lineHeight: "1.6" }}>
                            Unlock specialized tools, verified trust badges, and priority logistical networks designed for high-volume B2B operations.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <Link href="/register" className="btn btn-primary" style={{ padding: "1.5rem 4rem", fontSize: "1.2rem", borderRadius: "16px", fontWeight: "900" }}>Start Free Trial</Link>
                            <button className="btn glass" style={{ padding: "1.5rem 4rem", borderRadius: "16px", color: "white" }}>Download Program Guide (PDF)</button>
                        </div>
                    </div>
                </section>

                <section className="container py-8">
                    {/* Competitive Tier Cards */}
                    <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))", gap: "3rem", marginTop: "-80px", position: "relative", zIndex: 10 }}>

                        {/* Standard Buyer Tier */}
                        <div style={{ background: "white", padding: "5rem 4rem", borderRadius: "40px", border: "1px solid var(--border-color)", boxShadow: "var(--shadow-premium)", transition: "all 0.3s" }} className="tier-card">
                            <span style={{ color: "var(--text-light)", fontWeight: "800", textTransform: "uppercase", fontSize: "0.8rem", letterSpacing: "1.5px" }}>Essential Access</span>
                            <h3 style={{ fontSize: "2.5rem", fontWeight: "900", margin: "1rem 0" }}>Standard Buyer</h3>
                            <div className="flex items-baseline gap-1 mb-8">
                                <span style={{ fontSize: "3.5rem", fontWeight: "900" }}>$0</span>
                                <span style={{ color: "var(--text-light)", fontSize: "1.1rem" }}>/Account</span>
                            </div>
                            <p style={{ color: "var(--text-light)", marginBottom: "3rem", lineHeight: "1.6" }}>Perfect for businesses starting their global sourcing journey with secure payments.</p>
                            <ul style={{ marginBottom: "4rem", padding: 0, listStyle: "none" }}>
                                {["Access to 40M+ products", "Trade Assurance Protection", "Global Tracking System", "Standard Sourcing Limits"].map((f, i) => (
                                    <li key={i} style={{ marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "15px", fontWeight: "600", color: "#333" }}>
                                        <div style={{ width: "24px", height: "24px", background: "rgba(0,179,65,0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#00b341", fontSize: "0.8rem" }}>✓</div>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <Link href="/register" className="btn" style={{ width: "100%", padding: "1.5rem", borderRadius: "16px", border: "2.5px solid var(--primary-color)", color: "var(--primary-color)", fontWeight: "900", textAlign: "center", display: "block" }}>Create Account</Link>
                        </div>

                        {/* Gold Supplier Tier */}
                        <div style={{ background: "#001f3f", padding: "5rem 4rem", borderRadius: "40px", border: "1px solid #003366", color: "white", boxShadow: "0 40px 80px rgba(0,0,0,0.25)", position: "relative" }} className="tier-card featured">
                            <div style={{ position: "absolute", top: "25px", right: "25px", background: "var(--primary-color)", color: "white", padding: "6px 16px", borderRadius: "100px", fontSize: "0.75rem", fontWeight: "900" }}>MOST POPULAR</div>
                            <span style={{ color: "rgba(255,255,255,0.6)", fontWeight: "800", textTransform: "uppercase", fontSize: "0.8rem", letterSpacing: "1.5px" }}>Growth Accelerator</span>
                            <h3 style={{ fontSize: "2.5rem", fontWeight: "900", margin: "1rem 0", color: "white" }}>Verified Gold</h3>
                            <div className="flex items-baseline gap-1 mb-8">
                                <span style={{ fontSize: "3.5rem", fontWeight: "900", color: "white" }}>$2,999</span>
                                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.1rem" }}>/Year</span>
                            </div>
                            <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: "3rem", lineHeight: "1.6" }}>The industry standard for factories seeking global visibility and high-trust status.</p>
                            <ul style={{ marginBottom: "4rem", padding: 0, listStyle: "none" }}>
                                {[
                                    "Verified Gold 'Entity' Badge",
                                    "Top-Ranked Search Placement",
                                    "Unlimited RFQ Bidding",
                                    "Instant Bank Settlements",
                                    "24/7 Dedicated Account Manager"
                                ].map((f, i) => (
                                    <li key={i} style={{ marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: "15px", fontWeight: "600", color: "white" }}>
                                        <div style={{ width: "24px", height: "24px", background: "var(--primary-color)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "0.8rem" }}>★</div>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <button className="btn btn-primary" style={{ width: "100%", padding: "1.5rem", borderRadius: "16px", fontWeight: "900", fontSize: "1.1rem" }}>Upgrade to Gold Status</button>
                        </div>
                    </div>

                    {/* Comparison Table Section */}
                    <div style={{ padding: "8rem 0" }}>
                        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
                            <h2 style={{ fontSize: "3rem", fontWeight: "900", letterSpacing: "-1.5px" }}>Feature Deep-Dive</h2>
                            <p style={{ color: "var(--text-light)", fontSize: "1.2rem" }}>Compare granular details between membership tiers.</p>
                        </div>

                        <div style={{ background: "white", borderRadius: "32px", border: "1px solid var(--border-color)", overflow: "hidden" }}>
                            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                <thead>
                                    <tr style={{ background: "#f8f9fa", textAlign: "left" }}>
                                        <th style={{ padding: "2.5rem", fontSize: "1.1rem", fontWeight: "900" }}>Feature Set</th>
                                        <th style={{ padding: "2.5rem", fontSize: "1.1rem", fontWeight: "900", textAlign: "center" }}>Standard</th>
                                        <th style={{ padding: "2.5rem", fontSize: "1.1rem", fontWeight: "900", textAlign: "center", color: "var(--primary-color)" }}>Gold Verified</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { label: "Trade Protection", std: "Full", gld: "Full + Priority Claims" },
                                        { label: "Monthly RFQ Responses", std: "10 Quotes", gld: "Unlimited" },
                                        { label: "Product Listing Limit", std: "500 SKUs", gld: "Unlimited" },
                                        { label: "On-Site Factory Audit", std: "Remote Only", gld: "Annual Physical Inspection" },
                                        { label: "Market Insights", std: "Basic", gld: "Advanced AI Analytics" },
                                        { label: "Payment Settlement", std: "Standard", gld: "Instant / 0% Bank Fees" }
                                    ].map((row, i) => (
                                        <tr key={i} style={{ borderBottom: "1px solid var(--border-color)" }}>
                                            <td style={{ padding: "2rem 2.5rem", fontWeight: "700", opacity: 0.8 }}>{row.label}</td>
                                            <td style={{ padding: "2rem 2.5rem", textAlign: "center", color: "var(--text-light)" }}>{row.std}</td>
                                            <td style={{ padding: "2rem 2.5rem", textAlign: "center", fontWeight: "800", background: "rgba(255,106,0,0.02)" }}>{row.gld}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Corporate Sales CTA */}
                <section className="container py-8" style={{ marginBottom: "8rem" }}>
                    <div style={{ background: "var(--surface-color)", padding: "7rem 4rem", borderRadius: "48px", textAlign: "center", border: "1px solid var(--border-color)", borderBottom: "10px solid var(--primary-color)" }}>
                        <h2 style={{ fontSize: "2.5rem", fontWeight: "900", marginBottom: "1.5rem" }}>Need a Custom Enterprise Solution?</h2>
                        <p style={{ fontSize: "1.2rem", color: "var(--text-light)", maxWidth: "600px", margin: "0 auto 3.5rem" }}>
                            For MNCs requiring white-label sourcing or regional government trade partnerships, please contact our Corporate Solutions Team.
                        </p>
                        <Link href="/contact" className="btn" style={{ padding: "1.5rem 4rem", borderRadius: "16px", background: "white", border: "2px solid var(--text-main)", fontWeight: "900" }}>Contact Enterprise Sales</Link>
                    </div>
                </section>
            </main>

            <Footer />
            <style jsx>{`
                .tier-card:hover { transform: translateY(-10px); }
                .featured { transform: scale(1.05); }
                @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
                .animate-up { animation: fadeInUp 0.8s cubic-bezier(0.165, 0.84, 0.44, 1); }
            `}</style>
        </div>
    );
}
