/**
 *
 */
Tile.prototype.moveTileInDOM = function( x, y ) {
	
	this.$tile.removeClass( this.buildPositionSelector( this.x, this.y ) );
	this.$tile.addClass( this.buildPositionSelector( x, y ) );

	this.x = x;
	this.y = y;
};