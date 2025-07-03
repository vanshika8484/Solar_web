import React, { useEffect, useRef } from "react";
import "./ScrollStackingCards.css";

const ScrollStackingCards = ({ content }) => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY + 150;
      let currentCard = null;

      cardsRef.current.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top + window.scrollY;
        if (scrollTop >= cardTop) currentCard = card;
      });

      cardsRef.current.forEach((card) => {
        card.classList.remove("active", "inactive");
      });

      if (currentCard) {
        currentCard.classList.add("active");
        const index = cardsRef.current.indexOf(currentCard);
        for (let i = 0; i < index; i++) {
          cardsRef.current[i].classList.add("inactive");
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="cards-container">
      {content.map((card, i) => (
        <div
          key={i}
          ref={(el) => (cardsRef.current[i] = el)}
          className={`card ${i % 2 !== 0 ? "reverse" : ""}`}
        >
          <div className="image-container">
            <img src={card.img} alt={card.alt} />
          </div>
          <div className="text-content">
            <h3>{card.heading}</h3>
            <h4 className="GetfontHomeDash">{card.subheading}</h4>
            <ul>
              {card.points.map((point, idx) => (
                <li className="GetfontHomeDash" key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScrollStackingCards;
