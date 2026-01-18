import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route, NavLink, useLocation } from "react-router-dom";
import "./App.css";

import logo from "./Logo_CelcomDigi.svg";
import wifiIcon from "./assets/icons/1.svg";
import calendarIcon from "./assets/icons/4.svg";
import moneyIcon from "./assets/icons/2.svg";

import promo1 from "./assets/promo/promo1.webp";
import promo2 from "./assets/promo/promo2.webp";
import promo3 from "./assets/promo/promo3.webp";
import promo4 from "./assets/promo/promo4.webp";

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

  const bannerHome = `${process.env.PUBLIC_URL}/banners/banner-home.webp`;
  const bannerFibre = `${process.env.PUBLIC_URL}/banners/banner-fibre.webp`;
  const bannerContact = `${process.env.PUBLIC_URL}/banners/banner-contact.webp`;

  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "my");
  useEffect(() => localStorage.setItem("lang", lang), [lang]);

  const texts = {
    my: {
      // NAV
      nav_home: "Utama",
      nav_fibre: "Pelan Fibre",
      nav_contact: "Hubungi",

      // FOOTER
      footer_support_title: "Khidmat Pelanggan",
      footer_support_desc: "Sokongan & teknikal: 1800-xx-xxxx",
      footer_sales_title: "Jualan & WhatsApp",
      footer_sales_desc1: "Jualan: +60 11-xxxx xxxx",
      footer_sales_desc2: "WhatsApp: wa.me/60xxx",

      // HOME
      home_title: "Internet Fibre Pantas & Stabil untuk Rumah Anda",
      home_desc: "Nikmati sambungan Internet Fibre berkelajuan tinggi untuk penstriman, kerja dari rumah, pembelajaran dalam talian dan pelayaran web tanpa gangguan.",
      home_btn_fibre: "Lihat Pelan Fibre",
      home_btn_more: "Hubungi Kami",

      mini_1_title: "Kelajuan Tinggi",
      mini_1_sub: "Internet Fibre stabil sehingga 1Gbps",
      mini_2_title: "Sambungan Stabil",
      mini_2_sub: "Sesuai untuk penstriman & permainan dalam talian",
      mini_3_title: "Harga Berpatutan",
      mini_3_sub: "Pelan Fibre dengan nilai terbaik",

      //FIBRE PLAN LIST
      price_title: "Senarai Pelan Fibre",
      price_100: "100 Mbps",
      price_300: "300 Mbps",
      price_500: "500 Mbps",
      price_1g: "1 Gbps",
      feat_router: "Router WiFi 6",
      feat_unlimited: "Kelajuan Internet Tanpa Had",
      feat_install: "Pemasangan Standard",
      feat_mesh: "WiFi Mesh",
      feat_mesh_node: "Nod Mesh",

      // PROMO
      promo_title: "Promosi & Tawaran Fibre",
      promos: [
        {
          title: "Internet Fibre pantas & stabil untuk seisi rumah",
          desc: "Nikmati pengalaman melayari Internet tanpa gangguan setiap hari.",
        },
        {
          title: "WiFi berkelajuan tinggi untuk kerja & hiburan",
          desc: "Sesuai untuk penstriman, mesyuarat video dan permainan dalam talian.",
        },
        {
          title: "Pelbagai pilihan kelajuan Fibre",
          desc: "Pilih pelan mengikut keperluan dan bajet anda.",
        },
        {
          title: "Pemasangan mudah & sokongan teknikal",
          desc: "Kami sedia membantu dari pemasangan hingga sokongan selepas jualan.",
        },
      ],

      // FIBRE PAGE
      fibre_title: "Pilih Pelan Internet Fibre yang Sesuai untuk Anda",
      fibre_sub: "Gunakan kalkulator di bawah untuk anggaran kos bulanan Fibre.",
      fibre_pick_speed: "Pilih kelajuan Internet Fibre (Mbps)",
      fibre_summary_title: "Ringkasan Pelan Fibre",
      fibre_label: "Internet Fibre",
      fibre_monthly: "Anggaran kos bulanan",
      fibre_24m: "(kontrak 24 bulan)",
      fibre_offer_title: "Tawaran Istimewa",
      fibre_offer_sub: "Router WiFi disertakan",
      apply_now: "Mohon Sekarang",
      apply_type_title: "Pilih Jenis Permohonan",
      apply_business_q: "Adakah ini untuk Business Fibre?",

      // SELECTOR
      type_home_title: "Home Fibre",
      type_home_desc: "Untuk kegunaan rumah seperti streaming, gaming, dan penggunaan harian.",
      type_business_title: "Business Fibre",
      type_business_desc: "Untuk kegunaan pejabat/SME dengan sambungan yang lebih stabil, sesuai untuk kerja & operasi.",
      type_required_hint: "Sila pilih salah satu sebelum teruskan.",
      type_required_alert: "Sila pilih Home Fibre atau Business Fibre dahulu.",

      // APPLY
      apply_title: "Borang Permohonan Internet Fibre",
      apply_sub: "Sila lengkapkan maklumat untuk proses pemasangan.",
      apply_summary_title: "Ringkasan Pelan Dipilih",
      apply_summary_speed: "Kelajuan Fibre",
      apply_summary_base: "Harga Pelan",
      apply_summary_monthly: "Anggaran Bulanan",
      apply_card_personal: "Maklumat Peribadi",
      apply_card_address: "Alamat Pemasangan",
      apply_card_upload: "Muat Naik Dokumen",
      apply_name: "Nama Penuh",
      apply_phone: "Nombor Telefon",
      apply_ic: "No. Kad Pengenalan (IC)",
      apply_email: "Emel (Pilihan)",
      apply_street1: "Alamat",
      apply_postcode: "Poskod",
      apply_city: "Bandar",
      apply_region: "Negeri",
      apply_upload_ic: "Salinan IC",
      apply_upload_bill: "Bil Utiliti",
      apply_agree: "Saya bersetuju untuk dihubungi bagi tujuan pemasangan.",
      apply_submit: "Hantar Permohonan",
      cancel: "Batal",
      apply_success_title: "Permohonan Dihantar",
      apply_success_sub: "Pasukan kami akan menghubungi anda untuk pemasangan.",
      apply_back_fibre: "Kembali ke Pelan Fibre",
      apply_back_home: "Kembali ke Utama",
      apply_name_ph: "Contoh: Ali Bin Abu",
      apply_phone_ph: "Contoh: 01X-XXXXXXX",
      apply_ic_ph: "Contoh: 990101-01-1234",
      apply_email_ph: "Contoh: nama@email.com",
      apply_street1_ph: "Contoh: No 10, Jalan ABC",
      apply_street2: "Alamat (Baris 2)",
      apply_street2_ph: "Contoh: Taman / Apartment (jika ada)",
      apply_postcode_ph: "Contoh: 43000",
      apply_city_ph: "Contoh: Kajang",
      apply_region_ph: "Contoh: Selangor",
      apply_sending: "Menghantar...",
      apply_upload_hint: "Format diterima: JPG, PNG atau PDF",
      apply_bill_hint: "Contoh: Bil TNB / SYABAS / Internet",


      free_router: "WiFi Router",
      free_mesh: "Mesh WiFi",
      free_installation: "Pemasangan",
      offer_router: "WiFi Router disertakan",
      offer_mesh: "Mesh WiFi disertakan",

      // CONTACT
      contact_title: "Hubungi Kami",
      contact_sub: "Hubungi pasukan kami untuk pertanyaan pelan Internet Fibre, semakan liputan dan bantuan pemasangan.",
      contact_support_title: "Khidmat Pelanggan",
      contact_support_desc: " Sokongan & teknikal: 1800-xx-xxxx",
      contact_sales_title: "Jualan & WhatsApp",
      contact_sales_desc1: " Jualan: +60 11-xxxx xxxx",
      contact_sales_desc2: " WhatsApp: wa.me/60xxx",
      contact_email_title: "Emel",
      contact_email_desc: " sales@celcomdigi.com.my",
    },

    en: {
      // NAV
      nav_home: "Home",
      nav_fibre: "Fibre Plans",
      nav_contact: "Contact",

      // FOOTER
      footer_support_title: "Customer Support",
      footer_support_desc: "Support & technical: 1800-xx-xxxx",
      footer_sales_title: "Sales & WhatsApp",
      footer_sales_desc1: "Sales: +60 11-xxxx xxxx",
      footer_sales_desc2: "WhatsApp: wa.me/60xxx",

      // HOME
      home_title: "Fast & Reliable Fibre Internet for Your Home",
      home_desc: "Enjoy high-speed Fibre Internet for streaming, remote work, online learning, and smooth browsing without interruptions.",
      home_btn_fibre: "View Fibre Plans",
      home_btn_more: "Contact Us",

      mini_1_title: "High Speed",
      mini_1_sub: "Stable Fibre Internet up to 1Gbps",
      mini_2_title: "Reliable Connection",
      mini_2_sub: "Ideal for streaming and online gaming",
      mini_3_title: "Affordable Plans",
      mini_3_sub: "Great value Fibre Internet packages",

      // FIBRE PLAN LIST
      price_title: "Fibre Plan List",
      price_100: "100 Mbps",
      price_300: "300 Mbps",
      price_500: "500 Mbps",
      price_1g: "1 Gbps",
      feat_router: "WiFi 6 Router",
      feat_unlimited: "Unlimited High-Speed Internet",
      feat_install: "Standard Installation",
      feat_mesh: "WiFi Mesh",
      feat_mesh_node: "Mesh Node",

      // PROMO
      promo_title: "Fibre Promotions & Offers",
      promos: [
        {
          title: "Fast & stable Fibre Internet for your home",
          desc: "Enjoy uninterrupted Internet experience every day.",
        },
        {
          title: "High-speed WiFi for work & entertainment",
          desc: "Perfect for streaming, video calls, and gaming.",
        },
        {
          title: "Multiple Fibre speed options",
          desc: "Choose a plan that fits your needs and budget.",
        },
        {
          title: "Easy installation & technical support",
          desc: "We assist you from installation to after-sales support.",
        },
      ],

      // FIBRE
      fibre_title: "Choose the Right Fibre Internet Plan for You",
      fibre_sub: "Use the calculator below to estimate your monthly Fibre cost.",
      fibre_pick_speed: "Select Fibre Internet speed (Mbps)",
      fibre_summary_title: "Fibre Plan Summary",
      fibre_label: "Fibre Internet",
      fibre_monthly: "Estimated monthly cost",
      fibre_24m: "(24-month contract)",
      fibre_offer_title: "Special Offer",
      fibre_offer_sub: "WiFi Router included",
      apply_now: "Apply Now",
      apply_type_title: "Choose Application Type",
      apply_business_q: "Is this for Business Fibre?",

      // SELECTOR
      type_home_title: "Home Fibre",
      type_home_desc: "For home usage such as streaming, gaming, and daily browsing.",
      type_business_title: "Business Fibre",
      type_business_desc: "For office/SME with much more stable connection for work & operations.",
      type_required_hint: "Please select one before continuing.",
      type_required_alert: "Please select Home Fibre or Business Fibre first.",

      free_router: "WiFi Router",
      free_mesh: "WiFi Mesh",
      free_installation: "Installation",
      offer_router: "Free WiFi Router included",
      offer_mesh: "Free WiFi Mesh included",

      // APPLY
      apply_title: "Fibre Internet Application Form",
      apply_sub: "Please complete your details for installation.",
      apply_summary_title: "Selected Plan Summary",
      apply_summary_speed: "Fibre Speed",
      apply_summary_base: "Plan Price",
      apply_summary_monthly: "Estimated Monthly",
      apply_card_personal: "Personal Information",
      apply_card_address: "Installation Address",
      apply_card_upload: "Upload Documents",
      apply_name: "Full Name",
      apply_phone: "Phone Number",
      apply_ic: "Identity Card No.",
      apply_email: "Email (Optional)",
      apply_street1: "Address",
      apply_postcode: "Postcode",
      apply_city: "City",
      apply_region: "State",
      apply_upload_ic: "IC Copy",
      apply_upload_bill: "Utility Bill",
      apply_agree: "I agree to be contacted for installation purposes.",
      apply_submit: "Submit Application",
      cancel: "cancel",
      apply_success_title: "Application Submitted",
      apply_success_sub: "Our team will contact you to proceed with installation.",
      apply_back_fibre: "Back to Fibre Plans",
      apply_back_home: "Back to Home",
      apply_name_ph: "e.g. Ali Bin Abu",
      apply_phone_ph: "e.g. 01X-XXXXXXX",
      apply_ic_ph: "e.g. 990101-01-1234",
      apply_email_ph: "e.g. name@email.com",
      apply_street1_ph: "e.g. No 10, Jalan ABC",
      apply_street2: "Address (Line 2)",
      apply_street2_ph: "e.g. Taman / Apartment (optional)",
      apply_postcode_ph: "e.g. 43000",
      apply_city_ph: "e.g. Kajang",
      apply_region_ph: "e.g. Selangor",
      apply_sending: "Sending...",
      apply_upload_hint: "Format diterima: JPG, PNG atau PDF",
      apply_bill_hint: "Contoh: Bil TNB / SYABAS / Internet",


      // CONTACT
      contact_title: "Contact Us",
      contact_sub: "Reach our team for Fibre Internet enquiries, coverage checks, and installation assistance.",
      contact_support_title: "Customer Support",
      contact_support_desc: " Support & technical: 1800-xx-xxxx",
      contact_sales_title: "Sales & WhatsApp",
      contact_sales_desc1: " Sales: +60 11-xxxx xxxx",
      contact_sales_desc2: " WhatsApp: wa.me/60xxx",
      contact_email_title: "Email",
      contact_email_desc: " sales@celcomdigi.com.my",
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
        <p className="footer-bottom">Celcomdigi Distributor © 2026. All Rights Reserved.</p>
      </footer>
    </div>
  );
}


/* ===============================
   HOME PAGE
   =============================== */
function HomePage({ t, tList }) {
  const promos = useMemo(() => tList("promos"), [tList]);

  const priceCards = [
    { speed: "100 Mbps" },
    { speed: "300 Mbps" },
    { speed: "500 Mbps" },
    { speed: "1 Gbps" },
  ];

  const features = [
    "WiFi 6 router",
    "Unlimited hyper speed",
    "Standard installation",
  ];

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

      <section className="home-block price-block">
          <h2 className="block-title">{t("price_title")}</h2>

          <div className="price-row">
            {[
              {
                speedKey: "price_100",
                img: `${process.env.PUBLIC_URL}/icons/price-100.webp`,
                features: ["feat_router", "feat_unlimited", "feat_install"],
              },
              {
                speedKey: "price_300",
                img: `${process.env.PUBLIC_URL}/icons/price-300.webp`,
                features: ["feat_router", "feat_unlimited", "feat_install"],
              },
              {
                speedKey: "price_500",
                img: `${process.env.PUBLIC_URL}/icons/price-500.webp`,
                features: ["feat_router", "feat_mesh", "feat_mesh_node", "feat_install"],
              },
              {
                speedKey: "price_1g",
                img: `${process.env.PUBLIC_URL}/icons/price-1g.webp`,
                features: ["feat_router", "feat_mesh", "feat_mesh_node", "feat_install"],
              },
            ].map((card) => (
              <article className="price-card" key={card.speedKey}>
                {/* Floating image */}
                <img
                  className="price-float-img"
                  src={card.img}
                  alt=""
                  aria-hidden="true"
                />

                {/* Centered speed title */}
                <div className="price-speed">{t(card.speedKey)}</div>

                {/* Features */}
                <ul className="price-features">
                  {card.features.map((f) => (
                    <li className="price-feature" key={f}>
                      <span className="tick-circle" aria-hidden="true">✓</span>
                      <span className="feature-text">{t(f)}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

      {/* PROMO */}
      <section className="home-block">
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
    </section>
  );
}


/* ===============================
   FIBRE PAGE
   =============================== */
function FibrePage({ t }) {
  const speeds = [100, 300, 500, 1000];

  const [speed, setSpeed] = useState(500);
  const [appType, setAppType] = useState(null);

  const base = useMemo(() => {
    const homePriceMap = { 100: 99, 300: 139, 500: 159, 1000: 249 };
    const businessPriceMap = { 100: 119, 300: 179, 500: 219, 1000: 299 };
    const map = appType === "business" ? businessPriceMap : homePriceMap;
    return map[speed] ?? 159;
  }, [appType, speed]);

  const monthly = base;

  const speedIndex = speeds.indexOf(speed);
  const speedLabel = speed >= 1000 ? `${speed / 1000}Gbps` : `${speed}Mbps`;

  const isHome = appType === "home";
  const isBusiness = appType === "business";
  const homeHasMesh = isHome && (speed === 500 || speed === 1000);
  const businessHasMesh = isBusiness;
  const hasMesh = homeHasMesh || businessHasMesh;
  const freeRows = (() => {

  if (!appType) return [];
  const rows = [
    { label: t("free_router"), price: "RM0" },
    { label: t("free_installation"), price: "RM0" },
  ];

  if (hasMesh) {
    rows.splice(1, 0, { label: t("free_mesh"), price: "RM0" });
  }

  return rows;
})();

const offerList = (() => {
  if (!appType) return [];

  const list = [t("offer_router")];
  if (hasMesh) list.push(t("offer_mesh"));
  return list;
})();

  return (
    <section className="fibre-wrap">
      <div className="fibre-container">
        <div className="fibre-layout">
          {/* LEFT */}
          <div className="fibre-main">
            <div className="fibre-hero-card">
              <div className="fibre-hero-left">
                <h2>{t("fibre_title")}</h2>
                <p>{t("fibre_sub")}</p>
              </div>

              <div className="fibre-hero-right">
                {/* ===== Application Type ===== */}
                <div className="calc-card" style={{ marginBottom: 14 }}>
                  <div className="calc-title">{t("apply_type_title")}</div>

                  <div className="type-grid">
                    <button
                      type="button"
                      className={[
                        "type-card",
                        !appType ? "none-selected" : "",
                        appType === "home" ? "selected" : "",
                        appType && appType !== "home" ? "dim" : "",
                      ].join(" ")}
                      onClick={() => setAppType("home")}
                    >
                      <div className="type-inner">
                        <img
                          className="type-img"
                          src={`${process.env.PUBLIC_URL}/icons/home-fibre.webp`}
                          alt="Home Fibre"
                        />
                        <div className="type-text">
                          <div className="type-title">{t("type_home_title")}</div>
                          <div className="type-desc">{t("type_home_desc")}</div>
                        </div>
                      </div>
                    </button>

                    <button
                      type="button"
                      className={[
                        "type-card",
                        !appType ? "none-selected" : "",
                        appType === "business" ? "selected" : "",
                        appType && appType !== "business" ? "dim" : "",
                      ].join(" ")}
                      onClick={() => setAppType("business")}
                    >
                      <div className="type-inner">
                        <img
                          className="type-img"
                          src={`${process.env.PUBLIC_URL}/icons/business-fibre.webp`}
                          alt="Business Fibre"
                        />
                        <div className="type-text">
                          <div className="type-title">{t("type_business_title")}</div>
                          <div className="type-desc">{t("type_business_desc")}</div>
                        </div>
                      </div>
                    </button>
                  </div>

                  {!appType && <div className="type-hint">{t("type_required_hint")}</div>}
                </div>

                {/* ===== Speed Selector ===== */}
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
                        <span key={s} className={`tick ${s === speed ? "active" : ""}`}>
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="slider-selected">{speedLabel}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="fibre-side">
            <div className="summary-card">
              <div className="summary-head">{t("fibre_summary_title")}</div>

              <div className="summary-body">
              {/* Main plan row */}
              <div className="sum-row">
                <span className="sum-label">
                  {t("fibre_label")} {speedLabel}
                </span>
                <span className="sum-val">RM{base}</span>
              </div>

              {/* NEW: free items rows */}
              {freeRows.length > 0 && (
                <div className="sum-extras">
                  {freeRows.map((r) => (
                    <div className="sum-row sum-row--small" key={r.label}>
                      <span className="sum-label">{r.label}</span>
                      <span className="sum-val sum-val--free">{r.price}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="sum-line" />

              {/* Monthly total */}
              <div className="sum-total">
                <div className="sum-total-label">{t("fibre_monthly")} <span>{t("fibre_24m")}</span></div>
                <div className="sum-total-price">RM{monthly}</div>
              </div>
            </div>


             <div className="summary-offer">
                <div className="offer-title">{t("fibre_offer_title")}</div>

                  {/* Show based on selection */}
                  {offerList.length > 0 ? (
                    <ul className="offer-list">
                      {offerList.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <div className="offer-sub">{t("type_required_hint")}</div>
                  )}
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Apply button */}
      <div className="apply-bar">
        <NavLink
          to={appType ? "/apply" : "#"}
          className={`apply-bottom-btn ${!appType ? "disabled" : ""}`}
          onClick={(e) => {
            if (!appType) {
              e.preventDefault();
              alert(t("type_required_alert"));
            }
          }}
          state={{ speed, appType, monthly, base }}
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
          <h3>{t("contact_sales_title")}</h3>
          <a href="tel:+6011XXXXXXXX" className="contact-link">
            <span className="contact-icon">
              📞
            </span>
            {t("contact_sales_desc1")}
          </a>

          <a
            href="https://wa.me/6011XXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link whatsapp"
          >
            <span className="contact-icon">
              💬
            </span>
            {t("contact_sales_desc2")}
          </a>
        </div>

        <div className="contact-item">
          <h3>{t("contact_email_title")}</h3>

          <a
            href="mailto:sales@celcomdigi.com.my"
            className="contact-link email"
          >
            <span className="contact-icon">
              ✉️
            </span>
            {t("contact_email_desc")}
          </a>
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
  const appType = routeState.appType ?? null; // "home" | "business"
  const monthly = routeState.monthly ?? 0;
  const base = routeState.base ?? 0;

  const speedLabel = speed >= 1000 ? `${speed / 1000}Gbps` : `${speed}Mbps`;
  const isHome = appType === "home";
  const isBusiness = appType === "business";

  const homeHasMesh = isHome && (speed === 500 || speed === 1000);
  const businessHasMesh = isBusiness;
  const hasMesh = homeHasMesh || businessHasMesh;

  const freeItems = (() => {
    if (!appType) return [];

    const items = [
      { label: t("free_router"), value: "RM0" },
      ...(hasMesh ? [{ label: t("free_mesh"), value: "RM0" }] : []),
      { label: t("free_installation"), value: "RM0" },
    ];

    return items;
  })();

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

  const fibreTypeLabel =
    routeState.appType === "business"
      ? t("type_business_title")
      : t("type_home_title");


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
          <div className="sumcard">
            <div className="sumcard-head">{t("fibre_summary_title")}</div>

            <div className="sumcard-body">
              <div className="sumcard-type">
                {fibreTypeLabel?.toUpperCase()}
              </div>

              <div className="sumcard-row">
                <span className="sumcard-label">
                  {t("fibre_label")} {speedLabel}
                </span>
                <span className="sumcard-val">RM{base}</span>
              </div>

              {freeItems.map((it) => (
                <div className="sumcard-row" key={it.label}>
                  <span className="sumcard-label">{it.label}</span>
                  <span className="sumcard-val">{it.value}</span>
                </div>
              ))}

              <div className="sumcard-line" />
              <div className="sumcard-total">
                <div className="sumcard-total-text">
                  <div className="sumcard-total-title">{t("fibre_monthly")}</div>
                  <div className="sumcard-total-sub">{t("fibre_24m")}</div>
                </div>

                <div className="sumcard-total-price">RM{monthly}</div>
              </div>
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

        <div className="sumcard">
          <div className="sumcard-head">{t("fibre_summary_title")}</div>

          <div className="sumcard-body">
            <div className="sumcard-type">
              {fibreTypeLabel}
            </div>

            {/* Plan row */}
            <div className="sumcard-row">
              <span className="sumcard-label">{t("fibre_label")} {speedLabel}</span>
              <span className="sumcard-val">RM{base}</span>
            </div>

            {/* Free items rows */}
            {freeItems.map((it) => (
              <div className="sumcard-row" key={it.label}>
                <span className="sumcard-label">{it.label}</span>
                <span className="sumcard-val">RM0</span>
              </div>
            ))}

            <div className="sumcard-line" />

            {/* Total row */}
            <div className="sumcard-total">
              <div className="sumcard-total-text">
                <div className="sumcard-total-title">{t("fibre_monthly")}</div>
                <div className="sumcard-total-sub">{t("fibre_24m")}</div>
              </div>

              <div className="sumcard-total-price">RM{monthly}</div>
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


