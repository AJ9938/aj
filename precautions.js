import "./Precautions.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Precautions = () => {
  useEffect(() => {
    AOS.init({ duration: 900, offset: 120, once: true });
  }, []);

  const tips = [
    {
      category: "Daily Safety",
      icon: "🚨",
      points: [
        "Always inform someone about your whereabouts and expected return time.",
        "Avoid sharing personal routines or addresses publicly.",
        "Be alert in isolated areas — trust your instincts if something feels off.",
      ],
    },
    {
      category: "Travel Safety",
      icon: "🚗",
      points: [
        "Use verified transport apps like Uber or Ola and share your ride details with family.",
        "Note the vehicle’s number plate and driver’s details before boarding.",
        "Avoid accepting food, water, or help from strangers on public transport.",
      ],
    },
    {
      category: "Digital Safety",
      icon: "💻",
      points: [
        "Use strong, unique passwords for each social media or banking account.",
        "Avoid sharing personal photos or documents with unknown contacts.",
        "Report and block suspicious online messages or cyberbullying instantly.",
      ],
    },
    {
      category: "Emergency Actions",
      icon: "⚡",
      points: [
        "Keep emergency contacts like 112, 1091, and family on speed dial.",
        "Download apps like ‘112 India’ or ‘MySafetipin’ for immediate help.",
        "Carry self-defense items like pepper spray, keychain alarms, or a loud whistle.",
      ],
    },
  ];

  return (
    <section id="precautions" className="precautions-section">
      <div className="precautions-header" data-aos="fade-down">
        <h2>🛡️ Safety Precautions Every Woman Should Follow</h2>
        <p>
          Empower yourself with awareness and preparation — these safety habits can make a big difference in daily life.
        </p>
      </div>

      <div className="precautions-grid">
        {tips.map((tip, i) => (
          <div className="precaution-card" data-aos="zoom-in-up" key={i}>
            <div className="precaution-icon">{tip.icon}</div>
            <h3>{tip.category}</h3>
            <ul>
              {tip.points.map((p, j) => (
                <li key={j}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="precautions-footer" data-aos="fade-up">
        <h3>💡 Quick Reminder:</h3>
        <p>
          Safety is not fear — it’s awareness. Equip yourself mentally and physically to respond smartly in any situation.
        </p>
      </div>
    </section>
  );
};

export default Precautions;
