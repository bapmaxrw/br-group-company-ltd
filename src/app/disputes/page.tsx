"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useApp } from "@/context/AppContext";

export default function Disputes() {
    const { translations } = useApp();
    const [orderId, setOrderId] = useState("");
    const [reason, setReason] = useState("");
    const [description, setDescription] = useState("");
    const [evidence, setEvidence] = useState<File | null>(null);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="page" style={{ background: "var(--background-color)", minHeight: "100vh", color: "var(--text-main)" }}>
            <Header />

            <main className="container py-4 flex justify-center">
                <div style={{ maxWidth: "800px", width: "100%" }}>

                    {/* Header Banner */}
                    <div style={{ background: "linear-gradient(135deg, #FF4136 0%, #85144b 100%)", padding: "4rem 3rem", borderRadius: "24px", color: "white", marginBottom: "2rem", textAlign: "center", boxShadow: "0 20px 40px rgba(255,65,54,0.15)" }}>
                        <div style={{ background: "rgba(255,255,255,0.2)", display: "inline-block", padding: "8px 16px", borderRadius: "12px", marginBottom: "1rem" }}>
                            ⚖️ BR Group Resolution Center
                        </div>
                        <h1 style={{ fontSize: "3rem", marginBottom: "1rem", color: "white" }}>{translations.dispute}</h1>
                        <p style={{ fontSize: "1.2rem", opacity: "0.9", maxWidth: "600px", margin: "0 auto" }}>
                            Professional arbitration for international trade disputes. We protect your funds and ensure fair resolutions.
                        </p>
                    </div>

                    {!submitted ? (
                        <div style={{ background: "var(--surface-color)", padding: "3rem", borderRadius: "24px", border: "1px solid var(--border-color)", boxShadow: "var(--shadow-premium)" }}>
                            <form onSubmit={handleSubmit} className="flex-col gap-8">
                                <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                                    <div>
                                        <label style={{ display: "block", marginBottom: "0.75rem", fontWeight: "700" }}>{translations.orderId}</label>
                                        <input
                                            type="text"
                                            value={orderId}
                                            onChange={(e) => setOrderId(e.target.value)}
                                            placeholder="e.g. BR-99210"
                                            style={{ width: "100%", padding: "1rem", borderRadius: "10px", border: "1px solid var(--border-color)", background: "transparent", color: "inherit" }}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label style={{ display: "block", marginBottom: "0.75rem", fontWeight: "700" }}>{translations.reason}</label>
                                        <select
                                            value={reason}
                                            onChange={(e) => setReason(e.target.value)}
                                            style={{ width: "100%", padding: "1rem", borderRadius: "10px", border: "1px solid var(--border-color)", background: "var(--surface-color)", color: "inherit" }}
                                            required
                                        >
                                            <option value="">Select a reason</option>
                                            <option value="quality">Product quality not as described</option>
                                            <option value="delivery">Order not delivered within deadline</option>
                                            <option value="wrong">Wrong product / specifications received</option>
                                            <option value="damage">Product arrived damaged / non-functional</option>
                                            <option value="missing">Part of the order is missing</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label style={{ display: "block", marginBottom: "0.75rem", fontWeight: "700" }}>{translations.describe}</label>
                                    <textarea
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        placeholder="Please provide a detailed timeline of the issue and your communication with the seller..."
                                        style={{ width: "100%", padding: "1rem", borderRadius: "10px", border: "1px solid var(--border-color)", background: "transparent", color: "inherit", minHeight: "200px", fontFamily: "inherit" }}
                                        required
                                    ></textarea>
                                </div>

                                {/* Evidence Upload Segment */}
                                <div style={{ background: "rgba(0,0,0,0.02)", padding: "2rem", borderRadius: "15px", border: "2px dashed var(--border-color)", textAlign: "center" }}>
                                    <p style={{ fontWeight: "700", marginBottom: "0.5rem" }}>📎 Upload Photographic Evidence</p>
                                    <p style={{ fontSize: "0.85rem", color: "var(--text-light)", marginBottom: "1.5rem" }}>Upload photos of damaged products, labels, or shipping documents.</p>
                                    <input
                                        type="file"
                                        onChange={(e) => setEvidence(e.target.files ? e.target.files[0] : null)}
                                        style={{ fontSize: "0.9rem" }}
                                    />
                                    {evidence && <p style={{ marginTop: "10px", color: "#00b341", fontWeight: "700" }}>✓ {evidence.name} selected</p>}
                                </div>

                                <div style={{ padding: "2rem", background: "rgba(0,116,217,0.05)", borderRadius: "16px", border: "1px solid rgba(0,116,217,0.2)" }}>
                                    <div className="flex gap-4 items-start">
                                        <span style={{ fontSize: "1.5rem" }}>🛡️</span>
                                        <div>
                                            <p style={{ fontWeight: "700", color: "#0074D9", marginBottom: "0.25rem" }}>Trade Assurance Protection Active</p>
                                            <p style={{ fontSize: "0.9rem", color: "var(--text-light)", lineHeight: "1.5" }}>
                                                Because this order was made via BR Group Secure Settlement, your payment is held in escrow.
                                                The seller cannot withdraw funds until this dispute is resolved or closed.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary" style={{ padding: "1.5rem", fontSize: "1.2rem", fontWeight: "800", background: "#FF4136", borderColor: "#FF4136" }}>
                                    Submit Official Dispute Claim
                                </button>
                            </form>
                        </div>
                    ) : (
                        <div style={{ background: "var(--surface-color)", padding: "5rem 3rem", borderRadius: "24px", border: "1px solid var(--border-color)", textAlign: "center", animation: "slideUp 0.6s ease-out" }}>
                            <div style={{ width: "120px", height: "120px", background: "#fdf2f2", color: "#FF4136", borderRadius: "50%", margin: "0 auto 2rem", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "4rem" }}>
                                📑
                            </div>
                            <h2 style={{ fontSize: "2.5rem", marginBottom: "1.5rem" }}>Dispute #BR-{Math.floor(Math.random() * 99999)} Opened</h2>
                            <p style={{ color: "var(--text-light)", fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto 3rem", lineHeight: "1.6" }}>
                                Your claim for Order <strong>#{orderId}</strong> has been logged in our system. A senior arbitration officer will review your evidence within 24 hours.
                            </p>

                            <div style={{ background: "var(--background-color)", padding: "2.5rem", borderRadius: "16px", textAlign: "left", display: "inline-block", maxWidth: "500px" }}>
                                <h4 style={{ marginBottom: "1.5rem", borderBottom: "1px solid var(--border-color)", paddingBottom: "0.5rem" }}>Next Arbitration Steps</h4>
                                <div className="flex-col gap-4">
                                    <div className="flex gap-3">
                                        <div style={{ color: "#FF4136", fontWeight: "800" }}>1.</div>
                                        <p style={{ fontSize: "0.95rem" }}>Seller is notified and given 48 hours to counter-evidence.</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <div style={{ color: "#FF4136", fontWeight: "800" }}>2.</div>
                                        <p style={{ fontSize: "0.95rem" }}>BR Group verifies shipping logs and quality inspection reports.</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <div style={{ color: "#FF4136", fontWeight: "800" }}>3.</div>
                                        <p style={{ fontSize: "0.95rem" }}>Mediator proposes a partial or full refund based on findings.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4 justify-center mt-12">
                                <button className="btn btn-primary" style={{ padding: "1.25rem 2.5rem" }}>View Dispute Status</button>
                                <button onClick={() => setSubmitted(false)} className="btn" style={{ padding: "1.25rem 2.5rem", border: "1px solid var(--border-color)", color: "inherit" }}>Submit More Info</button>
                            </div>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
            <style jsx>{`
                @keyframes slideUp {
                    from { transform: translateY(30px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
            `}</style>
        </div>
    );
}
