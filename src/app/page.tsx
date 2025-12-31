"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import "./home.css";

export default function Home() {
  const { products, translations, formatPrice } = useApp();

  return (
    <div className="page" style={{ background: "var(--background-color)", color: "var(--text-main)" }}>
      <Header />

      <main>
        {/* Premium Hero Section */}
        <section className="hero-premium">
          <div className="hero-overlay"></div>
          <div className="container" style={{ position: "relative", zIndex: 10 }}>
            <div className="hero-content animate-up">
              <span style={{
                background: "rgba(230,30,42,0.2)",
                color: "var(--primary-color)",
                padding: "6px 16px",
                borderRadius: "100px",
                fontSize: "0.85rem",
                fontWeight: "800",
                letterSpacing: "1px",
                display: "inline-block",
                marginBottom: "2rem"
              }}>
                THE WORLD'S B2B OPERATING SYSTEM
              </span>
              <h1>Trade Without <br /><span style={{ color: "var(--primary-color)" }}>Boundaries.</span></h1>
              <p>
                Join 40M+ businesses on the most secure platform for global sourcing, manufacturing discovery, and instant cross-border settlement.
              </p>
              <div className="hero-buttons">
                <Link href="/register" className="btn btn-primary" style={{ padding: "1.25rem 3.5rem", fontSize: "1.1rem", borderRadius: "16px", fontWeight: "800" }}>Start Sourcing Now</Link>
                <Link href="/supplier/verify" className="btn glass" style={{ padding: "1.25rem 3.5rem", fontSize: "1.1rem", color: "white", borderRadius: "16px", fontWeight: "700" }}>Become a Verified Seller</Link>
              </div>

              <div className="flex gap-8 mt-12" style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>
                <div className="flex items-center gap-2"><span>🛡️</span> 100% Trade Protection</div>
                <div className="flex items-center gap-2"><span>⚡</span> Instant Bank Settlement</div>
                <div className="flex items-center gap-2"><span>🌍</span> 190+ Countries</div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Nav (Aesthetic Grid) */}
        <section className="container py-8" style={{ marginTop: "-80px", position: "relative", zIndex: 20 }}>
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {[
              { name: 'Industrial Equipment', icon: '🏗️', category: 'Machinery', desc: 'Heavy machinery & parts' },
              { name: 'Consumer Electronics', icon: '📱', category: 'Electronics', desc: 'IoT, Servers & Gadgets' },
              { name: 'Apparel & Fabrics', icon: '👔', category: 'Apparel', desc: 'Wholesale textiles' },
              { name: 'Luxury & Automotive', icon: '🏎️', category: 'Sports', desc: 'Premium global goods' },
            ].map((cat, i) => (
              <Link href={`/products?category=${cat.category}`} key={i} className="cat-card-new">
                <div className="icon-wrapper">{cat.icon}</div>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>{cat.name}</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text-light)" }}>{cat.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Sourcing Hub Map Visualization Section */}
        <section style={{ padding: "8rem 0", background: "var(--surface-color)" }}>
          <div className="container">
            <div className="grid" style={{ gridTemplateColumns: "1fr 1.5fr", gap: "6rem", alignItems: "center" }}>
              <div>
                <h2 style={{ fontSize: "3rem", fontWeight: "900", marginBottom: "2rem", letterSpacing: "-1px" }}>Global Manufacturing <br />Network.</h2>
                <p style={{ fontSize: "1.2rem", color: "var(--text-light)", lineHeight: "1.7", marginBottom: "3rem" }}>
                  We bridge the gap between regional excellence and global demand. Whether you are sourcing raw coffee from **Rwanda** or high-precision robotics from **Dubai**, we provide the legal and financial infrastructure for direct trade.
                </p>
                <div className="flex-col gap-6">
                  {[
                    { name: "United Arab Emirates", flag: "🇦🇪", desc: "Logistics & Tech Hub" },
                    { name: "Rwanda", flag: "🇷🇼", desc: "Premium Agriculture & Mining" },
                    { name: "China", flag: "🇨🇳", desc: "Manufacturing Giant" }
                  ].map(c => (
                    <div key={c.name} className="flex gap-4 items-center" style={{ padding: "1.5rem", background: "var(--background-color)", borderRadius: "20px", border: "1px solid var(--border-color)" }}>
                      <span style={{ fontSize: "2rem" }}>{c.flag}</span>
                      <div>
                        <h4 style={{ fontWeight: "800" }}>{c.name}</h4>
                        <p style={{ fontSize: "0.85rem", color: "var(--text-light)" }}>{c.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ background: "rgba(0,116,217,0.05)", borderRadius: "40px", padding: "4rem", border: "1px solid rgba(0,116,217,0.1)", textAlign: "center" }}>
                <div style={{ fontSize: "8rem", opacity: 0.8, marginBottom: "2rem" }}>🌍</div>
                <h3 style={{ fontSize: "2rem", marginBottom: "1rem" }}>190,000+ Verified Suppliers</h3>
                <p style={{ color: "var(--text-light)", marginBottom: "3rem" }}>Our on-site inspection teams verify every "Gold Supplier" in person.</p>
                <Link href="/supplier" className="btn btn-primary" style={{ padding: "1rem 3rem" }}>View Regional Reports</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products Upgrade */}
        <section className="container py-8" style={{ marginBottom: "6rem" }}>
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 style={{ fontSize: "2.5rem", fontWeight: "900" }}>Trending Global Deals</h2>
              <p style={{ color: "var(--text-light)", fontSize: "1.1rem" }}>Verified inventory ready for immediate shipment.</p>
            </div>
            <Link href="/products" style={{ fontWeight: "700", color: "var(--primary-color)", textDecoration: "none" }}>See all trending →</Link>
          </div>

          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "2.5rem" }}>
            {products.map((product) => (
              <Link href={`/products/${product.id}`} key={product.id} className="product-card-premium">
                <div className="product-img-container">
                  <div style={{ position: "absolute", top: "15px", left: "15px", background: "white", padding: "6px 12px", borderRadius: "100px", fontSize: "0.7rem", fontWeight: "800", color: "#00b341", boxShadow: "0 4px 10px rgba(0,0,0,0.05)", display: "flex", alignItems: "center", gap: "4px" }}>
                    <span>🛡️</span> TRADE ASSURED
                  </div>
                  <span style={{ fontSize: "6rem" }}>{product.image}</span>
                  <div style={{ position: "absolute", bottom: "15px", right: "15px", background: "rgba(0,0,0,0.7)", color: "white", padding: "4px 12px", borderRadius: "10px", fontSize: "0.7rem", backdropFilter: "blur(4px)" }}>
                    📍 {product.location}
                  </div>
                </div>
                <div style={{ padding: "2rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                    <h3 style={{ fontSize: "1.3rem", fontWeight: "800", color: "var(--primary-color)" }}>{formatPrice(product.price)}</h3>
                    <div style={{ display: "flex", color: "#ffc107", fontSize: "0.7rem" }}>★★★★★</div>
                  </div>
                  <h4 style={{ fontSize: "1.1rem", marginBottom: "1.5rem", height: "3rem", overflow: "hidden" }}>{product.name}</h4>
                  <div className="flex justify-between items-center" style={{ paddingTop: "1.5rem", borderTop: "1px solid var(--border-color)" }}>
                    <span style={{ fontSize: "0.8rem", color: "var(--text-light)" }}>{product.sellerName}</span>
                    <span style={{ fontSize: "0.75rem", fontWeight: "800", color: "#00b341" }}>✓ VERIFIED</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* High Impact Hub Banner */}
        <section className="container py-8" style={{ marginBottom: "8rem" }}>
          <div className="hub-banner">
            <div className="hub-visual"></div>
            <div style={{ position: "relative", zIndex: 10, flex: 1 }}>
              <h2 style={{ fontSize: "3.5rem", color: "white", marginBottom: "1.5rem", fontWeight: "900", letterSpacing: "-2px" }}>Grow Your Factory <br />Globally.</h2>
              <p style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.8)", marginBottom: "3rem", maxWidth: "500px" }}>
                List your products and start receiving RFQs from verified buyers in Dubai, London, and New York. No hidden fees.
              </p>
              <div className="flex gap-4">
                <Link href="/register?role=seller" className="btn btn-primary" style={{ padding: "1.25rem 3rem", fontSize: "1.1rem" }}>Start Selling Free</Link>
                <Link href="/learning" className="btn glass" style={{ padding: "1.25rem 3rem", color: "white" }}>View Seller Guide</Link>
              </div>
            </div>
            <div style={{ flex: 0.8, display: "flex", justifyContent: "center", position: "relative" }}>
              <div style={{ width: "300px", height: "400px", background: "white", borderRadius: "24px", padding: "2rem", color: "#333", boxShadow: "0 30px 60px rgba(0,0,0,0.3)" }}>
                <div style={{ borderBottom: "1px solid #eee", paddingBottom: "1rem", marginBottom: "1rem" }}>
                  <div className="flex gap-2 items-center mb-2">
                    <div style={{ width: "10px", height: "10px", background: "#00b341", borderRadius: "50%" }}></div>
                    <span style={{ fontSize: "0.8rem", fontWeight: "800" }}>LIVE RFQ MARKET</span>
                  </div>
                </div>
                <div className="flex-col gap-4">
                  {[
                    { qty: "500 Units", item: "Solar Inverters", from: "Dubai, UAE" },
                    { qty: "20 Tons", item: "Raw Coffee", from: "Kigali, RW" },
                    { qty: "1,000 Pcs", item: "Industrial Gates", from: "London, UK" }
                  ].map((rfq, i) => (
                    <div key={i} style={{ padding: "1rem", background: "#f8f9fa", borderRadius: "12px", fontSize: "0.8rem" }}>
                      <p style={{ fontWeight: "800" }}>{rfq.qty} × {rfq.item}</p>
                      <p style={{ color: "#777" }}>Buyer in {rfq.from}</p>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: "0.7rem", marginTop: "1rem", color: "#999", textAlign: "center" }}>Real-time demand data active</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
