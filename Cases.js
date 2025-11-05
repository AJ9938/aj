import "./Cases.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Cases = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 150, once: true });
  }, []);

  const cases = [
    {
      year: "2012",
      title: "Nirbhaya Case – Delhi",
      summary:
        "A brutal gang rape in Delhi that shook the nation and led to the Criminal Law (Amendment) Act, 2013, strengthening punishment for sexual crimes.",
      impact: "Introduced stricter rape laws, fast-track courts, and the Nirbhaya Fund for women’s safety initiatives.",
      emoji: "🔥",
    },
    {
      year: "2018",
      title: "Kathua Rape Case – Jammu & Kashmir",
      summary:
        "An 8-year-old girl’s abduction and assault highlighted deep-rooted gender and communal issues.",
      impact: "Sparked nationwide protests and demands for death penalty in child rape cases.",
      emoji: "🕯️",
    },
    {
      year: "2020",
      title: "Hyderabad Vet Case – Telangana",
      summary:
        "A young veterinary doctor was raped and murdered, triggering massive outrage.",
      impact: "Led to fast-track convictions and strengthened calls for immediate justice reforms.",
      emoji: "⚖️",
    },
    {
      year: "2023",
      title: "Manipur Violence",
      summary:
        "Videos of women being paraded naked during ethnic violence brought attention to women’s vulnerability in conflict zones.",
      impact: "Reignited national debate on women’s dignity and digital accountability.",
      emoji: "💔",
    },
  ];

  return (
    <section id="cases" className="cases-section">
      <div className="cases-header" data-aos="fade-down">
        <h2>🕯️ Notable Women Safety Cases in India</h2>
        <p>
          These landmark incidents changed India’s legal and social landscape,
          reminding us that justice and awareness are crucial for progress.
        </p>
      </div>

      <div className="cases-timeline">
        {cases.map((item, i) => (
          <div
            key={i}
            className="case-card"
            data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <div className="case-year">{item.year}</div>
            <div className="case-content">
              <div className="case-icon">{item.emoji}</div>
              <h3>{item.title}</h3>
              <p className="case-summary">{item.summary}</p>
              <p className="case-impact"><strong>Impact:</strong> {item.impact}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="cases-footer" data-aos="fade-up">
        <h3>💡 Reflection:</h3>
        <p>
          Each of these stories is a reminder that women’s safety is not just a
          law — it’s a shared responsibility. Awareness and action create change.
        </p>
      </div>
    </section>
  );
};

export default Cases;
