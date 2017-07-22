/**
 *
 */
Tile.prototype.buildPositionSelector = function( x, y ) {
	return 'tile-position-'+ ( !isNaN(x) ? x : this.x ) + '-' + ( !isNaN(y) ? y : this.y );
};
