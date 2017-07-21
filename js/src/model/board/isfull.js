/**
 * verifies if there is at least on free slot (prevents infinite loop of findFreeSolt)
 * returns true if free space found, false otherwise.
 */
Board.prototype.isFull = function(){
    return this.tileCount == this.size * this.size;
}