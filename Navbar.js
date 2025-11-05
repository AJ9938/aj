import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the section most in view (highest intersection ratio)
        let mostVisible = null;
        let maxRatio = 0;

        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            mostVisible = entry.target;
            maxRatio = entry.intersectionRatio;
          }
        });

        if (mostVisible) {
          setActiveSection(mostVisible.id);
        }
      },
      {
        threshold: Array.from({ length: 11 }, (_, i) => i / 10), // 0,0.1,...1.0
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">Elevate Her</h1>
        <ul className="nav-links">
          {[
            "home",
            "laws",
            "precautions",
            "devices",
            "helplines",
            "cases",
            "foundations",
          ].map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`nav-link ${activeSection === id ? "active" : ""}`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
