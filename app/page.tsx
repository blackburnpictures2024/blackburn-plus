"use client";
import { useState } from "react";

export default function Home() {
  const [showJoin, setShowJoin] = useState(false);
  const [isPlus, setIsPlus] = useState(false);
  const [selected, setSelected] = useState<any>(null);

  const films = [
    { title: "Izizwe and the Odd Spirit", tag: "BLACKBURN+ Original", free: true, video: "https://customer-3i7s1ri7gs1vb7n1.cloudflarestream.com/263cec5098ad4ff3ce0b60eb0eef35c9/iframe", thumbnail: "/izizwe.jpg", desc: "Feature Film • 2025 • A Blackburn+ Original" },
    { title: "YOUR NEIGHBOURHOOD", tag: "Waterloo 2026 Selection", free: true, video: "https://customer-3i7s1ri7gs1vb7n1.cloudflarestream.com/b988d4fa48be8de4c813aff623500415/iframe", thumbnail: "/Your-neighbourhood.jpg", desc: "Waterloo Film Festival 2026" },
    { title: "THE GRADUATE", tag: "Waterloo 2026 Selection", free: true, video: "https://customer-3i7s1ri7gs1vb7n1.cloudflarestream.com/5cca5934e039de74b29a7f40e74a6a77/iframe", thumbnail: "/the-graduate.jpg", desc: "Waterloo Film Festival 2026" },
    { title: "THE SECOND", tag: "BLACKBURN Original", free: true, video: "https://customer-3i7s1ri7gs1vb7n1.cloudflarestream.com/67e8ee025cca8d5d3e6ca0ec1df26fc5/iframe", thumbnail: "/THE-SECOND.jpg", desc: "Feature Film • Blackburn Original" },
    { title: "AMAFUNAKONKE", tag: "Waterloo 2026 Selection", free: true, video: "https://customer-3i7s1ri7gs1vb7n1.cloudflarestream.com/06164e6314a6cc9ee01ec2cfc8f36311/iframe", thumbnail: "/amafunakonke.jpg", desc: "Feature Film • Blackburn Original" },
    { title: "ONE TIME PIN", tag: "BLACKBURN Original", free: true, video: "https://customer-3i7s1ri7gs1vb7n1.cloudflarestream.com/fdb1c87cbc71965afb6a3d505f6191a7/iframe", thumbnail: "/one-time-pin.jpeg", desc: "Short Film • Blackburn Original" },
    { title: "NGIKHONA", tag: "Waterloo 2026 Selection", free: true, video: "https://customer-3i7s1ri7gs1vb7n1.cloudflarestream.com/4110c63c3018a5720a5951f4fa9e8ece/iframe", thumbnail: "/ngikhona.jpeg", desc: "Short Film • Blackburn Original" },
  ];

  const brand = "#68663E";
  const brandLight = "#C9A86A";

  const rowStyle: any = { display: "flex", gap: "16px", overflowX: "auto", padding: "10px 20px 20px 20px", scrollSnapType: "x mandatory", scrollbarWidth: "none" };

  const Card = ({ f, rank }: any) => (
    <div onClick={() => setSelected(f)} style={{ minWidth: "320px", maxWidth: "320px", cursor: "pointer", scrollSnapAlign: "start", position: "relative", flexShrink: 0 }}>
      <div style={{ position: "relative", width: "100%", aspectRatio: "16 / 9", borderRadius: "12px", overflow: "hidden", background: "#1a1a1a", border: "1px solid #222" }}>
        <img src={f.thumbnail} alt={f.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        {/* Dark gradient like Prime */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 45%)" }} />
        {/* Rank number - Prime Top 10 style */}
        {rank && <span style={{ position: "absolute", left: "8px", top: "-4px", fontSize: "64px", fontWeight: 900, color: "white", textShadow: "3px 3px 0 #000, -1px -1px 0 #000", lineHeight: 1, zIndex: 2 }}>{rank}</span>}
        {/* FREE badge */}
        <span style={{ position: "absolute", top: "10px", right: "10px", background: "#C9A86A", color: "#000", fontSize: "11px", fontWeight: "bold", padding: "4px 8px", borderRadius: "4px" }}>FREE</span>
        {/* Play button centre on hover feel */}
        <div style={{ position: "absolute", bottom: "10px", left: "12px", right: "12px", zIndex: 2 }}>
          <p style={{ margin: 0, fontWeight: "bold", fontSize: "16px", lineHeight: "1.2", textShadow: "0 2px 6px #000" }}>{f.title}</p>
          <p style={{ margin: "4px 0 0 0", fontSize: "12px", color: "#ccc" }}>{f.tag}</p>
        </div>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "56px", height: "56px", borderRadius: "50%", background: "rgba(0,0,0,0.6)", border: "2px solid white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px" }}>▶</div>
      </div>
    </div>
  );

  return (
    <main style={{ background: "black", color: "white", minHeight: "100vh", margin: 0, padding: 0 }}>
      <header style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 10, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 20px" }}>
        <img src="/logo.png" alt="BLACKBURN+" style={{ width: "200px", height: "auto", display: "block" }} />
        <button onClick={() => setShowJoin(true)} style={{ background: brand, color: "#C9A86A", border: "none", padding: "10px 18px", borderRadius: "20px", fontWeight: "bold", cursor: "pointer" }}>{isPlus ? "PLUS ACTIVE ✓" : "Join PLUS - R49/mo"}</button>
      </header>

      {/* HERO - PRIME STYLE LEFT TEXT */}
      <section style={{ minHeight: "85vh", backgroundImage: "url(/hero-banner.jpeg)", backgroundSize: "cover", backgroundPosition: "center top", display: "flex", alignItems: "flex-end", padding: "40px 20px 60px 20px", position: "relative", boxSizing: "border-box" }}>
        <video autoPlay muted loop playsInline src="/hero.mp4" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 55%, transparent 100%), linear-gradient(to top, rgba(0,0,0,0.95) 0%, transparent 50%)" }} />
        
      </section>

      {/* TOP 10 - PRIME STYLE */}
      <section style={{ paddingTop: "10px" }}>
        <h3 style={{ padding: "0 20px", fontSize: "22px", margin: "10px 0 0 0" }}>🔥 Trending Now - Top 10 in South Africa</h3>
        <div style={rowStyle}>
          {films.map((f, i) => <Card key={f.title} f={f} rank={i + 1} />)}
        </div>
      </section>

      {/* ORIGINALS - BIG LANDSCAPE */}
      <section>
        <h3 style={{ padding: "0 20px", fontSize: "22px" }}>Blackburn Plus Originals</h3>
        <div style={rowStyle}>
          {films.filter(f => f.tag.includes("BLACKBURN")).map((f) => <Card key={f.title} f={f} />)}
        </div>
      </section>

      {/* WATERLOO */}
      <section>
        <h3 style={{ padding: "0 20px", fontSize: "22px" }}>Waterloo Film Festival</h3>
        <div style={rowStyle}>
          {films.filter(f => f.tag.includes("Waterloo")).map((f) => <Card key={f.title} f={f} />)}
        </div>
      </section>

      {/* PODCAST + ANIMATION - ALSO LANDSCAPE NOW */}
      <section style={{ padding: "0 20px 30px 20px" }}>
        <h3 style={{ fontSize: "22px" }}>Podcast & Animation</h3>
        <div style={{ display: "flex", gap: "16px", overflowX: "auto", paddingTop: "10px" }}>
          <div style={{ minWidth: "320px", aspectRatio: "16 / 9", background: "#1a1a1a", borderRadius: "12px", padding: "20px", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
            <p style={{ color: brandLight, fontWeight: "bold", margin: 0 }}>Blackburn+ Podcast</p>
            <p style={{ color: "#ccc", fontSize: "13px" }}>Ep 1 • Stories & Film</p>
          </div>
          <div style={{ minWidth: "320px", aspectRatio: "16 / 9", background: "#1a1a1a", borderRadius: "12px", padding: "20px", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
            <p style={{ fontWeight: "bold", margin: 0 }}>Animated Shorts</p>
            <p style={{ color: "#ccc", fontSize: "13px" }}>For all ages • Coming Soon</p>
          </div>
        </div>
      </section>

      {/* DETAIL POPUP WHEN YOU CLICK A CARD */}
      {selected && (
        <div onClick={() => setSelected(null)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, padding: "16px" }}>
          <div onClick={(e) => e.stopPropagation()} style={{ background: "#111", borderRadius: "14px", width: "100%", maxWidth: "720px", overflow: "hidden" }}>
            <img src={selected.thumbnail} style={{ width: "100%", aspectRatio: "16 / 9", objectFit: "cover" }} />
            <div style={{ padding: "20px" }}>
              <h2 style={{ margin: 0 }}>{selected.title}</h2>
              <p style={{ color: "#aaa" }}>{selected.tag} • {selected.desc}</p>
              <a href={selected.video} target="_blank" style={{ display: "block", marginTop: "14px", background: "white", color: "black", textAlign: "center", padding: "14px", borderRadius: "8px", fontWeight: "bold", textDecoration: "none" }}>▶ WATCH NOW - FREE</a>
              <button onClick={() => setSelected(null)} style={{ width: "100%", background: "transparent", color: "#aaa", padding: "10px", border: "none", cursor: "pointer", marginTop: "6px" }}>Close</button>
            </div>
          </div>
        </div>
      )}

      {showJoin && (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.85)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100 }}>
          <div style={{ background: "#1a1a1a", padding: "25px", borderRadius: "12px", width: "90%", maxWidth: "400px", color: "#fff" }}>
            <h3 style={{ margin: "0 0 5px 0" }}>Join BLACKBURN+</h3>
            <p style={{ color: "#C9A86A", fontWeight: "bold", margin: "0 0 15px 0" }}>7 DAYS FREE TRIAL • Then R49/mo • Cancel anytime</p>
            <input placeholder="Your Name" style={{ width: "100%", padding: "12px", marginBottom: "10px", borderRadius: "6px", border: "none", boxSizing: "border-box" }} />
            <input placeholder="Email" style={{ width: "100%", padding: "12px", marginBottom: "10px", borderRadius: "6px", border: "none", boxSizing: "border-box" }} />
            <input placeholder="Phone / WhatsApp" style={{ width: "100%", padding: "12px", marginBottom: "15px", borderRadius: "6px", border: "none", boxSizing: "border-box" }} />
            <button onClick={() => { setIsPlus(true); setShowJoin(false); alert("Welcome to PLUS! Your 7-day free trial has started."); }} style={{ width: "100%", background: "#68663E", color: "#000", padding: "14px", border: "none", borderRadius: "8px", fontWeight: "bold", cursor: "pointer" }}>START 7-DAY FREE TRIAL</button>
            <button onClick={() => setShowJoin(false)} style={{ width: "100%", background: "transparent", color: "#aaa", padding: "10px", border: "none", cursor: "pointer", marginTop: "5px" }}>Close</button>
          </div>
        </div>
      )}
    </main>
  );
}
