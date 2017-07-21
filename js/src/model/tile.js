/**
 * Tile
 * -- Constructor.
 */
var Tile = function( id, x, y, lvl, board ){

	this.id = id;
	this.x = x;
	this.y = y;
	this.board = board;

	// Get level data.
	this.level = lvl;
	this.value = this.getValueForLevel(lvl);

	// Delay append.
	var _this = this;
	setTimeout(function(){

		// Create Tile in DOM.
		_this.board.$board.find(_this.board.TILES_SELECTOR).append( _this.createTileElement() );

		// Save Tile
		_this.$tile = board.$board.find( "." + _this.buildPositionSelector( _this.x, _this.y ) );

		// Popping Animation.
		_this.pop();

	}, 120);
}


/**
 *
 */
Tile.prototype.getValueForLevel = function( level ) {
	switch(level)
	{
		case 10: return 2048;
		case 9:  return 1024;
		case 8:  return 512;
		case 7:  return 256;
		case 6:  return 128;
		case 5:  return 64;
		case 4:  return 32;
		case 3:  return 16;
		case 2:  return 8;
		case 1:  return 4;
		default: return 2;
	}
}