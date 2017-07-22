/**
 *
 */
Board.prototype.removeTile = function( tile )
{
	// Remove from Grid.
	this.grid[tile.x][tile.y] = null;
	this.tilesCount--;

	// Lower z-index (fade) and remove from DOM after animation.
	tile.$tile.addClass('tile-fade');
	setTimeout(function(){
		tile.$tile.remove();
	}, 100);
}