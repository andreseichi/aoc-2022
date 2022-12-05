export const x = "";

const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n\n");

let highest = 0;

for (const line of lines) {
  const nums = line.split("\n").map((x) => parseInt(x));
  const value = nums.reduce((a, b) => a + b, 0);

  if (value > highest) {
    highest = value;
  }
}

console.log(`highest calories: ${highest}`);
