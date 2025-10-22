const readline = require("readline");
const { createFile, readFile, updateFile } = require("./FileManager");
const fs = require("fs");
const path = require("path");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const folderPath = path.join(__dirname, "files");

function askFilename() {
  rl.question("Enter filename: ", (filename) => {
    const filePath = path.join(folderPath, filename);

    // Check if file exists
    if (fs.existsSync(filePath)) {
      rl.question(`⚠️ File "${filename}" already exists. Do you want to overwrite it? (yes/no): `, (answer) => {
        if (answer.toLowerCase() === "yes") {
          askContent(filename, true); // overwrite mode
        } else {
          console.log("❌ File creation canceled.");
          askFilename(); // ask for a new filename
        }
      });
    } else {
      askContent(filename, false); // normal creation
    }
  });
}

function askContent(filename, overwrite) {
  rl.question("Enter content to write: ", (content) => {
    if (overwrite) {
      // Overwrite existing file
      const filePath = path.join(folderPath, filename);
      fs.writeFileSync(filePath, content);
      console.log(`✅ File overwritten: ${filename}`);
    } else {
      createFile(filename, content);
    }

    rl.question("Do you want to append more content? (yes/no): ", (answer) => {
      if (answer.toLowerCase() === "yes") {
        rl.question("Enter content to append: ", (newContent) => {
          updateFile(filename, newContent);

          console.log("\nReading updated file:");
          readFile(filename);

          rl.close();
        });
      } else {
        console.log("\nReading file:");
        readFile(filename);
        rl.close();
      }
    });
  });
}

// Start the app
askFilename();
