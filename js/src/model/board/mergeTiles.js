/**
 * The <tile1> is merged to <tile2>. After the merging animation, <tile1>
 * is removed from the DOM.
 */
Board.prototype.mergeTiles = function( tile1, tile2 )
{
	// Move in DOM and remove.
	tile1.$tile.removeClass( tile1.buildPositionSelector( tile1.x, tile1.y ) );
	tile1.$tile.addClass( tile1.buildPositionSelector( tile2.x, tile2.y ) );
	this.removeTile( tile1 );

	// levels up tile
	tile2.levelUp();
	tile2.merged = true;
}