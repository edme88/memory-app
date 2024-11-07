import "./App.css";
import { useEffect, useState } from "react";
import Card from "./components/cards/card";
import Header from "./components/header/header";

function App() {
  const [name, setName] = useState("");
  const [cartaElegida1, setCartaElegida1] = useState(null);
  const [cartaElegida2, setCartaElegida2] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [cards, setCards] = useState([
    { icon: "🐶", matched: false },
    { icon: "🐱", matched: false },
    { icon: "🐭", matched: false },
    { icon: "🐹", matched: false },
    // { icon: "🐰", id: 5, matched: false },
    // { icon: "🦊", id: 6, matched: false },
    // { icon: "🐻", id: 7, matched: false },
    // { icon: "🐼", id: 8, matched: false },
    // { icon: "🐯", id: 9, matched: false },
    // { icon: "🦁", id: 10, matched: false },
    // { icon: "🐮", id: 11, matched: false },
    // { icon: "🐷", id: 12, matched: false },
  ]);

  useEffect(() => {
    const cardsMezcladas = shuffleArray(cards);
    console.log(`Las cards mexclads son ${JSON.stringify(cardsMezcladas)}`);
    setCards(cardsMezcladas);
  }, []);

  useEffect(() => {
    if (cartaElegida1?.icon != null && cartaElegida2?.icon != null) {
      setDisabled(true);
      if (cartaElegida1.icon === cartaElegida2.icon) {
        console.log(`Son iguales - queda boca arriba`);
        cards.forEach((cartita) => {
          if (cartita.icon === cartaElegida1.icon) {
            cartita.matched = true;
          }
        });
        setCards(cards);
        setDisabled(false);
        setCartaElegida1(null);
        setCartaElegida2(null);
      } else {
        setTimeout(() => {
          setCartaElegida1(null);
          setCartaElegida2(null);
          setDisabled(false);
        }, [2000]);
        console.log(`Son distintas - queda boca abajo`);
      } 
    }
    
  }, [cartaElegida1, cartaElegida2]);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const shuffleArray = (cards) => {
    console.log(`El listado recibido es ${cards}`);
    let cards2 = cards.map((cart) => {
      return { ...cart};
    });
    let completeArray = cards.concat(cards2);
    console.log(`EL COM COMPLETE ARRAY ES ${completeArray}`);
    let currentIndex = completeArray.length,
      temporaryValue,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = completeArray[currentIndex];
      completeArray[currentIndex] = completeArray[randomIndex];
      completeArray[randomIndex] = temporaryValue;
    }
    console.log(`El array completo es ${completeArray}`);
    return completeArray;
  };

  const clickOn = (carta) => {
    console.log(`CLICK ${carta}`);
    console.log(`Se hizo click en ${carta.icon}`);
    if (cartaElegida1?.icon == null) {
      setCartaElegida1(carta);
      console.log(`Carta 1 es ${carta.icon}`);
    } else {
      setCartaElegida2(carta);
      console.log(`Carta 2 es ${carta.icon}`);
    }
  };

  return (
    <>
      <Header></Header>
      <main>
        {cards.map((carta, index) => (
          <Card
            icon={carta.icon}
            key={index}
            action={() => clickOn(carta)}
            flipped={
              carta == cartaElegida1 || carta == cartaElegida2 || carta.matched
            }
            disabled={disabled}
          ></Card>
        ))}
      </main>
    </>
  );
}

export default App;
