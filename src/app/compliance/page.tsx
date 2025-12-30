"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Compliance() {
    return (
        <div className="page" style={{ background: "var(--background-color)", minHeight: "100vh" }}>
            <Header />

            <main className="container py-8">
                <div style={{ padding: "6rem 0", textAlign: "center" }}>
                    <span style={{ color: "#FF4136", fontWeight: "800", letterSpacing: "2px", fontSize: "0.85rem", display: "block", marginBottom: "1.5rem" }}>TRANSPARENCY & ETHICS</span>
                    <h1 style={{ fontSize: "4.5rem", fontWeight: "900", letterSpacing: "-3px" }}>Integrity & Compliance.</h1>
                    <p style={{ fontSize: "1.4rem", color: "var(--text-light)", maxWidth: "800px", margin: "1.5rem auto 0" }}>
                        BR Group maintains the highest standards of corporate governance, ensuring a fair, legal, and sustainable trading environment for all parties.
                    </p>
                </div>

                <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "6rem", marginBottom: "8rem", alignItems: "start" }}>
                    <div className="flex-col gap-6">
                        <div style={{ background: "white", padding: "3.5rem", borderRadius: "32px", border: "1px solid var(--border-color)", boxShadow: "0 20px 40px rgba(0,0,0,0.03)" }}>
                            <h2 style={{ fontSize: "2rem", fontWeight: "900", marginBottom: "2rem" }}>Global Compliance Framework</h2>
                            <p style={{ color: "var(--text-light)", lineHeight: "1.8", marginBottom: "2rem" }}>
                                Our platform operates under a unified compliance framework that strictly adheres to the trade laws of the GCC (UAE), the African Continental Free Trade Area (AfCFTA), and International Trade Commission (ITC) regulations.
                            </p>
                            <div className="flex-col gap-4">
                                {[
                                    "Zero tolerance for bribery or corruption.",
                                    "Strict vetting of factory labor standards.",
                                    "Automated AML (Anti-Money Laundering) checks.",
                                    "Conflict-mineral free sourcing policies."
                                ].map((policy, i) => (
                                    <div key={i} style={{ display: "flex", gap: "10px", fontWeight: "700", color: "#333" }}>
                                        <span style={{ color: "#00b341" }}>🛡️</span> {policy}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div style={{ padding: "1rem" }}>
                            <h3 style={{ fontSize: "1.5rem", fontWeight: "900", marginBottom: "1.5rem" }}>Report a Concern</h3>
                            <p style={{ color: "var(--text-light)", marginBottom: "2rem" }}>If you suspect fraudulent activity, unethical behavior, or a violation of our platform policies, please use our anonymous whistleblower channel.</p>
                            <button className="btn" style={{ background: "white", border: "2px solid #FF4136", color: "#FF4136", padding: "1rem 3rem", borderRadius: "12px", fontWeight: "800" }}>Whistleblower Hotline</button>
                        </div>
                    </div>

                    <div className="flex-col gap-6">
                        <div style={{ background: "#f8f9fa", padding: "3.5rem", borderRadius: "32px", border: "1px solid var(--border-color)" }}>
                            <h3 style={{ fontSize: "1.5rem", fontWeight: "900", marginBottom: "1.5rem" }}>Legal Documents</h3>
                            <ul className="flex-col gap-4">
                                {[
                                    { title: "Supplier Code of Conduct", size: "1.2 MB" },
                                    { title: "Anti-Bribery & Corruption Policy", size: "900 KB" },
                                    { title: "Trade Sanctions Compliance", size: "1.1 MB" },
                                    { title: "Modern Slavery Statement", size: "1.5 MB" },
                                    { title: "Environment Protection Policy", size: "2.1 MB" }
                                ].map((doc, i) => (
                                    <li key={i} style={{ display: "flex", justifyContent: "space-between", padding: "1.5rem", background: "white", borderRadius: "16px", border: "1px solid var(--border-color)", cursor: "pointer" }} className="doc-item">
                                        <span style={{ fontWeight: "700" }}>{doc.title}</span>
                                        <span style={{ color: "var(--text-light)", fontSize: "0.8rem" }}>PDF ({doc.size})</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
            <style jsx>{`
                .doc-item:hover { border-color: var(--primary-color); transform: translateX(5px); }
            `}</style>
        </div>
    );
}
