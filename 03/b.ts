const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

let number = 0;

function getNumberFromLetter(letter: string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return alphabet.indexOf(letter) + 1;
}

for (let i = 0; i < lines.length; i += 3) {
  const firstBadge = lines[i];
  const secondBadge = lines[i + 1];
  const thirdBadge = lines[i + 2];

  const firstBadgeMap = new Map();
  const secondBadgeMap = new Map();
  const thirdBadgeMap = new Map();

  for (const element of firstBadge) {
    firstBadgeMap.set(element, true);
  }

  for (const element of secondBadge) {
    secondBadgeMap.set(element, true);
  }

  for (const element of thirdBadge) {
    thirdBadgeMap.set(element, true);
  }

  for (const [key] of firstBadgeMap) {
    if (secondBadgeMap.has(key) && thirdBadgeMap.has(key)) {
      const numberFromLetter = getNumberFromLetter(key);
      number += numberFromLetter;
    }
  }
}

console.log(`Sum of priorities of repeated items: ${number}`);
