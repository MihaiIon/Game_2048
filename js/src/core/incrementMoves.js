/**
 * 
 */
Game.fn.incrementMoves = function(){
	this.totalMoves++;;
	this.$gameMoves.text( this.totalMoves + "");
}
