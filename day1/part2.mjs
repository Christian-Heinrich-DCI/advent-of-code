import fs from "node:fs";

try {
  // reading file
  // let data = fs.readFileSync("testInput.txt", "utf8");
  let data = fs.readFileSync("input.txt", "utf8");
  data = data.replaceAll("\r", "");
  const dataArray = data.split("\n");

  // constructing two arrays (left and right column)
  const arrayA = [];
  const arrayB = [];

  dataArray.forEach((pairString) => {
    // seperator: 3 spaces, not 2!
    const [a, b] = pairString.split("   ");
    // converting strings into numbers, so they can be sorted
    // as numbers, not strings (hello JS!)
    arrayA.push(a);
    arrayB.push(b);
  });

  const foundAmounts = arrayA.map((a) => {
    const foundAinB = arrayB.filter((el) => el === a);
    return a * foundAinB.length;
  });

  const similarityScore = foundAmounts.reduce(
    (total, score) => total + score,
    0
  );

  // hopefully the right number???
  console.log(similarityScore);
} catch (err) {
  console.error(err);
}
