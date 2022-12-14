const input = await Deno.readTextFile('./input.txt');
const lines = input.split('\n');
const vector = lines.map((line) =>
  line.split('').map((line) => parseInt(line))
);

function TreesVisible(x: number, y: number) {
  const tree = vector[x][y];
  const array = []
  let treesVisibleLeft = 0
  for (let j = y; j > 0; j--) {
    treesVisibleLeft++
    if (vector[x][j - 1] < tree) {
      continue;
    } else {
      break;
    }
  }
  array.push(treesVisibleLeft)

  let treesVisibleRight = 0
  for (let j = y; j < rows - 1; j++) {
    treesVisibleRight++
    if (vector[x][j + 1] < tree) {
      continue;
    } else {
      break;
    }
  }
  array.push(treesVisibleRight)

  let treesVisibleTop = 0
  for (let i = x; i > 0; i--) {
    treesVisibleTop++
    if (vector[i - 1][y] < tree) {
      continue;
    } else {
      break;
    }
  }
  array.push(treesVisibleTop)

  let treesVisibleBottom = 0
  for (let i = x; i < columns - 1; i++) {
    treesVisibleBottom++
    if (vector[i + 1][y] < tree) {
      continue;
    } else {
      break;
    }
  }
  array.push(treesVisibleBottom)
  
  const scenicScore = array.reduce((acc, item) => acc * item, 1)

  return scenicScore;
}

const columns = vector.length;
const rows = vector[0].length;

const scenicScores = []
for (let i = 1; i < columns - 1; i++) {
  for (let j = 1; j < rows - 1; j++) {
    scenicScores.push(TreesVisible(i, j));

  }
}

scenicScores.sort((a, b) => b - a)

console.log(`Highest scenic score: ${scenicScores[0]}`);
