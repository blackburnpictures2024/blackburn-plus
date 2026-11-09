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
        <img src="/logo.png" alt="BLACKBURN+" style={{ height: "120px", width: "auto" }} />
        <button style={{ background: brand, color: "white", border: "none", padding: "10px 18px", borderRadius: "20px", fontWeight: "bold" }}>Join PLUS - R49/mo</button>
      </header>

      <section style={{ padding: "60px 20px" }}>
        <p style={{ color: brandLight, fontWeight: "bold", letterSpacing: "2px" }}>FEATURED ORIGINAL</p>
        <h2 style={{ fontSize: "48px", margin: "10px 0" }}>Izizwe and the odd Spirit</h2>
        <p style={{ color: "#ccc", maxWidth: "500px" }}>Innocense tested. A film by Siyabonga Godfrey Dlamini.</p>
        <img src="/izizwe.jpg" alt="Izizwe Poster" style={{ width: "100%", maxWidth: "600px", borderRadius: "16px", marginTop: "20px" }} />

        <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
         <a href="https://youtu.be/his1laC8EbM" target="_blank" style={{ background: "white", color: "black", padding: "12px 24px", border: "none", borderRadius: "8px", fontWeight: "bold", textDecoration: "none" }}>▶ Watch Trailer</a>
<a href="https://youtu.be/tNLXI5cAQ4Q" target="_blank" style={{ background: brand, color: "white", padding: "12px 24px", border: "none", borderRadius: "8px", fontWeight: "bold", textDecoration: "none" }}>▶ Watch Film - FREE</a>

        </div>
      </section>

      <section style={{ padding: "20px" }}>
        <h3>Waterloo 2026 Selections</h3>
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
      </section>
    </main>
  );
}
