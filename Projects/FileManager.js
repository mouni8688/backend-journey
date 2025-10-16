// fileManager.js
const fs = require("fs");
const path = require("path");

const folderPath = path.join(__dirname, "files");

// Ensure folder exists
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
}

function createFile(filename, content) {
  const filePath = path.join(folderPath, filename);
  fs.writeFileSync(filePath, content);
  console.log(`✅ File created: ${filename}`);
}

function readFile(filename) {
  const filePath = path.join(folderPath, filename);
  const data = fs.readFileSync(filePath, "utf-8");
  console.log(`📖 File content (${filename}):`);
  console.log(data);
}

function updateFile(filename, newContent) {
  const filePath = path.join(folderPath, filename);
  fs.appendFileSync(filePath, "\n" + newContent);
  console.log(`📝 File updated: ${filename}`);
}

function deleteFile(filename) {
  const filePath = path.join(folderPath, filename);
  fs.unlinkSync(filePath);
  console.log(`❌ File deleted: ${filename}`);
}

module.exports = { createFile, readFile, updateFile, deleteFile };
