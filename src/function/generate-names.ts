import fs from "fs";
export function generateNames(pathList: string[]) {
  const AllNameList: string[][] = [];

  pathList.forEach(path => {
    let tempNameListString = fs.readFileSync(path, { encoding: "utf-8" });
    tempNameListString = replaceAll(tempNameListString);
    const tempNameList = tempNameListString.split("\n");
    AllNameList.push(tempNameList);
  });
  return nameMixer(AllNameList);
}
function nameMixer(inputList: string[][]) {
  const outputList: string[] = [];
  function goDeep(now = "", level = 0) {
    if (level === inputList.length) {
      outputList.push(now);
      return;
    }
    inputList[level].forEach(e => {
      goDeep(now + e, level + 1);
    });
  }
  goDeep();
  return outputList;
}
function replaceAll(str: string) {
  const now = str.replace("\r", "").replace(" ", "").replace(".", "");
  if (now === str) return str;
  return replaceAll(now);
}
