const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");
const ranges = lines.map((line) => line.split(","));

let amount = 0;

for (const range of ranges) {
  const [start1, end1] = range[0].split("-").map((n) => parseInt(n));
  const [start2, end2] = range[1].split("-").map((n) => parseInt(n));

  if (start1 >= start2 && end2 >= start1) {
    amount++;
  } else if (start1 <= start2 && end1 >= start2) {
    amount++;
  } else if (start1 >= start2 && end1 <= end2) {
    amount++;
  } else if (start1 <= start2 && end1 >= end2) {
    amount++;
  }
}

console.log(`Amount: ${amount}`);
