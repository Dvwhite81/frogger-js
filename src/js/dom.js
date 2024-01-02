import { getBackground } from './levels';

const buildElement = (type, args) => {
  const element = document.createElement(type);

  for (const key in args) {
    element[key] = args[key];
  }
  return element;
};

const buildSquare = (grid, x, y) => {
  const img = getBackground(grid[x][y]);
  const square = buildElement('div', {
    id: `square-${x}-${y}`,
    className: `square`,
  });
  square.style.backgroundImage = `url(${img})`;
  console.log('square:', square);
  return square;
};

const buildRow = (grid, x) => {
  const row = buildElement('div', {
    id: `row-${x}`,
    className: 'row',
  });

  for (let y = 0; y < grid[x].length; y++) {
    const square = buildSquare(grid, x, y);
    row.append(square);
  }
  return row;
};

const buildLevel = (level) => {
  const { grid } = level;
  console.log('grid:', grid);
  const board = document.querySelector('#board');

  for (let x = 0; x < grid.length; x++) {
    const row = buildRow(grid, x);
    board.append(row);
  }
};

export default buildLevel;
