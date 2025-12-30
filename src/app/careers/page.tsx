"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Careers() {
    const jobs = [
        { title: "Senior Logistics Engineer", location: "Dubai, UAE", type: "Full-time", team: "Operations" },
        { title: "B2B Product Designer", location: "Remote (Global)", type: "Full-time", team: "Product" },
        { title: "Trade Compliance Specialist", location: "Kigali, Rwanda", type: "Full-time", team: "Legal" },
        { title: "Full Stack Developer (Next.js)", location: "Guangzhou, China", type: "Full-time", team: "Engineering" },
        { title: "Regional Sourcing Manager", location: "London, UK", type: "Full-time", team: "Sourcing" }
    ];

    return (
        <div className="page" style={{ background: "var(--background-color)", minHeight: "100vh" }}>
            <Header />

            <main>
                {/* Impactful Careers Hero */}
                <section style={{
                    background: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2187&auto=format&fit=crop') center/cover",
                    padding: "12rem 0",
                    color: "white",
                    textAlign: "center"
                }}>
                    <div className="container">
                        <h1 style={{ fontSize: "5rem", fontWeight: "900", color: "white", letterSpacing: "-3px", lineHeight: "1", marginBottom: "2rem" }}>Build the Future of <br />Global Trade.</h1>
                        <p style={{ fontSize: "1.4rem", maxWidth: "800px", margin: "0 auto 3rem", opacity: 0.9, lineHeight: "1.6" }}>
                            Join a global team of 4,000+ experts across 3 continents working to eliminate trade boundaries and empower small businesses.
                        </p>
                        <button className="btn btn-primary" style={{ padding: "1.5rem 4rem", fontSize: "1.1rem", borderRadius: "100px", fontWeight: "900" }}>Explore Open Roles</button>
                    </div>
                </section>

                {/* Culture & Perks */}
                <section className="container py-8" style={{ marginTop: "-60px" }}>
                    <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
                        {[
                            { title: "Global Mobility", desc: "Opportunities to work across our Dubai, Kigali, and China hubs.", icon: "✈️" },
                            { title: "Equity & Growth", desc: "Share in the company's success with our employee stock program.", icon: "📈" },
                            { title: "Impactful Work", desc: "Build tools that help millions of SMEs succeed in global markets.", icon: "🌍" }
                        ].map((perk, i) => (
                            <div key={i} style={{ background: "white", padding: "3rem", borderRadius: "32px", border: "1px solid var(--border-color)", boxShadow: "0 20px 40px rgba(0,0,0,0.06)", textAlign: "center" }}>
                                <div style={{ fontSize: "3rem", marginBottom: "1.5rem" }}>{perk.icon}</div>
                                <h3 style={{ fontSize: "1.5rem", fontWeight: "900", marginBottom: "1rem" }}>{perk.title}</h3>
                                <p style={{ color: "var(--text-light)", lineHeight: "1.6" }}>{perk.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Job Board Section */}
                <section className="container py-8" style={{ marginBottom: "8rem" }}>
                    <div style={{ textAlign: "center", marginBottom: "5rem" }}>
                        <h2 style={{ fontSize: "3rem", fontWeight: "900" }}>Join Our Talent Network</h2>
                        <p style={{ color: "var(--text-light)", fontSize: "1.2rem" }}>Current opportunities in engineering, logistics, and trade.</p>
                    </div>

                    <div className="flex-col gap-4">
                        {jobs.map((job, i) => (
                            <div key={i} style={{ background: "white", padding: "2.5rem", borderRadius: "24px", border: "1px solid var(--border-color)", display: "flex", justifyContent: "space-between", alignItems: "center", transition: "all 0.3s ease" }} className="job-row">
                                <div style={{ flex: 1 }}>
                                    <span style={{ fontSize: "0.8rem", fontWeight: "800", color: "var(--primary-color)", textTransform: "uppercase", letterSpacing: "1px" }}>{job.team}</span>
                                    <h4 style={{ fontSize: "1.5rem", fontWeight: "900", margin: "0.25rem 0 0.5rem" }}>{job.title}</h4>
                                    <div className="flex gap-4" style={{ fontSize: "0.95rem", color: "var(--text-light)" }}>
                                        <span>📍 {job.location}</span>
                                        <span>🕒 {job.type}</span>
                                    </div>
                                </div>
                                <button className="btn" style={{ border: "2px solid var(--primary-color)", color: "var(--primary-color)", padding: "0.85rem 2.5rem", borderRadius: "12px", fontWeight: "800" }}>Apply Now</button>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: "5rem", textAlign: "center", padding: "5rem", background: "rgba(0,0,0,0.02)", borderRadius: "40px", border: "2px dashed var(--border-color)" }}>
                        <h3 style={{ fontSize: "1.75rem", fontWeight: "900", marginBottom: "1rem" }}>Don't see a perfect fit?</h3>
                        <p style={{ color: "var(--text-light)", fontSize: "1.1rem", marginBottom: "2.5rem" }}>We're always looking for exceptional talent. Send us your CV and we'll keep you in mind for future roles.</p>
                        <button className="btn btn-primary" style={{ padding: "1.25rem 3.5rem", borderRadius: "16px" }}>Submit Open Application</button>
                    </div>
                </section>
            </main>

            <Footer />
            <style jsx>{`
                .job-row:hover { border-color: var(--primary-color); transform: translateY(-3px); box-shadow: var(--shadow-premium); }
            `}</style>
        </div>
    );
}
