"use client";

import React, { useState } from "react";

export default function DemoSubmission() {
    const [formData, setFormData] = useState({
        artistName: "",
        bio: "",
        trackTitle: "",
        trackLink: "",
        consent: false,
    });
    const [showModal, setShowModal] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        const formDataToSend = new FormData();
        formDataToSend.append("entry.1718718920", formData.artistName);
        formDataToSend.append("entry.813989785", formData.bio);
        formDataToSend.append("entry.726797592", formData.trackTitle);
        formDataToSend.append("entry.590653345", formData.trackLink);
        formDataToSend.append(
            "entry.1773208143",
            formData.consent
                ? "I confirm that I am the creator or have the rights to the submitted music, and I give Robotic Rumble permission to use it in live events, streams, or promotions."
                : ""
        );

        try {
            await fetch(
                "https://docs.google.com/forms/d/e/1FAIpQLScSja6nzxtBoyzxKHxaRrc5fKxGFRiA3zfoju9xWBsAK_Zmzg/formResponse",
                {
                    method: "POST",
                    mode: "no-cors",
                    body: formDataToSend,
                }
            );

            setShowModal(true);
            setFormData({
                artistName: "",
                bio: "",
                trackTitle: "",
                trackLink: "",
                consent: false,
            });
        } catch (error) {
            console.error("Submission error:", error);
            alert("There was an issue submitting your form. Please try again.");
        } finally {
            setSubmitting(false);
        }
    };

    const formStyle = {
        maxWidth: "600px",
        margin: "50px auto",
        background: "#111",
        color: "#fff",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 0 15px rgba(0,0,0,0.4)",
    };

    const labelStyle = { fontWeight: "bold", marginBottom: "5px" };
    const inputStyle = {
        width: "100%",
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #444",
        background: "#222",
        color: "#fff",
        marginBottom: "15px",
    };

    const buttonStyle = {
        background: "#c8f31d",
        color: "#000",
        padding: "10px 15px",
        border: "none",
        borderRadius: "5px",
        fontWeight: "bold",
        width: "100%",
        cursor: "pointer",
    };

    return (
        <>
            <div style={formStyle}>
                <h2
                    style={{
                        color: "#c8f31d",
                        fontWeight: "bold",
                        marginBottom: "10px",
                        textAlign: "center",
                    }}
                >
                    Get Heard at Robotic Rumble
                </h2>
                <p style={{ color: "#ccc", marginBottom: "20px", textAlign: "center" }}>
                    We’re always listening for new talent. Drop your best work below.
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label style={labelStyle}>
                            Artist Name <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                            name="artistName"
                            type="text"
                            required
                            style={inputStyle}
                            placeholder="Your artist name"
                            value={formData.artistName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label style={labelStyle}>Short Bio</label>
                        <textarea
                            name="bio"
                            style={inputStyle}
                            placeholder="Tell us about yourself in 1–2 sentences"
                            value={formData.bio}
                            onChange={handleChange}
                            rows={3}
                        />
                    </div>

                    <div className="form-group">
                        <label style={labelStyle}>
                            Track or Mix Title <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                            name="trackTitle"
                            type="text"
                            required
                            style={inputStyle}
                            placeholder="Track or mix title"
                            value={formData.trackTitle}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label style={labelStyle}>
                            Drop your Track or Mix Link <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                            name="trackLink"
                            type="url"
                            required
                            style={inputStyle}
                            placeholder="SoundCloud, Spotify, or Mix link"
                            value={formData.trackLink}
                            onChange={handleChange}
                        />
                    </div>

                    {/* ✅ Checkbox beside text */}
                    <div
                        className="form-check d-flex align-items-start p-0"
                        style={{ marginBottom: "20px" }}
                    >
                        <input
                            type="checkbox"
                            name="consent"
                            required
                            checked={formData.consent}
                            onChange={handleChange}
                            style={{
                                marginRight: "10px",
                                marginTop: "5px",
                                accentColor: "#c8f31d",
                                transform: "scale(1.2)",
                            }}
                        />
                        <label style={{ fontSize: "0.9rem", color: "#ccc", flex: 1 }}>
                            I confirm that I am the creator or have the rights to the
                            submitted music, and I give Robotic Rumble permission to use it in
                            live events, streams, or promotions.
                        </label>
                    </div>

                    <button type="submit" style={buttonStyle} disabled={submitting}>
                        {submitting ? "Submitting..." : "Submit"}
                    </button>
                </form>
            </div>

            {/* 🎨 Sleek neon modal */}
            {showModal && (
                <div
                    className="modal show d-block"
                    tabIndex="-1"
                    style={{
                        backgroundColor: "rgba(0,0,0,0.85)",
                        backdropFilter: "blur(3px)",
                    }}
                >
                    <div className="modal-dialog modal-dialog-centered">
                        <div
                            className="modal-content text-center"
                            style={{
                                background: "#000",
                                color: "#fff",
                                border: "2px solid #c8f31d",
                                boxShadow: "0 0 30px #c8f31d80",
                                borderRadius: "12px",
                                padding: "30px 20px",
                            }}
                        >
                            <div className="modal-body">
                                <div
                                    style={{
                                        fontSize: "50px",
                                        marginBottom: "15px",
                                        color: "#c8f31d",
                                    }}
                                >
                                    🤖
                                </div>
                                <h4 style={{ color: "#c8f31d", fontWeight: "bold" }}>
                                    Submission Received!
                                </h4>
                                <p style={{ color: "#bbb", marginTop: "10px" }}>
                                    Thanks for sending your mix! Our team will review it and reach
                                    out if it fits the Robotic Rumble vibe.
                                </p>
                            </div>
                            <div>
                                <button
                                    type="button"
                                    className="btn"
                                    style={{
                                        backgroundColor: "#c8f31d",
                                        color: "#000",
                                        fontWeight: "bold",
                                        borderRadius: "6px",
                                        padding: "8px 25px",
                                        marginTop: "10px",
                                    }}
                                    onClick={() => setShowModal(false)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
