Board.prototype.removeTile = function(x,y)
{
	$('.tile-position-'+x+'-'+y).remove();

	this.grid[x][y] = null;
}