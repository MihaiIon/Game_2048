/**
 *
 */
var Tile = function( x, y, lvl, board ){

	this.x = x;
	this.y = y;

	// Get level data.
	var data = this.getLevelData(lvl);
	this.level = lvl;
	this.value = data.value;
	this.color = data.color;

	// Create Tile.
	this.$tile = this.createTileElement();
	console.log(this.$tile);

	// Create Tile in DOM.
	this.board = board;
	board.$board.find(board.TILES_SELECTOR).append(this.$tile);
}

/**
 *
 */
Tile.prototype.getLevelData = function(level) {
	switch(level)
	{
		case 10: return { value: 2048, color: "red" };
		case 9:  return { value: 1024, color: "red" };
		case 8:  return { value: 512,  color: "red" };
		case 7:  return { value: 256,  color: "red" };
		case 6:  return { value: 128,  color: "red" };
		case 5:  return { value: 64,   color: "red" };
		case 4:  return { value: 32,   color: "red" };
		case 3:  return { value: 16,   color: "red" };
		case 2:  return { value: 8,    color: "red" };
		case 1:  return { value: 4,    color: "red" };
		default:
			return { value: 2,    color: "red" };
	}
}