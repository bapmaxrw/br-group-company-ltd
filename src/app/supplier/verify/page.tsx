"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useRef } from "react";
import { useApp } from "@/context/AppContext";
import Link from "next/link";

export default function SupplierVerification() {
    const { user, country, setVerificationStatus } = useApp();
    const [step, setStep] = useState(0); // 0: Start, 1: Business, 2: Identity, 3: Physical, 4: Success
    const [verificationType, setVerificationType] = useState<"standard" | "gold">("gold");
    const [submitting, setSubmitting] = useState(false);

    // Form and file states
    const [files, setFiles] = useState<{ [key: string]: File | null }>({});
    const fileRefs = {
        incorporation: useRef<HTMLInputElement>(null),
        id: useRef<HTMLInputElement>(null),
        walkthrough: useRef<HTMLInputElement>(null)
    };

    const handleFileChange = (key: string, file: File | null) => {
        setFiles(prev => ({ ...prev, [key]: file }));
    };

    const handleNext = () => setStep(s => s + 1);
    const handleBack = () => setStep(s => s - 1);

    const handleSubmit = () => {
        setSubmitting(true);
        // Simulate advanced data processing & biometric check
        setTimeout(() => {
            setSubmitting(false);
            setVerificationStatus("pending");
            setStep(4);
        }, 2500);
    };

    const steps = [
        { title: "Plan Selection", desc: "Choose your level" },
        { title: "Business Docs", desc: "Corporate identity" },
        { title: "Identity Check", desc: "Biometric & ID" },
        { title: "Physical Proof", desc: "Factory/Office" }
    ];

    return (
        <div className="page" style={{ background: "var(--background-color)", minHeight: "100vh", color: "var(--text-main)" }}>
            <Header />

            <main className="container py-8 flex justify-center">
                <div style={{ maxWidth: "1200px", width: "100%", display: "flex", gap: "3rem", flexDirection: window.innerWidth < 900 ? "column" : "row" }}>

                    {/* Left Progress Sidebar (Desktop Only) */}
                    {step < 4 && (
                        <aside style={{ width: "300px", position: "sticky", top: "100px", height: "fit-content" }}>
                            <div style={{ padding: "2rem", background: "var(--surface-color)", borderRadius: "24px", border: "1px solid var(--border-color)", boxShadow: "0 10px 40px rgba(0,0,0,0.03)" }}>
                                <h3 style={{ fontSize: "1.25rem", marginBottom: "2rem", fontWeight: "800" }}>Verification Hub</h3>
                                <div className="flex-col gap-6">
                                    {steps.map((s, i) => (
                                        <div key={i} className="flex gap-4 items-start" style={{ position: "relative" }}>
                                            <div style={{
                                                width: "32px",
                                                height: "32px",
                                                borderRadius: "10px",
                                                background: step === i ? "var(--primary-color)" : step > i ? "rgba(0,187,65,0.1)" : "rgba(0,0,0,0.03)",
                                                color: step === i ? "white" : step > i ? "#00b341" : "var(--text-light)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: "0.9rem",
                                                fontWeight: "800",
                                                zIndex: 1
                                            }}>
                                                {step > i ? "✓" : i + 1}
                                            </div>
                                            <div>
                                                <p style={{ fontSize: "0.95rem", fontWeight: "700", color: step === i ? "var(--primary-color)" : "var(--text-main)" }}>{s.title}</p>
                                                <p style={{ fontSize: "0.75rem", color: "var(--text-light)" }}>{s.desc}</p>
                                            </div>
                                            {i < steps.length - 1 && (
                                                <div style={{ position: "absolute", left: "15px", top: "32px", bottom: "-24px", width: "2px", background: step > i ? "#00b341" : "var(--border-color)" }}></div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid var(--border-color)" }}>
                                    <div className="flex items-center gap-2 mb-2" style={{ color: "#0074D9", fontSize: "0.85rem", fontWeight: "700" }}>
                                        <span>🛡️ BR Secure Port</span>
                                    </div>
                                    <p style={{ fontSize: "0.75rem", color: "var(--text-light)", lineHeight: "1.4" }}>
                                        All data is transmitted via 256-bit SSL encryption and stored in our secure compliance vault in **{country}**.
                                    </p>
                                </div>
                            </div>
                        </aside>
                    )}

                    {/* Main Content Area */}
                    <section style={{ flex: 1, background: "var(--surface-color)", padding: "4rem", borderRadius: "32px", border: "1px solid var(--border-color)", boxShadow: "var(--shadow-premium)", minHeight: "600px" }}>

                        {/* Step 0: Plan Selection */}
                        {step === 0 && (
                            <div style={{ animation: "fadeIn 0.5s ease" }}>
                                <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                                    <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Elevate Your Supplier Status</h1>
                                    <p style={{ color: "var(--text-light)", fontSize: "1.1rem" }}>Choose a verification tier to build trust with global buyers.</p>
                                </div>

                                <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "3rem" }}>
                                    <div
                                        onClick={() => setVerificationType("standard")}
                                        style={{
                                            padding: "2.5rem",
                                            borderRadius: "24px",
                                            border: `2px solid ${verificationType === "standard" ? "var(--primary-color)" : "var(--border-color)"}`,
                                            background: verificationType === "standard" ? "rgba(230, 30, 42, 0.02)" : "transparent",
                                            cursor: "pointer"
                                        }}
                                    >
                                        <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>✅</div>
                                        <h3 style={{ marginBottom: "0.5rem" }}>Verified Member</h3>
                                        <p style={{ fontSize: "0.85rem", color: "var(--text-light)", marginBottom: "1.5rem" }}>Basic identity and registration check. Builds foundational trust.</p>
                                        <ul style={{ fontSize: "0.85rem", padding: 0, listStyle: "none", color: "var(--text-light)" }}>
                                            <li style={{ marginBottom: "0.5rem" }}>✓ Verification Badge</li>
                                            <li>✓ Trust Score: 60/100</li>
                                        </ul>
                                    </div>
                                    <div
                                        onClick={() => setVerificationType("gold")}
                                        style={{
                                            padding: "2.5rem",
                                            borderRadius: "24px",
                                            border: `2px solid ${verificationType === "gold" ? "#FFD700" : "var(--border-color)"}`,
                                            background: verificationType === "gold" ? "rgba(255,215,0,0.03)" : "transparent",
                                            cursor: "pointer"
                                        }}
                                    >
                                        <div className="flex justify-between items-start">
                                            <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>💎</div>
                                            <span style={{ fontSize: "0.7rem", fontWeight: "800", background: "#FFD700", color: "#000", padding: "4px 8px", borderRadius: "8px" }}>RECOMMENDED</span>
                                        </div>
                                        <h3 style={{ marginBottom: "0.5rem" }}>Verified Gold Supplier</h3>
                                        <p style={{ fontSize: "0.85rem", color: "var(--text-light)", marginBottom: "1.5rem" }}>Full on-site & logistical audit. Maximum visibility and buyer priority.</p>
                                        <ul style={{ fontSize: "0.85rem", padding: 0, listStyle: "none", color: "var(--text-light)" }}>
                                            <li style={{ marginBottom: "0.5rem" }}>✓ Gold Supplier Checkmark</li>
                                            <li style={{ marginBottom: "0.5rem" }}>✓ On-site Audit Video</li>
                                            <li>✓ Trust Score: 100/100</li>
                                        </ul>
                                    </div>
                                </div>

                                <button onClick={handleNext} className="btn btn-primary" style={{ width: "100%", padding: "1.5rem", fontSize: "1.2rem", fontWeight: "800" }}>Start Verification</button>
                            </div>
                        )}

                        {/* Step 1: Business Docs */}
                        {step === 1 && (
                            <div style={{ animation: "fadeIn 0.5s ease" }}>
                                <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Corporate Registration</h1>
                                <p style={{ color: "var(--text-light)", marginBottom: "3rem" }}>We require documents issued by your national authority in **{country}**.</p>

                                <div className="flex-col gap-8">
                                    <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                                        <div>
                                            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "700" }}>Registered Entity Name</label>
                                            <input type="text" placeholder="Official business name" style={{ width: "100%", padding: "1.1rem", borderRadius: "14px", border: "1px solid var(--border-color)", background: "transparent", color: "inherit" }} />
                                        </div>
                                        <div>
                                            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "700" }}>Tax/TIN Number</label>
                                            <input type="text" style={{ width: "100%", padding: "1.1rem", borderRadius: "14px", border: "1px solid var(--border-color)", background: "transparent", color: "inherit" }} />
                                        </div>
                                    </div>

                                    <div
                                        onClick={() => fileRefs.incorporation.current?.click()}
                                        style={{ border: "2px dashed var(--border-color)", padding: "4rem 2rem", borderRadius: "20px", textAlign: "center", cursor: "pointer", background: files.incorporation ? "rgba(0,187,65,0.03)" : "transparent" }}
                                    >
                                        <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>📂</div>
                                        <h4 style={{ marginBottom: "0.5rem" }}>{files.incorporation ? "Certificate Ready" : "Upload Certificate of Incorporation"}</h4>
                                        <p style={{ fontSize: "0.85rem", color: "var(--text-light)" }}>{files.incorporation ? files.incorporation.name : "PDF, JPG or PNG (Max 10MB)"}</p>
                                        <input
                                            type="file"
                                            ref={fileRefs.incorporation}
                                            onChange={(e) => handleFileChange("incorporation", e.target.files ? e.target.files[0] : null)}
                                            style={{ display: "none" }}
                                        />
                                    </div>

                                    <div className="flex gap-4">
                                        <button onClick={handleBack} className="btn" style={{ flex: 1, padding: "1.25rem", border: "1px solid var(--border-color)" }}>Back</button>
                                        <button onClick={handleNext} disabled={!files.incorporation} className="btn btn-primary" style={{ flex: 2, padding: "1.25rem", opacity: !files.incorporation ? 0.5 : 1 }}>Next Step</button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 2: Identity Check */}
                        {step === 2 && (
                            <div style={{ animation: "fadeIn 0.5s ease" }}>
                                <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Director Identity Verification</h1>
                                <p style={{ color: "var(--text-light)", marginBottom: "3rem" }}>Biometric verification of the primary legal representative.</p>

                                <div className="flex-col gap-8">
                                    <div className="flex gap-4">
                                        {["Passport", "National ID"].map(idType => (
                                            <div key={idType} style={{ flex: 1, background: "rgba(0,0,0,0.02)", padding: "2rem", borderRadius: "20px", border: "1px solid var(--border-color)", textAlign: "center", cursor: "pointer" }}>
                                                <span style={{ fontSize: "2rem" }}>{idType === "Passport" ? "🛂" : "🪪"}</span>
                                                <p style={{ fontWeight: "700", marginTop: "1rem" }}>{idType}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div
                                        onClick={() => fileRefs.id.current?.click()}
                                        style={{ border: "2px dashed var(--border-color)", padding: "4rem 2rem", borderRadius: "20px", textAlign: "center", cursor: "pointer", background: files.id ? "rgba(0,187,65,0.03)" : "transparent" }}
                                    >
                                        <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>📸</div>
                                        <h4 style={{ marginBottom: "0.5rem" }}>{files.id ? "ID Document Cached" : "Upload ID Document Scan"}</h4>
                                        <p style={{ fontSize: "0.85rem", color: "var(--text-light)" }}>{files.id ? files.id.name : "High-resolution front & back Required"}</p>
                                        <input
                                            type="file"
                                            ref={fileRefs.id}
                                            onChange={(e) => handleFileChange("id", e.target.files ? e.target.files[0] : null)}
                                            style={{ display: "none" }}
                                        />
                                    </div>

                                    <div className="flex items-center gap-3" style={{ background: "rgba(230, 30, 42, 0.05)", padding: "1.5rem", borderRadius: "16px" }}>
                                        <span style={{ fontSize: "1.5rem" }}>🤳</span>
                                        <p style={{ fontSize: "0.85rem", color: "var(--text-main)" }}>
                                            <strong>Note:</strong> After submission, you will receive a secure SMS link to perform a 3D Liveness Selfie check.
                                        </p>
                                    </div>

                                    <div className="flex gap-4">
                                        <button onClick={handleBack} className="btn" style={{ flex: 1, padding: "1.25rem", border: "1px solid var(--border-color)" }}>Back</button>
                                        <button onClick={handleNext} disabled={!files.id} className="btn btn-primary" style={{ flex: 2, padding: "1.25rem", opacity: !files.id ? 0.5 : 1 }}>Next Step</button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Physical Proof */}
                        {step === 3 && (
                            <div style={{ animation: "fadeIn 0.5s ease" }}>
                                <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Physical Facility Proof</h1>
                                <p style={{ color: "var(--text-light)", marginBottom: "3rem" }}>Mandatory for **Gold Supplier** status. Verify your workshop or store.</p>

                                <div className="flex-col gap-8">
                                    <div>
                                        <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "700" }}>Operational Headquarters Address</label>
                                        <textarea placeholder="e.g. Unit 402, Trade Tower, Kigali" style={{ width: "100%", padding: "1.1rem", borderRadius: "14px", border: "1px solid var(--border-color)", background: "transparent", color: "inherit", minHeight: "120px" }} />
                                    </div>

                                    <div
                                        onClick={() => fileRefs.walkthrough.current?.click()}
                                        style={{ border: "2px dashed var(--border-color)", padding: "4rem 2rem", borderRadius: "20px", textAlign: "center", cursor: "pointer", background: files.walkthrough ? "rgba(0,187,65,0.03)" : "transparent" }}
                                    >
                                        <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>📹</div>
                                        <h4 style={{ marginBottom: "0.5rem" }}>{files.walkthrough ? "Video Uploaded" : "Video Walkthrough (Required)"}</h4>
                                        <p style={{ fontSize: "0.85rem", color: "var(--text-light)" }}>{files.walkthrough ? files.walkthrough.name : "Show your factory floor & signage (MAX 30S)"}</p>
                                        <input
                                            type="file"
                                            ref={fileRefs.walkthrough}
                                            onChange={(e) => handleFileChange("walkthrough", e.target.files ? e.target.files[0] : null)}
                                            style={{ display: "none" }}
                                            accept="video/*"
                                        />
                                    </div>

                                    <div style={{ padding: "1.5rem", background: "rgba(0,116,217,0.05)", borderRadius: "16px", border: "1px solid rgba(0,116,217,0.1)" }}>
                                        <div className="flex gap-2 mb-2">
                                            <span>📅</span>
                                            <p style={{ fontWeight: "700", fontSize: "0.9rem" }}>On-Site Inspection Booking</p>
                                        </div>
                                        <p style={{ fontSize: "0.8rem", color: "var(--text-light)" }}>Our regional team will schedule a physical visit within 48 hours of this submission to verify your inventory.</p>
                                    </div>

                                    <div className="flex gap-4">
                                        <button onClick={handleBack} className="btn" style={{ flex: 1, padding: "1.25rem", border: "1px solid var(--border-color)" }}>Back</button>
                                        <button
                                            onClick={handleSubmit}
                                            disabled={submitting || !files.walkthrough}
                                            className="btn btn-primary"
                                            style={{ flex: 2, padding: "1.25rem", background: "#00b341", borderColor: "#00b341", fontWeight: "800", opacity: submitting || !files.walkthrough ? 0.6 : 1 }}
                                        >
                                            {submitting ? "Processing Biometrics..." : "Complete Submission"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 4: Success */}
                        {step === 4 && (
                            <div style={{ textAlign: "center", padding: "4rem 0", animation: "popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards" }}>
                                <div style={{ width: "100px", height: "100px", background: "#00b341", color: "white", borderRadius: "50%", margin: "0 auto 2.5rem", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3rem", boxShadow: "0 20px 40px rgba(0,187,65,0.2)" }}>
                                    ✓
                                </div>
                                <h1 style={{ fontSize: "3rem", marginBottom: "1rem", fontWeight: "900" }}>Application Received!</h1>
                                <p style={{ color: "var(--text-light)", fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto 3rem", lineHeight: "1.6" }}>
                                    Your application for **Verified Gold Supplier** status has been queued for review by our compliance desk in **Dubai**.
                                </p>

                                <div style={{ background: "rgba(0,0,0,0.03)", padding: "2rem", borderRadius: "24px", textAlign: "left", maxWidth: "500px", margin: "0 auto 3rem" }}>
                                    <h4 style={{ marginBottom: "1.5rem", textAlign: "center" }}>Final Steps to Activation</h4>
                                    <div className="flex-col gap-4">
                                        <div className="flex gap-3">
                                            <div style={{ color: "#00b341", fontWeight: "900" }}>1.</div>
                                            <p style={{ fontSize: "0.95rem" }}>Watch your SMS for the Biometric Selfie link.</p>
                                        </div>
                                        <div className="flex gap-3">
                                            <div style={{ color: "#00b341", fontWeight: "900" }}>2.</div>
                                            <p style={{ fontSize: "0.95rem" }}>Schedule on-site visit via the upcoming portal notification.</p>
                                        </div>
                                        <div className="flex gap-3">
                                            <div style={{ color: "#00b341", fontWeight: "900" }}>3.</div>
                                            <p style={{ fontSize: "0.95rem" }}>Badge active within 5-7 business days upon approval.</p>
                                        </div>
                                    </div>
                                </div>

                                <Link href="/supplier/dashboard" className="btn btn-primary" style={{ padding: "1.5rem 4rem", fontSize: "1.1rem" }}>Return to Dashboard</Link>
                            </div>
                        )}

                    </section>
                </div>
            </main>

            <Footer />
            <style jsx>{`
                @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes popIn { from { scale: 0.8; opacity: 0; } to { scale: 1; opacity: 1; } }
            `}</style>
        </div>
    );
}
