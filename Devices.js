import "./Devices.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Devices = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 150, once: true });
  }, []);

  const devices = [
    {
      name: "Smart Rings",
      emoji: "💍",
      description:
        "Discreet panic buttons that send alerts with your live GPS location to emergency contacts instantly.",
      feature: "Built-in GPS • SOS button • Stylish design",
    },
    {
      name: "Safety Apps",
      emoji: "📱",
      description:
        "Apps like ‘bSafe’, ‘Raksha’, and ‘Himmat’ allow instant alerts, live tracking, and fake call options for safety.",
      feature: "One-tap alert • Live tracking • Emergency contacts",
    },
    {
      name: "Personal Alarms",
      emoji: "🔊",
      description:
        "Compact devices that emit a loud siren to draw attention and scare away attackers in emergencies.",
      feature: "130dB alarm • Compact size • Reusable battery",
    },
    {
      name: "GPS Smartwatches",
      emoji: "⌚",
      description:
        "Smartwatches that share your live location and have SOS or fall detection features for safety.",
      feature: "Real-time location • SOS button • Health tracking",
    },
    {
      name: "Smart Keychains",
      emoji: "🔑",
      description:
        "Compact keychain tools that include alarms, lights, and hidden panic buttons connected via Bluetooth.",
      feature: "Alarm • Flashlight • Bluetooth SOS",
    },
  ];

  return (
    <section id="devices" className="devices-section">
      <div className="devices-header" data-aos="fade-down">
        <h2>🔧 Innovative Women Safety Devices</h2>
        <p>
          Technology can empower safety — discover modern devices designed to protect and alert when it matters most.
        </p>
      </div>

      <div className="devices-grid">
        {devices.map((device, index) => (
          <div className="device-card" data-aos="zoom-in" key={index}>
            <div className="device-icon">{device.emoji}</div>
            <h3>{device.name}</h3>
            <p className="device-desc">{device.description}</p>
            <p className="device-feature">{device.feature}</p>
          </div>
        ))}
      </div>

      <div className="devices-footer" data-aos="fade-up">
        <h3>⚙️ Pro Tip:</h3>
        <p>
          Combine a safety app with a wearable tracker for maximum protection and real-time assistance in emergencies.
        </p>
      </div>
    </section>
  );
};

export default Devices;
