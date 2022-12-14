const input = await Deno.readTextFile('./input.txt');
const lines = input.split('\n');
const vector = lines.map((line) =>
  line.split('').map((line) => parseInt(line))
);

function checkVisibility(x: number, y: number) {
  const tree = vector[x][y];
  let hasVisibility = false;
  for (let j = y; j > 0; j--) {
    if (vector[x][j - 1] < tree) {
      hasVisibility = true;
      continue;
    } else {
      hasVisibility = false;
      break;
    }
  }
  if (hasVisibility) return hasVisibility;

  for (let j = y; j < rows - 1; j++) {
    if (vector[x][j + 1] < tree) {
      hasVisibility = true;
      continue;
    } else {
      hasVisibility = false;
      break;
    }
  }

  if (hasVisibility) return hasVisibility;

  for (let i = x; i > 0; i--) {
    if (vector[i - 1][y] < tree) {
      hasVisibility = true;
      continue;
    } else {
      hasVisibility = false;
      break;
    }
  }

  if (hasVisibility) return hasVisibility;

  for (let i = x; i < columns - 1; i++) {
    if (vector[i + 1][y] < tree) {
      hasVisibility = true;
      continue;
    } else {
      hasVisibility = false;
      break;
    }
  }

  return hasVisibility;
}

let visibleAmount = 0;
const columns = vector.length;
const rows = vector[0].length;
visibleAmount = rows * 2 + (columns - 2) * 2;

for (let i = 1; i < columns - 1; i++) {
  for (let j = 1; j < rows - 1; j++) {
    const hasVisibility = checkVisibility(i, j);

    if (hasVisibility) visibleAmount++;
  }
}

console.log(`Amount of visible tree: ${visibleAmount}`);
