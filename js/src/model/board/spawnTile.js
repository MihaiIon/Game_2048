/**
 * 
 */
Board.prototype.spawnTile = function() {
	var s = this.findFreeSlot();
	this.grid[s.i][s.j] = 
		new Tile(
			s.i, s.j, 
			Math.floor(Math.random()*2),
			this 
		);

	this.tileCount++;
};

/**
 * Find a free slot in the grid.
 */
Board.prototype.findFreeSlot = function() {
	var i, j;

	do {
		i = Math.floor(Math.random()*this.size)
		j = Math.floor(Math.random()*this.size)
	} while(this.grid[i][j] != null);

	return {i: i, j: j};
};