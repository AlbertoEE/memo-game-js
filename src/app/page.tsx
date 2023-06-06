"use client";
import { useRef } from "react";

export default function Home() {
  const cardContainer = useRef<HTMLDivElement>(null);

  function generateCards() {
    let elements = [];
    for (let index = 0; index < 12; index++) {
      elements.push(
        <div>
          <img
            className="w-full max-h-[25vh] max-w-[25vw] object-scale-down"
            src="https://cdn.shopify.com/s/files/1/0567/7344/3674/products/sword-of-avarice-doa1e.jpg"
            alt=""
          />
        </div>
      );
    }
    return elements;
  }

  return (
    <div className="grid bg-black h-screen w-screen m-0 p-0 grid-cols-[repeat(5,1fr)] grid-rows-[repeat(3,1fr)]">
      <div className="grid bg-black grid-cols-[repeat(4,1fr)] col-start-2 col-end-5 row-start-2 row-end-3" ref={cardContainer}>
        {generateCards()}
      </div>
      <button className={styles.button}>HOLA</button>
    </div>
  );
}
