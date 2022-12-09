const input = await Deno.readTextFile("./input.txt");
const characters = input.split("");

let amount = 0;
const charactersArray = [];
const differentCharacters = [];
const differentCharactersMap = new Map();

for (const character of characters) {
  charactersArray.push(character);
  differentCharacters.push(character);

  if (differentCharactersMap.has(character)) {
    differentCharactersMap.set(
      character,
      differentCharactersMap.get(character) + 1
    );
  } else {
    differentCharactersMap.set(character, 1);
  }

  amount++;
  if (amount < 14) {
    continue;
  }

  if (differentCharacters.length === 14) {
    if (differentCharactersMap.size !== 14) {
      const removed = differentCharacters.shift();

      differentCharactersMap.set(
        removed,
        differentCharactersMap.get(removed) - 1
      );
      const removedKeyValue = differentCharactersMap.get(removed);

      if (removedKeyValue === 0) {
        differentCharactersMap.delete(removed);
      }
    } else {
      break;
    }
  }
}

console.log(`characters processed: ${amount}`);
