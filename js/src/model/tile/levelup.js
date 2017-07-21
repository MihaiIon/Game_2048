/**
 * Updates the data of the Tile.
 */
Tile.prototype.levelUp = function() {

	// Level up and get new value.
	this.value = this.getValueForLevel( ++this.level );

	// Update Tile in DOM.
	this.updateTileLevel();
};

/**
 * Updates the DOM Element corresponding to the actual Tile.
 */
Tile.prototype.updateTileLevel = function() {
	
	// Update level.
	this.$tile.removeClass( 'tile-level-' + (this.level-1) );
	this.$tile.addClass( 'tile-level-' + this.level )

	// Update Value.
	this.$tile.find( '.tile-inner' ).text( this.value );

	// Popping Animation.
	this.pop();
};