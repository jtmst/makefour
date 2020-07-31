class Game {
    constructor() {
      this.board = new Board();
      this.players = this.createPlayers();
      this.ready = false;
    }
/**
 * Creates two player objects
 * @return {array} An array of two players objects
 */
    get activePlayer() {
        return this.players.find(player => player.active);
    }

    createPlayers() {
        const players = [new Player('Player 1', 1,'#e15258', true ),
                                  new Player('Player 2', 2, '#e59a13')]
        return players;
    }

    // Gets game ready for play
    startGame() {
      this.board.drawHTMLBoard();
      this.activePlayer.activeToken.drawHTMLToken();
      this.ready = true;
    }

    /** 
     * Branches code, depending on wyhat key player presses
     * @param {object} e - keydown event object
     */
    handleKeyDown(e) {
        if (this.ready) {
            if (e.key === 'ArrowLeft') {
                // move left
            } else if (e.key === 'ArrowRight') {
                // move right
            } else if (e.key === 'ArrowDown') {
                // play token
            }
        }
}
}