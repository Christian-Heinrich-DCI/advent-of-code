import { log } from "node:console";
import fs from "node:fs";
import { CLIENT_RENEG_LIMIT } from "node:tls";

try {
  // reading file
  // let data = fs.readFileSync("day1-test-input.txt", "utf8");
  let data = fs.readFileSync("day2-test-input.txt", "utf8");
  data = data.replaceAll("\r", ""); // go away Windows!
  const dataArray = data.split("\n");

  console.log(dataArray);

  /** Thoughts:
   * remember last change
   * check difference between current and next
   * compare with last change
   * decision if safe or not
   * */

  dataArray.forEach((levelsString) => {
    const levels = levelsString.split(" ");
    levels.forEach((level) => {
      console.log(Number(level));
    });
    console.log("---");
  });

  // hopefully the right number???
  console.log();
} catch (err) {
  console.error(err);
}
