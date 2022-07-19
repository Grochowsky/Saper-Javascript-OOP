class Game {
  #config = {
    easy: {
      rows: 8,
      cols: 8,
      mines: 10,
    },
    medium: {
      rows: 16,
      cols: 16,
      mines: 40,
    },
    expert: {
      rows: 16,
      cols: 30,
      mines: 99,
    },
  };

  #numberOfRows = null;
  #numberOfCols = null;
  #numberOfMines = null;

  initializeGame() {
    this.#newGame();
  }

  #newGame(
    rows = this.#config.easy.rows,
    cols = this.#config.easy.cols,
    mines = this.#config.easy.mines
  ) {
    this.#numberOfCols = cols;
    this.#numberOfRows = rows;
    this.#numberOfMines = mines;
  }
}

window.onload = function () {
  const game = new Game();

  game.initializeGame();
};
