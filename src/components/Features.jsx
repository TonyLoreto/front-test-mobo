import { useEffect, useState } from "react";
import "../styles/hero.css";

const Features = () => {
  const [activeText, setActiveText] = useState(0);
  const texts = [
    "Pantalla Super Retina XDR de 6.7\"",
    "Chip A15 Bionic",
    "Cámara Pro con modo Noche",
    "Batería de larga duración"
  ];

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight; 
      const scrollTop = window.scrollY;

      const newIndex = Math.min(
        Math.floor((scrollTop / maxScroll) * texts.length),
        texts.length - 1
      );

      setActiveText(newIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="features" className="features">
    </section>
  );
};

export default Features;
