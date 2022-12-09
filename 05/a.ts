const input = await Deno.readTextFile("./input.txt");

const [crates, instructions] = input.split("\n\n");
const [, ...cratesArray] = crates.split("\n").reverse();

const cratesLinesArray = cratesArray.map((crates) => crates.split(" "));

const cratesVector = [];
for (let i = 0; i < cratesLinesArray.length; i++) {
  let count = 1;

  const array = [];
  for (let j = 0; j < cratesLinesArray[i].length; j++) {
    if (count === 4) {
      array.push(null);
      count = 1;
      continue;
    }

    if (cratesLinesArray[i][j] === "") {
      count++;
      continue;
    }

    array.push(cratesLinesArray[i][j]);
  }

  cratesVector.push(array);
}

const cratesVectorInverse = [];
for (let i = 0; i < cratesVector[0].length; i++) {
  const array = [];
  for (let j = 0; j < cratesVector.length; j++) {
    array.push(cratesVector[j][i]);
  }

  cratesVectorInverse.push(array);
}

for (let i = 0; i < cratesVectorInverse.length; i++) {
  cratesVectorInverse[i] = cratesVectorInverse[i].filter(
    (item) => item !== null
  );
}

const instructionsArray = instructions.split("\n").map((instruction) =>
  instruction
    .split(" ")
    .map((word) => parseInt(word))
    .filter((word) => !isNaN(word))
);

for (const instructions of instructionsArray) {
  const [amount, from, to] = instructions;
  const from_ = from - 1;
  const to_ = to - 1;

  for (let i = 0; i < amount; i++) {
    const item = cratesVectorInverse[from_].pop();
    cratesVectorInverse[to_].push(item as string);
  }
}

const finalCrates = cratesVectorInverse.map(
  (crates) => crates[crates.length - 1]
);

console.log(finalCrates);
