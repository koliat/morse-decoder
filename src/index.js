const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let ten = expr.match(/.{2}/g);
  let check = [];
  for (let i = 0; i < ten.length; i++) {
    if (String(ten[i]) === "10") {
      check.push(".");
    } else if (String(ten[i]) === "11") {
      check.push("-");
    } else if (String(ten[i]) === "**") {
      check.push("*");
    } else {
      check.push(" ");
    }
  }
  let result = check.join("").match(/.{5}/g);
  let f = [];
  for (let i = 0; i < result.length; i++) {
    f.push(result[i].trim());
  }

  let sentence = [];
  for (let i = 0; i < f.length; i++) {
    if (MORSE_TABLE[`${f[i]}`]) {
      sentence.push(MORSE_TABLE[`${f[i]}`]);
    } else {
      sentence.push(" ");
    }
  }
  return sentence.join("");
}

module.exports = {
  decode,
};
