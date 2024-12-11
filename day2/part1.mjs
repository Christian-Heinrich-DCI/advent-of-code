import fs from "node:fs";

try {
  // reading file
  // let data = fs.readFileSync("day1-test-input.txt", "utf8");
  let data = fs.readFileSync("day2-test-input.txt", "utf8");
  data = data.replaceAll("\r", "");
  //   const dataArray = data.split("\n");

  console.log(data);

  // hopefully the right number???
  console.log();
} catch (err) {
  console.error(err);
}
