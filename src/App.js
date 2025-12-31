// src/App.js
import React, { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Routes, Route, NavLink, useLocation } from "react-router-dom";
import "./App.css";

import logo from "./Logo_CelcomDigi.svg";
import bannerHome from "./assets/banner-1.png";
import bannerFibre from "./assets/banner-3.png";
import bannerContact from "./assets/banner-2.png";


// ✅ put your header image in: src/assets/header-banner.png
import headerBanner from "./assets/banner.png";

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

function AppShell() {
  const location = useLocation();

  const path = location.pathname;

// Banner mapping
const bannerSrc =
  path.startsWith("/fibre") ? bannerFibre :
  path.startsWith("/contact") ? bannerContact :
  bannerHome;

// hide banner on apply page
const showBanner = !path.startsWith("/apply");


  useEffect(() => {
    const path = location.pathname;
    const classes = ["bg-home", "bg-fibre", "bg-contact"];
    document.body.classList.remove(...classes);

    // keep same background everywhere (as you already do)
    document.body.classList.add("bg-home");
  }, [location.pathname]);

  return (
    <div className="app">
      {/* Header (Logo bar) */}
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

      {showBanner && (
  <div className="page-banner">
    <img src={bannerSrc} alt="Page banner" />
  </div>
)}


      {/* Routes */}
      <main className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fibre" element={<FibrePage />} />
          <Route path="/apply" element={<ApplyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />

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
        subtitle: "Choose your speed • Check coverage • Submit interest",
        text:
          "Compare Fibre speeds and estimate monthly cost instantly. Check coverage by postcode and submit your interest for installation (demo).",
        highlights: ["Free install promo (demo)", "WiFi 6 ready", "Fast appointment (demo)"],
        img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=80",
        link: "/fibre",
        btn: "View Fibre",
        layout: "image-left",
      },
      {
        title: "Need Help?",
        subtitle: "Sales support • WhatsApp • Email",
        text:
          "Not sure which plan fits you? Contact our team for recommendations, coverage checks, and installation guidance.",
        highlights: ["Quick response (demo)", "Step-by-step guidance", "Support hours 24/7 (demo)"],
        img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1400&q=80",
        link: "/contact",
        btn: "Contact Us",
        layout: "image-right",
      },
    ],
    []
  );

  return (
    <section className="home-wrap">
      {/* Hero */}
      <div className="hero hero-upgraded">
        <h1>Apply CelcomDigi Plan</h1>
        <p>Fast &amp; simple registration for Fibre plans.</p>

        <div className="hero-mini">
          <span className="hero-chip">Coverage check</span>
          <span className="hero-chip">Price estimate</span>
          <span className="hero-chip">Submit interest</span>
        </div>
      </div>

      {/* Split Cards */}
      <div className="split-card-grid">
        {cards.map((card) => (
          <div
            className={`split-card ${card.layout === "image-right" ? "reverse" : ""}`}
            key={card.title}
          >
            {/* Image */}
            <div className="split-card-media">
              <img src={card.img} alt={card.title} />
              <div className="split-card-badge">{card.badge}</div>
            </div>

            {/* Content */}
            <div className="split-card-body">
              <h2>{card.title}</h2>
              <p className="split-subtitle">{card.subtitle}</p>

              <p className="split-text">{card.text}</p>

              <ul className="split-list">
                {card.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              <div className="split-actions">
                <NavLink className="primary-btn" to={card.link}>
                  {card.btn}
                </NavLink>
                <span className="split-note">Demo UI • Replace with live data later</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


/* ===============================
   FIBRE PAGE
   =============================== */
function FibrePage() {
  const speeds = [100, 300, 500, 1000, 2000];

  const [speed, setSpeed] = useState(500);
  const [hasPostpaid, setHasPostpaid] = useState(false);

  const basePriceMap = {
    100: 129,
    300: 149,
    500: 159,
    1000: 189,
    2000: 249,
  };

  const rebate = hasPostpaid ? 10 : 0;
  const base = basePriceMap[speed] ?? 159;
  const monthly = Math.max(base - rebate, 0);

  const speedIndex = speeds.indexOf(speed);

  return (
    <section className="fibre-wrap">
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

              <div className="slider-selected">{speed >= 1000 ? `${speed / 1000}Gbps` : `${speed}Mbps`}</div>
            </div>

            <div className="calc-divider" />

            <div className="toggle-row-cd">
              <div className="toggle-label">Adakah anda mempunyai pelan pascabayar RM60 ke atas dengan kami?</div>

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
            <div className="sum-total-label">
              Kos bulanan <span>(selama 24 bulan)</span>
            </div>
            <div className="sum-total-price">RM{monthly}</div>
          </div>
        </div>

        <div className="summary-offer">
          <div className="offer-title">Tawaran Semasa</div>
          <div className="offer-sub">Percuma Router WiFi 6 + Mesh Node</div>
        </div>

        <div className="apply-cta">
  <NavLink to="/apply" className="apply-btn">
    Apply Now
  </NavLink>
  <p className="apply-note">
    Proceed to submit your personal details and required documents.
  </p>
</div>

      </div>
    </section>
  );
}

/* ===============================
   APPLY PAGE
   =============================== */
function ApplyPage() {
  const [form, setForm] = useState({
    name: "",
    ic: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application submitted (demo only).");
  };

  return (
    <section className="apply-card">
      <h2>Fibre Application Form</h2>
      <p className="apply-subtitle">
        Please fill in your details and upload required documents.
      </p>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Full Name</label>
          <input name="name" value={form.name} onChange={handleChange} required />
        </div>

        <div className="form-row">
          <label>IC / Passport Number</label>
          <input name="ic" value={form.ic} onChange={handleChange} required />
        </div>

        <div className="form-row inline">
          <div>
            <label>Phone Number</label>
            <input name="phone" value={form.phone} onChange={handleChange} required />
          </div>
          <div>
            <label>Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-row">
          <label>Installation Address</label>
          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="House / Unit No, Street, City"
            required
          />
        </div>

        <div className="form-row">
          <label>Upload IC / Proof of Address</label>
          <input type="file" accept="image/*,.pdf" />
        </div>

        <div className="form-row">
          <label>Upload Supporting Document (optional)</label>
          <input type="file" accept="image/*,.pdf" />
        </div>

        <div className="fibre-actions">
          <button type="submit" className="submit-btn">
            Submit Application
          </button>

          <NavLink to="/fibre" className="ghost-btn">
            Back to Fibre
          </NavLink>
        </div>

        <p className="fibre-fineprint">
          *This is a demo form. No data is stored.
        </p>
      </form>
    </section>
  );
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
