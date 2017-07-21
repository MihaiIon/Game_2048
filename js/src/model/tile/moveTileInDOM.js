
Tile.prototype.moveTileInDOM = function(newX, newY) {
// Update position
	this.$tile.removeClass( 'tile-position-'+this.x+'-'+this.y );
	this.$tile.addClass( 'tile-position-'+newX+'-'+newY);

	this.x = newX;
	this.y = newY;
};