var chessBoard = document.querySelector('.chess-board');
var squares = document.querySelectorAll('.square');
var pieces = document.querySelectorAll('.piece');

pieces.forEach(function(piece) {
    piece.setAttribute('draggable', 'true');

    piece.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text', piece);
        piece.classList.add('drag');
    });

    piece.addEventListener('draged', () =>{
        piece.classList.remove('drag');
    });

    piece.addEventListener('dblclick', () => {
        var originalSquare = document.querySelector('.square');
        if (!originalSquare.querySelector('.piece')) {
            originalSquare.appendChild(piece);
        }
    });
});


squares.forEach(function(square) {
    square.addEventListener('dragover',(e) => {
        e.preventDefault();
    });

    square.addEventListener('dragenter',(e) =>{
        e.preventDefault();
        if (!square.querySelector('.piece')) {
            square.classList.add('highlight');
        }
    });

    square.addEventListener('dragleave', () => {
        square.classList.remove('highlight');
    });

    square.addEventListener('drop', (e) => {
        e.preventDefault();
        square.classList.remove('highlight');

        var pieceContent = e.dataTransfer.getData('text');
        var draggedPiece = document.querySelector('.drag');

        if (draggedPiece && !square.querySelector('.piece')) {
            square.appendChild(draggedPiece);
        }
    });
});