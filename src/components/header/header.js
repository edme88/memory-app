export default function Header() {
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
              //onChange={handleName}
            />
          </p>
          <p>
            <button></button>
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
    </>
  );
}
