const input = await Deno.readTextFile("./input.txt");

const lines = input.split("\n");

let number = 0;

function getNumberFromLetter(letter: string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  return alphabet.indexOf(letter) + 1;
}

for (const rucksack of lines) {
  const firstHalf = rucksack.slice(0, rucksack.length / 2);
  const secondHalf = rucksack.slice(rucksack.length / 2);

  const firstHalfHashmap = new Map();
  const secondHalfHashmap = new Map();

  for (const element of firstHalf) {
    if (firstHalfHashmap.has(element)) {
      firstHalfHashmap.set(element, firstHalfHashmap.get(element) + 1);
    } else {
      firstHalfHashmap.set(element, 1);
    }
  }

  for (const element of secondHalf) {
    if (secondHalfHashmap.has(element)) {
      secondHalfHashmap.set(element, secondHalfHashmap.get(element) + 1);
    } else {
      secondHalfHashmap.set(element, 1);
    }
  }

  for (const [key] of firstHalfHashmap) {
    if (secondHalfHashmap.has(key)) {
      const numberFromLetter = getNumberFromLetter(key);
      number += numberFromLetter;
    }
  }
}

console.log(`Sum of priorities of repeated items: ${number}`);
