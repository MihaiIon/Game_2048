/**
 * Constructs the DOM grid depending on it's size.
 */
Board.prototype.setupDOM = function() {

	// Update the class size.
	this.$board.removeClass();
	this.$board.addClass('game--board-size-' + this.size);

	// Update Cells
	var $grid = this.$board.find(this.GRID_SELECTOR);
	$grid.empty();

	for (var i = 0; i < this.size; i++) {
		var $row = $('<div>', { class: "board-row" });
		for (var j = 0; j < this.size; j++) {
			$row.append($('<div>', { class: "board-cell"}));
		}
		$grid.append($row);
	}
};