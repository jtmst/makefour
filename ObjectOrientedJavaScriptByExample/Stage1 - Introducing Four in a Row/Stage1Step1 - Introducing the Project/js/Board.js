class Board {
    constructor() {
        this.rows = 6;
        this.columns = 7;
        this.spaced = this.createSpaces();
    }
/**
 * Generates a 2D array of spaces
 * @return {array}  - An array of space objects
 */
    createSpaces() {
      const spaces = [];

      for (var x = 0; x < this.columns; x++) {
          const column = [];

          for(var y = 0; y < this.rows; y++) {
              const space = new Space(x, y);
              column.push(space);
          }
          spaces.push(column);
      }
      return spaces;
    }
}