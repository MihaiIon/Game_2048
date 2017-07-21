/**
 * Pops the Animation.
 */
Tile.prototype.pop = function( x, y ) {
	var _this = this;
	this.$tile.addClass( this.POPPING_CLASS );
	setTimeout(function(){
		_this.$tile.removeClass( _this.POPPING_CLASS );
	}, 200);
};

Tile.prototype.POPPING_CLASS = "tile-level-up";