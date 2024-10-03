const startGame(userName, topic, level){
    let cards;

  if (topic === "animales") {
        cards = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐯', '🦁', '🐮', '🐷'];
    } else if (topic === "figuras") {
        cards = ['🔵',' 🟦 ', '🟨', '🟡', '🟥', '🔴', '🟤', '🟫️', '🟧', '🟠', '🟩 ', '🟢'];
    } else {
        cards = ['🍎', '🍓', '🍌', '🍊', '🍇', '🍏', '🍉', '🍐', '🍑', '🍒', '🍍', '🥝'];
    }
}