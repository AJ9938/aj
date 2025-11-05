import "./Home.css";
import bgImg from "./assets/bg.jpg"; 
import awarenessImg from "./assets/awareness.jpg";
import rightsImg from "./assets/rights.jpg";
import safetyImg from "./assets/safety.jpg";

const Home = () => {
  return (
     <section id="home" className="home-section">
      {/* ===== Hero Section ===== */}
      <div
        className="hero"
        style={{
          backgroundImage: `url(${bgImg})`,   // ✅ Dynamic background
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="home-title">Empower. Protect. Rise.</h1>
          <p className="home-description">
            Together, we can create a safer society for women by spreading awareness,
            understanding rights, and being prepared. Safety is not a privilege — it’s a right.
          </p>
        
        </div>
      </div>

      {/* ===== Info Section ===== */}
      <div className="info-section">
        <h2>Why Awareness Matters</h2>
        <p>
          Awareness builds strength, confidence, and unity. When women and communities understand
          their rights and safety tools, they can prevent violence and foster lasting change.
        </p>

        <div className="info-images">
          <div className="img-card">
            <img src={awarenessImg} alt="Awareness Campaign" />
            <p>Community Awareness</p>
          </div>
          <div className="img-card">
            <img src={rightsImg} alt="Know Your Rights" />
            <p>Know Your Rights</p>
          </div>
          <div className="img-card">
            <img src={safetyImg} alt="Women's Safety" />
            <p>Safety & Support</p>
          </div>
        </div>
      </div>

      {/* ===== CTA Section ===== */}
      <div className="cta-section">
        <h2>What You Can Do</h2>
        <ul>
          <li>Learn about women’s safety laws and helplines in your area.</li>
          <li>Participate in awareness campaigns and self-defense workshops.</li>
          <li>Encourage conversations about safety at home and in communities.</li>
          <li>Support organizations that protect women’s rights.</li>
        </ul>
        <button className="cta-button">Get Involved</button>
      </div>
    </section>
  );
};

export default Home;
