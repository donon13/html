# html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Sudoku</title>
  <style>
    table {
      border-collapse: collapse;
      margin: auto;
    }

    td {
      border: 1px solid black;
      width: 30px;
      height: 30px;
      text-align: center;
      font-size: 20px;
      font-weight: bold;
    }

    td.selected {
      background-color: lightblue;
    }

    .incorrect {
      color: red;
    }
  </style>
</head>
<body>
  <table id="sudoku-table"></table>
  <script>
    const puzzle = [
      [5, 3, null, null, 7, null, null, null, null],
      [6, null, null, 1, 9, 5, null, null, null],
      [null, 9, 8, null, null, null, null, 6, null],
      [8, null, null, null, 6, null, null, null, 3],
      [4, null, null, 8, null, 3, null, null, 1],
      [7, null, null, null, 2, null, null, null, 6],
      [null, 6, null, null, null, null, 2, 8, null],
      [null, null, null, 4, 1, 9, null, null, 5],
      [null, null, null, null, 8, null, null, 7, 9]
    ];

    const solution = [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9]
    ];

    let selectedRow = -1;
    let selectedCol = -1;

    const render = () => {
      const table = document.getElementById('sudoku-table');
      table.innerHTML = '';

      for (let row = 0; row < 9; row++) {
        const tr = document.createElement('tr');

        for (let col = 0; col < 9; col++) {
          const td = document.createElement('td');

          td.textContent = puzzle[row][col
