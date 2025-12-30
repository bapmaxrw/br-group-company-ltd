"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Contact() {
    const [submitting, setSubmitting] = useState(false);
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
            setSent(true);
        }, 1500);
    };

    return (
        <div className="page" style={{ background: "var(--background-color)", minHeight: "100vh" }}>
            <Header />

            <main className="container py-8">
                <div style={{ textAlign: "center", marginBottom: "6rem", marginTop: "4rem" }}>
                    <span style={{ color: "var(--primary-color)", fontWeight: "800", letterSpacing: "2px", textTransform: "uppercase", fontSize: "0.85rem", display: "block", marginBottom: "1.5rem" }}>GLOBAL SUPPORT CENTER</span>
                    <h1 style={{ fontSize: "4.5rem", fontWeight: "900", letterSpacing: "-3px", lineHeight: "1" }}>We're here to solve <br /><span style={{ color: "var(--primary-color)" }}>your trade challenges.</span></h1>
                    <p style={{ fontSize: "1.3rem", color: "var(--text-light)", maxWidth: "700px", margin: "2rem auto 0", lineHeight: "1.6" }}>
                        Whether you are a buyer looking for a unique part or a factory scaling your exports, our global team in Dubai, Kigali, and Guangzhou is ready to assist.
                    </p>
                </div>

                <div className="grid" style={{ gridTemplateColumns: "1fr 1.5fr", gap: "6rem", alignItems: "start", marginBottom: "8rem" }}>
                    {/* Direct Contact Channels */}
                    <div className="flex-col gap-6">
                        {[
                            { title: "General Sourcing", desc: "Questions about products and suppliers.", icon: "🔍", contact: "sourcing@brgroup.co" },
                            { title: "Trade Assurance", desc: "Protection, escrow, and payment help.", icon: "🛡️", contact: "security@brgroup.co" },
                            { title: "Logistics Support", desc: "Tracking and shipping documentation.", icon: "🚢", contact: "logistics@brgroup.co" },
                            { title: "Corporate Media", desc: "Press, news, and investor inquiries.", icon: "📰", contact: "press@brgroup.co" }
                        ].map((channel, i) => (
                            <div key={i} style={{ background: "white", padding: "2.5rem", borderRadius: "24px", border: "1px solid var(--border-color)", transition: "all 0.3s ease" }} className="contact-card">
                                <div style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>{channel.icon}</div>
                                <h4 style={{ fontSize: "1.25rem", fontWeight: "800", marginBottom: "0.5rem" }}>{channel.title}</h4>
                                <p style={{ color: "var(--text-light)", fontSize: "0.95rem", marginBottom: "1.5rem" }}>{channel.desc}</p>
                                <p style={{ fontWeight: "700", color: "var(--primary-color)" }}>{channel.contact}</p>
                            </div>
                        ))}
                    </div>

                    {/* Integrated Form */}
                    <div style={{ background: "white", padding: "4rem", borderRadius: "32px", border: "1px solid var(--border-color)", boxShadow: "0 30px 60px rgba(0,0,0,0.06)" }}>
                        {sent ? (
                            <div style={{ textAlign: "center", padding: "4rem 0" }}>
                                <div style={{ fontSize: "5rem", marginBottom: "2rem" }}>✅</div>
                                <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Message Transmitted</h2>
                                <p style={{ color: "var(--text-light)", fontSize: "1.1rem" }}>Our support desk will prioritize your inquiry. Expect a response in &lt; 4 hours.</p>
                                <button onClick={() => setSent(false)} className="btn btn-primary" style={{ marginTop: "2.5rem", padding: "1rem 3rem" }}>Send Another Message</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex-col gap-6">
                                <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                                    <div className="flex-col gap-2">
                                        <label style={{ fontSize: "0.9rem", fontWeight: "700", opacity: 0.7 }}>Full Name</label>
                                        <input type="text" placeholder="John Carter" required style={{ padding: "1.2rem", borderRadius: "12px", border: "1px solid var(--border-color)", background: "var(--background-color)", outline: "none" }} />
                                    </div>
                                    <div className="flex-col gap-2">
                                        <label style={{ fontSize: "0.9rem", fontWeight: "700", opacity: 0.7 }}>Corporate Email</label>
                                        <input type="email" placeholder="john@company.com" required style={{ padding: "1.2rem", borderRadius: "12px", border: "1px solid var(--border-color)", background: "var(--background-color)", outline: "none" }} />
                                    </div>
                                </div>

                                <div className="flex-col gap-2">
                                    <label style={{ fontSize: "0.9rem", fontWeight: "700", opacity: 0.7 }}>Region / Market</label>
                                    <select style={{ padding: "1.2rem", borderRadius: "12px", border: "1px solid var(--border-color)", background: "var(--background-color)", outline: "none" }}>
                                        <option>Middle East (UAE)</option>
                                        <option>East Africa (Rwanda)</option>
                                        <option>Asia (China)</option>
                                        <option>Europe / Other</option>
                                    </select>
                                </div>

                                <div className="flex-col gap-2">
                                    <label style={{ fontSize: "0.9rem", fontWeight: "700", opacity: 0.7 }}>How can we help?</label>
                                    <textarea rows={6} placeholder="Describe your sourcing needs or supply chain issue..." required style={{ padding: "1.2rem", borderRadius: "12px", border: "1px solid var(--border-color)", background: "var(--background-color)", outline: "none", resize: "none" }}></textarea>
                                </div>

                                <button type="submit" disabled={submitting} className="btn btn-primary" style={{ padding: "1.5rem", borderRadius: "14px", fontWeight: "900", fontSize: "1.1rem" }}>
                                    {submitting ? "Transmitting..." : "Send Global Inquiry"}
                                </button>
                                <p style={{ textAlign: "center", fontSize: "0.85rem", color: "var(--text-light)" }}>
                                    By submitting, you agree to our privacy policy regarding corporate data processing.
                                </p>
                            </form>
                        )}
                    </div>
                </div>

                {/* Global Offices Map Placeholder */}
                <div style={{ background: "var(--surface-color)", padding: "6rem", borderRadius: "48px", border: "1px solid var(--border-color)", textAlign: "center" }}>
                    <h2 style={{ fontSize: "2.5rem", fontWeight: "900", marginBottom: "4rem" }}>Global Offices</h2>
                    <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "4rem" }}>
                        {[
                            { city: "Dubai Hub", addr: "Level 15, Emirates Towers, Sheikh Zayed Rd", code: "+971 4 000 0000" },
                            { city: "Kigali Hub", addr: "Kigali Heights, Kimihurura, KGI 250", code: "+250 788 123 456" },
                            { city: "Guangzhou Hub", addr: "IFC Towers, Zhujiang New Town, No. 5", code: "+86 20 1234 5678" }
                        ].map((office, i) => (
                            <div key={i}>
                                <h4 style={{ fontSize: "1.4rem", fontWeight: "900", marginBottom: "1rem" }}>{office.city}</h4>
                                <p style={{ color: "var(--text-light)", marginBottom: "0.5rem", lineHeight: "1.6" }}>{office.addr}</p>
                                <p style={{ fontWeight: "700", color: "var(--primary-color)" }}>{office.code}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
            <style jsx>{`
                .contact-card:hover { border-color: var(--primary-color); transform: translateY(-5px); box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
            `}</style>
        </div>
    );
}
