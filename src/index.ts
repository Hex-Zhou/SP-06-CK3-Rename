import { BACKPACK as bp } from "./data/backpack.js";
import { generateNames } from "./function/generate-names.js";
import fs from "fs";

function overrideCK3file(rootPath: string, maleNameList: string[], femaleNameList: string[]) {
  const txtList: string[] = fs.readdirSync(rootPath);
  txtList.forEach(txtName => {
    if (!txtName.includes("00_")) return;
    const targetPath = `${rootPath}\\${txtName}`;
    const inputText = fs.readFileSync(targetPath, { encoding: "utf-8" });
    let outputText = replaceText(inputText, maleNameList, "male");
    outputText = replaceText(outputText, femaleNameList, "female");
    fs.writeFileSync(targetPath, outputText, { encoding: "utf-8" });
  });
}
function replaceText(content: string, allNameList: string[], gender: "male" | "female") {
  let replaceString = allNameList.join(" ");
  if (gender === "male") {
    replaceString = "male_names = {\n" + replaceString + "}";
    content = content.replace(bp.regex.male, replaceString);
  } else {
    replaceString = "female_names = {\n" + replaceString + "}";
    content = content.replace(bp.regex.female, replaceString);
  }
  return content;
}

const namePathList = [`${bp.projPath}\\name1.txt`, `${bp.projPath}\\name2.txt`];
const allName = generateNames(namePathList);
overrideCK3file(bp.ck3Path, allName, allName);
console.log(`正在測試 ...`);
