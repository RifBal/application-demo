import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route, NavLink, useLocation } from "react-router-dom";
import "./App.css";

import logo from "./Logo_CelcomDigi.svg";
import bannerHome from "./assets/banners/banner-1.webp";
import bannerFibre from "./assets/banners/banner-3.webp";
import bannerContact from "./assets/banners/banner-2.webp";

import wifiIcon from "./assets/icons/1.svg";
import calendarIcon from "./assets/icons/4.svg";
import moneyIcon from "./assets/icons/2.svg";

import promo1 from "./assets/promo/promo1.webp";
import promo2 from "./assets/promo/promo2.webp";
import promo3 from "./assets/promo/promo3.webp";
import promo4 from "./assets/promo/promo4.webp";

export default function App() {
  return (
    <BrowserRouter basename="/application-demo">
      <AppShell />
    </BrowserRouter>
  );
}


function AppShell() {
  const location = useLocation();
  const path = location.pathname;

  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "my");
  useEffect(() => localStorage.setItem("lang", lang), [lang]);

  const texts = {
    my: {
      // NAV
      nav_home: "Utama",
      nav_fibre: "Fibre",
      nav_contact: "Hubungi",

      // FOOTER
      footer_support_title: "Khidmat Pelanggan",
      footer_support_desc: "Bil & teknikal: 1800-xx-xxxx",
      footer_sales_title: "Jualan & WhatsApp",
      footer_sales_desc1: "Jualan: +60 11-xxxx xxxx",
      footer_sales_desc2: "WhatsApp: wa.me/60xxx",

      // HOME
      home_title: "Pascabayar & Fibre Jadi Lebih Mudah",
      home_desc:
        "Nikmati internet Fibre pantas dan stabil untuk penstriman, permainan dalam talian dan pelayaran web tanpa gangguan. Banding pelan yang sesuai dan teruskan ke kalkulator Fibre.",
      home_btn_fibre: "Terokai Pelan Fibre",
      home_btn_more: "Maklumat Lanjut",

      mini_1_title: "Kelajuan 5G",
      mini_1_sub: "Pelan sedia 5G dengan kelajuan pantas!",
      mini_2_title: "24 Bulan",
      mini_2_sub: "Bundle sehingga 24 bulan",
      mini_3_title: "Pakej Jimat",
      mini_3_sub: "Nikmati rebat sebanyak RM120 setahun!",

      promo_title: "Promosi & Tawaran",
      promos: [
        {
          title: "Alami Internet 5G tanpa had & pantas — dari RM25/bulan",
          desc: "Pelan bernilai untuk kegunaan harian, penstriman, dan media sosial.",
        },
        {
          title: "Telefon percuma + Akses Viu Premium percuma selama 12 bulan",
          desc: "Gabungkan pelan yang sesuai untuk nikmati penjimatan tambahan.",
        },
        {
          title: "Ansuran termudah untuk telefon 5G terkini dari RM1/bln",
          desc: "Pilihan ansuran fleksibel dengan pelan yang berpatutan.",
        },
        {
          title: "Spark — eSIM, tanpa kedai, pelan anda, kawalan anda",
          desc: "Aktifkan, urus dan kawal pelan dengan lebih mudah.",
        },
      ],

      postpaid_title: "Pilihan Pascabayar Popular",
      postpaid_sub: "Perbandingan ringkas sebelum anda sambung ke kalkulator Fibre.",
      plans: [
        { name: "Pascabayar 80", price: "RM80/bulan", note: "Untuk kegunaan santai" },
        { name: "Pascabayar 100", price: "RM100/bulan", note: "Paling berbaloi" },
        { name: "Pascabayar 120", price: "RM120/bulan", note: "Untuk pengguna tegar" },
      ],
      plan_btn_bundle: "Gabung dengan Fibre",

      // FIBRE
      fibre_title: "Tambah fiber ke pelan pascabayar anda untuk lebih banyak rebat",
      fibre_sub: "Hitung pelan gabungan fiber dan postpaid anda di sini.",
      fibre_calc_title: "Pilih kelajuan Internet yang anda inginkan (Mbps)",
      fibre_toggle_q: "Adakah anda mempunyai pelan pascabayar RM60 ke atas dengan kami?",
      no: "Tidak",
      yes: "Ya",
      summary_title: "Ringkasan harga",
      summary_rebate: "Rebat bulanan",
      summary_monthly: "Kos bulanan",
      summary_24: "(selama 24 bulan)",
      offer_title: "Tawaran Semasa",
      offer_sub: "Percuma Router WiFi 6 + Mesh Node",
      apply_now: "Mohon Sekarang",

      // CONTACT
      contact_title: "Hubungi Kami",
      contact_sub:
        "Hubungi pasukan kami untuk cadangan pelan, semakan liputan dan panduan pemasangan.",
      contact_support_title: "Khidmat Pelanggan",
      contact_support_desc: "Bil & teknikal: 1800-xx-xxxx",
      contact_sales_title: "Jualan & WhatsApp",
      contact_sales_desc1: "Jualan: +60 11-xxxx xxxx",
      contact_sales_desc2: "WhatsApp: wa.me/60xxx",
      contact_email_title: "Emel",
      contact_email_desc: "sales@celcomdigi.com.my",

      //FIBRE
      fibre_title: "Tambah fiber ke pelan pascabayar anda untuk lebih banyak rebat",
      fibre_sub: "Hitung pelan gabungan fiber dan postpaid anda di sini.",
      fibre_pick_speed: "Pilih kelajuan Internet yang anda inginkan (Mbps)",
      fibre_q_postpaid: "Adakah anda mempunyai pelan pascabayar RM60 ke atas dengan kami?",
      yes: "Ya",
      no: "Tidak",
      fibre_summary_title: "Ringkasan harga",
      fibre_label: "Fibre",
      fibre_rebate: "Rebat bulanan",
      fibre_monthly: "Kos bulanan",
      fibre_24m: "(selama 24 bulan)",
      fibre_offer_title: "Tawaran Semasa",
      fibre_offer_sub: "Percuma Router WiFi 6 + Mesh Node",
      apply_now: "Mohon Sekarang",

      // APPLY
      apply_title: "Borang Permohonan Fibre",
      apply_sub: "Sila isi maklumat anda.",
      apply_summary_title: "Ringkasan Pilihan Anda",
      apply_summary_speed: "Kelajuan",
      apply_summary_postpaid: "Pascabayar RM60+",
      apply_summary_base: "Harga Asal",
      apply_summary_rebate: "Rebat",
      apply_summary_monthly: "Anggaran Bulanan",
      apply_card_personal: "Maklumat Peribadi",
      apply_card_address: "Alamat Pemasangan",
      apply_card_upload: "Muat Naik Dokumen",
      apply_name: "Nama Penuh",
      apply_name_ph: "Contoh: Ahmad Bin Ali",
      apply_phone: "Nombor Telefon",
      apply_phone_ph: "Contoh: 01X-XXXXXXX",
      apply_ic: "No. Kad Pengenalan (IC)",
      apply_ic_ph: "Contoh: 001122-14-5678",
      apply_email: "Email (Optional)",
      apply_email_ph: "contoh@email.com",
      optional: "optional",
      apply_street1: "Street 1",
      apply_street1_ph: "No rumah, jalan",
      apply_street2: "Street 2",
      apply_street2_ph: "Taman / Apartment / Blok",
      apply_postcode: "Poskod",
      apply_postcode_ph: "Contoh: 43000",
      apply_city: "Bandar",
      apply_city_ph: "Contoh: Kajang",
      apply_region: "Negeri",
      apply_region_ph: "Contoh: Selangor",
      apply_upload_ic: "Salinan IC (Photo / PDF)",
      apply_upload_bill: "Bil Utiliti (Photo / PDF)",
      apply_upload_hint: "Format: JPG/PNG/PDF",
      apply_bill_hint: "Contoh: TNB / SYABAS / Unifi",
      apply_agree: "Saya setuju untuk dihubungi bagi tujuan pemasangan & semakan.",
      apply_need_agree: "Sila tanda persetujuan sebelum hantar.",
      apply_submit: "Hantar Permohonan",
      apply_sending: "Menghantar...",
      cancel: "Batal",
      apply_success_title: "Permohonan Berjaya",
      apply_success_sub: "Terima kasih! Khidmat pelanggan kami akan hubungi anda.",
      apply_back_fibre: "Kembali ke Fibre",
      apply_back_home: "Balik ke Home",
    },

    en: {
      // NAV
      nav_home: "Home",
      nav_fibre: "Fibre",
      nav_contact: "Contact",

      // FOOTER
      footer_support_title: "Customer Support",
      footer_support_desc: "Billing & technical: 1800-xx-xxxx",
      footer_sales_title: "Sales & WhatsApp",
      footer_sales_desc1: "Sales: +60 11-xxxx xxxx",
      footer_sales_desc2: "WhatsApp: wa.me/60xxx",

      // HOME
      home_title: "Postpaid & Fibre Made Simple",
      home_desc:
        "Enjoy fast and stable Fibre internet for streaming, online gaming, and smooth browsing. Compare plans and continue to the Fibre calculator.",
      home_btn_fibre: "Explore Fibre Plans",
      home_btn_more: "Learn More",

      mini_1_title: "5G Speed",
      mini_1_sub: "5G-ready plans with fast speeds!",
      mini_2_title: "24 Months",
      mini_2_sub: "Bundle up to 24 months",
      mini_3_title: "Save More",
      mini_3_sub: "Enjoy rebates worth RM120 per year!",

      promo_title: "Promotions & Deals",
      promos: [
        {
          title: "Unlimited & fast 5G internet — from RM25/month",
          desc: "Great-value plans for daily use, streaming, and social media.",
        },
        {
          title: "Free phone + Free Viu Premium access for 12 months",
          desc: "Bundle the right plan to enjoy extra savings.",
        },
        {
          title: "Easiest instalment for latest 5G phones from RM1/month",
          desc: "Flexible instalment options with affordable plans.",
        },
        {
          title: "Spark — eSIM, no store, your plan, your control",
          desc: "Activate, manage, and control your plan more easily.",
        },
      ],

      postpaid_title: "Popular Postpaid Options",
      postpaid_sub: "A quick comparison before you continue to the Fibre calculator.",
      plans: [
        { name: "Postpaid 80", price: "RM80/month", note: "For light usage" },
        { name: "Postpaid 100", price: "RM100/month", note: "Best value" },
        { name: "Postpaid 120", price: "RM120/month", note: "For heavy users" },
      ],
      plan_btn_bundle: "Bundle with Fibre",

      // FIBRE
      fibre_title: "Add fibre to your postpaid plan for more rebates",
      fibre_sub: "Calculate your fibre + postpaid bundle here.",
      fibre_pick_speed: "Choose your preferred Internet speed (Mbps)",
      fibre_q_postpaid: "Do you have a RM60 and above postpaid plan with us?",
      yes: "Yes",
      no: "No",
      fibre_summary_title: "Price summary",
      fibre_label: "Fibre",
      fibre_rebate: "Monthly rebate",
      fibre_monthly: "Monthly cost",
      fibre_24m: "(for 24 months)",
      fibre_offer_title: "Current Offer",
      fibre_offer_sub: "Free WiFi 6 Router + Mesh Node",
      apply_now: "Apply Now",

      // CONTACT
      contact_title: "Contact Us",
      contact_sub:
        "Reach our team for plan recommendations, coverage checks, and installation guidance.",
      contact_support_title: "Customer Support",
      contact_support_desc: "Billing & technical: 1800-xx-xxxx",
      contact_sales_title: "Sales & WhatsApp",
      contact_sales_desc1: "Sales: +60 11-xxxx xxxx",
      contact_sales_desc2: "WhatsApp: wa.me/60xxx",
      contact_email_title: "Email",
      contact_email_desc: "sales@celcomdigi.com.my",

      // APPLY
      apply_title: "Fibre Application Form",
      apply_sub: "Please fill in your details.",
      apply_summary_title: "Your Selection Summary",
      apply_summary_speed: "Speed",
      apply_summary_postpaid: "RM60+ Postpaid",
      apply_summary_base: "Base Price",
      apply_summary_rebate: "Rebate",
      apply_summary_monthly: "Estimated Monthly",
      apply_card_personal: "Personal Details",
      apply_card_address: "Installation Address",
      apply_card_upload: "Upload Documents",
      apply_name: "Full Name",
      apply_name_ph: "Example: Ahmad Bin Ali",
      apply_phone: "Phone Number",
      apply_phone_ph: "Example: 01X-XXXXXXX",
      apply_ic: "Identity Card No. (IC)",
      apply_ic_ph: "Example: 001122-14-5678",
      apply_email: "Email (Optional)",
      apply_email_ph: "example@email.com",
      optional: "optional",
      apply_street1: "Street 1",
      apply_street1_ph: "House no., street",
      apply_street2: "Street 2",
      apply_street2_ph: "Area / Apartment / Block",
      apply_postcode: "Postcode",
      apply_postcode_ph: "Example: 43000",
      apply_city: "City",
      apply_city_ph: "Example: Kajang",
      apply_region: "State",
      apply_region_ph: "Example: Selangor",
      apply_upload_ic: "IC Copy (Photo / PDF)",
      apply_upload_bill: "Utility Bill (Photo / PDF)",
      apply_upload_hint: "Format: JPG/PNG/PDF",
      apply_bill_hint: "Example: TNB / SYABAS / Unifi",
      apply_agree: "I agree to be contacted for installation and verification purposes.",
      apply_need_agree: "Please tick the agreement before submitting.",
      apply_submit: "Submit Application",
      apply_sending: "Submitting...",
      cancel: "Cancel",
      apply_success_title: "Application Submitted",
      apply_success_sub: "Thank you! Our customer service will contact you soon.",
      apply_back_fibre: "Back to Fibre",
      apply_back_home: "Back to Home",
    },
  };

  const t = (key) => texts[lang]?.[key] ?? key;
  const tList = (key) => texts[lang]?.[key] ?? [];

  const bannerSrc =
    path.startsWith("/fibre") ? bannerFibre :
    path.startsWith("/contact") ? bannerContact :
    bannerHome;

  useEffect(() => {
    document.body.classList.remove("bg-home", "bg-fibre", "bg-contact");
  }, [location.pathname]);

  return (
    <div className="app">
      <header>
        <div className="top-header">
          <div className="logo-area">
            <img src={logo} alt="CelcomDigi Logo" className="logo-img" />
          </div>

          <button
            type="button"
            className="lang-toggle"
            onClick={() => setLang((v) => (v === "en" ? "my" : "en"))}
            aria-label="Toggle language EN/MY"
            title="Toggle language"
          >
            <span className={lang === "en" ? "active" : ""}>EN</span>
            <span className="sep">|</span>
            <span className={lang === "my" ? "active" : ""}>MY</span>
          </button>
        </div>
      </header>

      <nav className="nav-menu">
        <NavLink to="/" end>{t("nav_home")}</NavLink>
        <NavLink to="/fibre">{t("nav_fibre")}</NavLink>
        <NavLink to="/contact">{t("nav_contact")}</NavLink>
      </nav>

      <div className="page-banner">
        <img src={bannerSrc} alt="Page banner" />
      </div>

      <main className="content">
        <Routes>
          <Route path="/" element={<HomePage t={t} tList={tList} />} />
          <Route path="/fibre" element={<FibrePage t={t} />} />
          <Route path="/contact" element={<ContactPage t={t} />} />
          <Route path="/apply" element={<ApplyPage t={t} />} />
          <Route path="*" element={<HomePage t={t} tList={tList} />} />
        </Routes>
      </main>

      <footer className="footer">
        <div>
          <h4>{t("footer_support_title")}</h4>
          <p>{t("footer_support_desc")}</p>
        </div>
        <div>
          <h4>{t("footer_sales_title")}</h4>
          <p>{t("footer_sales_desc1")}</p>
          <p>{t("footer_sales_desc2")}</p>
        </div>
        <div><h4> </h4><p> </p></div>
        <p className="footer-bottom">Celcomdigi Distributor © 2025. All Rights Reserved. (Demo)</p>
      </footer>
    </div>
  );
}


/* ===============================
   HOME PAGE
   =============================== */
function HomePage({ t, tList }) {
  const plans = useMemo(() => tList("plans"), [tList]);
  const promos = useMemo(() => tList("promos"), [tList]);

  return (
    <section className="home-sections">
      <section className="home-hero">
        <div className="home-hero-text">
          <h1>{t("home_title")}</h1>
          <p>{t("home_desc")}</p>

          <div className="home-hero-cta">
            <NavLink className="primary-btn" to="/fibre">{t("home_btn_fibre")}</NavLink>
            <NavLink className="ghost-btn" to="/contact">{t("home_btn_more")}</NavLink>
          </div>
        </div>

        {/* MINI STATS */}
        <div className="home-hero-mini">
          <div className="mini-stat">
            <div className="mini-icon">
              <img src={wifiIcon} alt="" className="mini-icon-img" />
            </div>
            <div className="mini-text">
              <div className="mini-stat-num">{t("mini_1_title")}</div>
              <div className="mini-stat-label">{t("mini_1_sub")}</div>
            </div>
          </div>

          <div className="mini-stat">
            <div className="mini-icon">
              <img src={calendarIcon} alt="" className="mini-icon-img" />
            </div>
            <div className="mini-text">
              <div className="mini-stat-num">{t("mini_2_title")}</div>
              <div className="mini-stat-label">{t("mini_2_sub")}</div>
            </div>
          </div>

          <div className="mini-stat">
            <div className="mini-icon">
              <img src={moneyIcon} alt="" className="mini-icon-img" />
            </div>
            <div className="mini-text">
              <div className="mini-stat-num">{t("mini_3_title")}</div>
              <div className="mini-stat-label">{t("mini_3_sub")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROMO */}
      <section className="home-block">
        <h2 className="block-title">{t("promo_title")}</h2>

        <div className="promo-list">
          {promos.map((item, idx) => {
            const imgs = [promo1, promo2, promo3, promo4];
            return (
              <article className="promo-row" key={item.title}>
                <div className="promo-left">
                  <img src={imgs[idx]} alt={item.title} />
                </div>
                <div className="promo-right">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* PLANS */}
      <section className="home-block">
        <div className="block-head">
          <h2 className="block-title">{t("postpaid_title")}</h2>
          <p className="block-sub">{t("postpaid_sub")}</p>
        </div>

        <div className="plan-grid">
          {plans.map((p) => (
            <div className="plan-box" key={p.name}>
              <div className="plan-name">{p.name}</div>
              <div className="plan-price">{p.price}</div>
              <div className="plan-note">{p.note}</div>
              <div className="plan-actions">
                <NavLink className="primary-btn" to="/fibre">{t("plan_btn_bundle")}</NavLink>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}


/* ===============================
   FIBRE PAGE
   =============================== */
function FibrePage({ t }) {
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
  const speedLabel = speed >= 1000 ? `${speed / 1000}Gbps` : `${speed}Mbps`;

  return (
    <section className="fibre-wrap">
      <div className="fibre-container">
        <div className="fibre-layout">
          {/* LEFT 70% */}
          <div className="fibre-main">
            <div className="fibre-hero-card">
              <div className="fibre-hero-left">
                <h2>{t("fibre_title")}</h2>
                <p>{t("fibre_sub")}</p>
              </div>

              <div className="fibre-hero-right">
                <div className="calc-card">
                  <div className="calc-title">{t("fibre_pick_speed")}</div>

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
                        <span
                          key={s}
                          className={`tick ${s === speed ? "active" : ""}`}
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="slider-selected">{speedLabel}</div>
                  </div>

                  <div className="calc-divider" />

                  <div className="toggle-row-cd">
                    <div className="toggle-label">{t("fibre_q_postpaid")}</div>

                    <div className="toggle-box">
                      <span className={`toggle-pill ${!hasPostpaid ? "on" : ""}`}>
                        {t("no")}
                      </span>

                      <button
                        type="button"
                        className={`cd-switch ${hasPostpaid ? "on" : ""}`}
                        onClick={() => setHasPostpaid((v) => !v)}
                        aria-label="toggle postpaid"
                      >
                        <span className="cd-knob" />
                      </button>

                      <span className={`toggle-pill ${hasPostpaid ? "on" : ""}`}>
                        {t("yes")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT 30% */}
          <div className="fibre-side">
            <div className="summary-card">
              <div className="summary-head">{t("fibre_summary_title")}</div>

              <div className="summary-body">
                <div className="sum-row">
                  <span>
                    {t("fibre_label")} {speedLabel}
                  </span>
                  <span className="sum-val">RM{base}</span>
                </div>

                <div className="sum-row">
                  <span>{t("fibre_rebate")}</span>
                  <span className="sum-val">-RM{rebate}</span>
                </div>

                <div className="sum-line" />

                <div className="sum-total">
                  <div className="sum-total-label">
                    {t("fibre_monthly")} <span>{t("fibre_24m")}</span>
                  </div>
                  <div className="sum-total-price">RM{monthly}</div>
                </div>
              </div>

              <div className="summary-offer">
                <div className="offer-title">{t("fibre_offer_title")}</div>
                <div className="offer-sub">{t("fibre_offer_sub")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Apply button (pass state to ApplyPage) */}
      <div className="apply-bar">
        <NavLink
          to="/apply"
          className="apply-bottom-btn"
          state={{ speed, hasPostpaid, monthly, base, rebate }}
        >
          {t("apply_now")}
        </NavLink>
      </div>
    </section>
  );
}


/* ===============================
   CONTACT PAGE
   =============================== */
function ContactPage({ t }) {
  return (
    <section className="contact-section">
      <h1>{t("contact_title")}</h1>
      <p className="contact-sub">{t("contact_sub")}</p>

      <div className="contact-grid">
        <div className="contact-item">
          <h3>{t("contact_support_title")}</h3>
          <p>{t("contact_support_desc")}</p>
        </div>

        <div className="contact-item">
          <h3>{t("contact_sales_title")}</h3>
          <p>{t("contact_sales_desc1")}</p>
          <p>{t("contact_sales_desc2")}</p>
        </div>

        <div className="contact-item">
          <h3>{t("contact_email_title")}</h3>
          <p>{t("contact_email_desc")}</p>
        </div>
      </div>
    </section>
  );
}


/* ===============================
   APPLY PAGE
   =============================== */
function ApplyPage({ t }) {
  const navigate = useNavigate();
  const location = useLocation();
  const routeState = location.state || {};

  const speed = routeState.speed ?? 500;
  const hasPostpaid = routeState.hasPostpaid ?? false;
  const monthly = routeState.monthly ?? 0;
  const base = routeState.base ?? 0;
  const rebate = routeState.rebate ?? 0;

  const speedLabel = speed >= 1000 ? `${speed / 1000}Gbps` : `${speed}Mbps`;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [ic, setIc] = useState("");
  const [email, setEmail] = useState("");

  const [street1, setStreet1] = useState("");
  const [street2, setStreet2] = useState("");
  const [postcode, setPostcode] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");

  const [icFile, setIcFile] = useState(null);
  const [billFile, setBillFile] = useState(null);

  const [agree, setAgree] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!agree) {
      alert(t("apply_need_agree"));
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  if (submitted) {
    return (
      <section className="apply-page">
        <h1>{t("apply_success_title")}</h1>
        <p className="apply-sub">{t("apply_success_sub")}</p>

        <div className="apply-success-card">
          <div className="success-row">
            <span>{t("apply_summary_speed")}</span>
            <strong>{speedLabel}</strong>
          </div>
          <div className="success-row">
            <span>{t("apply_summary_postpaid")}</span>
            <strong>{hasPostpaid ? t("yes") : t("no")}</strong>
          </div>
          <div className="success-row">
            <span>{t("apply_summary_monthly")}</span>
            <strong>RM{monthly}</strong>
          </div>
        </div>

        <div className="apply-actions">
          <NavLink className="primary-btn" to="/fibre">
            {t("apply_back_fibre")}
          </NavLink>
          <NavLink className="ghost-btn" to="/">
            {t("apply_back_home")}
          </NavLink>
        </div>
      </section>
    );
  }

  return (
    <section className="apply-page">
      <h1>{t("apply_title")}</h1>
      <p className="apply-sub">{t("apply_sub")}</p>

      {/* Summary */}
      <div className="apply-summary">
        <div className="apply-summary-title">{t("apply_summary_title")}</div>

        <div className="apply-summary-grid">
          <div className="apply-pill">
            <span>{t("apply_summary_speed")}</span>
            <strong>{speedLabel}</strong>
          </div>

          <div className="apply-pill">
            <span>{t("apply_summary_postpaid")}</span>
            <strong>{hasPostpaid ? t("yes") : t("no")}</strong>
          </div>

          <div className="apply-pill">
            <span>{t("apply_summary_base")}</span>
            <strong>RM{base}</strong>
          </div>

          <div className="apply-pill">
            <span>{t("apply_summary_rebate")}</span>
            <strong>-RM{rebate}</strong>
          </div>

          <div className="apply-pill full apply-total">
            <span>{t("apply_summary_monthly")} {t("fibre_24m")}</span>
            <strong>RM{monthly}</strong>
          </div>
        </div>
      </div>

      <form className="apply-form" onSubmit={onSubmit}>
        {/* CARD 1: Personal */}
        <div className="form-card">
          <div className="form-card-title">{t("apply_card_personal")}</div>

          <div className="apply-row">
            <label className="apply-field">
              {t("apply_name")}
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t("apply_name_ph")}
                required
              />
            </label>

            <label className="apply-field">
              {t("apply_phone")}
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t("apply_phone_ph")}
                required
              />
            </label>
          </div>

          <div className="apply-row">
            <label className="apply-field">
              {t("apply_ic")}
              <input
                value={ic}
                onChange={(e) => setIc(e.target.value)}
                placeholder={t("apply_ic_ph")}
                required
              />
            </label>

            <label className="apply-field">
              {t("apply_email")}
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("apply_email_ph")}
                type="email"
              />
            </label>
          </div>
        </div>

        {/* CARD 2: Address */}
        <div className="form-card">
          <div className="form-card-title">{t("apply_card_address")}</div>

          <label className="apply-field">
            {t("apply_street1")}
            <input
              value={street1}
              onChange={(e) => setStreet1(e.target.value)}
              placeholder={t("apply_street1_ph")}
              required
            />
          </label>

          <label className="apply-field">
            {t("apply_street2")}
            <input
              value={street2}
              onChange={(e) => setStreet2(e.target.value)}
              placeholder={t("apply_street2_ph")}
            />
          </label>

          <div className="apply-row">
            <label className="apply-field">
              {t("apply_postcode")}
              <input
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                placeholder={t("apply_postcode_ph")}
                required
              />
            </label>

            <label className="apply-field">
              {t("apply_city")}
              <input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder={t("apply_city_ph")}
                required
              />
            </label>
          </div>

          <label className="apply-field">
            {t("apply_region")}
            <input
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              placeholder={t("apply_region_ph")}
              required
            />
          </label>
        </div>

        {/* CARD 3: Upload */}
        <div className="form-card">
          <div className="form-card-title">{t("apply_card_upload")}</div>

          <div className="apply-row">
            <label className="apply-field">
              {t("apply_upload_ic")}
              <input
                type="file"
                accept="image/*,application/pdf"
                onChange={(e) => setIcFile(e.target.files?.[0] || null)}
                required
              />
              <small className="apply-hint">{t("apply_upload_hint")}</small>
            </label>

            <label className="apply-field">
              {t("apply_upload_bill")}
              <input
                type="file"
                accept="image/*,application/pdf"
                onChange={(e) => setBillFile(e.target.files?.[0] || null)}
                required
              />
              <small className="apply-hint">{t("apply_bill_hint")}</small>
            </label>
          </div>
        </div>

        {/* Agreement */}
        <label className="apply-check">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            required
          />
          <span>{t("apply_agree")}</span>
        </label>

        {/* Actions */}
        <div className="apply-actions">
          <button type="submit" className="primary-btn" disabled={isSubmitting}>
            {isSubmitting ? t("apply_sending") : t("apply_submit")}
          </button>
          <button type="button" className="ghost-btn" onClick={() => navigate("/fibre")}>
            {t("cancel")}
          </button>
        </div>
      </form>
    </section>
  );
}

