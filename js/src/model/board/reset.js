/**
 * Clears every Tile and spawns starting tiles on the grid.
 */
Board.prototype.reset = function() {

	// Clear the grid.
	for (var i = 0; i < this.size; i++) {
		this.grid[i] = new Array( this.size );
		for (var j = 0; j < this.size; j++) {
			this.grid[i][j] = null;
		}
	}

	// Clears the tiles from the DOM.
	this.$board.find(this.TILES_SELECTOR).empty(); 

	// Fills the grid with 2 Tiles to begin a new game.
	for (var i = 0; i < 2; i++)
		this.spawnTile();
};