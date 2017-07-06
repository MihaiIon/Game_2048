/**
 * 
 */
Tile.prototype.levelUp = function() {

	// Level up and get level data.
	this.value = this.getValueForLevel( ++this.level );

	// Update Tile in DOM.
	this.updateTile();
};


/**
 *
 */
Tile.prototype.updateTile = function() {
	
	// Update level.
	this.$tile.removeClass( 'tile-level-' + (this.level-1) );
	this.$tile.addClass( 'tile-level-' + this.level )

	// Update Value.
	this.$tile.find( '.tile-inner' ).text( this.value );

	// Popping Animation.
	var _this = this;
	this.$tile.addClass( this.POPPING_CLASS );
	setTimeout(function(){
		_this.$tile.addClass( this.POPPING_CLASS );
	}, 200)
};

Tile.prototype.POPPING_CLASS = "tile-level-up";