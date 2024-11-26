"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { CardSwipe, CardsSwipeContainer } from "@/components/ui/cards-swipe";

export default function CardsSwipe() {
  const [cards, setCards] = useState(DEMO_CARDS);

  const sendToBack = (id: number) => {
    setCards((prev) => {
      const newCards = [...prev];
      const index = newCards.findIndex((card) => card.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });
  };

  return (
    <CardsSwipeContainer style={{ perspective: 600 }}>
      {cards.map((card, index) => {
        return (
          <CardSwipe key={card.id} onSendToBack={() => sendToBack(card.id)}>
            <motion.div
              className="h-full w-full rounded-lg shadow-lg"
              animate={{
                rotateZ: (cards.length - index - 1) * 4,
                scale: 1 + index * 0.06 - cards.length * 0.06,
                transformOrigin: "90% 90%",
              }}
              initial={false}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <img
                src={card.img}
                alt="card"
                className="pointer-events-none h-full w-full rounded-lg object-cover"
              />
            </motion.div>
          </CardSwipe>
        );
      })}
    </CardsSwipeContainer>
  );
}

/*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
/*                        CONSTANTS                           */
/*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/

const DEMO_CARDS = [
  {
    id: 5,
    z: 0,
    img: "https://m.media-amazon.com/images/I/91E3gRRz5iL.jpg",
  },
  {
    id: 4,
    z: 1,
    img: "https://m.media-amazon.com/images/I/81QroKJ3PhL._UF1000,1000_QL80_.jpg",
  },

  {
    id: 3,
    z: 2,
    img: "https://m.media-amazon.com/images/I/617rPny7-LL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 2,
    z: 3,
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1498137521i/35496817.jpg",
  },

  {
    id: 1,
    z: 4,
    img: "https://m.media-amazon.com/images/I/71gnJ-dXgxL._AC_UF1000,1000_QL80_.jpg",
  },
];