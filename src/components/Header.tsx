"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useApp } from "@/context/AppContext";

export default function Header() {
    const [searchQuery, setSearchQuery] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { user, translations, currency, setCurrency, logout, country, setCountry } = useApp();
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            router.push(`/products?search=${encodeURIComponent(searchQuery)}`);
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <header className="header" style={{ background: "var(--surface-color)", borderBottom: "1px solid var(--border-color)", position: "sticky", top: 0, zIndex: 1000 }}>
            <div className="container flex items-center justify-between py-1">
                <div className="flex items-center gap-6">
                    <Link href="/" className="logo font-bold text-2xl" style={{
                        color: 'var(--primary-color)',
                        letterSpacing: "-1.5px",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px"
                    }}>
                        <span style={{ background: "var(--primary-color)", color: "white", padding: "4px 10px", borderRadius: "8px", fontSize: "1.2rem" }}>BR</span>
                        GROUP
                    </Link>
                    <form onSubmit={handleSearch} className="search-bar flex items-center">
                        <input
                            type="text"
                            placeholder="Search products, suppliers, or categories..."
                            className="search-input"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button type="submit" className="search-btn btn btn-primary" style={{ height: "100%", borderRadius: "100px", fontSize: "0.85rem" }}>Search</button>
                    </form>
                </div>

                {/* Desktop Nav */}
                <nav className="flex items-center gap-4 desktop-nav">
                    <Link href="/products" className="nav-link" style={{ color: "var(--text-main)" }}>{translations.marketplace}</Link>
                    <Link href="/rfq" className="nav-link" style={{ color: "var(--text-main)" }}>{translations.rfq}</Link>

                    <select
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value as any)}
                        style={{ background: "transparent", color: "var(--text-main)", border: "1px solid var(--border-color)", padding: "2px 5px", borderRadius: "4px", fontSize: "0.8rem", cursor: "pointer" }}
                    >
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="AED">AED</option>
                    </select>

                    {user?.role === "seller" && (
                        <Link href="/supplier/post-product" className="nav-link" style={{ color: "var(--primary-color)", fontWeight: "700" }}>+ Post Product</Link>
                    )}
                    <Link href="/settings" className="nav-link" title="Settings">⚙️</Link>

                    <div className="flex items-center gap-1" style={{ fontSize: "0.85rem", color: "var(--text-light)", border: "1px solid var(--border-color)", padding: "4px 10px", borderRadius: "20px" }}>
                        <span>Ship to:</span>
                        <select
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            style={{ background: "transparent", color: "var(--text-main)", fontWeight: "600", border: "none", outline: "none", cursor: "pointer", fontSize: "0.85rem" }}
                        >
                            {["United Arab Emirates", "United States", "China", "India", "United Kingdom", "Germany", "France", "Japan", "Canada", "Australia", "Brazil", "Russia", "South Korea", "Italy", "Spain", "Mexico", "Indonesia", "Netherlands", "Saudi Arabia", "Turkey", "Switzerland", "Sweden", "Poland", "Belgium", "Norway", "Austria", "Thailand", "Singapore", "Vietnam", "Rwanda", "Egypt", "Nigeria", "South Africa", "Kenya", "Ghana", "Bahrain", "Kuwait", "Oman", "Qatar", "Uganda", "Tanzania", "Ethiopia"].sort().map(c => (
                                <option key={c} value={c}>{c}</option>
                            ))}
                        </select>
                    </div>

                    <div style={{ height: "20px", width: "1px", background: "var(--border-color)", margin: "0 0.5rem" }}></div>

                    {user ? (
                        <div className="flex items-center gap-2">
                            <Link href={user.role === "seller" ? "/supplier/dashboard" : "/buyer/dashboard"} className="btn" style={{ border: '1px solid var(--border-color)', color: "var(--text-main)" }}>
                                {translations.myHub} ({user.name})
                            </Link>
                            <button onClick={logout} className="btn" style={{ background: 'rgba(255,0,0,0.05)', color: '#ff4d4d', border: '1px solid rgba(255,0,0,0.1)' }}>Logout</button>
                        </div>
                    ) : (
                        <>
                            <Link href="/login" className="btn" style={{ border: '1px solid var(--border-color)', color: "var(--text-main)" }}>{translations.signin}</Link>
                            <Link href="/register" className="btn btn-primary">{translations.register}</Link>
                        </>
                    )}
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="mobile-menu-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    style={{ display: "none", background: "none", border: "none", fontSize: "1.5rem", cursor: "pointer", color: "var(--text-main)" }}
                >
                    {isMobileMenuOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="mobile-menu" style={{ background: "var(--surface-color)", borderTop: "1px solid var(--border-color)", padding: "1rem" }}>
                    <nav className="flex-col gap-4">
                        <Link href="/products" onClick={() => setIsMobileMenuOpen(false)} style={{ padding: "0.5rem 0", borderBottom: "1px solid var(--border-color)", color: "var(--text-main)" }}>{translations.marketplace}</Link>
                        <Link href="/rfq" onClick={() => setIsMobileMenuOpen(false)} style={{ padding: "0.5rem 0", borderBottom: "1px solid var(--border-color)", color: "var(--text-main)" }}>{translations.rfq}</Link>
                        <Link href="/settings" onClick={() => setIsMobileMenuOpen(false)} style={{ padding: "0.5rem 0", borderBottom: "1px solid var(--border-color)", color: "var(--text-main)" }}>{translations.settings}</Link>
                        {user ? (
                            <>
                                <Link href={user.role === "seller" ? "/supplier/dashboard" : "/buyer/dashboard"} onClick={() => setIsMobileMenuOpen(false)} style={{ padding: "0.5rem 0", color: "var(--primary-color)", fontWeight: "600" }}>{translations.myHub} ({user.name})</Link>
                                <button onClick={() => { logout(); setIsMobileMenuOpen(false); }} style={{ padding: "0.5rem 0", color: "#ff4d4d", background: "none", border: "none", textAlign: "left", cursor: "pointer", fontSize: "1rem" }}>Logout</button>
                            </>
                        ) : (
                            <>
                                <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} style={{ padding: "0.5rem 0", color: "var(--text-main)" }}>{translations.signin}</Link>
                                <Link href="/register" onClick={() => setIsMobileMenuOpen(false)} style={{ padding: "0.5rem 0", color: "var(--primary-color)", fontWeight: "600" }}>{translations.register}</Link>
                            </>
                        )}
                    </nav>
                </div>
            )}

            <div className="category-nav" style={{ background: "var(--background-color)", borderBottom: "1px solid var(--border-color)" }}>
                <div className="container flex gap-4 text-sm py-2" style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
                    <Link href="/products?category=Machinery" style={{ color: "var(--text-light)" }}>Industrial Machinery</Link>
                    <Link href="/products?category=Electronics" style={{ color: "var(--text-light)" }}>Electronics</Link>
                    <Link href="/products?category=Apparel" style={{ color: "var(--text-light)" }}>Apparel & Fashion</Link>
                    <Link href="/products?category=Home" style={{ color: "var(--text-light)" }}>Home & Garden</Link>
                    <Link href="/products?category=Beauty" style={{ color: "var(--text-light)" }}>Beauty & Personal Care</Link>
                    <div className="flex-grow"></div>
                    <Link href="/track" className="nav-link" style={{ fontSize: "0.85rem", color: "var(--text-main)", fontWeight: "600" }}>📦 Track Order</Link>
                    <Link href="/supplier/dashboard" className="nav-link" style={{ fontSize: "0.85rem", color: "var(--primary-color)" }}>{translations.sell}</Link>
                </div>
            </div>
        </header>
    );
}
