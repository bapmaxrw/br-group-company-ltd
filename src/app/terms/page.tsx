"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsOfUse() {
    return (
        <div className="page" style={{ background: "var(--background-color)", minHeight: "100vh" }}>
            <Header />
            <main className="container py-4">
                <div style={{ maxWidth: "800px", margin: "4rem auto", background: "var(--surface-color)", padding: "4rem", borderRadius: "24px", border: "1px solid var(--border-color)" }}>
                    <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>Terms of Use</h1>
                    <p style={{ color: "var(--text-light)", marginBottom: "2rem" }}>Last Updated: December 30, 2024</p>

                    <div className="flex-col gap-6" style={{ lineHeight: "1.8", color: "var(--text-main)" }}>
                        <section>
                            <h2 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>1. Acceptance of Terms</h2>
                            <p>By accessing BR GROUP COMPANY services, you agree to be bound by these terms. If you do not agree, please do not use our platform.</p>
                        </section>
                        <section>
                            <h2 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>2. User Responsibilities</h2>
                            <p>Users must provide accurate information, maintain account security, and comply with all international trade regulations and local laws of their respective jurisdictions.</p>
                        </section>
                        <section>
                            <h2 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>3. Trade Assurance & Payments</h2>
                            <p>All payments made through the platform are subject to our Trade Assurance policy. Funds are held securely until the buyer confirms receipt or the inspection period expires.</p>
                        </section>
                        <section>
                            <h2 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>4. Intellectual Property</h2>
                            <p>All content on this platform, including logos and trademarks, is the property of BR Group. Unauthorized use is strictly prohibited.</p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
