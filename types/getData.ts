import fs from "fs/promises";
import path from "path";

const filePath = path.resolve("articles.json");

export async function getArticles() {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading JSON file:", error);
    return null;
  }
}
