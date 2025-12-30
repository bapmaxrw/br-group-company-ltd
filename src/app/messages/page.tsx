"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useRef, useEffect } from "react";
import { useApp } from "@/context/AppContext";

export default function MessageCenter() {
    const { user, theme } = useApp();
    const [selectedConversation, setSelectedConversation] = useState(1);
    const [message, setMessage] = useState("");
    const scrollRef = useRef<HTMLDivElement>(null);

    const conversations = [
        { id: 1, name: "Heavy Duty Machinery Co.", lastMessage: "Yes, we can customize the press color...", time: "10:30 AM", unread: true, avatar: "🏗️" },
        { id: 2, name: "Global Apparel Group", lastMessage: "The shipping quote for 500 units is attached.", time: "Yesterday", unread: false, avatar: "👔" },
        { id: 3, name: "EcoEnergy Ltd.", lastMessage: "Thank you for your inquiry about the inverters.", time: "Dec 28", unread: false, avatar: "☀️" },
    ];

    const [currentMessages, setCurrentMessages] = useState([
        { sender: "receiver", text: "Hello! Thank you for contacting Heavy Duty Machinery Co. How can we help you today?", time: "09:00 AM" },
        { sender: "sender", text: "I'm interested in the 500T Hydraulic Press. Is it possible to customize the safety guarding?", time: "09:15 AM" },
        { sender: "receiver", text: "Yes, we can customize the press color and the safety guarding according to your local safety standards.", time: "10:30 AM" },
    ]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [currentMessages]);

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (message.trim()) {
            const newMessage = {
                sender: "sender",
                text: message,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setCurrentMessages([...currentMessages, newMessage]);
            setMessage("");
        }
    };

    return (
        <div className="page" style={{ background: "var(--background-color)", height: "100vh", display: "flex", flexDirection: "column", color: "var(--text-main)" }}>
            <Header />

            <main className="container" style={{ flex: 1, padding: "2rem 0", display: "flex", gap: "1rem", overflow: "hidden" }}>
                {/* Sidebar: Conv List */}
                <aside style={{ width: "350px", background: "var(--surface-color)", borderRadius: "20px", border: "1px solid var(--border-color)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
                    <div style={{ padding: "1.5rem", borderBottom: "1px solid var(--border-color)" }}>
                        <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Messages</h1>
                        <input
                            type="text"
                            placeholder="Search conversations..."
                            style={{ width: "100%", padding: "0.75rem", borderRadius: "10px", border: "1px solid var(--border-color)", background: "rgba(0,0,0,0.02)", color: "inherit", fontSize: "0.9rem" }}
                        />
                    </div>

                    <div style={{ flex: 1, overflowY: "auto" }}>
                        {conversations.map(conv => (
                            <div
                                key={conv.id}
                                onClick={() => setSelectedConversation(conv.id)}
                                style={{
                                    padding: "1.25rem 1.5rem",
                                    cursor: "pointer",
                                    borderBottom: "1px solid var(--border-color)",
                                    background: selectedConversation === conv.id ? "rgba(255,106,0,0.08)" : "transparent",
                                    borderLeft: selectedConversation === conv.id ? "4px solid var(--primary-color)" : "4px solid transparent",
                                    transition: "all 0.2s"
                                }}
                            >
                                <div className="flex justify-between items-center mb-1">
                                    <div className="flex items-center gap-2">
                                        <span style={{ fontSize: "1.2rem" }}>{conv.avatar}</span>
                                        <h4 style={{ fontWeight: conv.unread ? "700" : "600" }}>{conv.name}</h4>
                                    </div>
                                    <span style={{ fontSize: "0.75rem", color: "var(--text-light)" }}>{conv.time}</span>
                                </div>
                                <p style={{ fontSize: "0.85rem", color: "var(--text-light)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                                    {conv.lastMessage}
                                </p>
                            </div>
                        ))}
                    </div>
                </aside>

                {/* Chat Window */}
                <section style={{ flex: 1, background: "var(--surface-color)", borderRadius: "20px", border: "1px solid var(--border-color)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
                    {/* Chat Header */}
                    <div style={{ padding: "1.25rem 1.5rem", borderBottom: "1px solid var(--border-color)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div className="flex items-center gap-3">
                            <div style={{ width: "45px", height: "45px", background: "rgba(0,0,0,0.05)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem" }}>
                                {conversations.find(c => c.id === selectedConversation)?.avatar || "🏢"}
                            </div>
                            <div>
                                <h3 style={{ fontSize: "1.1rem" }}>{conversations.find(c => c.id === selectedConversation)?.name}</h3>
                                <span style={{ fontSize: "0.8rem", color: "#00b341", display: "flex", alignItems: "center", gap: "4px" }}>
                                    <span style={{ width: "8px", height: "8px", background: "#00b341", borderRadius: "50%" }}></span> Verified Supplier
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button className="btn" style={{ border: "1px solid var(--border-color)", fontSize: "0.85rem", color: "var(--text-main)" }}>Request Invoice</button>
                            <button className="btn btn-primary" style={{ fontSize: "0.85rem" }}>Create Order</button>
                        </div>
                    </div>

                    {/* Messages Area */}
                    <div
                        ref={scrollRef}
                        style={{ flex: 1, overflowY: "auto", padding: "2rem", display: "flex", flexDirection: "column", gap: "1.5rem", background: "rgba(0,0,0,0.01)" }}
                    >
                        {currentMessages.map((msg, i) => (
                            <div key={i} style={{
                                alignSelf: msg.sender === "sender" ? "flex-end" : "flex-start",
                                maxWidth: "75%",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: msg.sender === "sender" ? "flex-end" : "flex-start"
                            }}>
                                <div style={{
                                    padding: "1rem 1.25rem",
                                    borderRadius: msg.sender === "sender" ? "20px 20px 2px 20px" : "20px 20px 20px 2px",
                                    background: msg.sender === "sender" ? "var(--primary-color)" : "var(--background-color)",
                                    color: msg.sender === "sender" ? "white" : "var(--text-main)",
                                    fontSize: "0.95rem",
                                    lineHeight: "1.5",
                                    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                                    border: msg.sender === "sender" ? "none" : "1px solid var(--border-color)"
                                }}>
                                    {msg.text}
                                </div>
                                <span style={{ fontSize: "0.7rem", color: "var(--text-light)", marginTop: "0.4rem" }}>{msg.time}</span>
                            </div>
                        ))}
                    </div>

                    {/* Input Area */}
                    <form
                        onSubmit={handleSend}
                        style={{ padding: "1.5rem", borderTop: "1px solid var(--border-color)", display: "flex", gap: "1rem" }}
                    >
                        <button type="button" style={{ background: "none", border: "none", fontSize: "1.5rem", cursor: "pointer", opacity: 0.6 }}>📎</button>
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Negotiate terms with seller..."
                            style={{ flex: 1, padding: "1rem", borderRadius: "30px", border: "1px solid var(--border-color)", background: "rgba(0,0,0,0.02)", color: "inherit", outline: "none" }}
                        />
                        <button type="submit" className="btn btn-primary" style={{ borderRadius: "30px", padding: "0 2rem", fontWeight: "700" }}>Send</button>
                    </form>
                </section>
            </main>

            <Footer />
        </div>
    );
}
