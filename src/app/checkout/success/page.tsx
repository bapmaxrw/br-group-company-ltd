"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useApp } from "@/context/AppContext";

export default function CheckoutSuccess() {
    const { products, formatPrice } = useApp();
    const searchParams = useSearchParams();

    // Retrieve order details from URL (simulated)
    const productId = searchParams.get("productId");
    const qty = Number(searchParams.get("qty") || 1);
    const hasInspection = searchParams.get("inspection") === "true";

    const product = products.find(p => p.id === Number(productId)) || products[0];
    const inspectionFee = product.category === "Machinery" ? 250 : 50;
    const total = (product.price * qty) + (hasInspection ? inspectionFee : 0);

    return (
        <div className="page" style={{ background: "var(--background-color)", minHeight: "100vh", color: "var(--text-main)" }}>
            <Header />

            <main className="container flex justify-center py-4" style={{ padding: "5rem 0" }}>
                <div style={{ maxWidth: "600px", background: "var(--surface-color)", padding: "4rem", borderRadius: "24px", textAlign: "center", boxShadow: "var(--shadow-premium)", border: "1px solid var(--border-color)" }}>
                    <div style={{ width: "100px", height: "100px", background: "rgba(0,179,65,0.1)", color: "#00b341", borderRadius: "50%", margin: "0 auto 2rem", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "4rem" }}>
                        ✓
                    </div>
                    <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Payment Successful!</h1>
                    <p style={{ color: "var(--text-light)", fontSize: "1.1rem", marginBottom: "2.5rem", lineHeight: "1.6" }}>
                        Your payment of <strong>{formatPrice(total)}</strong> has been processed and sent to the following recipient:
                    </p>

                    <div style={{ background: "rgba(0,0,0,0.02)", padding: "2rem", borderRadius: "16px", border: "1px solid var(--border-color)", textAlign: "left", marginBottom: "3rem" }}>
                        <h3 style={{ fontSize: "1.1rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--border-color)", paddingBottom: "1rem" }}>Official Payment Receipt</h3>

                        <div className="flex justify-between mb-3">
                            <span style={{ color: "var(--text-light)" }}>Recipient Name:</span>
                            <span style={{ fontWeight: "700" }}>{product.sellerName}</span>
                        </div>

                        {/* Highlighting Country Code as requested */}
                        <div className="flex justify-between mb-3">
                            <span style={{ color: "var(--text-light)" }}>Recipient Country Code:</span>
                            <span style={{ fontWeight: "800", color: "var(--primary-color)", fontSize: "1.2rem", background: "rgba(230, 30, 42, 0.05)", padding: "2px 8px", borderRadius: "4px" }}>
                                {product.sellerPhone.split(' ')[0]}
                            </span>
                        </div>

                        <div className="flex justify-between mb-3">
                            <span style={{ color: "var(--text-light)" }}>Phone Number (MoMo):</span>
                            <span style={{ fontWeight: "700" }}>{product.sellerPhone.split(' ').slice(1).join(' ')}</span>
                        </div>

                        {hasInspection && (
                            <div className="flex justify-between mb-3">
                                <span style={{ color: "var(--text-light)" }}>Inspection Service:</span>
                                <span style={{ fontWeight: "700", color: "#0074D9" }}>Applied (+{formatPrice(inspectionFee)})</span>
                            </div>
                        )}

                        <div className="flex justify-between mb-3" style={{ borderTop: "1px solid var(--border-color)", paddingTop: "1rem", marginTop: "1rem" }}>
                            <span style={{ color: "var(--text-light)" }}>Total Transferred:</span>
                            <span style={{ fontWeight: "800", fontSize: "1.2rem" }}>{formatPrice(total)}</span>
                        </div>

                        <div className="flex justify-between mb-2">
                            <span style={{ color: "var(--text-light)" }}>Transaction ID:</span>
                            <span style={{ fontFamily: "monospace", fontSize: "0.9rem" }}>#BR-{Math.floor(Math.random() * 999999)}</span>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <Link href="/buyer/dashboard" className="btn btn-primary" style={{ flex: 1, padding: "1.25rem", fontWeight: "700" }}>Track Shipment</Link>
                        <Link href="/products" className="btn" style={{ flex: 1, padding: "1.25rem", border: "1px solid var(--border-color)", color: "inherit" }}>Sourcing Hub</Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
