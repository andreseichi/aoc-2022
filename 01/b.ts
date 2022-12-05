export const x = "";

const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n\n");

const calories = [];

for (const line of lines) {
  const nums = line.split("\n").map((x) => parseInt(x));
  const value = nums.reduce((a, b) => a + b, 0);

  calories.push(value);
}

const highest = calories.sort((a, b) => b - a);
const topThreeCalories = highest.slice(0, 3);

const total = topThreeCalories.reduce((a, b) => a + b, 0);

console.log(`total calories of top three: ${total}`);
