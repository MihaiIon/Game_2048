/**
 *
 */
Board.prototype.reset = function() {

	// Clear the grid.
	for (var i = 0; i < this.size; i++) {
		this.grid[i] = new Array( this.size );
		for (var j = 0; j < this.size; j++) {
			this.grid[i][j] = null;
		}
	}

	// Fills the grid with 2 or 3 Tiles to begin a new game.
	for (var i = 0; i < (Math.floor(Math.random()*1) + 2); i++)
		this.spawnTile();
};