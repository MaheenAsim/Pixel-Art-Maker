function makeGrid() {
    var gridHeight = document.getElementById('gridHeight').value;
    var gridWidth = document.getElementById('gridWidth').value;
    var canvas = document.getElementById('pixelCanvas');
    canvas.innerHTML = '';  // Clear previous grid

    for (let i = 0; i < gridHeight; i++) {
        var row = document.createElement('div');
        for (let j = 0; j < gridWidth; j++) {
            var cell = document.createElement('div');
            cell.className = 'cell';
            cell.addEventListener('click', function() {
                this.style.backgroundColor = document.getElementById('color').value;
            });
            row.appendChild(cell);
        }
        canvas.appendChild(row);
    }
}

function clearGrid() {
    var cells = document.querySelectorAll('.cell');
    cells.forEach(function(cell) {
        cell.style.backgroundColor = 'transparent';
    });
}
