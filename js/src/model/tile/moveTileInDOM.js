/**
 *
 */
Tile.prototype.moveTileInDOM = function( x, y ) {
	
	this.$tile.removeClass( this.buildPositionSelector( this.x, this.y ) );
	this.$tile.addClass( this.buildPositionSelector( x, y ) );

	this.board.grid[x][y] = this;
	this.board.grid[this.x][this.y] = null;

	this.x = x;
	this.y = y;
};