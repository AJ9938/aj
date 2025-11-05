import "./Sections.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Laws = () => {
  useEffect(() => {
    AOS.init({ duration: 800, offset: 120, once: true });
  }, []);

  const lawCategories = [
    {
      title: "Crimes Against Women",
      laws: [
        {
          name: "Section 354 IPC",
          desc: "Assault or criminal force to a woman with intent to outrage her modesty.",
          penalty: "Imprisonment 1–5 years and fine",
        },
        {
          name: "Section 376 IPC",
          desc: "Punishment for rape and sexual assault crimes.",
          penalty: "Imprisonment 7 years to life and fine",
        },
        {
          name: "Section 509 IPC",
          desc: "Words, gestures, or acts intended to insult the modesty of a woman.",
          penalty: "Imprisonment up to 1 year, or fine, or both",
        },
        {
          name: "Section 498A IPC",
          desc: "Cruelty by husband or relatives of husband (mental or physical).",
          penalty: "Imprisonment up to 3 years and fine",
        },
      ],
    },
    {
      title: "Protection & Domestic Laws",
      laws: [
        {
          name: "Domestic Violence Act, 2005",
          desc: "Protection from physical, verbal, emotional, sexual, and economic abuse within households.",
          penalty: "Protection orders, residence rights, and financial reliefs",
        },
        {
          name: "Dowry Prohibition Act, 1961",
          desc: "Prohibits giving, taking, or demanding dowry.",
          penalty: "Imprisonment up to 5 years and fine ₹15,000 or the amount of dowry",
        },
      ],
    },
    {
      title: "Workplace Safety",
      laws: [
        {
          name: "Sexual Harassment of Women at Workplace Act, 2013",
          desc: "Ensures a safe work environment and sets up internal complaints committees.",
          penalty: "Strict disciplinary action for offenders",
        },
      ],
    },
    {
      title: "Representation & Trafficking",
      laws: [
        {
          name: "Indecent Representation of Women (Prohibition) Act, 1986",
          desc: "Prohibits indecent portrayal of women in media and advertising.",
          penalty: "Imprisonment up to 2 years and fine up to ₹2,000",
        },
        {
          name: "Immoral Traffic (Prevention) Act, 1956",
          desc: "Prevents trafficking and sexual exploitation for commercial purposes.",
          penalty: "Imprisonment 7 years to life depending on offense",
        },
      ],
    },
  ];

  const cases = [
    {
      title: "Vishakha vs. State of Rajasthan (1997)",
      desc: "A landmark case that led to the formation of the Sexual Harassment at Workplace Act, 2013.",
    },
    {
      title: "Arnesh Kumar vs. State of Bihar (2014)",
      desc: "Established fair use of Section 498A IPC to prevent misuse while protecting genuine victims.",
    },
  ];

  const rights = [
    { law: "Section 354 IPC", protect: "Unwanted physical touch or harassment" },
    { law: "Section 509 IPC", protect: "Lewd comments, gestures, or stalking" },
    { law: "Domestic Violence Act", protect: "Physical, emotional, or economic abuse" },
    { law: "Workplace Harassment Act", protect: "Any form of harassment at the workplace" },
  ];

  const resources = [
    {
      name: "National Commission for Women",
      link: "https://ncw.nic.in/",
      desc: "File complaints or seek help for women-related issues.",
    },
    {
      name: "Ministry of Women & Child Development",
      link: "https://wcd.nic.in/",
      desc: "Official government portal for women welfare schemes.",
    },
    {
      name: "112 India App",
      link: "https://play.google.com/store/apps/details?id=com.tcs.pcs",
      desc: "All-in-one emergency helpline app for immediate help.",
    },
  ];

  return (
    <section id="laws" className="section laws-section">
      <h2 className="section-title" data-aos="fade-down">
        Women Safety Laws in India
      </h2>
      <p className="section-subtitle" data-aos="fade-up">
        Understanding your legal rights helps you stand stronger. These laws
        safeguard women across different areas of life.
      </p>

      {/* === Law Categories === */}
      {lawCategories.map((category, i) => (
        <div key={i} className="law-category" data-aos="fade-up">
          <h3 className="category-title">{category.title}</h3>
          <div className="laws-grid">
            {category.laws.map((law, j) => (
              <div className="law-card" data-aos="zoom-in-up" key={j}>
                <h4>{law.name}</h4>
                <p>{law.desc}</p>
                <p className="penalty"><b>Penalty:</b> {law.penalty}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* === Case Highlights === */}
      <div className="case-section" data-aos="fade-up">
        <h3>📜 Landmark Judgments</h3>
        <div className="case-grid">
          {cases.map((c, i) => (
            <div className="case-card" key={i}>
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* === Know Your Rights Table === */}
      <div className="rights-section" data-aos="fade-up">
        <h3>⚖️ Know Your Rights (In Simple Terms)</h3>
        <table className="rights-table">
          <thead>
            <tr>
              <th>Law</th>
              <th>What It Protects You From</th>
            </tr>
          </thead>
          <tbody>
            {rights.map((r, i) => (
              <tr key={i}>
                <td>{r.law}</td>
                <td>{r.protect}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* === Did You Know Facts === */}
      <div className="facts-box" data-aos="fade-up">
        <h3>💡 Did You Know?</h3>
        <ul>
          <li>Women can file an FIR at any police station — not only where the incident occurred.</li>
          <li>Hospitals must provide free first aid to victims of assault (CrPC Section 357C).</li>
          <li>Cyber harassment and stalking are punishable under the IT Act, 2000.</li>
        </ul>
      </div>

      {/* === Resources === */}
      <div className="resources-section" data-aos="fade-up">
        <h3>🔗 Useful Legal Resources</h3>
        <div className="resource-grid">
          {resources.map((r, i) => (
            <a
              key={i}
              href={r.link}
              target="_blank"
              rel="noopener noreferrer"
              className="resource-card"
            >
              <h4>{r.name}</h4>
              <p>{r.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Laws;
