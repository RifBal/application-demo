import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useLocation,
} from "react-router-dom";
import "./App.css";
import logo from "./Logo_CelcomDigi.svg";

function App() {
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

    const classes = ["bg-home", "bg-postpaid", "bg-prepaid", "bg-contact"];
    document.body.classList.remove(...classes);

    if (path === "/") document.body.classList.add("bg-home");
    else if (path.startsWith("/postpaid")) document.body.classList.add("bg-postpaid");
    else if (path.startsWith("/prepaid")) document.body.classList.add("bg-prepaid");
    else if (path.startsWith("/contact")) document.body.classList.add("bg-contact");
    else document.body.classList.add("bg-home");
  }, [location.pathname]);

  return (
    <div className="app">
      <header>
        <div className="top-header">
          <div className="logo-area">
            <img src={logo} alt="CelcomDigi Logo" className="logo-img" />
            <span className="logo-text"></span>
          </div>
        </div>
      </header>

      <nav className="nav-menu">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/postpaid">Postpaid Plan</NavLink>
        <NavLink to="/prepaid">Prepaid Plan</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <main className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/postpaid" element={<PostpaidForm />} />
          <Route path="/prepaid" element={<PrepaidForm />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

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
        <p className="footer-bottom">
          Celcomdigi Distributor © 2025. All Rights Reserved. (Demo)
        </p>
      </footer>
    </div>
  );
}

function HomePage() {
  const cards = [
    {
      title: "Postpaid Plans",
      text: "Stable monthly plans with high-speed data and exclusive benefits.",
      img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200",
      link: "/postpaid",
      btn: "View Postpaid",
    },
    {
      title: "Prepaid Plans",
      text: "Flexible prepaid options with affordable data and calls.",
      img: "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=1200",
      link: "/prepaid",
      btn: "View Prepaid",
    },
    {
      title: "Need Help?",
      text: "Contact our sales team or customer support anytime.",
      img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=1200&q=80",
      link: "/contact",
      btn: "Contact Us",
    },
  ];

  return (
    <section className="home-wrap">
      <div className="hero">
        <h1>Apply CelcomDigi Plan</h1>
        <p>Fast & simple registration for Postpaid and Prepaid plans.</p>
      </div>

      <div className="card-grid">
        {cards.map((card, index) => (
          <div className="floating-card" key={index}>
            <div className="floating-card-img">
              <img src={card.img} alt={card.title} />
            </div>

            <div className="floating-card-content">
              <h2>{card.title}</h2>
              <p>{card.text}</p>

              <NavLink className="primary-btn" to={card.link}>
                {card.btn}
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <section className="form-card">
      <h2>Contact</h2>
      <p><b>Customer Support:</b> 1800-xx-xxxx</p>
      <p><b>Sales:</b> +60 11-xxxx xxxx</p>
      <p><b>WhatsApp:</b> wa.me/60xxx</p>
      <p><b>Email:</b> sales@celcomdigi.com.my</p>
    </section>
  );
}

function PostpaidForm() {
  const [form, setForm] = useState({
    package: "200",
    name: "",
    phone: "",
    email: "",
    building: "",
    city: "",
    postcode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Postpaid application submitted (demo only).");
  };

  return (
    <section className="form-card">
      <h2>Postpaid Plan</h2>

      <div className="plan-grid">
        <PlanCard speed="Plan A" price="RM99" selected={form.package === "200"} onSelect={() => setForm(f => ({ ...f, package: "200" }))} />
        <PlanCard speed="Plan B" price="RM139" selected={form.package === "600"} onSelect={() => setForm(f => ({ ...f, package: "600" }))} />
        <PlanCard speed="Plan C" price="RM199" selected={form.package === "1000"} onSelect={() => setForm(f => ({ ...f, package: "1000" }))} />
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <h3>Applicant Information</h3>

        <div className="form-row">
          <label>Full Name</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} required />
        </div>

        <div className="form-row">
          <label>Phone Number</label>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} required />
        </div>

        <div className="form-row">
          <label>Email Address</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </div>

        <h3>Home Address</h3>

        <div className="form-row">
          <label>Building Name</label>
          <input type="text" name="building" value={form.building} onChange={handleChange} />
        </div>

        <div className="form-row inline">
          <div>
            <label>City/State</label>
            <input type="text" name="city" value={form.city} onChange={handleChange} />
          </div>
          <div>
            <label>Postcode</label>
            <input type="text" name="postcode" value={form.postcode} onChange={handleChange} />
          </div>
        </div>

        <div className="form-row checkbox-row">
          <label>
            <input type="checkbox" required /> I confirm the information given is accurate.
          </label>
        </div>

        <button type="submit" className="submit-btn">Submit Postpaid Application</button>
      </form>
    </section>
  );
}

function PrepaidForm() {
  const [form, setForm] = useState({
    package: "300",
    contactName: "",
    phone: "",
    email: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Prepaid application submitted (demo only).");
  };

  return (
    <section className="form-card">
      <h2>Prepaid Plan</h2>

      <div className="plan-grid">
        <PlanCard speed="Plan X" price="RM25" selected={form.package === "300"} onSelect={() => setForm(f => ({ ...f, package: "300" }))} />
        <PlanCard speed="Plan Y" price="RM35" selected={form.package === "600"} onSelect={() => setForm(f => ({ ...f, package: "600" }))} />
        <PlanCard speed="Plan Z" price="RM45" selected={form.package === "1000"} onSelect={() => setForm(f => ({ ...f, package: "1000" }))} />
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <h3>Applicant Information</h3>

        <div className="form-row">
          <label>Full Name</label>
          <input type="text" name="contactName" value={form.contactName} onChange={handleChange} required />
        </div>

        <div className="form-row">
          <label>Phone Number</label>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} required />
        </div>

        <div className="form-row">
          <label>Email Address</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </div>

        <div className="form-row">
          <label>City/State</label>
          <input type="text" name="city" value={form.city} onChange={handleChange} />
        </div>

        <div className="form-row checkbox-row">
          <label>
            <input type="checkbox" required /> I agree to be contacted about CelcomDigi services.
          </label>
        </div>

        <button type="submit" className="submit-btn">Submit Prepaid Application</button>
      </form>
    </section>
  );
}

function PlanCard({ speed, price, selected, onSelect }) {
  return (
    <div className={`plan-card ${selected ? "selected" : ""}`} onClick={onSelect}>
      <h4>{speed}</h4>
      <p className="price">{price}/month</p>
      <p className="tagline">Unlimited data</p>
      <button type="button" className="small-btn">
        {selected ? "Selected" : "Choose Plan"}
      </button>
    </div>
  );
}

export default App;
