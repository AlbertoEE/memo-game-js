"use client";
import { useRef } from "react";
import styles from "./page.module.css";

export default function Home() {
  const cardContainer = useRef<HTMLDivElement>(null);

  function setUp() {
    const cardDivs: HTMLDivElement[] = Array.from(
      cardContainer.current?.children || []
    );
    cardDivs?.forEach((el) => {
      el.style.backgroundColor = "#0000FF";
    });
  }

  function generateCards() {
    let elements = [];
    for (let index = 0; index < 12; index++) {
      elements.push(
        <div>
          <img
            className={styles.img}
            src="https://cdn.shopify.com/s/files/1/0567/7344/3674/products/sword-of-avarice-doa1e.jpg"
            alt=""
          />
        </div>
      );
    }
    return elements;
  }

  return (
    <div className="grid bg-black grid-cols">
      <div className={styles.cardContainer} ref={cardContainer}>
        {generateCards()}
      </div>
    </div>
  );
}
