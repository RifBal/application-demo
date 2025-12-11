import React, { useState } from "react";
import "./App.css";
import logo from "./Logo_CelcomDigi.svg"; //

function App() {
  const [activeTab, setActiveTab] = useState("home");

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
        <a href="#home">Home</a>
        <a href="#home-fibre">Postpaid Plan</a>
        <a href="#business-fibre">Prepaid Plan</a>
        <a href="#contact">Contact</a>
      </nav>

      <main className="content">
        <section className="hero">
          <h1>Apply CelcomDigi Plan</h1>
          <p>Fast & simple registration for Postpaid and Prepaid plans.</p>
        </section>

        <section className="tabs">
          <button
            className={activeTab === "home" ? "tab active" : "tab"}
            onClick={() => setActiveTab("home")}
          >
            Postpaid
          </button>
          <button
            className={activeTab === "business" ? "tab active" : "tab"}
            onClick={() => setActiveTab("business")}
          >
            Prepaid
          </button>
        </section>

        {activeTab === "home" ? <PostpaidForm /> : <PrepaidForm />}
      </main>

      <footer className="footer" id="contact">
        <div>
          <h4>Customer Support</h4>
          <p>Billing & technical: 1800-xx-xxxx</p>
        </div>
        <div>
          <h4>Sales & WhatsApp</h4>
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
    console.log("Postpaid form submitted:", form);
    alert("Postpaid application submitted (demo only).");
  };

  return (
    <section className="form-card" id="home-fibre">
      <h2>Postpaid Plan</h2>

      <div className="plan-grid">
        <PlanCard speed="200 Mbps" price="RM99" selected={form.package === "200"} onSelect={() => setForm(f => ({ ...f, package: "200" }))} />
        <PlanCard speed="600 Mbps" price="RM139" selected={form.package === "600"} onSelect={() => setForm(f => ({ ...f, package: "600" }))} />
        <PlanCard speed="1 Gbps" price="RM199" selected={form.package === "1000"} onSelect={() => setForm(f => ({ ...f, package: "1000" }))} />
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <h3>Applicant Information</h3>
        <div className="form-row">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="As per MyKad/Passport"
          />
        </div>

        <div className="form-row">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            placeholder="e.g. 0123456789"
          />
        </div>

        <div className="form-row">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
          />
        </div>

        <h3>Home Address</h3>

        <div className="form-row">
          <label>Building Name</label>
          <input
            type="text"
            name="building"
            value={form.building}
            onChange={handleChange}
          />
        </div>

        <div className="form-row inline">
          <div>
            <label>City/State</label>
            <input
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Postcode</label>
            <input
              type="text"
              name="postcode"
              value={form.postcode}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row checkbox-row">
          <label>
            <input type="checkbox" required />
            I confirm the information given is accurate and I agree to the
            service terms and privacy notice.
          </label>
        </div>

        <button type="submit" className="submit-btn">
          Submit Postpaid Application
        </button>
      </form>
    </section>
  );
}

function PrepaidForm() {
  const [form, setForm] = useState({
    package: "300",
    companyName: "",
    employees: "",
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
    console.log("Prepaid form submitted:", form);
    alert("Prepaid application submitted (demo only).");
  };

  return (
    <section className="form-card" id="business-fibre">
      <h2>Prepaid Plan</h2>

      <div className="plan-grid">
        <PlanCard speed="300 Mbps" price="RM128" selected={form.package === "300"} onSelect={() => setForm(f => ({ ...f, package: "300" }))} />
        <PlanCard speed="600 Mbps" price="RM188" selected={form.package === "600"} onSelect={() => setForm(f => ({ ...f, package: "600" }))} />
        <PlanCard speed="1 Gbps" price="RM258" selected={form.package === "1000"} onSelect={() => setForm(f => ({ ...f, package: "1000" }))} />
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <h3>Company Information</h3>

        <div className="form-row">
          <label>Company Name</label>
          <input
            type="text"
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <label>Number of Employees</label>
          <input
            type="number"
            name="employees"
            value={form.employees}
            onChange={handleChange}
          />
        </div>

        <h3>Contact Person</h3>

        <div className="form-row">
          <label>Contact Name</label>
          <input
            type="text"
            name="contactName"
            value={form.contactName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <label>City/State</label>
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
          />
        </div>

        <div className="form-row checkbox-row">
          <label>
            <input type="checkbox" required />
            I agree to be contacted about Celcomdigi Business services.
          </label>
        </div>

        <button type="submit" className="submit-btn">
          Submit Prepaid Application
        </button>
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
