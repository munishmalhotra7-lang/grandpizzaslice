import React from "react";

export default function HomePage() {
  const slides = [
    { id: 1, title: "Hot & Fresh Pizzas", subtitle: "Made with love in Akhnoor", img: "/hero.jpg" },
    { id: 2, title: "New Flavors Everyday", subtitle: "Try our chef specials", img: "/pizzaz1.jpg" },
    { id: 3, title: "Crispy Thin Crust", subtitle: "Perfect bite every time", img: "/pizzaz2.jpg" }
  ];

  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <div style={styles.logo}>Grand Pizza Slice</div>
        <nav style={styles.nav}>
          <a href="#menu" style={styles.navLink}>Menu</a>
          <a href="#about" style={styles.navLink}>About</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
        </nav>
      </header>

      <section style={styles.heroSection}>
        <div style={styles.heroInner}>
          {slides.map(s => (
            <article key={s.id} style={styles.slide}>
              <img src={s.img} alt={s.title} style={styles.slideImg} />
              <div style={styles.slideText}>
                <h1 style={styles.slideTitle}>{s.title}</h1>
                <p style={styles.slideSubtitle}>{s.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="menu" style={styles.menuSection}>
        <h2 style={styles.sectionTitle}>Our Menu</h2>
        <div style={styles.cardGrid}>
          <div style={styles.card}>
            <h3>Margherita</h3>
            <p>Classic cheese & tomato</p>
            <p style={styles.price}>₹149</p>
          </div>
          <div style={styles.card}>
            <h3>Pepperoni</h3>
            <p>Loaded with pepperoni slices</p>
            <p style={styles.price}>₹249</p>
          </div>
          <div style={styles.card}>
            <h3>Veggie Delight</h3>
            <p>Onions, capsicum, olives</p>
            <p style={styles.price}>₹199</p>
          </div>
        </div>
      </section>

      <section id="about" style={styles.aboutSection}>
        <h2 style={styles.sectionTitle}>About Us</h2>
        <p style={styles.aboutText}>
          Grand Pizza Slice - fresh, hot and made with love. Visit our store in Akhnoor or order online.
        </p>
      </section>

      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} Grand Pizza Slice — +91 9103399555</p>
      </footer>
    </main>
  );
}

/* Inline styles so you can paste directly (replace with CSS / Tailwind later) */
const styles: { [k: string]: React.CSSProperties } = {
  page: {
    fontFamily: "Inter, system-ui, sans-serif",
    background: "#0b0b0b",
    color: "#f3f4f6",
    minHeight: "100vh",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 28px",
    borderBottom: "1px solid rgba(255,255,255,0.04)",
    position: "sticky",
    top: 0,
    background: "rgba(11,11,11,0.85)",
    zIndex: 50
  },
  logo: { fontWeight: 700, fontSize: 20 },
  nav: { display: "flex", gap: 16 },
  navLink: { color: "#ddd", textDecoration: "none", fontSize: 14 },

  heroSection: {
    padding: "28px",
  },
  heroInner: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 18
  },
  slide: {
    background: "#111",
    borderRadius: 12,
    overflow: "hidden",
    boxShadow: "0 6px 18px rgba(0,0,0,0.6)",
    minHeight: 220,
    display: "flex",
    flexDirection: "column"
  },
  slideImg: {
    width: "100%",
    height: 140,
    objectFit: "cover",
    display: "block"
  },
  slideText: { padding: 12 },
  slideTitle: { margin: 0, fontSize: 18 },
  slideSubtitle: { margin: "6px 0 0 0", color: "#bfc4c9" },

  menuSection: { padding: "28px" },
  sectionTitle: { margin: "0 0 12px 0" },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: 12
  },
  card: {
    background: "#0f0f0f",
    borderRadius: 10,
    padding: 14,
    border: "1px solid rgba(255,255,255,0.03)"
  },
  price: { marginTop: 8, fontWeight: 700 },
  aboutSection: { padding: "28px" },
  aboutText: { color: "#c9c9c9", maxWidth: 800 },

  footer: {
    padding: "18px 28px",
    borderTop: "1px solid rgba(255,255,255,0.04)",
    marginTop: 22,
    textAlign: "center",
    color: "#9aa0a6"
  }
};
