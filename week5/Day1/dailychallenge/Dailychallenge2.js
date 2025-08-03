const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`
//1er fonction
function toJs(morseJsonString) {
  return new Promise((resolve, reject) => {
    try {
      const morseObject = JSON.parse(morseJsonString);
      if (Object.keys(morseObject).length === 0) {
        reject(new Error("Error: The Morse object is empty."));
      } else {
        resolve(morseObject);
      }
    } catch (error) {
      reject(new Error("Error: Invalid JSON string."));
    }
  });
}
//2eme fonction
function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    const userInput = prompt("Enter a word or sentence:");

    if (!userInput) {
      reject(new Error("No input provided."));
      return;
    }

    const inputChars = userInput.toLowerCase().split('');

    for (const char of inputChars) {
      if (!(char in morseJS) && char !== ' ') {
        reject(new Error(`Character "${char}" does not exist in the Morse object.`));
        return;
      }
    }

    const morseArray = inputChars
      .filter(char => char !== ' ')
      .map(char => morseJS[char]);

    resolve(morseArray);
  });
}
//3eme fonction
function joinWords(morseTranslation) {
  const outputDiv = document.getElementById('output');
  const joinedText = morseTranslation.join('\n');
  outputDiv.textContent = joinedText;
}

document.getElementById('startBtn').addEventListener('click', () => {
  toJs(morse)
    .then(morseObj => toMorse(morseObj))
    .then(morseTranslation => {
      joinWords(morseTranslation);
    })
    .catch(err => {
      alert(err.message);
      document.getElementById('output').textContent = "";
    });
});
