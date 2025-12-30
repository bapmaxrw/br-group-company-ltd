"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useApp } from "@/context/AppContext";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

export default function SubmitQuote() {
    const { rfqs, formatPrice } = useApp();
    const params = useParams();
    const router = useRouter();
    const rfq = rfqs.find(r => r.id === Number(params.id)) || rfqs[0];

    const [quote, setQuote] = useState({
        pricePerUnit: "",
        leadTime: "15-20 days",
        shippingMethod: "Sea Freight",
        paymentTerms: "30% Deposit, 70% before shipment",
        notes: ""
    });

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            router.push("/supplier/dashboard");
        }, 3000);
    };

    return (
        <div className="page" style={{ background: "var(--background-color)", minHeight: "100vh" }}>
            <Header />

            <main className="container py-4">
                <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                    <Link href="/supplier/dashboard" style={{ display: "inline-block", marginBottom: "1.5rem", color: "var(--text-light)" }}>← Back to RFQ Market</Link>

                    {!submitted ? (
                        <div style={{ background: "var(--surface-color)", padding: "3rem", borderRadius: "24px", border: "1px solid var(--border-color)", boxShadow: "var(--shadow-premium)" }}>
                            <div style={{ borderBottom: "1px solid var(--border-color)", marginBottom: "2.5rem", paddingBottom: "1.5rem" }}>
                                <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>Submit Quotation</h1>
                                <p style={{ color: "var(--text-light)" }}>You are quoting for: <strong>{rfq.productName}</strong> ({rfq.quantity} {rfq.unit})</p>
                            </div>

                            <form onSubmit={handleSubmit} className="flex-col gap-6">
                                <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                                    <div>
                                        <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "700" }}>Price per {rfq.unit} (USD)</label>
                                        <input
                                            type="number"
                                            value={quote.pricePerUnit}
                                            onChange={(e) => setQuote({ ...quote, pricePerUnit: e.target.value })}
                                            placeholder="0.00"
                                            style={{ width: "100%", padding: "1rem", borderRadius: "10px", border: "2px solid var(--primary-color)", background: "transparent", color: "inherit", fontSize: "1.2rem", fontWeight: "700" }}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "700" }}>Est. Lead Time</label>
                                        <input
                                            type="text"
                                            value={quote.leadTime}
                                            onChange={(e) => setQuote({ ...quote, leadTime: e.target.value })}
                                            placeholder="e.g. 15 days"
                                            style={{ width: "100%", padding: "1rem", borderRadius: "10px", border: "1px solid var(--border-color)", background: "transparent", color: "inherit" }}
                                        />
                                    </div>
                                </div>

                                <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                                    <div>
                                        <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "700" }}>Shipping Method</label>
                                        <select
                                            value={quote.shippingMethod}
                                            onChange={(e) => setQuote({ ...quote, shippingMethod: e.target.value })}
                                            style={{ width: "100%", padding: "1rem", borderRadius: "10px", border: "1px solid var(--border-color)", background: "var(--surface-color)", color: "inherit" }}
                                        >
                                            <option>Sea Freight</option>
                                            <option>Air Freight</option>
                                            <option>BR Express (Land)</option>
                                            <option>Buyer Pick-up</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "700" }}>Payment Terms</label>
                                        <input
                                            type="text"
                                            value={quote.paymentTerms}
                                            onChange={(e) => setQuote({ ...quote, paymentTerms: e.target.value })}
                                            style={{ width: "100%", padding: "1rem", borderRadius: "10px", border: "1px solid var(--border-color)", background: "transparent", color: "inherit" }}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "700" }}>Message to Buyer</label>
                                    <textarea
                                        value={quote.notes}
                                        onChange={(e) => setQuote({ ...quote, notes: e.target.value })}
                                        placeholder="Explain why your offer is the best (quality certifications, previous work, etc.)"
                                        style={{ width: "100%", padding: "1rem", borderRadius: "10px", border: "1px solid var(--border-color)", background: "transparent", color: "inherit", height: "150px", fontFamily: "inherit" }}
                                    ></textarea>
                                </div>

                                <div style={{ background: "rgba(0,187,65,0.05)", padding: "1.5rem", borderRadius: "12px", border: "1px solid #00b341" }}>
                                    <p style={{ fontSize: "0.85rem", color: "#2e7d32", lineHeight: "1.5" }}>
                                        🛡️ <strong>Safety Note:</strong> Your quote will be protected by BR Group's Trade Assurance. Do not share external payment links with the buyer.
                                    </p>
                                </div>

                                <button type="submit" className="btn btn-primary" style={{ padding: "1.5rem", fontSize: "1.2rem", fontWeight: "800" }}>
                                    Submit Official Quotation
                                </button>
                            </form>
                        </div>
                    ) : (
                        <div style={{ textAlign: "center", padding: "5rem", background: "var(--surface-color)", borderRadius: "24px", border: "1px solid var(--border-color)", boxShadow: "var(--shadow-premium)" }}>
                            <div style={{ fontSize: "5rem", marginBottom: "1.5rem" }}>📄✅</div>
                            <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Quote Sent!</h2>
                            <p style={{ color: "var(--text-light)", fontSize: "1.1rem" }}>
                                Your quotation has been delivered to <strong>{rfq.buyerName}</strong>.
                                You will be redirected to your dashboard in a few seconds...
                            </p>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
