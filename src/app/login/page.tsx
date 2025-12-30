"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { useRouter } from "next/navigation";

export default function Login() {
    const { setUser } = useApp();
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate auth
        setTimeout(() => {
            setUser({
                id: "1",
                name: "International Buyer",
                role: "buyer",
                email: "buyer@global.com",
                company: "Carter Imports Ltd",
                verificationStatus: "verified"
            });
            router.push("/buyer/dashboard");
        }, 1500);
    };

    return (
        <div className="page" style={{ background: "var(--background-color)", minHeight: "100vh" }}>
            <Header />

            <main className="flex justify-center items-center" style={{ padding: "8rem 0" }}>
                <div style={{ maxWidth: "500px", width: "100%", background: "white", padding: "4rem", borderRadius: "32px", border: "1px solid var(--border-color)", boxShadow: "var(--shadow-premium)" }}>
                    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <h1 style={{ fontSize: "2.5rem", fontWeight: "900", marginBottom: "0.5rem" }}>Welcome Back</h1>
                        <p style={{ color: "var(--text-light)" }}>Access your global trade dashboard</p>
                    </div>

                    <form onSubmit={handleLogin} className="flex-col gap-6">
                        <div className="flex-col gap-2">
                            <label style={{ fontSize: "0.9rem", fontWeight: "700" }}>Corporate Email</label>
                            <input type="email" placeholder="email@company.com" required style={{ padding: "1.2rem", borderRadius: "12px", border: "1px solid var(--border-color)", background: "#f8f9fa", outline: "none" }} />
                        </div>
                        <div className="flex-col gap-2">
                            <div className="flex justify-between">
                                <label style={{ fontSize: "0.9rem", fontWeight: "700" }}>Password</label>
                                <a href="#" style={{ fontSize: "0.85rem", color: "var(--primary-color)", fontWeight: "700" }}>Forgot?</a>
                            </div>
                            <input type="password" placeholder="••••••••" required style={{ padding: "1.2rem", borderRadius: "12px", border: "1px solid var(--border-color)", background: "#f8f9fa", outline: "none" }} />
                        </div>

                        <button type="submit" disabled={loading} className="btn btn-primary" style={{ padding: "1.5rem", borderRadius: "14px", fontWeight: "900", fontSize: "1.1rem", marginTop: "1rem" }}>
                            {loading ? "Authenticating..." : "Sign In to BR Group"}
                        </button>

                        <div style={{ textAlign: "center", marginTop: "2rem" }}>
                            <p style={{ color: "var(--text-light)", fontSize: "0.95rem" }}>
                                New to the marketplace? <Link href="/register" style={{ color: "var(--primary-color)", fontWeight: "800" }}>Register for Free</Link>
                            </p>
                        </div>
                    </form>

                    <div style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid var(--border-color)", textAlign: "center" }}>
                        <p style={{ fontSize: "0.85rem", color: "var(--text-light)", marginBottom: "1.5rem" }}>Or continue with</p>
                        <div className="flex gap-4 justify-center">
                            {["Google", "LinkedIn"].map(provider => (
                                <button key={provider} style={{ padding: "0.75rem 2rem", borderRadius: "12px", border: "1px solid var(--border-color)", background: "white", fontWeight: "700", cursor: "pointer", fontSize: "0.85rem" }}>{provider}</button>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
