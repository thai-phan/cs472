import fs from "fs";

setTimeout(() => console.log("this is setTimeout 0"), 0);

fs.readFile('input.txt', "utf-8", (error, data) => {
  if (error) console.log(error);
  else console.log("file data:", data)
});
