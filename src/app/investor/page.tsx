"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function InvestorRelations() {
    return (
        <div className="page" style={{ background: "var(--background-color)", minHeight: "100vh" }}>
            <Header />

            <main>
                {/* Premium Corporate Hero */}
                <section style={{
                    background: "#001f3f",
                    padding: "10rem 0",
                    color: "white",
                    textAlign: "center",
                    position: "relative",
                    overflow: "hidden"
                }}>
                    <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.1, background: "url('https://www.transparenttextures.com/patterns/graphy.png')" }}></div>
                    <div className="container" style={{ position: "relative", zIndex: 1 }}>
                        <span style={{ color: "var(--primary-color)", fontWeight: "800", letterSpacing: "2px", fontSize: "0.9rem", display: "block", marginBottom: "2rem" }}>NASDAQ: BRGRP (MOCK)</span>
                        <h1 style={{ fontSize: "5rem", fontWeight: "900", letterSpacing: "-3px", lineHeight: "1", color: "white" }}>Investor Relations.</h1>
                        <p style={{ fontSize: "1.4rem", maxWidth: "800px", margin: "2rem auto 3.5rem", opacity: 0.8, lineHeight: "1.6" }}>
                            Building the world's most trusted trade infrastructure. We deliver sustainable growth through technological leadership and global operation excellence.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <button className="btn btn-primary" style={{ padding: "1.25rem 3.5rem", borderRadius: "16px", fontSize: "1.1rem" }}>2024 Annual Report (PDF)</button>
                            <button className="btn glass" style={{ padding: "1.25rem 3.5rem", borderRadius: "16px", color: "white" }}>Earnings Webcast</button>
                        </div>
                    </div>
                </section>

                {/* Performance Stats */}
                <section className="container" style={{ marginTop: "-60px", position: "relative", zIndex: 10 }}>
                    <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
                        {[
                            { label: "Revenue Growth", value: "+42%", desc: "Year-over-Year increase in GSV" },
                            { label: "Gross Profit", value: "$1.2B", desc: "Consolidated profits across hubs" },
                            { label: "Active Buyers", value: "40M", desc: "Verified corporate procurement accounts" }
                        ].map((stat, i) => (
                            <div key={i} style={{ background: "white", padding: "3rem", borderRadius: "24px", boxShadow: "0 20px 40px rgba(0,0,0,0.1)", border: "1px solid var(--border-color)", textAlign: "center" }}>
                                <h3 style={{ fontSize: "3rem", fontWeight: "900", color: i === 0 ? "#00b341" : "var(--text-main)", marginBottom: "0.5rem" }}>{stat.value}</h3>
                                <p style={{ fontWeight: "800", marginBottom: "0.5rem" }}>{stat.label}</p>
                                <p style={{ fontSize: "0.85rem", color: "var(--text-light)" }}>{stat.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Resources & Documents */}
                <section className="container py-8" style={{ marginBottom: "8rem" }}>
                    <div className="grid" style={{ gridTemplateColumns: "1.5fr 1fr", gap: "6rem", margin: "6rem 0", alignItems: "start" }}>
                        <div>
                            <h2 style={{ fontSize: "3rem", fontWeight: "900", marginBottom: "2.5rem" }}>Quarterly Results</h2>
                            <div className="flex-col gap-4">
                                {[
                                    { q: "Q3 2024", date: "Nov 15, 2024", status: "Released" },
                                    { q: "Q2 2024", date: "Aug 12, 2024", status: "Released" },
                                    { q: "Q1 2024", date: "May 10, 2024", status: "Released" },
                                    { q: "FY 2023", date: "Feb 20, 2024", status: "Released" }
                                ].map((doc, i) => (
                                    <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "2rem", background: "var(--surface-color)", borderRadius: "20px", border: "1px solid var(--border-color)", transition: "all 0.3s" }} className="doc-row">
                                        <div>
                                            <h4 style={{ fontSize: "1.2rem", fontWeight: "800", marginBottom: "0.25rem" }}>{doc.q} Financial Statement</h4>
                                            <p style={{ fontSize: "0.85rem", color: "var(--text-light)" }}>Published: {doc.date}</p>
                                        </div>
                                        <div className="flex gap-3">
                                            <button style={{ padding: "0.5rem 1rem", borderRadius: "8px", border: "1px solid var(--border-color)", background: "none", fontSize: "0.8rem", fontWeight: "700", cursor: "pointer" }}>PDF</button>
                                            <button style={{ padding: "0.5rem 1rem", borderRadius: "8px", border: "1px solid var(--border-color)", background: "none", fontSize: "0.8rem", fontWeight: "700", cursor: "pointer" }}>XLS</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div style={{ background: "white", padding: "3rem", borderRadius: "32px", border: "1px solid var(--border-color)", boxShadow: "0 20px 40px rgba(0,0,0,0.05)" }}>
                                <h3 style={{ fontSize: "1.5rem", fontWeight: "900", marginBottom: "2rem" }}>IR Contacts</h3>
                                <div style={{ marginBottom: "2.5rem" }}>
                                    <p style={{ fontSize: "0.85rem", color: "var(--text-light)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "0.5rem", fontWeight: "800" }}>Shareholder Services</p>
                                    <h4 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>investors@brgroup.co</h4>
                                    <p style={{ fontSize: "0.9rem" }}>+1 800 555 1212</p>
                                </div>
                                <div style={{ marginBottom: "2.5rem" }}>
                                    <p style={{ fontSize: "0.85rem", color: "var(--text-light)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "0.5rem", fontWeight: "800" }}>Transfer Agent</p>
                                    <h4 style={{ fontSize: "1.1rem" }}>Continental Stock Transfer & Trust</h4>
                                </div>
                                <button className="btn btn-primary" style={{ width: "100%", padding: "1.25rem", borderRadius: "12px", fontWeight: "800" }}>Subscribe to IR Alerts</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <style jsx>{`
                .doc-row:hover { border-color: var(--primary-color); transform: translateX(10px); background: #fff; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
            `}</style>
        </div>
    );
}
