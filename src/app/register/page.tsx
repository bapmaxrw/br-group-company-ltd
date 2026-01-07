"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useApp } from "@/context/AppContext";
import { useRouter } from "next/navigation";

export default function Register() {
    const { setUser } = useApp();
    const router = useRouter();
    const [role, setRole] = useState<"buyer" | "supplier">("buyer");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        password: ""
    });

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await fetch("/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, role })
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Registration failed");
            }

            // Redirect to login or auto-login
            router.push("/login?registered=true");
        } catch (err: any) {
            setError(err.message);
            setLoading(false);
        }
    };

    return (
        <div className="page" style={{ background: "var(--background-color)", minHeight: "100vh" }}>
            <Header />

            <main className="flex justify-center items-center" style={{ padding: "8rem 0" }}>
                <div style={{ maxWidth: "600px", width: "100%", background: "white", padding: "4rem", borderRadius: "32px", border: "1px solid var(--border-color)", boxShadow: "var(--shadow-premium)" }}>
                    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <h1 style={{ fontSize: "2.5rem", fontWeight: "900", marginBottom: "0.5rem" }}>Create Corporate Account</h1>
                        <p style={{ color: "var(--text-light)" }}>Join 40M+ businesses trading on BR Group</p>
                    </div>

                    {/* Role Selection */}
                    <div className="flex gap-4 mb-10">
                        <div
                            onClick={() => setRole("buyer")}
                            style={{ flex: 1, padding: "1.5rem", borderRadius: "20px", border: `2px solid ${role === "buyer" ? "var(--primary-color)" : "var(--border-color)"}`, cursor: "pointer", background: role === "buyer" ? "rgba(230, 30, 42, 0.05)" : "transparent", textAlign: "center", transition: "all 0.2s" }}
                        >
                            <span style={{ fontSize: "2rem", display: "block", marginBottom: "0.5rem" }}>🛒</span>
                            <span style={{ fontWeight: "800", display: "block" }}>I am a Buyer</span>
                            <span style={{ fontSize: "0.8rem", opacity: 0.6 }}>Sourcing products</span>
                        </div>
                        <div
                            onClick={() => setRole("supplier")}
                            style={{ flex: 1, padding: "1.5rem", borderRadius: "20px", border: `2px solid ${role === "supplier" ? "var(--primary-color)" : "var(--border-color)"}`, cursor: "pointer", background: role === "supplier" ? "rgba(230, 30, 42, 0.05)" : "transparent", textAlign: "center", transition: "all 0.2s" }}
                        >
                            <span style={{ fontSize: "2rem", display: "block", marginBottom: "0.5rem" }}>🏭</span>
                            <span style={{ fontWeight: "800", display: "block" }}>I am a supplier</span>
                            <span style={{ fontSize: "0.8rem", opacity: 0.6 }}>Selling & Exporting</span>
                        </div>
                    </div>

                    <form onSubmit={handleRegister} className="flex-col gap-6">
                        {error && (
                            <div style={{ padding: "1rem", borderRadius: "12px", background: "rgba(230, 30, 42, 0.1)", border: "1px solid var(--primary-color)", color: "var(--primary-color)", fontSize: "0.9rem", fontWeight: "600", marginBottom: "1rem", textAlign: "center" }}>
                                {error}
                            </div>
                        )}
                        <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                            <div className="flex-col gap-2">
                                <label style={{ fontSize: "0.9rem", fontWeight: "700" }}>Legal Name</label>
                                <input
                                    type="text"
                                    placeholder="John Carter"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    style={{ padding: "1.2rem", borderRadius: "12px", border: "1px solid var(--border-color)", background: "#f8f9fa", outline: "none" }}
                                />
                            </div>
                            <div className="flex-col gap-2">
                                <label style={{ fontSize: "0.9rem", fontWeight: "700" }}>Company Name</label>
                                <input
                                    type="text"
                                    placeholder="Carter Imports"
                                    required
                                    value={formData.company}
                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                    style={{ padding: "1.2rem", borderRadius: "12px", border: "1px solid var(--border-color)", background: "#f8f9fa", outline: "none" }}
                                />
                            </div>
                        </div>

                        <div className="flex-col gap-2">
                            <label style={{ fontSize: "0.9rem", fontWeight: "700" }}>Corporate Email</label>
                            <input
                                type="email"
                                placeholder="email@company.com"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                style={{ padding: "1.2rem", borderRadius: "12px", border: "1px solid var(--border-color)", background: "#f8f9fa", outline: "none" }}
                            />
                        </div>

                        <div className="flex-col gap-2">
                            <label style={{ fontSize: "0.9rem", fontWeight: "700" }}>Secure Password</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                required
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                style={{ padding: "1.2rem", borderRadius: "12px", border: "1px solid var(--border-color)", background: "#f8f9fa", outline: "none" }}
                            />
                        </div>

                        <div style={{ marginTop: "1rem" }}>
                            <label className="flex items-start gap-3" style={{ cursor: "pointer" }}>
                                <input type="checkbox" required style={{ marginTop: "5px", width: "18px", height: "18px" }} />
                                <span style={{ fontSize: "0.85rem", color: "var(--text-light)", lineHeight: "1.4" }}>
                                    I agree to the <Link href="/terms" style={{ color: "var(--primary-color)", fontWeight: "700" }}>Terms of Service</Link> and the <Link href="/compliance" style={{ color: "var(--primary-color)", fontWeight: "700" }}>Supplier/Buyer Code of Conduct</Link>.
                                </span>
                            </label>
                        </div>

                        <button type="submit" disabled={loading} className="btn btn-primary" style={{ padding: "1.5rem", borderRadius: "14px", fontWeight: "900", fontSize: "1.1rem", marginTop: "1rem" }}>
                            {loading ? "Initializing Account..." : "Create Global Account"}
                        </button>

                        <p style={{ textAlign: "center", color: "var(--text-light)", fontSize: "0.95rem", marginTop: "1.5rem" }}>
                            Already registered? <Link href="/login" style={{ color: "var(--primary-color)", fontWeight: "800" }}>Sign In</Link>
                        </p>
                    </form>
                </div>
            </main>

            <Footer />
        </div>
    );
}
