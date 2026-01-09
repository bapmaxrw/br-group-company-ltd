"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useApp } from "@/context/AppContext";

import { Suspense } from "react";

function CheckoutContent() {
    const { user, formatPrice } = useApp();
    const searchParams = useSearchParams();
    const router = useRouter();
    const [isProcessing, setIsProcessing] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState("card");
    const [product, setProduct] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    const productId = searchParams.get("productId");
    const qty = Number(searchParams.get("qty") || 1);
    const hasInspection = searchParams.get("inspection") === "true";

    useEffect(() => {
        if (!user) {
            alert("Please login to proceed to checkout");
            router.push("/login");
            return;
        }

        const fetchProduct = async () => {
            if (!productId) return;
            try {
                const res = await fetch(`/api/products/${productId}`);
                const data = await res.json();
                setProduct(data);
            } catch (error) {
                console.error("Checkout fetch failed:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [user, router, productId]);

    if (loading || !product) {
        return (
            <div className="page" style={{ background: "var(--background-color)", minHeight: "100vh" }}>
                <Header />
                <main className="container py-20 text-center">
                    <div className="spinner" style={{ border: "4px solid rgba(0,0,0,0.1)", borderTop: "4px solid var(--primary-color)", borderRadius: "50%", width: "40px", height: "40px", animation: "spin 1s linear infinite", margin: "0 auto 1rem" }}></div>
                    <p>Fetching transaction details...</p>
                </main>
            </div>
        );
    }

    const inspectionFee = product.category === "Machinery" ? 250 : 50;
    const totalAmount = (product.price * qty) + (hasInspection ? inspectionFee : 0);
    const supplierName = product.supplier?.company || product.supplier?.name || "Verified Supplier";

    const handleConfirmPayment = () => {
        setIsProcessing(true);
        // Simulate automatic payment logic
        setTimeout(() => {
            setIsProcessing(false);
            alert(`Payment of ${formatPrice(totalAmount)} using ${paymentMethod} has been sent successfully to ${supplierName}!`);
            router.push(`/checkout/success?productId=${product._id}&qty=${qty}&inspection=${hasInspection}`);
        }, 2000);
    };

    const isEmoji = (str: string) => str && str.length <= 4 && /\p{Extended_Pictographic}/u.test(str);

    return (
        <div className="page" style={{ background: "var(--background-color)", minHeight: "100vh", color: "var(--text-main)" }}>
            <Header />

            <main className="container py-4">
                <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>Finalize Sourcing Payment</h1>

                <div className="flex gap-8" style={{ flexWrap: "wrap" }}>
                    <div style={{ flex: "2", minWidth: "350px" }}>
                        <div style={{ background: "var(--surface-color)", padding: "2.5rem", borderRadius: "16px", border: "1px solid var(--border-color)", boxShadow: "var(--shadow-premium)" }}>
                            <h2 style={{ marginBottom: "1.5rem", fontSize: "1.5rem" }}>1. Select Payment Method</h2>

                            <div className="grid mb-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1rem" }}>
                                {[
                                    { id: "card", label: "Debit/Credit Card", icon: "💳" },
                                    { id: "momo", label: "Mobile Money", icon: "📱" },
                                    { id: "bank", label: "Bank Wire (SWIFT)", icon: "🏦" },
                                    { id: "crypto", label: "Crypto (USDT)", icon: "₿" }
                                ].map(method => (
                                    <div
                                        key={method.id}
                                        onClick={() => setPaymentMethod(method.id)}
                                        style={{
                                            padding: "1.5rem",
                                            borderRadius: "12px",
                                            border: `2px solid ${paymentMethod === method.id ? "var(--primary-color)" : "var(--border-color)"}`,
                                            background: paymentMethod === method.id ? "rgba(230, 30, 42, 0.05)" : "transparent",
                                            textAlign: "center",
                                            cursor: "pointer",
                                            transition: "all 0.2s ease"
                                        }}
                                    >
                                        <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{method.icon}</div>
                                        <p style={{ fontWeight: "700", fontSize: "0.9rem" }}>{method.label}</p>
                                    </div>
                                ))}
                            </div>

                            <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "2rem", marginTop: "2rem" }}>
                                <h2 style={{ marginBottom: "1.5rem", fontSize: "1.5rem" }}>2. Payment Recipient (Direct Settlement)</h2>
                                <div style={{ background: "rgba(0,179,65,0.05)", padding: "1.5rem", borderRadius: "12px", border: "1px solid #00b341", marginBottom: "2rem" }}>
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 style={{ color: "#00b341", margin: 0 }}>Verified Seller Logistics</h3>
                                        <span style={{ fontSize: "0.75rem", background: "#00b341", color: "white", padding: "2px 8px", borderRadius: "4px", fontWeight: "700" }}>🛡️ Trade Assurance</span>
                                    </div>
                                    <div className="flex-col gap-3">
                                        <div className="flex justify-between">
                                            <span style={{ color: "var(--text-light)" }}>Recipient Business:</span>
                                            <span style={{ fontWeight: "700" }}>{supplierName}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span style={{ color: "var(--text-light)" }}>Contact Registry:</span>
                                            <span style={{ fontWeight: "700", color: "var(--primary-color)" }}>{product.supplier?.phone || "Verified"}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span style={{ color: "var(--text-light)" }}>Bank / IBAN Info:</span>
                                            <span style={{ fontWeight: "700", textAlign: "right" }}>{product.supplier?.bankInfo || "Registry: BR-GROUP-ESCROW"}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={{ background: "var(--background-color)", padding: "2rem", borderRadius: "12px", marginBottom: "2rem" }}>
                                <h3 style={{ marginBottom: "1.5rem" }}>{paymentMethod === "card" ? "Card Information" : paymentMethod === "momo" ? "Mobile Wallet Details" : "Account Verification"}</h3>
                                {paymentMethod === "card" ? (
                                    <div className="flex-col gap-4">
                                        <input type="text" placeholder="Cardholder Name" style={{ width: "100%", padding: "1rem", borderRadius: "8px", border: "1px solid var(--border-color)", background: "var(--surface-color)", color: "inherit" }} />
                                        <input type="text" placeholder="Card Number" style={{ width: "100%", padding: "1rem", borderRadius: "8px", border: "1px solid var(--border-color)", background: "var(--surface-color)", color: "inherit" }} />
                                        <div className="flex gap-4">
                                            <input type="text" placeholder="MM/YY" style={{ flex: 1, padding: "1rem", borderRadius: "8px", border: "1px solid var(--border-color)", background: "var(--surface-color)", color: "inherit" }} />
                                            <input type="text" placeholder="CVV" style={{ flex: 1, padding: "1rem", borderRadius: "8px", border: "1px solid var(--border-color)", background: "var(--surface-color)", color: "inherit" }} />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex-col gap-4">
                                        <input
                                            type="text"
                                            placeholder={paymentMethod === "momo" ? "Mobile Number" : paymentMethod === "bank" ? "Routing Number" : "Wallet Address"}
                                            style={{ width: "100%", padding: "1rem", borderRadius: "8px", border: "1px solid var(--border-color)", background: "var(--surface-color)", color: "inherit" }}
                                        />
                                        <p style={{ fontSize: "0.85rem", color: "var(--text-light)" }}>
                                            {paymentMethod === "momo" ? "Enter your registered number to receive a payment prompt." : "Transfers are processed within 24 hours."}
                                        </p>
                                    </div>
                                )}
                            </div>

                            <button
                                onClick={handleConfirmPayment}
                                disabled={isProcessing}
                                className="btn btn-primary"
                                style={{ width: "100%", padding: "1.5rem", fontSize: "1.2rem", fontWeight: "800", opacity: isProcessing ? 0.7 : 1, borderRadius: "12px", boxShadow: "0 10px 20px rgba(230, 30, 42, 0.2)" }}
                            >
                                {isProcessing ? "Processing Secure Transfer..." : `Pay ${formatPrice(totalAmount)} Now`}
                            </button>
                            <p style={{ textAlign: "center", marginTop: "1rem", fontSize: "0.85rem", color: "var(--text-light)" }}>
                                Your payment is held in escrow until the inspection is complete and delivery is tracked.
                            </p>
                        </div>
                    </div>

                    <div style={{ flex: "1", minWidth: "300px" }}>
                        <div style={{ background: "var(--surface-color)", padding: "2rem", borderRadius: "16px", border: "1px solid var(--border-color)", position: "sticky", top: "100px", boxShadow: "var(--shadow-premium)" }}>
                            <h2 style={{ fontSize: "1.25rem", marginBottom: "1.5rem" }}>Shipment Summary</h2>
                            <div className="flex gap-4 mb-4">
                                <div style={{ width: "80px", height: "80px", background: "rgba(0,0,0,0.05)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                                    {isEmoji(product.images?.[0] || product.image) ? <span style={{ fontSize: "3rem" }}>{product.images?.[0] || product.image}</span> : <img src={product.images?.[0] || product.image} style={{ width: "100%", height: "100%", objectFit: "cover" }} />}
                                </div>
                                <div style={{ flex: 1 }}>
                                    <p style={{ fontWeight: "700", fontSize: "1rem", margin: 0 }}>{product.name}</p>
                                    <p style={{ color: "var(--text-light)", fontSize: "0.85rem" }}>Unit Price: {formatPrice(product.price)}</p>
                                    <p style={{ fontSize: "0.85rem", fontWeight: "600" }}>Qty: {qty}</p>
                                </div>
                            </div>

                            <div style={{ background: "rgba(0,0,0,0.02)", padding: "1rem", borderRadius: "8px", marginBottom: "1.5rem" }}>
                                <div className="flex justify-between mb-1" style={{ fontSize: "0.9rem" }}>
                                    <span style={{ color: "var(--text-light)" }}>Stock:</span>
                                    <span>{product.location}</span>
                                </div>
                                <div className="flex justify-between" style={{ fontSize: "0.9rem" }}>
                                    <span style={{ color: "var(--text-light)" }}>Destination:</span>
                                    <span>{user?.name || "Global Member"}</span>
                                </div>
                            </div>

                            <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "1rem" }}>
                                <div className="flex justify-between mb-2">
                                    <span style={{ color: "var(--text-light)" }}>Goods Subtotal:</span>
                                    <span>{formatPrice(product.price * qty)}</span>
                                </div>
                                {hasInspection && (
                                    <div className="flex justify-between mb-2">
                                        <span style={{ color: "var(--text-light)" }}>Quality Inspection:</span>
                                        <span>{formatPrice(inspectionFee)}</span>
                                    </div>
                                )}
                                <div className="flex justify-between mb-4">
                                    <span style={{ color: "var(--text-light)" }}>Trade Assurance Fee:</span>
                                    <span style={{ color: "#00b341", fontWeight: "700" }}>FREE</span>
                                </div>
                                <div className="flex justify-between" style={{ fontWeight: "800", fontSize: "1.4rem", color: "var(--primary-color)", paddingTop: "1rem", borderTop: "2px solid var(--primary-color)" }}>
                                    <span>TOTAL:</span>
                                    <span>{formatPrice(totalAmount)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default function Checkout() {
    return (
        <Suspense fallback={<div>Loading checkout...</div>}>
            <CheckoutContent />
        </Suspense>
    );
}
