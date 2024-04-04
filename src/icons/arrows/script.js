const fs = require("fs");
const path = require("path");

const svgsFolderPath = "."; // Path to the folder containing your SVG files
const outputFile = "./index.js"; // Path to the output index.js file

// Read all SVG files in the svgs folder
fs.readdir(svgsFolderPath, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  // Filter out non-SVG files
  const svgFiles = files.filter((file) => path.extname(file).toLowerCase() === ".svg");

  // Generate the content for the index.js file
  const fileContent = svgFiles
    .map((file) => {
      const iconName = path.basename(file, ".svg").replace(/[^a-zA-Z0-9]/g, "");
      const camelCaseName =
        iconName
          .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
            return index === 0 ? word.toUpperCase() : word.toLowerCase();
          })
          .replace(/\s+/g, "") + "SVG";
      return `export { default as ${camelCaseName} } from "./${file}";`;
    })
    .join("\n");

  // Write the content to the index.js file
  fs.writeFile(outputFile, fileContent, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
      return;
    }
    console.log("Index file generated successfully!");
  });
});
