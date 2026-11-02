import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";

const games = [
  {
    name: "Valorant",
    category: "FPS / Tactical",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=900",
    rating: "4.9"
  },
  {
    name: "Cyberpunk 2077",
    category: "Open World",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=900",
    rating: "4.8"
  },
  {
    name: "Battle Arena",
    category: "Action / Adventure",
    image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=900",
    rating: "4.7"
  }
];

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">GAME<span>ZONE.</span></Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/games">Games</Link>
        <Link to="/about">About</Link>
        <Link to="/register" className="nav-btn">Join Now</Link>
      </div>
    </nav>
  );
}

function GameGrid() {
  return (
    <div className="game-grid">
      {games.map((game) => (
        <article className="game-card" key={game.name}>
          <img src={game.image} alt={`${game.name} gaming artwork`} />
          <div className="game-info">
            <span>{game.category}</span>
            <h3>{game.name}</h3>
            <p>⭐ {game.rating} / 5</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="tagline">THE ULTIMATE GAMING EXPERIENCE</p>
          <h1>PLAY MORE.<br /><span>WIN BIGGER.</span></h1>
          <p className="hero-text">
            Enter the world of gaming. Discover amazing games,
            connect with players and become a legend.
          </p>
          <div className="hero-buttons">
            <Link to="/games" className="primary-btn">Explore Games</Link>
            <Link to="/register" className="secondary-btn">Join Community</Link>
          </div>
          <div className="stats">
            <div><h2>50K+</h2><p>Gamers</p></div>
            <div><h2>120+</h2><p>Games</p></div>
            <div><h2>24/7</h2><p>Gaming</p></div>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=1200"
            alt="Neon gaming setup"
          />
        </div>
      </section>

      <section className="featured">
        <p className="tagline">DISCOVER YOUR NEXT ADVENTURE</p>
        <h2>Featured Games</h2>
        <GameGrid />
      </section>
      <Footer />
    </>
  );
}

function Games() {
  return (
    <main className="page-container">
      <p className="tagline">EXPLORE THE COLLECTION</p>
      <h1>Our Games</h1>
      <GameGrid />
    </main>
  );
}

function About() {
  return (
    <main className="page-container about">
      <p className="tagline">WHO WE ARE</p>
      <h1>Welcome to GAMEZONE</h1>
      <p>
        GAMEZONE is an online gaming community created for passionate gamers.
        Discover games, explore new adventures and connect with gaming
        enthusiasts around the world.
      </p>
      <Link to="/register" className="primary-btn">Become a Member</Link>
    </main>
  );
}

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "", email: "", password: "", age: "",
    mobile: "", gender: "", state: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setSubmitted(false);
  };

  const errors = {
    name: !/^[A-Za-z ]+$/.test(form.name.trim()),
    email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email),
    password: !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(form.password),
    age: !/^\d+$/.test(form.age) || Number(form.age) < 18 || Number(form.age) > 30,
    mobile: !/^\d{10}$/.test(form.mobile),
    gender: !form.gender,
    state: !form.state
  };

  const valid =
    form.name.trim() !== "" && !errors.name &&
    form.email !== "" && !errors.email &&
    form.password !== "" && !errors.password &&
    form.age !== "" && !errors.age &&
    form.mobile !== "" && !errors.mobile &&
    !errors.gender && !errors.state;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (valid) setSubmitted(true);
  };

  return (
    <main className="register-wrapper">
      <section className="register-card">
        <div className="register-heading">
          <div className="game-icon">🎮</div>
          <p className="tagline">JOIN THE COMMUNITY</p>
          <h1>Create Account</h1>
          <p>Become a part of the GAMEZONE universe.</p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <label htmlFor="name">Full Name</label>
          <input id="name" name="name" value={form.name} onChange={updateField} placeholder="Enter your full name" />
          {form.name && errors.name && <small>Name must contain letters only.</small>}

          <label htmlFor="email">Email Address</label>
          <input id="email" name="email" type="email" value={form.email} onChange={updateField} placeholder="Enter your email" />
          {form.email && errors.email && <small>Enter a valid email address.</small>}

          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" value={form.password} onChange={updateField} placeholder="Minimum 8 characters" />
          {form.password && errors.password && <small>Use uppercase, lowercase, a number and at least 8 characters.</small>}

          <label htmlFor="age">Age</label>
          <input id="age" name="age" type="number" value={form.age} onChange={updateField} placeholder="Age between 18 and 30" />
          {form.age && errors.age && <small>Age must be between 18 and 30.</small>}

          <label htmlFor="mobile">Mobile Number</label>
          <input id="mobile" name="mobile" type="tel" inputMode="numeric" maxLength="10" value={form.mobile} onChange={updateField} placeholder="10 digit mobile number" />
          {form.mobile && errors.mobile && <small>Enter exactly 10 digits.</small>}

          <label htmlFor="gender">Gender</label>
          <select id="gender" name="gender" value={form.gender} onChange={updateField}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {!form.gender && <small>Gender is required.</small>}

          <label htmlFor="state">State</label>
          <select id="state" name="state" value={form.state} onChange={updateField}>
            <option value="">Select State</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Kerala">Kerala</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
          </select>
          {!form.state && <small>State is required.</small>}

          <button type="submit" disabled={!valid} className="submit-btn">
            CREATE GAMER ACCOUNT →
          </button>

          {submitted && (
            <div className="success" role="status">
              🎉 Registration completed successfully!
              <p>Welcome to GAMEZONE, {form.name}!</p>
              <button type="button" className="home-btn" onClick={() => navigate("/")}>
                Go to Home
              </button>
            </div>
          )}
        </form>

        <p className="login-text">Already a gamer? <Link to="/">Go Home</Link></p>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <h2>GAME<span>ZONE.</span></h2>
      <p>Level up your gaming experience.</p>
      <p>© 2026 GAMEZONE. All Rights Reserved.</p>
    </footer>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}