import "./App.css";
import { useEffect, useState } from "react";
import Card from "./components/cards/card";

function App() {
  const [name, setName] = useState("");
  const [cartaElegida1, setCartaElegida1] = useState("");
  const [cartaElegida2, setCartaElegida2] = useState("");
  const [cards, setCards] = useState([
    "🐶",
    "🐱",
    "🐭",
    "🐹",
    "🐰",
    "🦊",
    "🐻",
    "🐼",
    "🐯",
    "🦁",
    "🐮",
    "🐷",
  ]);

  useEffect(() => {
    const cardsMezcladas = shuffleArray(cards);
    setCards(cardsMezcladas);
  }, []);

  useEffect(() => {
    if (cartaElegida1 != "" && cartaElegida2 != "") {
      if (cartaElegida1 === cartaElegida2) {
        console.log(`Son iguales - queda boca arriba`);
      } else {
        console.log(`Son distintas - queda boca abajo`);
      }

      setCartaElegida1("");
      setCartaElegida2("");
    }
  }, [cartaElegida1, cartaElegida2]);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const shuffleArray = (cards) => {
    let completeArray = cards.concat(cards);

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
    return completeArray;
  };

  const clickOn = (icon) => {
    console.log(`Se hizo click en ${icon}`);
    if (cartaElegida1 == "") {
      setCartaElegida1(icon);
      console.log(`Carta 1 es ${icon}`);
    } else {
      setCartaElegida2(icon);
      console.log(`Carta 2 es ${icon}`);
    }
  };

  return (
    <>
      <header>
        <img src="images/logo.png" alt="Logo del Juego" />
        <h1>Juego de la Memoria</h1>
      </header>
      <section>
        <h2>Reglas:</h2>
        <p>
          Da la vuelta a 2 cartas. Si son iguales, se fijan y puedes seguir tu
          turno. Sino, se vuelven a esconder y toca otro turno. La partida se
          terminará cuando estén todas las parejas encontradas. Cuidado, se te
          acaba el tiempo.{" "}
        </p>
      </section>

      <section>
        <h2>Datos:</h2>
        <form>
          <p>
            <label for="nombre">Nombre:</label>
            <input
              name="nombre"
              id="nombre"
              type="text"
              maxlength="40"
              size="40"
              onChange={handleName}
            />
          </p>
          <p>
            <label for="nivel">Nivel:</label>
            <select id="nivel" name="nivel">
              <option value="dificil">Difícil</option>
              <option value="medio">Medio</option>
              <option value="facil">Fácil</option>
            </select>
          </p>
        </form>
      </section>
      <main>
        {cards.map((icon, index) => (
          <Card icon={icon} key={index} action={clickOn}></Card>
        ))}
      </main>
    </>
  );
}

export default App;
