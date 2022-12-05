/*
  A - Rock
  B - Paper
  C - Scissors

  X - Rock
  Y - Paper
  Z - Scissors
*/

const scoreChoice = {
  X: 1,
  Y: 2,
  Z: 3,
};

const draw = {
  X: "A",
  Y: "B",
  Z: "C",
};

type Choice = keyof typeof scoreChoice;

const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");
const choices = lines.map((x) => x.split(" "));

let score = 0;

for (const choice of choices) {
  const [enemy, player] = choice;

  score += scoreChoice[player as Choice];

  if (enemy === "A" && player === "Y") score += 6;
  if (enemy === "B" && player === "Z") score += 6;
  if (enemy === "C" && player === "X") score += 6;
  if (draw[player as Choice] === enemy) score += 3;
}

console.log(`total score: ${score}`);
