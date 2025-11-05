import "./Foundations.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Foundations = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 150, once: true });
  }, []);

  const ngos = [
    {
      name: "Smile Foundation",
      desc: "Empowers underprivileged women and girls through education, healthcare, and vocational training.",
      link: "https://www.smilefoundationindia.org/",
      emoji: "😊",
      color: "#ffb6b9",
    },
    {
      name: "Sayfty",
      desc: "Promotes safety awareness, self-defense, and gender equality through training and online campaigns.",
      link: "https://sayfty.com/",
      emoji: "🛡️",
      color: "#fdd365",
    },
    {
      name: "SNEHA",
      desc: "Works to prevent gender-based violence, provide counselling, and improve women’s access to justice.",
      link: "https://snehamumbai.org/",
      emoji: "🌺",
      color: "#a1c4fd",
    },
    {
      name: "Women Power Line 1090",
      desc: "Government initiative ensuring women’s safety through technology, counselling, and immediate response.",
      link: "https://www.1090up.in/",
      emoji: "⚡",
      color: "#fbc2eb",
    },
  ];

  return (
    <section id="foundations" className="foundations-section">
      <div className="foundations-header" data-aos="fade-down">
        <h2>💖 Foundations & NGOs Supporting Women</h2>
        <p>
          These organizations are leading change — empowering women, spreading awareness, and ensuring safety across India.
        </p>
      </div>

      <div className="foundations-grid">
        {ngos.map((ngo, index) => (
          <div
            key={index}
            className="foundation-card"
            data-aos={index % 2 === 0 ? "zoom-in-up" : "zoom-in-down"}
            style={{ borderTop: `5px solid ${ngo.color}` }}
          >
            <div className="foundation-icon">{ngo.emoji}</div>
            <h3>{ngo.name}</h3>
            <p>{ngo.desc}</p>
            <a
              href={ngo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="foundation-link"
            >
            
            </a>
          </div>
        ))}
      </div>

      <div className="foundations-footer" data-aos="fade-up">
        <p>
          🌍 Each foundation plays a vital role in shaping a safer, fairer, and more inclusive India for women.
        </p>
      </div>
    </section>
  );
};

export default Foundations;
