"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useApp } from "@/context/AppContext";

export default function RFQ() {
    const { translations, addRFQ, user } = useApp();
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        qty: "",
        unit: "Pieces",
        desc: "",
        urgent: false
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);

        const newRFQ = {
            id: Date.now(),
            productName: formData.name,
            category: "General",
            quantity: Number(formData.qty),
            unit: formData.unit,
            description: formData.desc,
            buyerId: user?.id || "anonymous",
            buyerName: user?.name || "Anonymous Sourcing",
            isUrgent: formData.urgent,
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        };

        // Simulate global network transmission
        setTimeout(() => {
            addRFQ(newRFQ);
            setSubmitting(false);
            setSubmitted(true);
        }, 1500);
    };

    return (
        <div className="page" style={{ background: "var(--background-color)", minHeight: "100vh" }}>
            <Header />

            <main className="container py-8">
                <div style={{ maxWidth: "1000px", margin: "0 auto" }}>

                    {/* High-Impact RFQ Header */}
                    <section style={{
                        background: "linear-gradient(135deg, #001f3f 0%, #003366 100%)",
                        padding: "6rem 4rem",
                        borderRadius: "40px",
                        color: "white",
                        marginBottom: "4rem",
                        textAlign: "center",
                        position: "relative",
                        overflow: "hidden",
                        boxShadow: "0 30px 60px rgba(0,0,0,0.15)"
                    }}>
                        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')", opacity: 0.1 }}></div>
                        <div style={{ position: "relative", zIndex: 1 }}>
                            <span style={{ background: "var(--primary-color)", color: "white", padding: "8px 24px", borderRadius: "100px", fontSize: "0.85rem", fontWeight: "900", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "2rem", display: "inline-block" }}>Sourcing Engine</span>
                            <h1 style={{ fontSize: "4.5rem", fontWeight: "900", letterSpacing: "-3px", lineHeight: "1", marginBottom: "2rem", color: "white" }}>Broadcast Your Need.</h1>
                            <p style={{ fontSize: "1.4rem", opacity: "0.8", maxWidth: "700px", margin: "0 auto", lineHeight: "1.6" }}>
                                Connect directly with the world's largest network of verified manufacturers. Get competitive bidding for your custom industrial requirements.
                            </p>
                        </div>
                    </section>

                    {!submitted ? (
                        <div style={{ background: "white", padding: "5rem", borderRadius: "40px", border: "1px solid var(--border-color)", boxShadow: "var(--shadow-premium)" }} className="animate-up">
                            <form onSubmit={handleSubmit} className="flex-col gap-10">
                                <div className="grid" style={{ gridTemplateColumns: "1.5fr 1fr", gap: "3rem" }}>
                                    <div className="flex-col gap-3">
                                        <label style={{ fontSize: "1rem", fontWeight: "800", color: "var(--text-main)" }}>What are you looking for?</label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="e.g. 5000mAh Battery Cells or Custom Textile Yarn"
                                            style={{ width: "100%", padding: "1.5rem", borderRadius: "16px", border: "1px solid var(--border-color)", background: "#f8f9fa", fontSize: "1.1rem", outline: "none" }}
                                            required
                                        />
                                        <p style={{ fontSize: "0.85rem", color: "var(--text-light)" }}>Be specific with material and technical types.</p>
                                    </div>
                                    <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                                        <div className="flex-col gap-3">
                                            <label style={{ fontSize: "1rem", fontWeight: "800" }}>Volume</label>
                                            <input
                                                type="number"
                                                value={formData.qty}
                                                onChange={(e) => setFormData({ ...formData, qty: e.target.value })}
                                                placeholder="1000"
                                                style={{ width: "100%", padding: "1.5rem", borderRadius: "16px", border: "1px solid var(--border-color)", background: "#f8f9fa", fontSize: "1.1rem", outline: "none" }}
                                                required
                                            />
                                        </div>
                                        <div className="flex-col gap-3">
                                            <label style={{ fontSize: "1rem", fontWeight: "800" }}>Unit</label>
                                            <select
                                                value={formData.unit}
                                                onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                                                style={{ width: "100%", padding: "1.5rem", borderRadius: "16px", border: "1px solid var(--border-color)", background: "#f8f9fa", fontSize: "1.1rem", outline: "none", fontWeight: "700" }}
                                            >
                                                <option>Pieces</option>
                                                <option>Units</option>
                                                <option>Tons</option>
                                                <option>Kilograms</option>
                                                <option>Sets</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-col gap-3">
                                    <label style={{ fontSize: "1rem", fontWeight: "800" }}>In-Depth Technical Specifications</label>
                                    <textarea
                                        value={formData.desc}
                                        onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
                                        placeholder="Outline dimensions, tolerances, certifications (ISO/CE), and preferred shipment terms (FOB/CIF)..."
                                        style={{ width: "100%", padding: "1.5rem", borderRadius: "16px", border: "1px solid var(--border-color)", background: "#f8f9fa", height: "220px", fontSize: "1.1rem", outline: "none", lineHeight: "1.6", resize: "none" }}
                                        required
                                    ></textarea>
                                </div>

                                <div style={{ border: "2px dashed var(--border-color)", padding: "3.5rem", borderRadius: "24px", textAlign: "center", background: "rgba(0,0,0,0.01)" }}>
                                    <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>📎</div>
                                    <h4 style={{ fontWeight: "800", marginBottom: "0.5rem" }}>Attach Blueprints or Reference Media</h4>
                                    <p style={{ fontSize: "0.9rem", color: "var(--text-light)", marginBottom: "1.5rem" }}>Supports PDF, JPG, PNG, and DWG (Max 10MB)</p>
                                    <button type="button" className="btn" style={{ background: "white", border: "1px solid var(--border-color)", borderRadius: "12px", padding: "0.75rem 2rem" }}>Upload Assets</button>
                                </div>

                                <div className="flex items-center gap-4" style={{ background: "rgba(255,106,0,0.05)", padding: "1.5rem", borderRadius: "16px", border: "1px solid var(--primary-color)" }}>
                                    <input
                                        type="checkbox"
                                        id="urgent"
                                        checked={formData.urgent}
                                        onChange={(e) => setFormData({ ...formData, urgent: e.target.checked })}
                                        style={{ width: "24px", height: "24px", cursor: "pointer" }}
                                    />
                                    <label htmlFor="urgent" style={{ fontWeight: "800", cursor: "pointer", fontSize: "1.1rem", color: "var(--primary-color)" }}>URGENT: Expedite my request to Global Priority Hubs</label>
                                </div>

                                <button type="submit" disabled={submitting} className="btn btn-primary" style={{ padding: "1.75rem", fontSize: "1.3rem", fontWeight: "900", borderRadius: "20px", boxShadow: "0 20px 40px rgba(255,106,0,0.2)" }}>
                                    {submitting ? "Broadcasting to Global Network..." : "Launch Sourcing Request"}
                                </button>
                            </form>
                        </div>
                    ) : (
                        <div style={{ background: "white", padding: "7rem 4rem", borderRadius: "40px", border: "1px solid var(--border-color)", textAlign: "center", boxShadow: "var(--shadow-premium)" }} className="animate-pop">
                            <div style={{ width: "120px", height: "120px", background: "#00b341", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "4rem", color: "white", margin: "0 auto 3rem", boxShadow: "0 15px 30px rgba(0,179,65,0.3)" }}>✓</div>
                            <h2 style={{ fontSize: "3.5rem", fontWeight: "900", letterSpacing: "-2px", marginBottom: "1.5rem" }}>Broadcast Successful.</h2>
                            <p style={{ color: "var(--text-light)", fontSize: "1.3rem", maxWidth: "600px", margin: "0 auto 4rem", lineHeight: "1.6" }}>
                                Your request has been transmitted to our manufacturing nodes in China, UAE, and East Africa. Expect the first quotations in your workspace within 24 hours.
                            </p>
                            <div className="flex gap-4 justify-center">
                                <button onClick={() => setSubmitted(false)} className="btn" style={{ background: "white", border: "1px solid var(--border-color)", padding: "1.25rem 3rem", borderRadius: "16px", fontWeight: "800" }}>Manage RFQs</button>
                                <button className="btn btn-primary" style={{ padding: "1.25rem 3.5rem", borderRadius: "16px", fontWeight: "900" }}>Open Support Chat</button>
                            </div>
                        </div>
                    )}

                    {/* Trust Indicators */}
                    <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", marginTop: "6rem", marginBottom: "8rem" }}>
                        {[
                            { icon: "📡", title: "Instant Reach", desc: "Thousands of verified factories notified within seconds." },
                            { icon: "⚖️", title: "Auction Effect", desc: "Suppliers bid against each other to give you the lowest possible price." },
                            { icon: "⚡", title: "Priority Support", desc: "Our sourcing agents help refine your specs for the best results." }
                        ].map((item, i) => (
                            <div key={i} style={{ textAlign: "center", padding: "3.5rem", background: "white", borderRadius: "32px", border: "1px solid var(--border-color)", transition: "all 0.3s" }} className="feature-card">
                                <div style={{ fontSize: "3rem", marginBottom: "1.5rem" }}>{item.icon}</div>
                                <h4 style={{ fontSize: "1.4rem", fontWeight: "900", marginBottom: "1rem" }}>{item.title}</h4>
                                <p style={{ fontSize: "1rem", color: "var(--text-light)", lineHeight: "1.6" }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
            <style jsx>{`
                .animate-up { animation: fadeInUp 0.8s cubic-bezier(0.165, 0.84, 0.44, 1); }
                .animate-pop { animation: popIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
                @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes popIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
                .feature-card:hover { transform: translateY(-10px); border-color: var(--primary-color); box-shadow: var(--shadow-premium); }
            `}</style>
        </div>
    );
}
