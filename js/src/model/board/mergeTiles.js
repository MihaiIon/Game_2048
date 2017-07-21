/**
* tile1 is the one that will be eliminated
* tile2 is the one that will gain a level
*/

Board.prototype.mergeTiles = function(tile1_y, tile1_x, tile2_y, tile2_x)
{
	//deletes tile
	this.removeTile(tile1_x, tile1_y);

	//levels up tile
	this.grid[tile2_y][tile2_x].levelUp();
}