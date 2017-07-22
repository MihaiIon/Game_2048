/**
 * 
 */
Board.prototype.spawnTile = function() {
	var s = this.findFreeSlot();
	this.grid[s.x][s.y] = 
		new Tile(
			this.idCount++,
			s.x, s.y, 
			Math.floor(Math.random()*2),
			this 
		);

	this.tilesCount++;
};

/**
 * Find a free slot in the grid.
 */
Board.prototype.findFreeSlot = function() {
	var i, j;

	do {
		i = Math.floor(Math.random()*this.size)
		j = Math.floor(Math.random()*this.size)
	} while(this.grid[j][i] != null);

	return {x: j, y: i};
};