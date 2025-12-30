"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
    return (
        <div className="page" style={{ background: "var(--background-color)", minHeight: "100vh" }}>
            <Header />
            <main className="container py-4">
                <div style={{ maxWidth: "800px", margin: "4rem auto", background: "var(--surface-color)", padding: "4rem", borderRadius: "24px", border: "1px solid var(--border-color)" }}>
                    <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>Privacy Policy</h1>
                    <p style={{ color: "var(--text-light)", marginBottom: "2rem" }}>Last Updated: December 30, 2024</p>

                    <div className="flex-col gap-6" style={{ lineHeight: "1.8", color: "var(--text-main)" }}>
                        <section>
                            <h2 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>1. Information We Collect</h2>
                            <p>We collect information you provide directly to us when you create an account, post a product, or communicate with us. This includes your name, email, company details, and payment information.</p>
                        </section>
                        <section>
                            <h2 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>2. How We Use Your Information</h2>
                            <p>We use your information to provide and improve our B2B marketplace services, process transactions, verify supplier identities, and send technical notices and support messages.</p>
                        </section>
                        <section>
                            <h2 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>3. Data Protection (GDPR & Global Standards)</h2>
                            <p>BR Group complies with the General Data Protection Regulation (GDPR) and regional data protection laws in the UAE and Rwanda. We implement robust encryption and security protocols to protect your business data.</p>
                        </section>
                        <section>
                            <h2 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>4. Cookies and Tracking</h2>
                            <p>We use cookies to personalize your experience and analyze our traffic. You can manage your cookie preferences through your browser settings.</p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
