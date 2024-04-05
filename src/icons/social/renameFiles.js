const fs = require("fs");
const path = require("path");

function replaceUnderscores(directory) {
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(directory, file);

      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error("Error retrieving stats for:", filePath);
          return;
        }

        if (stats.isDirectory()) {
          replaceUnderscores(filePath); // Recursively traverse directories
        } else if (stats.isFile()) {
          const newFileName = file.replace(/_/g, "-");
          if (newFileName !== file) {
            const newPath = path.join(directory, newFileName);
            fs.rename(filePath, newPath, (err) => {
              if (err) {
                console.error("Error renaming file:", err);
              } else {
                console.log(`Renamed ${filePath} to ${newPath}`);
              }
            });
          }
        }
      });
    });
  });
}

// Specify the directory to start replacing underscores
const directoryPath = ".";

replaceUnderscores(directoryPath);
