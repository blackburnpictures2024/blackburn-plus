"use client";
import { useState } from "react";

export default function Home() { 

  const [showJoin, setShowJoin] = useState(false);
const [isPlus, setIsPlus] = useState(false);

  const films = [
  { title: "Izizwe and the Odd Spirit", tag: "BLACKBURN+ Original", free: true, video: "https://customer-3i7s1ri7gs1vb7n1.cloudflarestream.com/263cec5098ad4ff3ce0b60eb0eef35c9/iframe" },

   { title: "YOUR NEIGHBOURHOOD", tag: "Waterloo 2026 Selection", free: true, video: "https://customer-3i7s1ri7gs1vb7n1.cloudflarestream.com/b988d4fa48be8de4c813aff623500415/iframe" },
{ title: "THE GRADUATE", tag: "Waterloo 2026 Selection", free: true, video: "https://customer-3i7s1ri7gs1vb7n1.cloudflarestream.com/5cca5934e039de74b29a7f40e74a6a77/iframe" },

  { title: "THE SECOND", tag: "BLACKBURN Original", free: true, video: "https://customer-3i7s1ri7gs1vb7n1.cloudflarestream.com/67e8ee025cca8d5d3e6ca0ec1df26fc5/iframe" },
  { title: "AMAFUNAKONKE", tag: "BLACKBURN Original", free: true, video: "https://customer-3i7s1ri7gs1vb7n1.cloudflarestream.com/06164e6314a6cc9ee01ec2cfc8f36311/iframe" },

  ];
  const brand = "#68653D";
  const brandLight = "#9A9770";

  return (
    <main style={{ background: "black", color: "white", minHeight: "100vh", fontFamily: "sans-serif" }}>
      <header style={{ display: "flex", justifyContent: "space-between", padding: "20px", alignItems: "center" }}>
<img src="/logo.png" alt="BLACKBURN+" style={{ width: "100%", maxWidth: "950px", height: "auto", objectFit: "contain" }} />

<button onClick={() => setShowJoin(true)} style={{ background: brand, color: "white", border: "none", padding: "10px 18px", borderRadius: "20px", fontWeight: "bold", cursor: "pointer" }}>{isPlus ? "PLUS ACTIVE ✓" : "Join PLUS - R49/mo"}</button>
      </header>

  {/* HERO - IZIZWE FULL BACKGROUND */}
<section style={{
  minHeight: "85vh",
  backgroundImage: "url(/izizwe.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center top",
  display: "flex",
  alignItems: "flex-end",
  padding: "40px 20px 60px 20px",
  position: "relative",
  boxSizing: "border-box"
}}>
  {/* DARK FADE SO TEXT STAYS READABLE */}
  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.9) 5%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.4) 100%)" }} />

  {/* LEFT - TEXT FORWARD */}
  <div style={{ position: "relative", zIndex: 2, maxWidth: "600px" }}>
    <p style={{ color: brandLight, fontWeight: "bold", letterSpacing: "3px", margin: 0 }}>BLACKBURN PLUS ORIGINAL</p>
    <h2 style={{ fontSize: "48px", margin: "10px 0" }}>Izizwe and the Odd Spirit</h2>
    <p style={{ color: "#ccc", maxWidth: "500px", fontSize: "18px", lineHeight: "1.5" }}>Innocence turns evil when the night turns green.</p>
    <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
      <a href="https://customer-3i7s1ri7gs1vb7n1.cloudflare-stream.com/263cec5098ad4ff3ce0b60e-boeef35c9/iframe" target="_blank" style={{ background: "#fff", color: "#000", padding: "14px 28px", borderRadius: "6px", fontWeight: "bold", textDecoration: "none" }}>▶ Play Now</a>
      <a href="https://youtu.be/DHLX15cAQ40" target="_blank" style={{ background: "rgba(255,255,255,0.25)", color: "#fff", padding: "14px 28px", borderRadius: "6px", textDecoration: "none" }}>Watch Trailer</a>
    </div>
  </div>
</section>


  
  

{/* 1. BLACKBURN PLUS ORIGINALS */}
<section style={{ padding: "20px" }}>
  <h3>Blackburn Plus Originals</h3>
  <div style={{ display: "flex", gap: "15px", overflowX: "auto", marginTop: "15px" }}>
    <div style={{ minWidth: "200px", background: "#1a1a1a", padding: "20px", borderRadius: "12px" }}>
      <p style={{ color: brandLight, fontWeight: "bold" }}>Izizwe and the Odd Spirit</p>
      <p style={{ color: "#ccc", fontSize: "13px" }}>Feature Film • 2025</p>
    </div>
    <div style={{ minWidth: "200px", background: "#1a1a1a", padding: "20px", borderRadius: "12px" }}>
      <p style={{ fontWeight: "bold" }}>Coming Soon</p>
      <p style={{ color: "#ccc", fontSize: "13px" }}>New Original</p>
    </div>
  </div>
</section>

      <section style={{ padding: "20px" }}>
        <h3>Waterloo Film Festival</h3>
        <div style={{ display: "flex", gap: "15px", marginTop: "15px", overflowX: "auto" }}>
         {films.map((f) => (
  <div key={f.title} style={{ minWidth: "200px", background: "#1a1a1a", padding: "10px", borderRadius: "10px" }}>
    {f.video ? (
      <iframe src={f.video} style={{ width: "100%", height: "160px", border: "none", borderRadius: "8px" }} allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowFullScreen={true}></iframe>
    ) : (
      <div style={{ height: "110px", background: "#333", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "30px" }}>🎬</div>
    )}
    <h4 style={{ marginTop: "12px" }}>{f.title}</h4>
    <p style={{ color: "#999", fontSize: "13px" }}>{f.tag}</p>
    <p style={{ color: f.free ? "#4ade80" : "#FFE600", fontWeight: "bold", fontSize: "13px" }}>{f.free ? "FREE" : "PLUS R49"}</p>
    {f.video && <a href={f.video} target="_blank" style={{ display: "block", marginTop: "8px", background: "#00FF66", color: "#000", textAlign: "center", padding: "10px", borderRadius: "6px", fontWeight: "bold", textDecoration: "none" }}>▶ WATCH NOW</a>}
  </div>
))}
 
              
     </div>
      </section>{/* 3. PODCAST */}
<section style={{ padding: "20px" }}>
  <h3>Podcast</h3>
  <div style={{ display: "flex", gap: "15px", overflowX: "auto", marginTop: "15px" }}>
    <div style={{ minWidth: "200px", background: "#1a1a1a", padding: "20px", borderRadius: "12px" }}>
      <p style={{ color: brandLight, fontWeight: "bold" }}>Blackburn+ Podcast</p>
      <p style={{ color: "#ccc", fontSize: "13px" }}>Ep 1 • Stories & Film</p>
    </div>
    <div style={{ minWidth: "200px", background: "#1a1a1a", padding: "20px", borderRadius: "12px" }}>
      <p style={{ fontWeight: "bold" }}>Ep 2 - Coming Soon</p>
    </div>
  </div>
</section>

{/* 4. ANIMATION */}
<section style={{ padding: "20px" }}>
  <h3>Animation</h3>
  <div style={{ display: "flex", gap: "15px", overflowX: "auto", marginTop: "15px" }}>
    <div style={{ minWidth: "200px", background: "#1a1a1a", padding: "20px", borderRadius: "12px" }}>
      <p style={{ color: brandLight, fontWeight: "bold" }}>Animated Shorts</p>
      <p style={{ color: "#ccc", fontSize: "13px" }}>For all ages</p>
    </div>
    <div style={{ minWidth: "200px", background: "#1a1a1a", padding: "20px", borderRadius: "12px" }}>
      <p style={{ fontWeight: "bold" }}>Coming Soon</p>
    </div>
  </div>
</section>

   {showJoin && (
  <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.85)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100 }}>
    <div style={{ background: "#1a1a1a", padding: "25px", borderRadius: "12px", width: "90%", maxWidth: "400px", color: "#fff" }}>
      <h3 style={{ margin: "0 0 5px 0" }}>Join BLACKBURN+</h3>
      <p style={{ color: "#FFE600", fontWeight: "bold", margin: "0 0 15px 0" }}>7 DAYS FREE TRIAL • Then R49/mo • Cancel anytime</p>
      <p style={{ fontSize: "13px", color: "#aaa" }}>Get access to ALL films, PLUS content, and Waterloo Festival films.</p>
      <input placeholder="Your Name" style={{ width: "100%", padding: "12px", marginBottom: "10px", borderRadius: "6px", border: "none" }} />
      <input placeholder="Email" style={{ width: "100%", padding: "12px", marginBottom: "10px", borderRadius: "6px", border: "none" }} />
      <input placeholder="Phone / WhatsApp" style={{ width: "100%", padding: "12px", marginBottom: "15px", borderRadius: "6px", border: "none" }} />
      <button onClick={() => { setIsPlus(true); setShowJoin(false); alert("Welcome to PLUS! Your 7-day free trial has started. You can now watch everything."); }} style={{ width: "100%", background: "#00FF66", color: "#000", padding: "14px", border: "none", borderRadius: "8px", fontWeight: "bold", cursor: "pointer" }}>
        START 7-DAY FREE TRIAL
      </button>
      <button onClick={() => setShowJoin(false)} style={{ width: "100%", background: "transparent", color: "#aaa", padding: "10px", border: "none", cursor: "pointer", marginTop: "5px" }}>Close</button>
    </div>
  </div>
)}

    </main>
  );
}
