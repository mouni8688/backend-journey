// app.js
const { createFile, readFile, updateFile, deleteFile } = require("./FileManager");

// Create file
createFile("notes.txt", "This is my first backend project!");

// Read file
readFile("notes.txt");

// Update file
updateFile("notes.txt", "Adding more notes here...");

// Delete file
// deleteFile("notes.txt");
