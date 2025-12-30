"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function TradeAssurance() {
    return (
        <div className="page" style={{ background: "var(--background-color)", minHeight: "100vh", color: "var(--text-main)" }}>
            <Header />

            <main>
                {/* Hero Section */}
                <section style={{ background: "linear-gradient(135deg, #001f3f 0%, #0074D9 100%)", padding: "6rem 0", color: "white", textAlign: "center" }}>
                    <div className="container">
                        <div style={{ background: "rgba(255,255,255,0.1)", display: "inline-block", padding: "10px 20px", borderRadius: "30px", marginBottom: "2rem", border: "1px solid rgba(255,255,255,0.2)" }}>
                            <span style={{ fontSize: "1.2rem", marginRight: "10px" }}>🛡️</span>
                            <span style={{ fontWeight: "700" }}>BR GROUP TRADE ASSURANCE</span>
                        </div>
                        <h1 style={{ fontSize: "4rem", marginBottom: "1.5rem", fontWeight: "800" }}>Global Trading with Confidence</h1>
                        <p style={{ fontSize: "1.5rem", maxWidth: "800px", margin: "0 auto 3rem", opacity: 0.9 }}>
                            Protecting your orders from payment to delivery. We ensure your funds reach verified sellers only when shipping is confirmed.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Link href="/register" className="btn btn-primary" style={{ padding: "1.25rem 3rem", fontSize: "1.1rem" }}>Join as Verified Member</Link>
                            <Link href="/contact" className="btn glass" style={{ padding: "1.25rem 3rem", fontSize: "1.1rem", color: "white" }}>Speak to an Agent</Link>
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section style={{ padding: "5rem 0" }}>
                    <div className="container">
                        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem" }}>
                            <div style={{ background: "var(--surface-color)", padding: "3rem", borderRadius: "24px", border: "1px solid var(--border-color)", textAlign: "center" }}>
                                <div style={{ fontSize: "4rem", marginBottom: "1.5rem" }}>💳</div>
                                <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Secure Payments</h3>
                                <p style={{ color: "var(--text-light)", lineHeight: "1.6" }}>
                                    Your money is held in a secure escrow-style account. Funds are only released to the seller's verified country-code account after you confirm receipt.
                                </p>
                            </div>
                            <div style={{ background: "var(--surface-color)", padding: "3rem", borderRadius: "24px", border: "1px solid var(--border-color)", textAlign: "center" }}>
                                <div style={{ fontSize: "4rem", marginBottom: "1.5rem" }}>🚢</div>
                                <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Shipping Protection</h3>
                                <p style={{ color: "var(--text-light)", lineHeight: "1.6" }}>
                                    If your order doesn't ship by the date agreed upon in your contract, we provide full refund support or shipment mediation.
                                </p>
                            </div>
                            <div style={{ background: "var(--surface-color)", padding: "3rem", borderRadius: "24px", border: "1px solid var(--border-color)", textAlign: "center" }}>
                                <div style={{ fontSize: "4rem", marginBottom: "1.5rem" }}>💎</div>
                                <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Product Quality</h3>
                                <p style={{ color: "var(--text-light)", lineHeight: "1.6" }}>
                                    Select from a range of inspection services to verify product quality at the source before the final payment is triggered.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How it Works */}
                <section style={{ background: "rgba(0,0,0,0.02)", padding: "6rem 0" }}>
                    <div className="container">
                        <h2 style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "4rem" }}>How Trade Assurance Works</h2>
                        <div className="flex-col gap-8" style={{ maxWidth: "800px", margin: "0 auto" }}>
                            {[
                                { step: "01", title: "Place your order", desc: "Pay thru the BR Group platform to a seller with the Trade Assurance icon." },
                                { step: "02", title: "Escrow Holding", desc: "Your payment is secured. The seller sees the confirmed funds but cannot withdraw yet." },
                                { step: "03", title: "Shipment & Confirmation", desc: "The seller ships your goods. You verify the quality and quantity upon arrival." },
                                { step: "04", title: "Fund Release", desc: "Once you confirm, the funds are instantly settled to the seller's verified local bank." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 items-start" style={{ background: "var(--surface-color)", padding: "2rem", borderRadius: "16px", border: "1px solid var(--border-color)" }}>
                                    <span style={{ fontSize: "2rem", fontWeight: "900", color: "var(--primary-color)", opacity: 0.3 }}>{item.step}</span>
                                    <div>
                                        <h4 style={{ fontSize: "1.2rem", fontWeight: "700", marginBottom: "0.5rem" }}>{item.title}</h4>
                                        <p style={{ color: "var(--text-light)" }}>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
