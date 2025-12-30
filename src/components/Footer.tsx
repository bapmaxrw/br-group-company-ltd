"use client";

import Link from "next/link";
import { useApp } from "@/context/AppContext";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const { language, setLanguage } = useApp();

    return (
        <footer className="footer" style={{ background: "var(--footer-bg)", color: "var(--footer-text)", paddingTop: "6rem", borderTop: "1px solid rgba(255,255,255,0.05)", position: "relative", zIndex: 10 }}>
            {/* Background Accent */}
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "100%", background: "radial-gradient(circle at 90% 90%, rgba(255,106,0,0.03) 0%, transparent 40%)", pointerEvents: "none" }}></div>

            <div className="container" style={{ position: "relative", zIndex: 1 }}>
                {/* Top Section: CTA & Brand */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "4rem", marginBottom: "5rem", paddingBottom: "5rem", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    <div style={{ flex: "1.5", minWidth: "320px" }}>
                        <Link href="/" className="logo font-bold text-3xl" style={{
                            color: 'white',
                            letterSpacing: "-1.5px",
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            marginBottom: "2rem"
                        }}>
                            <span style={{ background: "var(--primary-color)", color: "white", padding: "6px 14px", borderRadius: "10px", fontSize: "1.4rem" }}>BR</span>
                            GROUP
                        </Link>
                        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1rem", lineHeight: "1.8", maxWidth: "500px", marginBottom: "2.5rem" }}>
                            The global operating system for modern B2B trade. We enable direct manufacturer-to-buyer relationships with integrated escrow, logistics, and legal compliance.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { name: "LN", color: "#0077b5" },
                                { name: "X", color: "#ffffff" },
                                { name: "FB", color: "#1877f2" },
                                { name: "YT", color: "#ff0000" }
                            ].map(social => (
                                <Link key={social.name} href="#" style={{
                                    width: "44px",
                                    height: "44px",
                                    borderRadius: "12px",
                                    background: "rgba(255,255,255,0.03)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    border: "1px solid rgba(255,255,255,0.08)",
                                    transition: "all 0.3s ease",
                                    color: "white",
                                    fontWeight: "800",
                                    fontSize: "0.8rem"
                                }} className="social-icon">
                                    {social.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div style={{ flex: "1", minWidth: "320px" }}>
                        <div style={{ background: "linear-gradient(135deg, rgba(255,106,0,0.1) 0%, rgba(255,255,255,0.02) 100%)", padding: "3rem", borderRadius: "var(--radius-lg)", border: "1px solid rgba(255,106,0,0.2)" }}>
                            <h4 style={{ color: "white", fontSize: "1.25rem", marginBottom: "0.75rem", fontWeight: "800" }}>Global Trade Insights</h4>
                            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", marginBottom: "2rem", lineHeight: "1.6" }}>Get exclusive market reports, shipping index updates, and regulatory news.</p>
                            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="work@company.com"
                                    style={{ flex: 1, padding: "1.2rem", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(0,0,0,0.3)", color: "white", outline: "none", fontSize: "0.9rem" }}
                                />
                                <button className="btn btn-primary" style={{ padding: "0 2rem", borderRadius: "12px", fontWeight: "800" }}>Join</button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Main Links Grid */}
                <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "4rem", marginBottom: "6rem" }}>
                    {[
                        {
                            title: "Sourcing Hub",
                            links: [
                                { label: "All Categories", href: "/categories" },
                                { label: "Request for Quote", href: "/rfq" },
                                { label: "Ready to Ship", href: "/membership" },
                                { label: "Trade Assurance", href: "/trade-assurance" },
                                { label: "Logistics Tracking", href: "/track" }
                            ]
                        },
                        {
                            title: "Sell Globally",
                            links: [
                                { label: "Supplier Verification", href: "/supplier/verify" },
                                { label: "Learning Academy", href: "/learning" },
                                { label: "Post a Product", href: "/supplier/post-product" },
                                { label: "Partner Program", href: "/partner" },
                                { label: "Merchant Dashboard", href: "/supplier/dashboard" }
                            ]
                        },
                        {
                            title: "Integrity",
                            links: [
                                { label: "Ethics & Compliance", href: "/compliance" },
                                { label: "Anti-Bribery Policy", href: "/compliance" },
                                { label: "Dispute Center", href: "/disputes" },
                                { label: "Report a Concern", href: "/contact" },
                                { label: "Help Center", href: "/help" }
                            ]
                        },
                        {
                            title: "Corporate",
                            links: [
                                { label: "About BR Group", href: "/about" },
                                { label: "News & Resources", href: "/news" },
                                { label: "Investor Relations", href: "/investor" },
                                { label: "Global Careers", href: "/careers" },
                                { label: "Sustainability", href: "/esg" }
                            ]
                        }
                    ].map(section => (
                        <div key={section.title}>
                            <h3 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1.5px", color: "white", marginBottom: "2rem", fontWeight: "800", opacity: 0.9 }}>{section.title}</h3>
                            <ul className="flex-col gap-4">
                                {section.links.map(link => (
                                    <li key={link.label}>
                                        <Link href={link.href} style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.5)", transition: "all 0.3s ease" }} className="footer-link">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar: Multi-Region Support */}
                <div style={{ padding: "3rem 0", borderTop: "1px solid rgba(255,255,255,0.05)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2rem" }}>
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2" style={{ background: "rgba(255,255,255,0.05)", padding: "8px 16px", borderRadius: "100px", border: "1px solid rgba(255,255,255,0.1)", fontSize: "0.85rem", cursor: "pointer" }}>
                            <span>🌍</span> <span>English (Global)</span>
                        </div>
                        <div className="flex items-center gap-4" style={{ opacity: 0.5, fontSize: "1.4rem" }}>
                            <span title="Visa">💳</span>
                            <span title="Mastercard">📡</span>
                            <span title="Bank Transfer">🏦</span>
                            <span title="Escrow Protection">🛡️</span>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)" }}>Mobile App:</span>
                        <div style={{ background: "black", padding: "6px 14px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.2)", fontSize: "0.75rem", cursor: "pointer" }}>App Store</div>
                        <div style={{ background: "black", padding: "6px 14px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.2)", fontSize: "0.75rem", cursor: "pointer" }}>Google Play</div>
                    </div>
                </div>

                {/* Legal & Copyright */}
                <div style={{ padding: "2.5rem 0 4rem", color: "rgba(255,255,255,0.3)", fontSize: "0.85rem", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "2.5rem" }}>
                    <div>
                        <p>© {currentYear} BR GROUP COMPANY. All rights reserved.</p>
                        <p style={{ marginTop: "0.5rem", fontSize: "0.75rem" }}>Licensed Trade Operator: Dubai (DIFC) | Kigali (KIC) | Guangzhou (FTZ)</p>
                    </div>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="legal-link">Privacy Policy</Link>
                        <Link href="/terms" className="legal-link">Terms of Use</Link>
                        <Link href="/compliance" className="legal-link">Cookie Policy</Link>
                        <Link href="/compliance" className="legal-link">Sitemap</Link>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .footer-link:hover {
                    color: var(--primary-color) !important;
                    transform: translateX(6px);
                }
                .legal-link:hover {
                    color: white !important;
                    text-decoration: underline;
                }
                .social-icon:hover {
                    background: var(--primary-color) !important;
                    border-color: var(--primary-color) !important;
                    transform: scale(1.1);
                    color: white !important;
                }
            `}</style>
        </footer>
    );
}
