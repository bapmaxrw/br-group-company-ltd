"use client";

import Header from "@/components/Header";
import Link from "next/link";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function Tracking() {
    const searchParams = useSearchParams();
    const [trackingId, setTrackingId] = useState(searchParams.get("id") || "");
    const [status, setStatus] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    const handleTrack = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (!trackingId) return;

        setLoading(true);
        // Simulate global tracking API
        setTimeout(() => {
            setStatus({
                id: trackingId,
                currentStatus: "In Transit",
                currentLocation: "Entebbe International Hub (UG)",
                destination: "Kigali Logistics Center (RW)",
                history: [
                    { date: "Dec 30, 14:30", loc: "Entebbe Hub (UG)", msg: "Departed from sorting facility", icon: "🚀" },
                    { date: "Dec 29, 09:15", loc: "Dubai World Central (UAE)", msg: "Shipped via BR Global Air Freight", icon: "✈️" },
                    { date: "Dec 28, 16:40", loc: "Jebel Ali Port (UAE)", msg: "Picked up by logistics partner", icon: "🚛" },
                    { date: "Dec 28, 11:00", loc: "Supplier Warehouse", msg: "Package registered and labeled", icon: "📦" }
                ],
                estimatedDelivery: "Jan 03, 2025"
            });
            setLoading(false);
        }, 1500);
    };

    useEffect(() => {
        if (trackingId) handleTrack();
    }, []);

    return (
        <div className="page" style={{ background: "var(--background-color)", minHeight: "100vh" }}>
            <Header />

            <main className="container py-8 flex justify-center">
                <div style={{ maxWidth: "900px", width: "100%" }}>
                    {/* Premium Tracking Identity */}
                    <div style={{
                        background: "linear-gradient(135deg, #001f3f 0%, #003366 100%)",
                        padding: "6rem 4rem",
                        borderRadius: "32px",
                        color: "white",
                        marginBottom: "3rem",
                        textAlign: "center",
                        position: "relative",
                        overflow: "hidden",
                        boxShadow: "0 40px 80px rgba(0,31,63,0.3)"
                    }}>
                        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.05, background: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }}></div>
                        <h1 style={{ fontSize: "3.5rem", fontWeight: "900", marginBottom: "1.5rem", letterSpacing: "-2px", color: "white" }}>Real-Time Logistics</h1>
                        <p style={{ fontSize: "1.25rem", opacity: "0.8", maxWidth: "600px", margin: "0 auto 3rem", lineHeight: "1.6" }}>
                            Powered by BR Global Logistics Engine. Track your sea, air, and land freight deliveries anywhere.
                        </p>

                        <form onSubmit={handleTrack} style={{
                            maxWidth: "600px",
                            margin: "0 auto",
                            display: "flex",
                            gap: "0.5rem",
                            background: "rgba(255,255,255,0.1)",
                            padding: "10px",
                            borderRadius: "24px",
                            backdropFilter: "blur(20px)",
                            border: "1px solid rgba(255,255,255,0.2)"
                        }}>
                            <input
                                type="text"
                                value={trackingId}
                                onChange={(e) => setTrackingId(e.target.value.toUpperCase())}
                                placeholder="Enter Waybill or Order ID..."
                                style={{ flex: 1, border: "none", padding: "1.2rem 2rem", outline: "none", color: "white", fontSize: "1.1rem", background: "transparent" }}
                            />
                            <button type="submit" className="btn btn-primary" style={{ borderRadius: "18px", padding: "0 3rem", fontWeight: "800" }}>
                                {loading ? "Syncing..." : "Scan Tracker"}
                            </button>
                        </form>
                    </div>

                    {status ? (
                        <div className="status-container">
                            <div style={{ background: "var(--surface-color)", padding: "4rem", borderRadius: "32px", border: "1px solid var(--border-color)", boxShadow: "var(--shadow-premium)", animation: "fadeIn 0.6s ease" }}>
                                <div className="flex justify-between items-start mb-12 flex-wrap gap-6">
                                    <div>
                                        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.5rem" }}>
                                            <div style={{ width: "12px", height: "12px", background: "#00b341", borderRadius: "50%", boxShadow: "0 0 10px #00b341" }}></div>
                                            <h2 style={{ fontSize: "1.75rem", fontWeight: "900", margin: 0 }}>{status.currentStatus}</h2>
                                        </div>
                                        <p style={{ color: "var(--text-light)", fontSize: "1.1rem" }}>Waybill Ref: <strong>{status.id}</strong></p>
                                    </div>
                                    <div style={{ textAlign: "right", background: "rgba(0,116,217,0.05)", padding: "1.5rem 2.5rem", borderRadius: "20px", border: "1px solid rgba(0,116,217,0.1)" }}>
                                        <p style={{ fontSize: "0.85rem", color: "var(--text-light)", fontWeight: "800", textTransform: "uppercase", letterSpacing: "1px" }}>Estimated Deliver</p>
                                        <p style={{ fontSize: "1.5rem", fontWeight: "900", color: "#0074D9" }}>{status.estimatedDelivery}</p>
                                    </div>
                                </div>

                                {/* Tracking Progressive Bar */}
                                <div style={{ marginBottom: "6rem", position: "relative" }}>
                                    <div style={{ height: "6px", background: "rgba(0,0,0,0.05)", borderRadius: "10px", position: "absolute", top: "25px", left: "5%", right: "5%", zIndex: 0 }}></div>
                                    <div style={{ height: "6px", background: "#00b341", borderRadius: "10px", position: "absolute", top: "25px", left: "5%", width: "65%", zIndex: 1, transition: "width 1.5s cubic-bezier(0.165, 0.84, 0.44, 1)" }}></div>

                                    <div className="flex justify-between" style={{ position: "relative", zIndex: 2 }}>
                                        {[
                                            { label: "Booked", done: true, icon: "📝" },
                                            { label: "Factory Exit", done: true, icon: "🏭" },
                                            { label: "Global Transit", done: true, icon: "🚢" },
                                            { label: "Local Hub", done: true, icon: "🏢" },
                                            { label: "Doorstop", done: false, icon: "📍" }
                                        ].map((step, i) => (
                                            <div key={i} style={{ textAlign: "center", width: "100px" }}>
                                                <div style={{
                                                    width: "55px",
                                                    height: "55px",
                                                    borderRadius: "18px",
                                                    background: step.done ? "#00b341" : "white",
                                                    border: `4px solid ${step.done ? "#00b341" : "var(--border-color)"}`,
                                                    margin: "0 auto 15px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    color: step.done ? "white" : "var(--text-light)",
                                                    fontSize: "1.5rem",
                                                    boxShadow: step.done ? "0 10px 20px rgba(0,179,65,0.2)" : "none"
                                                }}>
                                                    {step.done ? "✓" : step.icon}
                                                </div>
                                                <p style={{ fontSize: "0.85rem", fontWeight: "800", color: step.done ? "var(--text-main)" : "var(--text-light)" }}>{step.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Detailed Chronology History */}
                                <div style={{ background: "rgba(0,0,0,0.02)", padding: "3rem", borderRadius: "24px", border: "1px solid var(--border-color)" }}>
                                    <h3 style={{ fontSize: "1.25rem", fontWeight: "900", marginBottom: "2.5rem" }}>Logistics Chronology</h3>
                                    <div className="flex flex-col gap-8">
                                        {status.history.map((h: any, i: number) => (
                                            <div key={i} className="flex gap-6 items-start">
                                                <div style={{
                                                    width: "48px",
                                                    height: "48px",
                                                    borderRadius: "12px",
                                                    background: i === 0 ? "var(--primary-color)" : "white",
                                                    color: i === 0 ? "white" : "var(--text-main)",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    fontSize: "1.2rem",
                                                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                                                    border: "1px solid var(--border-color)",
                                                    flexShrink: 0
                                                }}>
                                                    {h.icon}
                                                </div>
                                                <div style={{ flex: 1 }}>
                                                    <div className="flex justify-between items-baseline mb-1">
                                                        <p style={{ fontSize: "1.1rem", fontWeight: "800", color: i === 0 ? "var(--text-main)" : "var(--text-light)" }}>{h.loc}</p>
                                                        <p style={{ fontSize: "0.85rem", color: "var(--text-light)", fontWeight: "600" }}>{h.date}</p>
                                                    </div>
                                                    <p style={{ fontSize: "0.95rem", color: "var(--text-light)", lineHeight: "1.5" }}>{h.msg}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Help / Dispute CTA */}
                            <div style={{ marginTop: "3rem", display: "flex", gap: "2rem", alignItems: "center", background: "#FFF8F1", padding: "2.5rem", borderRadius: "24px", border: "1px solid #FFE6D0" }} className="dispute-box">
                                <div style={{ fontSize: "3rem" }}>🛡️</div>
                                <div style={{ flex: 1 }}>
                                    <h4 style={{ fontWeight: "900", color: "#854d0e", fontSize: "1.1rem", marginBottom: "0.25rem" }}>Order Delayed or Missing?</h4>
                                    <p style={{ fontSize: "0.95rem", color: "#a16207", lineHeight: "1.6" }}>
                                        Every delivery on BR Group is covered by Trade Assurance. If your shipment is delayed beyond the estimated window, you are entitled to a full refund.
                                    </p>
                                </div>
                                <Link href="/disputes" className="btn" style={{ background: "#854d0e", color: "white", padding: "1rem 2.5rem", borderRadius: "12px", fontWeight: "800" }}>Open Dispute Case</Link>
                            </div>
                        </div>
                    ) : loading ? (
                        <div style={{ textAlign: "center", padding: "10rem 0" }}>
                            <div className="spinner" style={{ border: "4px solid rgba(0,116,217,0.1)", borderTop: "4px solid #0074D9", borderRadius: "50%", width: "60px", height: "60px", animation: "spin 1s linear infinite", margin: "0 auto" }}></div>
                            <p style={{ marginTop: "2.5rem", color: "var(--text-light)", fontWeight: "600", fontSize: "1.1rem" }}>Accessing Global Logistics Nodes...</p>
                        </div>
                    ) : (
                        <div style={{ textAlign: "center", padding: "8rem 2rem", background: "var(--surface-color)", borderRadius: "32px", border: "1px solid var(--border-color)", boxShadow: "var(--shadow-premium)" }}>
                            <div style={{ fontSize: "5rem", marginBottom: "2rem", opacity: 0.2 }}></div>
                            <h2 style={{ fontSize: "1.75rem", marginBottom: "1rem", fontWeight: "800" }}>Awaiting Waybill ID</h2>
                            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", maxWidth: "400px", margin: "0 auto" }}>Enter your tracking identifier from your order confirmation to see live status updates.</p>
                        </div>
                    )}
                </div>
            </main>

            <Footer />

            <style jsx>{`
                @keyframes fadeIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
                .dispute-box:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(133,77,14,0.1); }
            `}</style>
        </div>
    );
}

