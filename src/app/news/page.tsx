"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function NewsRoom() {
    const news = [
        {
            date: "Dec 30, 2024",
            tag: "Corporate",
            title: "BR Group Announces Strategic Expansion into Southeast Asian Markets",
            desc: "New logistics hubs in Singapore and Vietnam to bridge the gap between Asian manufacturers and Middle-Eastern buyers. This expansion aims to optimize supply chain efficiency and reduce transit times by 20% in the region.",
            img: "https://images.unsplash.com/photo-1577416416141-7c83397bd50e?q=80&w=2070&auto=format&fit=crop"
        },
        {
            date: "Dec 28, 2024",
            tag: "Logistics",
            title: "BR Global Air Freight Fleet Surpasses 50 Dedicated Cargo Planes",
            desc: "Increased capacity for the Dubai-Kigali direct trade corridor to handle growing agricultural demand. Our expanded fleet now connects major manufacturing centers with emerging markets faster than ever before.",
            img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069&auto=format&fit=crop"
        },
        {
            date: "Dec 25, 2024",
            tag: "Sustainability",
            title: "2024 ESG Report: BR Group achieves 40% reduction in carbon footprint",
            desc: "Investment in solar-powered warehouses and AI-optimized shipping routes pays off. Our goal is to reach carbon neutrality by 2030 across all global hubs.",
            img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    return (
        <div className="page" style={{ background: "var(--background-color)", minHeight: "100vh" }}>
            <Header />

            <main className="container py-8">
                <div style={{ padding: "6rem 0", textAlign: "center" }}>
                    <h1 style={{ fontSize: "4.5rem", fontWeight: "900", letterSpacing: "-3px" }}>BR Newsroom</h1>
                    <p style={{ fontSize: "1.4rem", color: "var(--text-light)", maxWidth: "800px", margin: "1.5rem auto 0" }}>
                        Official updates, industry insights, and global trade reports from the world's B2B operating system.
                    </p>
                </div>

                {/* Featured Headline */}
                <section style={{ position: "relative", marginBottom: "6rem" }}>
                    <div style={{
                        height: "600px",
                        background: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.7)), url('${news[0].img}') center/cover`,
                        borderRadius: "48px",
                        display: "flex",
                        alignItems: "flex-end",
                        padding: "5rem",
                        color: "white",
                        boxShadow: "0 40px 80px rgba(0,0,0,0.2)"
                    }} className="main-headline">
                        <div style={{ maxWidth: "800px" }}>
                            <span style={{ background: "var(--primary-color)", color: "white", padding: "6px 16px", borderRadius: "100px", fontSize: "0.85rem", fontWeight: "800", marginBottom: "1.5rem", display: "inline-block" }}>LATEST UPDATE</span>
                            <h2 style={{ fontSize: "3.5rem", fontWeight: "900", color: "white", lineHeight: "1.1", marginBottom: "1.5rem" }}>{news[0].title}</h2>
                            <p style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.8)", lineHeight: "1.6", marginBottom: "2rem" }}>{news[0].desc}</p>
                            <Link href="/news/expansion" className="btn btn-primary" style={{ padding: "1.25rem 3rem", fontSize: "1.1rem", borderRadius: "16px" }}>Read Full Report</Link>
                        </div>
                    </div>
                </section>

                {/* News Grid */}
                <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "3rem", marginBottom: "8rem" }}>
                    {news.slice(1).map((item, i) => (
                        <div key={i} style={{ background: "white", borderRadius: "32px", overflow: "hidden", border: "1px solid var(--border-color)", borderBottom: "5px solid var(--primary-color)", transition: "all 0.3s ease" }} className="news-card">
                            <div style={{ height: "240px", overflow: "hidden" }}>
                                <img src={item.img} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </div>
                            <div style={{ padding: "2.5rem" }}>
                                <div className="flex justify-between items-center mb-4">
                                    <span style={{ fontSize: "0.75rem", fontWeight: "800", color: "var(--primary-color)", textTransform: "uppercase" }}>{item.tag}</span>
                                    <span style={{ fontSize: "0.85rem", color: "var(--text-light)" }}>{item.date}</span>
                                </div>
                                <h3 style={{ fontSize: "1.5rem", fontWeight: "900", marginBottom: "1rem", lineHeight: "1.3", color: "var(--text-main)" }}>{item.title}</h3>
                                <p style={{ color: "var(--text-light)", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "2rem" }}>{item.desc}</p>
                                <Link href="#" style={{ fontWeight: "800", color: "var(--primary-color)" }}>Read Story →</Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Media Inquiries */}
                <section style={{ background: "var(--surface-color)", padding: "6rem", borderRadius: "48px", border: "1px solid var(--border-color)", textAlign: "center", marginBottom: "8rem" }}>
                    <h2 style={{ fontSize: "2.5rem", fontWeight: "900", marginBottom: "1rem" }}>Media Inquiries</h2>
                    <p style={{ color: "var(--text-light)", fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto 3rem" }}>
                        For press releases, interview requests, and brand assets, please contact our global communications desk.
                    </p>
                    <Link href="/contact" className="btn btn-primary" style={{ padding: "1.25rem 4rem", borderRadius: "16px", fontSize: "1.1rem" }}>Contact Press Team</Link>
                </section>
            </main>

            <Footer />
            <style jsx>{`
                .news-card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.06); }
                .main-headline:hover { transform: scale(1.01); transition: transform 0.5s ease; }
            `}</style>
        </div>
    );
}
