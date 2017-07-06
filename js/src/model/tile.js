/**
 *
 */
var Tile = function( x, y, lvl, board ){

	this.x = x;
	this.y = y;

	// Get level data.
	this.level = lvl;
	this.value = this.getValueForLevel(lvl);

	// Create Tile in DOM.
	this.board = board;
	board.$board.find(board.TILES_SELECTOR).append(this.createTileElement());

	// Save Tile
	this.$tile = board.$board.find('.tile-position-'+this.x+'-'+this.y);
}

/**
 *
 */
Tile.prototype.getValueForLevel = function(level) {
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