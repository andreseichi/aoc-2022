/*
  A - Rock
  B - Paper
  C - Scissors

  X - Rock
  Y - Paper
  Z - Scissors
*/

type PlayerChoice = "X" | "Y" | "Z";

const scoreResult = {
  X: 0,
  Y: 3,
  Z: 6,
};

const scoreChoice = {
  X: {
    A: 3,
    B: 1,
    C: 2,
  },
  Y: {
    A: 1,
    B: 2,
    C: 3,
  },
  Z: {
    A: 2,
    B: 3,
    C: 1,
  },
};

const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");
const choices = lines.map((x) => x.split(" "));

let score = 0;

for (const choice of choices) {
  const [enemy, condition] = choice;

  if (condition === "Y") {
    score += 3;
  } else {
    score += scoreResult[condition as PlayerChoice];
  }

  const enemyChoice = scoreChoice[condition as PlayerChoice];
  score += enemyChoice[enemy as keyof typeof enemyChoice];
}

console.log(`total score: ${score}`);
