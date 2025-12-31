// src/App.js
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
   HOME PAGE (only Fibre + Contact)
   =============================== */
function HomePage() {
  const cards = useMemo(
    () => [
      {
        title: "Fibre Plans",
        text: "Check coverage, compare speeds, and submit interest for Fibre installation.",
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
   FIBRE PAGE
   =============================== */
function FibrePage() {
  // Campaign-like plan set (you can change prices later)
  const planOptions = useMemo(
    () => [
      { speed: 100, label: "100Mbps", price: "RM89", blurb: "Best for basic browsing" },
      { speed: 300, label: "300Mbps", price: "RM109", blurb: "Best for WFH + streaming", recommended: true },
      { speed: 500, label: "500Mbps", price: "RM129", blurb: "Best for family usage" },
      { speed: 1000, label: "1Gbps", price: "RM189", blurb: "Best for heavy streaming" },
      { speed: 2000, label: "2Gbps", price: "RM249", blurb: "Best for power users" },
    ],
    []
  );

  const promoBadges = useMemo(
    () => ["Free installation (promo)", "Fast appointment", "24/7 support (demo)", "Mesh WiFi option"],
    []
  );

  const [step, setStep] = useState(1);

  const [coverage, setCoverage] = useState({
    name: "",
    phone: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postcode: "",
    speed: 300,
    consent: false,
  });

  const [result, setResult] = useState(null); // { ok: boolean, msg: string }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCoverage((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  };

  const selectSpeed = (s) => setCoverage((p) => ({ ...p, speed: s }));

  const validateStep1 = () => {
    if (!coverage.address1 || !coverage.city || !coverage.state || !coverage.postcode) {
      setResult({ ok: false, msg: "Please fill Address Line 1, City, State and Postcode." });
      return false;
    }
    setResult(null);
    return true;
  };

  const validateStep2 = () => {
    if (!coverage.name || !coverage.phone || !coverage.email) {
      setResult({ ok: false, msg: "Please fill Name, Phone, and Email." });
      return false;
    }
    if (!coverage.consent) {
      setResult({ ok: false, msg: "Please tick consent to proceed." });
      return false;
    }
    setResult(null);
    return true;
  };

  const handleCheckCoverage = (e) => {
    e.preventDefault();
    if (!validateStep1()) return;

    // Demo coverage logic (no API)
    const pc = String(coverage.postcode || "").trim();
    const lastDigit = pc ? parseInt(pc[pc.length - 1], 10) : 0;
    const ok = Number.isFinite(lastDigit) ? lastDigit % 2 === 0 : true;

    if (ok) {
      setResult({
        ok: true,
        msg: `Good news! Fibre is likely available for your area (demo). Recommended: ${formatSpeed(coverage.speed)}.`,
      });
      setStep(2);
    } else {
      setResult({
        ok: false,
        msg: "Coverage is uncertain for this area (demo). You can still submit interest and we will contact you.",
      });
      setStep(2);
    }
  };

  const handleSubmitInterest = (e) => {
    e.preventDefault();
    if (!validateStep2()) return;

    alert(
      `Fibre interest submitted (demo).\n\nSelected: ${formatSpeed(coverage.speed)}\nName: ${coverage.name}\nPhone: ${coverage.phone}\nEmail: ${coverage.email}`
    );

    setCoverage((p) => ({ ...p, name: "", phone: "", email: "", consent: false }));
  };

  return (
    <section className="form-card">
      <div className="fibre-header">
        <div>
          <h2 className="fibre-title">Fibre Plans</h2>
          <p className="fibre-subtitle">
            Check coverage, pick your speed, then submit interest for installation. (Demo page)
          </p>
        </div>

        <div className="fibre-badges">
          {promoBadges.map((b) => (
            <span className="fibre-badge" key={b}>
              {b}
            </span>
          ))}
        </div>
      </div>

      <div className="fibre-steps">
        <StepPill active={step === 1} label="1) Check Coverage" />
        <StepPill active={step === 2} label="2) Submit Interest" />
      </div>

      {/* Campaign-like scrollable plan cards */}
      <div className="fibre-speed">
        <p className="fibre-speed-label">Choose speed</p>

        <div className="plan-scroll" role="list">
          {planOptions.map((p) => (
            <button
              key={p.speed}
              type="button"
              className={`plan-tile ${coverage.speed === p.speed ? "active" : ""} ${
                p.recommended ? "recommended" : ""
              }`}
              onClick={() => selectSpeed(p.speed)}
            >
              {p.recommended && <div className="plan-ribbon">Recommended</div>}

              <div className="plan-speed">{p.label}</div>

              <div className="plan-price">
                <span className="plan-price-num">{p.price}</span>
                <span className="plan-price-sub">/month</span>
              </div>

              <div className="plan-desc">{p.blurb}</div>

              <ul className="plan-feats">
                <li>Unlimited data</li>
                <li>WiFi 6 ready (demo)</li>
                <li>Free install promo</li>
              </ul>

              <div className="plan-cta">{coverage.speed === p.speed ? "Selected" : "Select plan"}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Result banner */}
      {result && (
        <div className={`fibre-alert ${result.ok ? "ok" : "warn"}`} role="status">
          <b>{result.ok ? "Coverage Result:" : "Notice:"}</b> {result.msg}
        </div>
      )}

      {/* Step 1: Coverage */}
      <form className="form" onSubmit={handleCheckCoverage}>
        <h3>Service Address</h3>

        <div className="form-row">
          <label>Address Line 1</label>
          <input
            type="text"
            name="address1"
            value={coverage.address1}
            onChange={handleChange}
            placeholder="House/Unit No, Street"
            required
          />
        </div>

        <div className="form-row">
          <label>Address Line 2 (Optional)</label>
          <input
            type="text"
            name="address2"
            value={coverage.address2}
            onChange={handleChange}
            placeholder="Building / Apartment / Floor"
          />
        </div>

        <div className="form-row inline">
          <div>
            <label>City</label>
            <input type="text" name="city" value={coverage.city} onChange={handleChange} required />
          </div>
          <div>
            <label>State</label>
            <input type="text" name="state" value={coverage.state} onChange={handleChange} required placeholder="Selangor" />
          </div>
        </div>

        <div className="form-row inline">
          <div>
            <label>Postcode</label>
            <input type="text" name="postcode" value={coverage.postcode} onChange={handleChange} required placeholder="43000" />
          </div>
          <div>
            <label>Selected Speed</label>
            <input type="text" value={formatSpeed(coverage.speed)} readOnly />
          </div>
        </div>

        <div className="fibre-actions">
          <button type="submit" className="submit-btn">
            Check Coverage
          </button>

          <button
            type="button"
            className="ghost-btn"
            onClick={() => {
              if (!validateStep1()) return;
              setResult({ ok: true, msg: "You can submit interest now (demo)." });
              setStep(2);
            }}
          >
            Skip &amp; Submit Interest
          </button>
        </div>
      </form>

      {/* Step 2: Interest */}
      <form className="form" onSubmit={handleSubmitInterest}>
        <h3>Contact Details</h3>

        <div className="form-row">
          <label>Full Name</label>
          <input type="text" name="name" value={coverage.name} onChange={handleChange} required />
        </div>

        <div className="form-row inline">
          <div>
            <label>Phone Number</label>
            <input type="tel" name="phone" value={coverage.phone} onChange={handleChange} required />
          </div>
          <div>
            <label>Email</label>
            <input type="email" name="email" value={coverage.email} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-row checkbox-row">
          <label>
            <input type="checkbox" name="consent" checked={coverage.consent} onChange={handleChange} /> I agree to be contacted about Fibre services.
          </label>
        </div>

        <div className="fibre-actions">
          <button type="submit" className="submit-btn">
            Submit Interest
          </button>

          <button type="button" className="ghost-btn" onClick={() => setStep(1)}>
            Back to Coverage
          </button>
        </div>

        <div className="fibre-fineprint">*This is a UI demo. Replace alerts with real API submission later.</div>
      </form>
    </section>
  );
}

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
