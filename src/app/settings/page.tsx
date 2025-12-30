"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useApp } from "@/context/AppContext";
import { languages } from "@/data/worldData";

export default function Settings() {
    const { theme, setTheme, language, setLanguage } = useApp();

    return (
        <div className="page" style={{ background: "var(--background-color)", minHeight: "100vh", color: "var(--text-main)" }}>
            <Header />

            <main className="container py-4">
                <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem" }}>User Settings</h1>

                <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "start" }}>

                    {/* Left Side: General & Appearance */}
                    <div className="flex-col gap-6">
                        <section style={{ background: "var(--surface-color)", padding: "2rem", borderRadius: "16px", border: "1px solid var(--border-color)" }}>
                            <h2 style={{ fontSize: "1.25rem", marginBottom: "1.5rem" }}>Appearance</h2>

                            <div className="flex justify-between items-center">
                                <div>
                                    <p style={{ fontWeight: "600" }}>Dark Mode</p>
                                    <p style={{ fontSize: "0.85rem", color: "var(--text-light)" }}>Optimize for low-light environments</p>
                                </div>
                                <div
                                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                                    style={{
                                        width: "50px",
                                        height: "26px",
                                        background: theme === "dark" ? "var(--primary-color)" : "#ccc",
                                        borderRadius: "15px",
                                        position: "relative",
                                        cursor: "pointer",
                                        transition: "background 0.3s"
                                    }}
                                >
                                    <div style={{
                                        width: "20px",
                                        height: "20px",
                                        background: "white",
                                        borderRadius: "50%",
                                        position: "absolute",
                                        top: "3px",
                                        left: theme === "dark" ? "27px" : "3px",
                                        transition: "left 0.3s"
                                    }}></div>
                                </div>
                            </div>
                        </section>

                        <section style={{ background: "var(--surface-color)", padding: "2rem", borderRadius: "16px", border: "1px solid var(--border-color)" }}>
                            <h2 style={{ fontSize: "1.25rem", marginBottom: "1.5rem" }}>Region & Currency</h2>
                            <div className="flex-col gap-4">
                                <div>
                                    <label style={{ fontSize: "0.85rem", color: "var(--text-light)", display: "block", marginBottom: "0.5rem" }}>Display Country</label>
                                    <select
                                        value={useApp().country}
                                        onChange={(e) => useApp().setCountry(e.target.value)}
                                        style={{ width: "100%", padding: "0.75rem", borderRadius: "8px", border: "1px solid var(--border-color)", background: "var(--surface-color)", color: "inherit" }}
                                    >
                                        {require("@/data/worldData").countries.map((c: any) => (
                                            <option key={c.name} value={c.name}>{c.flag} {c.name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div style={{ borderTop: "1px solid var(--border-color)", pt: "1rem" }}>
                                    <p style={{ fontSize: "0.80rem", color: "var(--text-light)", marginTop: "1rem" }}>Managing your global trade preferences helps us provide better recommendations for shipping and customs.</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Side: Global Language Selection */}
                    <section style={{ background: "var(--surface-color)", padding: "2rem", borderRadius: "16px", border: "1px solid var(--border-color)" }}>
                        <div className="flex justify-between items-center mb-4">
                            <h2 style={{ fontSize: "1.25rem" }}>Preferred Language</h2>
                            <span style={{ fontSize: "0.8rem", background: "rgba(0,0,0,0.05)", padding: "2px 8px", borderRadius: "4px" }}>{languages.length} Available</span>
                        </div>
                        <p style={{ fontSize: "0.9rem", color: "var(--text-light)", marginBottom: "1.5rem" }}>Select your native language for better navigation and communication.</p>

                        <div style={{ maxHeight: "500px", overflowY: "auto", paddingRight: "0.5rem" }}>
                            <div className="flex-col gap-2">
                                {languages.map(lang => (
                                    <div
                                        key={lang.code}
                                        onClick={() => setLanguage(lang.code)}
                                        style={{
                                            padding: "0.85rem 1rem",
                                            borderRadius: "10px",
                                            border: `1px solid ${language === lang.code ? "var(--primary-color)" : "var(--border-color)"}`,
                                            background: language === lang.code ? "rgba(255,106,0,0.05)" : "transparent",
                                            cursor: "pointer",
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            transition: "border 0.2s"
                                        }}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span style={{ fontWeight: language === lang.code ? "700" : "400" }}>{lang.local}</span>
                                            <span style={{ fontSize: "0.8rem", color: "var(--text-light)" }}>({lang.name})</span>
                                        </div>
                                        {language === lang.code && <span style={{ color: "var(--primary-color)", fontWeight: "bold" }}>Active</span>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />

            <style jsx>{`
                ::-webkit-scrollbar {
                    width: 6px;
                }
                ::-webkit-scrollbar-track {
                    background: transparent;
                }
                ::-webkit-scrollbar-thumb {
                    background: var(--border-color);
                    border-radius: 10px;
                }
            `}</style>
        </div>
    );
}
