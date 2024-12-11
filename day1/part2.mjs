import fs from "node:fs";

try {
  // reading file
  // let data = fs.readFileSync("day1-test-input.txt", "utf8");
  let data = fs.readFileSync("day1-input.txt", "utf8");
  data = data.replaceAll("\r", "");
  const dataArray = data.split("\n");

  // constructing two arrays (left and right column)
  const arrayA = [];
  const arrayB = [];

  dataArray.forEach((pairString) => {
    // seperator: 3 spaces, not 2!
    const [a, b] = pairString.split("   ");
    arrayA.push(a);
    arrayB.push(b);
  });

  // counting occurances of a in arrayB
  const foundAmounts = arrayA.map((id) => {
    const foundInB = arrayB.filter((el) => el === id);
    // multiplying by ID (as per exercise description)
    return id * foundInB.length;
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
