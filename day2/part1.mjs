import fs from "node:fs";

try {
  // reading file
  // let data = fs.readFileSync("day2-test-input.txt", "utf8");
  let data = fs.readFileSync("day2-input.txt", "utf8");
  data = data.replaceAll("\r", ""); // go away Windows!
  const dataArray = data.split("\n");

  console.log(dataArray);

  /** Thoughts:
   * remember last change
   * check difference between current and next
   * compare with last change
   * decision if safe or not
   * */

  let numOfSafeReports = 0;

  dataArray.forEach((levelsString) => {
    const levels = levelsString.split(" ");

    // establish direction of change
    let direction = 0; // start - 0, raising: 1, falling: -1
    if (levels[0] < levels[1]) direction = 1;
    else if (levels[0] > levels[1]) direction = -1;

    // test from second element, until second to last
    // first was tested above, last doesn't have a next
    const safeArray = [];
    for (let i = 1; i < levels.length - 1; i++) {
      const current = levels[i];
      const next = levels[i + 1];

      if (
        direction === -1 &&
        current > next &&
        current - next >= 1 &&
        current - next <= 3
      )
        safeArray.push(true);
      else if (
        direction === 1 &&
        current < next &&
        next - current >= 1 &&
        next - current <= 3
      )
        safeArray.push(true);
      else safeArray.push(false);
    }
    console.log(safeArray);

    // if there is any false (not safe) in the progression of the levels
    // of a report, the whole report is unsafe
    // if no false is found, the report as a whole is safe
    if (safeArray.indexOf(false) === -1) numOfSafeReports++;
  });

  // hopefully the right number???
  console.log(numOfSafeReports);
} catch (err) {
  console.error(err);
}
