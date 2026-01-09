"use client";

import { useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useApp } from "@/context/AppContext";
import { useRouter } from "next/navigation";

import { useSession } from "next-auth/react";

export default function PostProduct() {
    const { addProduct } = useApp();
    const { data: session } = useSession();
    const router = useRouter();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [formData, setFormData] = useState({
        name: "",
        price: "",
        category: "Machinery",
        description: "",
        location: "",
        moq: "1",
        phone: "",
        bank: "",
    });

    const [images, setImages] = useState<string[]>([]);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            Array.from(files).forEach(file => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setImages(prev => [...prev, reader.result as string]);
                };
                reader.readAsDataURL(file);
            });
        }
    };

    const triggerUpload = () => fileInputRef.current?.click();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!session) return alert("Please log in as a supplier first.");
        if (images.length === 0) return alert("Please upload at least one clear photo of the product.");

        setSubmitting(true);
        setError("");

        const productData = {
            name: formData.name,
            description: formData.description,
            price: parseFloat(formData.price),
            category: formData.category,
            images: images,
            moq: parseInt(formData.moq) || 1,
            location: formData.location, // Note: we'll use this for the display but the model might need update if we want to save it permanently
        };

        try {
            const res = await fetch("/api/products", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(productData)
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.message || "Failed to post product");
            }

            // Optional: refresh global state if needed, but the /products page should fetch from DB now
            router.push("/products");
        } catch (err: any) {
            setError(err.message);
            setSubmitting(false);
        }
    };

    return (
        <div className="page" style={{ background: "var(--background-color)", minHeight: "100vh" }}>
            <Header />

            <main className="container py-8 flex justify-center">
                <div style={{ maxWidth: "1000px", width: "100%", background: "white", padding: "4rem", borderRadius: "32px", border: "1px solid var(--border-color)", boxShadow: "var(--shadow-premium)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "4rem" }}>
                        <div>
                            <span style={{ background: "rgba(0,116,217,0.1)", color: "#0074D9", padding: "6px 16px", borderRadius: "100px", fontSize: "0.8rem", fontWeight: "900", letterSpacing: "1px", display: "inline-block", marginBottom: "1rem" }}>SKU LISTING CONSOLE</span>
                            <h1 style={{ fontSize: "3rem", fontWeight: "900", letterSpacing: "-2px", color: "var(--text-main)" }}>Catalog New Product.</h1>
                            <p style={{ color: "var(--text-light)", fontSize: "1.1rem", marginTop: "0.5rem" }}>Ensure technical specs are accurate for global procurement officers.</p>
                        </div>
                        <div style={{ textAlign: "right" }}>
                            <div style={{ fontSize: "0.85rem", fontWeight: "800", color: "var(--text-light)", marginBottom: "4px" }}>LOGGED IN AS</div>
                            <div style={{ fontWeight: "900", fontSize: "1rem" }}>{(session?.user as any)?.company || "Verified Supplier"}</div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="flex-col gap-10">
                        {error && (
                            <div style={{ padding: "1rem", borderRadius: "12px", background: "rgba(230, 30, 42, 0.1)", border: "1px solid var(--primary-color)", color: "var(--primary-color)", fontSize: "0.9rem", fontWeight: "600", marginBottom: "1rem", textAlign: "center" }}>
                                {error}
                            </div>
                        )}
                        {/* Immersive Media Manager */}
                        <div style={{ background: "#f8f9fa", padding: "3.5rem", borderRadius: "24px", border: "1px solid var(--border-color)", textAlign: "center" }}>
                            <div style={{ marginBottom: "2rem" }}>
                                <h3 style={{ fontSize: "1.25rem", fontWeight: "900", marginBottom: "0.5rem" }}>Visual Assets</h3>
                                <p style={{ fontSize: "0.9rem", color: "var(--text-light)" }}>Upload ultra-clear photos from multiple angles (Max 5 files).</p>
                            </div>

                            <div className="flex gap-4 mb-8 flex-wrap justify-center">
                                {images.map((img, i) => (
                                    <div key={i} style={{ width: "160px", height: "160px", borderRadius: "20px", border: "1px solid var(--border-color)", overflow: "hidden", position: "relative", background: "white", boxShadow: "0 10px 20px rgba(0,0,0,0.05)" }}>
                                        <img src={img} alt="SKU Preview" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                        <button
                                            type="button"
                                            onClick={() => setImages(prev => prev.filter((_, idx) => idx !== i))}
                                            style={{ position: "absolute", top: "10px", right: "10px", background: "#FF4136", color: "white", border: "none", borderRadius: "8px", width: "28px", height: "28px", cursor: "pointer", fontWeight: "800" }}
                                        >✕</button>
                                    </div>
                                ))}
                                {images.length < 5 && (
                                    <div
                                        onClick={triggerUpload}
                                        style={{ width: "160px", height: "160px", borderRadius: "20px", border: "2px dashed var(--primary-color)", background: "rgba(255,106,0,0.03)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all 0.3s" }}
                                        className="upload-trigger"
                                    >
                                        <span style={{ fontSize: "2.5rem", color: "var(--primary-color)" }}>+</span>
                                        <span style={{ fontSize: "0.85rem", fontWeight: "800", color: "var(--primary-color)" }}>Attach Photo</span>
                                    </div>
                                )}
                            </div>

                            <div className="flex gap-3 justify-center">
                                <button type="button" onClick={triggerUpload} className="btn" style={{ background: "white", border: "1px solid var(--border-color)", borderRadius: "12px", fontSize: "0.9rem" }}>📂 Disk Local</button>
                                <button type="button" onClick={triggerUpload} className="btn" style={{ background: "white", border: "1px solid var(--border-color)", borderRadius: "12px", fontSize: "0.9rem" }}>📷 Cam Interface</button>
                            </div>

                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleImageUpload}
                                style={{ display: "none" }}
                                accept="image/*"
                                multiple
                            />
                        </div>

                        {/* Core SKU Data */}
                        <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
                            <div className="flex-col gap-2">
                                <label style={{ fontSize: "0.9rem", fontWeight: "800", opacity: 0.7 }}>Official Product Title</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="e.g. 2025 High-Frequency Industrial Generator"
                                    style={{ padding: "1.25rem", borderRadius: "16px", border: "1px solid var(--border-color)", background: "#fcfcfc", outline: "none", fontSize: "1rem" }}
                                    required
                                />
                            </div>
                            <div className="flex-col gap-2">
                                <label style={{ fontSize: "0.9rem", fontWeight: "800", opacity: 0.7 }}>Stock Origin (City, Country)</label>
                                <input
                                    type="text"
                                    value={formData.location}
                                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                    placeholder="e.g. Guangzhou, China"
                                    style={{ padding: "1.25rem", borderRadius: "16px", border: "1px solid var(--border-color)", background: "#fcfcfc", outline: "none", fontSize: "1rem" }}
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
                            <div className="flex-col gap-2">
                                <label style={{ fontSize: "0.9rem", fontWeight: "800", opacity: 0.7 }}>List Price (USD / Unit)</label>
                                <input
                                    type="number"
                                    value={formData.price}
                                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                    placeholder="5000.00"
                                    style={{ padding: "1.25rem", borderRadius: "16px", border: "1px solid var(--border-color)", background: "#fcfcfc", outline: "none", fontSize: "1rem", fontWeight: "900" }}
                                    required
                                />
                            </div>
                            <div className="flex-col gap-2">
                                <label style={{ fontSize: "0.9rem", fontWeight: "800", opacity: 0.7 }}>Industry Sector</label>
                                <select
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    style={{ padding: "1.25rem", borderRadius: "16px", border: "1px solid var(--border-color)", background: "#fcfcfc", outline: "none", fontSize: "1rem", fontWeight: "700" }}
                                >
                                    <option>Machinery</option>
                                    <option>Electronics</option>
                                    <option>Apparel</option>
                                    <option>Medical Systems</option>
                                    <option>Renewable Energy</option>
                                    <option>Bulk Raw Materials</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex-col gap-2">
                            <label style={{ fontSize: "0.9rem", fontWeight: "800", opacity: 0.7 }}>Technical Specifications & Certifications</label>
                            <textarea
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                placeholder="List technical data, CE/ISO certifications, and warranty information..."
                                style={{ padding: "1.5rem", borderRadius: "16px", border: "1px solid var(--border-color)", background: "#fcfcfc", outline: "none", height: "200px", resize: "none", fontSize: "1rem", lineHeight: "1.6" }}
                                required
                            ></textarea>
                        </div>

                        {/* Payment Identity Section */}
                        <div style={{ background: "rgba(0,179,65,0.03)", padding: "3rem", borderRadius: "24px", border: "1px solid rgba(0,179,65,0.2)" }}>
                            <div className="flex gap-4 items-center mb-6">
                                <span style={{ fontSize: "2rem" }}>🏦</span>
                                <div>
                                    <h3 style={{ fontSize: "1.2rem", fontWeight: "900", color: "#2e7d32" }}>Direct Settlement Info</h3>
                                    <p style={{ fontSize: "0.85rem", color: "var(--text-light)" }}>Secure your transactions through Trade Assurance escrow.</p>
                                </div>
                            </div>
                            <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                                <div className="flex-col gap-2">
                                    <label style={{ fontSize: "0.8rem", fontWeight: "900" }}>Verified Contact (MoMo/Phone)</label>
                                    <input
                                        type="text"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        placeholder="+971 XX XXX XXXX"
                                        style={{ padding: "1rem", borderRadius: "12px", border: "1px solid var(--border-color)", background: "white", outline: "none" }}
                                    />
                                </div>
                                <div className="flex-col gap-2">
                                    <label style={{ fontSize: "0.8rem", fontWeight: "900" }}>Bank ID / IBAN Registry</label>
                                    <input
                                        type="text"
                                        value={formData.bank}
                                        onChange={(e) => setFormData({ ...formData, bank: e.target.value })}
                                        placeholder="SWIFT: BRGRPUAE, IBAN: ..."
                                        style={{ padding: "1rem", borderRadius: "12px", border: "1px solid var(--border-color)", background: "white", outline: "none" }}
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={submitting}
                            className="btn btn-primary"
                            style={{ padding: "1.75rem", fontSize: "1.3rem", fontWeight: "900", borderRadius: "20px", boxShadow: "0 20px 40px rgba(255,106,0,0.25)" }}
                        >
                            {submitting ? "Syncing with Global Nodes..." : "Publish to International Marketplace"}
                        </button>
                    </form>
                </div>
            </main>

            <Footer />
            <style jsx>{`
                .upload-trigger:hover { background: rgba(255,106,0,0.08) !important; transform: scale(1.02); }
            `}</style>
        </div>
    );
}
