import fs from "fs";
const pdfParse = require("pdf-parse");

export const extractTextFromFile = async (
  filePath: string,
  mimeType: string
) => {
  try {
 
    if (mimeType === "application/pdf") {
      const buffer = fs.readFileSync(filePath);

      const data = await pdfParse(buffer);
      console.log("EXTRACTED PDF TEXT:");
console.log(data.text);

      return data.text;
    }

    return "";
  } catch (error) {
    console.error("Error parsing file:", error);
    return "";
  }
};