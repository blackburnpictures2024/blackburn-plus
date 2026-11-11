export default function Home() {
  const films = [
    { title: "Izizwe and the Odd Spirit", tag: "BLACKBURN+ Original", free: true },
    { title: "Phoenix Rising", tag: "Waterloo 2026 Selection", free: true },
    { title: "Verulam", tag: "Waterloo 2026 Selection", free: false },
    { title: "KZN Directors Spotlight", tag: "Docs", free: true },
  ];
  const brand = "#68653D";
  const brandLight = "#9A9770";

  return (
    <main style={{ background: "black", color: "white", minHeight: "100vh", fontFamily: "sans-serif" }}>
      <header style={{ display: "flex", justifyContent: "space-between", padding: "20px", alignItems: "center" }}>
<img src="/logo.png" alt="BLACKBURN+" style={{ width: "100%", maxWidth: "950px", height: "auto", objectFit: "contain" }} />

        <button style={{ background: brand, color: "white", border: "none", padding: "10px 18px", borderRadius: "20px", fontWeight: "bold" }}>Join PLUS - R49/mo</button>
      </header>

     <section style={{ padding: "10px 20px 60px 20px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>

  {/* LEFT - IZIZWE */}
  <div style={{ flex: 1 }}>
    <p style={{ color: brandLight, fontWeight: "bold", letterSpacing: "2px" }}>FEATURED ORIGINAL</p>
    <h2 style={{ fontSize: "48px", margin: "8px 0" }}>Izizwe and the Odd Spirit</h2>
    <p style={{ color: "#ccc", maxWidth: "500px" }}>Innocence tested. A film by Siyabonga Godfrey Dlamini.</p>
    
    <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
      <a href="https://youtu.be/hs1laCeB6M" target="_blank" style={{ background: brand, color: "white", padding: "12px 20px", borderRadius: "8px", textDecoration: "none", fontWeight: "bold" }}>▶ Watch Trailer</a>
      <a href="https://youtu.be/DHLX15cAQ40" target="_blank" style={{ background: "white", color: "black", padding: "12px 20px", borderRadius: "8px", textDecoration: "none", fontWeight: "bold" }}>Watch Film</a>
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
            <div key={f.title} style={{ minWidth: "200px", background: "#1a1a1a", padding: "20px", borderRadius: "12px", borderTop: `3px solid ${brand}` }}>
              <div style={{ height: "110px", background: "#333", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "32px" }}>🎬</div>
              <h4 style={{ marginTop: "12px" }}>{f.title}</h4>
              <p style={{ color: "#999", fontSize: "13px" }}>{f.tag}</p>
              <p style={{ color: f.free ? "#4ade80" : brandLight, fontWeight: "bold", fontSize: "13px" }}>{f.free ? "FREE" : "PLUS R49"}</p>
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

    </main>
  );
}
