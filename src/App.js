import React, { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Routes, Route, NavLink, useLocation } from "react-router-dom";
import "./App.css";
import logo from "./Logo_CelcomDigi.svg";

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

function AppShell() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const classes = ["bg-home", "bg-fibre", "bg-contact"];
    document.body.classList.remove(...classes);

    // Backgrounds (you can keep all bg-home if you want)
    if (path === "/") document.body.classList.add("bg-home");
    else if (path.startsWith("/fibre")) document.body.classList.add("bg-home");
    else if (path.startsWith("/contact")) document.body.classList.add("bg-home");
    else document.body.classList.add("bg-home");
  }, [location.pathname]);

  return (
    <div className="app">
      {/* Header */}
      <header>
        <div className="top-header">
          <div className="logo-area">
            <img src={logo} alt="CelcomDigi Logo" className="logo-img" />
          </div>
        </div>
      </header>

      {/* Nav */}
      <nav className="nav-menu">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/fibre">Fibre</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      {/* Routes */}
      <main className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fibre" element={<FibrePage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* fallback */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div>
          <h4>Customer Support</h4>
          <p>Billing &amp; technical: 1800-xx-xxxx</p>
        </div>
        <div>
          <h4>Sales &amp; WhatsApp</h4>
          <p>Sales: +60 11-xxxx xxxx</p>
          <p>WhatsApp: wa.me/60xxx</p>
        </div>
        <div>
          <h4>Email</h4>
          <p>Email: sales@celcomdigi.com.my</p>
        </div>
        <p className="footer-bottom">Celcomdigi Distributor © 2025. All Rights Reserved. (Demo)</p>
      </footer>
    </div>
  );
}

/* ===============================
   HOME PAGE
   =============================== */
function HomePage() {
  const cards = useMemo(
    () => [
      {
        title: "Fibre Plans",
        text: "Pick your speed, check coverage, and submit interest for Fibre installation.",
        img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=80",
        link: "/fibre",
        btn: "View Fibre",
      },
      {
        title: "Need Help?",
        text: "Contact our sales team or customer support anytime.",
        img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1400&q=80",
        link: "/contact",
        btn: "Contact Us",
      },
    ],
    []
  );

  return (
    <section className="home-wrap">
      <div className="hero">
        <h1>Apply CelcomDigi Plan</h1>
        <p>Fast &amp; simple registration for Fibre plans.</p>
      </div>

      <div className="card-grid">
        {cards.map((card) => (
          <div className="floating-card" key={card.title}>
            <div className="floating-card-img">
              <img src={card.img} alt={card.title} />
            </div>

            <div className="floating-card-content">
              <h2>{card.title}</h2>
              <p>{card.text}</p>

              <div className="floating-card-actions">
                <NavLink className="primary-btn" to={card.link}>
                  {card.btn}
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ===============================
   FIBRE PAGE (ONE CARD THAT UPDATES)
   =============================== */
function FibrePage() {
  const speeds = [100, 300, 500, 1000, 2000];

  const [speed, setSpeed] = useState(500);
  const [hasPostpaid, setHasPostpaid] = useState(false);

  // DEMO pricing (adjust to match real CelcomDigi later)
  const basePriceMap = {
    100: 129,
    300: 149,
    500: 159,
    1000: 189,
    2000: 249,
  };

  const rebate = hasPostpaid ? 10 : 0; // demo rebate
  const base = basePriceMap[speed] ?? 159;
  const monthly = Math.max(base - rebate, 0);

  const speedIndex = speeds.indexOf(speed);

  return (
    <section className="fibre-wrap">
      {/* TOP PROMO CARD */}
      <div className="fibre-hero-card">
        <div className="fibre-hero-left">
          <h2>Tambah fiber ke pelan pascabayar anda untuk lebih banyak rebat</h2>
          <p>Hitung pelan gabungan fiber dan postpaid anda di sini.</p>
        </div>

        <div className="fibre-hero-right">
          <div className="calc-card">
            <div className="calc-title">Pilih kelajuan Internet yang anda inginkan (Mbps)</div>

            <div className="slider-wrap">
              <input
                className="cd-slider"
                type="range"
                min={0}
                max={speeds.length - 1}
                step={1}
                value={speedIndex}
                onChange={(e) => setSpeed(speeds[Number(e.target.value)])}
              />

              <div className="slider-ticks">
  {speeds.map((s) => (
    <span key={s} className={`tick ${s === speed ? "active" : ""}`}>
      {s}
    </span>
  ))}
</div>

              <div className="slider-selected">
                {speed >= 1000 ? `${speed / 1000}Gbps` : `${speed}Mbps`}
              </div>
            </div>

            <div className="calc-divider" />

            <div className="toggle-row-cd">
              <div className="toggle-label">
                Adakah anda mempunyai pelan pascabayar RM60 ke atas dengan kami?
              </div>

              <div className="toggle-box">
                <span className={`toggle-pill ${!hasPostpaid ? "on" : ""}`}>Tidak</span>

                <button
                  type="button"
                  className={`cd-switch ${hasPostpaid ? "on" : ""}`}
                  onClick={() => setHasPostpaid((v) => !v)}
                  aria-label="toggle postpaid"
                >
                  <span className="cd-knob" />
                </button>

                <span className={`toggle-pill ${hasPostpaid ? "on" : ""}`}>Ya</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SUMMARY CARD */}
      <div className="summary-card">
        <div className="summary-head">Ringkasan harga</div>

        <div className="summary-body">
          <div className="sum-row">
            <span>Fibre {speed >= 1000 ? `${speed / 1000}Gbps` : `${speed}Mbps`}</span>
            <span className="sum-val">RM{base}</span>
          </div>

          <div className="sum-row">
            <span>Rebat bulanan</span>
            <span className="sum-val">-RM{rebate}</span>
          </div>

          <div className="sum-line" />

          <div className="sum-total">
            <div className="sum-total-label">Kos bulanan <span>(selama 24 bulan)</span></div>
            <div className="sum-total-price">RM{monthly}</div>
          </div>
        </div>

        <div className="summary-offer">
          <div className="offer-title">Tawaran Semasa</div>
          <div className="offer-sub">Percuma Router WiFi 6 + Mesh Node</div>
        </div>
      </div>
    </section>
  );
}


/* Small helpers */
function StepPill({ active, label }) {
  return <span className={`step-pill ${active ? "active" : ""}`}>{label}</span>;
}

function formatSpeed(speed) {
  return speed >= 1000 ? `${speed / 1000}Gbps` : `${speed}Mbps`;
}

/* ===============================
   CONTACT PAGE
   =============================== */
function ContactPage() {
  return (
    <section className="form-card">
      <h2>Contact</h2>
      <p>
        <b>Customer Support:</b> 1800-xx-xxxx
      </p>
      <p>
        <b>Sales:</b> +60 11-xxxx xxxx
      </p>
      <p>
        <b>WhatsApp:</b> wa.me/60xxx
      </p>
      <p>
        <b>Email:</b> sales@celcomdigi.com.my
      </p>
    </section>
  );
}
