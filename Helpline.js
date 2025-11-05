import "./Helpline.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Helplines = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 150, once: true });
  }, []);

  const helplines = [
    {
      name: "Women Helpline (All India)",
      number: "1091",
      desc: "For immediate help in cases of harassment, assault, or threat.",
      icon: "📞",
      color: "#ff4d6d",
    },
    {
      name: "Domestic Violence Helpline",
      number: "181",
      desc: "24x7 support for women facing domestic abuse and violence.",
      icon: "🏠",
      color: "#ff758f",
    },
    {
      name: "Police Emergency",
      number: "100",
      desc: "For urgent police assistance in any emergency situation.",
      icon: "🚨",
      color: "#ffb3c1",
    },
    {
      name: "Cyber Crime Helpline",
      number: "1930",
      desc: "Report online fraud, stalking, and cyber harassment.",
      icon: "💻",
      color: "#ffc2d1",
    },
  ];

  return (
    <section id="helplines" className="helplines-section">
      <div className="helpline-header" data-aos="fade-down">
        <h2>🚨 Important Helpline Numbers</h2>
        <p>
          In moments of distress, don’t hesitate — reach out for help immediately.  
          These helplines are available 24×7 to support and protect women across India.
        </p>
      </div>

      <div className="helpline-grid">
        {helplines.map((line, index) => (
          <div
            key={index}
            className="helpline-card"
            style={{ borderTop: `5px solid ${line.color}` }}
            data-aos={index % 2 === 0 ? "zoom-in-up" : "zoom-in-down"}
          >
            <div className="helpline-icon">{line.icon}</div>
            <h3>{line.name}</h3>
            <p>{line.desc}</p>
            <a href={`tel:${line.number}`} className="helpline-number">
              ☎ {line.number}
            </a>
          </div>
        ))}
      </div>

      <div className="helpline-footer" data-aos="fade-up">
        <p>
          💡 <b>Tip:</b> Save these numbers in your contacts and share them with your family and friends.
        </p>
      </div>
    </section>
  );
};

export default Helplines;
