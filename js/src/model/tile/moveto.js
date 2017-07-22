/**
 *
 */
Tile.prototype.moveTo = function( x, y ) {
	
	// Move in DOM.
	this.$tile.removeClass( this.buildPositionSelector( this.x, this.y ) );
	this.$tile.addClass( this.buildPositionSelector( x, y ) );

	// Update Grid.
	this.board.grid[this.x][this.y] = null;
	this.board.grid[x][y] = this;

	// Update Coordinates.
	this.x = x;
	this.y = y;
};