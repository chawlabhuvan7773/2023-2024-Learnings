const path = require("path");
const filePath =
  "/Users/own/Documents/Learnings/Node-js/nodejs-crash-course/fs-path/files/sample.txt";
const fs = require("fs");
const fsPromise = require("fs").promises;

//   // directory name
// console.log(path.dirname(filePath), "dirName");
// // base name
// console.log(path.basename(filePath), "basename");
// // extension
// console.log(path.extname(filePath), "extname");
// // get director name
// console.log(__dirname, "dirName");
// console.log(__filename, "fileName");

// console.log(path.join(path.dirname(filePath), "sample.txt"), "testing ");

// // Reading from the file using toString
// fs.readFile(filePath, (err, data) => {
//   if (err) throw new Error("Something Went Wrong");
//   console.log(data.toString(), "data");
// });

// // Reading from the file using utf-8 format
// fs.readFile(filePath, "utf-8", (err, data) => {
//   if (err) throw new Error("Something Went Wrong");
//   console.log(data, "data");
// });

// Reading file using synchronus way using utf-8 format
// try {
//   const data = fs.readFileSync(
//     path.join(__dirname, "files", "sample.txt"),
//     "utf-8"
//   );
//   console.log(data, "data");
// } catch (error) {
//   console.log(error, "error");
// }

// Reading file using synchronus way using string format
// try {
//   const data = fs.readFileSync(path.join(__dirname, "files", "sample.txt"));
//   console.log(data.toString(), "data");
// } catch (error) {
//   console.log(error, "error");
// }

// Reading file with fs promise
// const fileReadingUsingPromise = async () => {
//   try {
//     const data = await fsPromise.readFile(filePath, { encoding: "utf-8" });
//     console.log(data, "data fsPromise");
//   } catch (err) {
//     console.log(err, "err");
//   }
// };
// fileReadingUsingPromise();

// // Writing inside the file now
// fs.writeFile(
//   path.join(__dirname, "files", "text.txt"),
//   "hello Dear I wrote this file using fs module",
//   (err) => {
//     if (err) throw new Error("Something Went Wrong", err.message);
//     console.log("Operation Compelted SuccessFully");
//   }
// );

const txtFile = path.join(__dirname, "files", "text.txt");

// read write the file in one function
// const writeFile = async () => {
//   try {
//     await fsPromise.writeFile(txtFile, "\n Add this first", { flag: "a" }); // this flag will pass the value in the end of this line
//     // await fsPromise.appendFile(txtFile, "Hello Just add that");
//     const data = await fsPromise.readFile(txtFile);
//     console.log(data.toString());
//     // await fs.promises.rename(
//     //   txtFile,
//     //   path.join(__dirname, "files", "newTxt.txt")
//     // );   // for changing the name of the file
//   } catch (e) {
//     console.log(e, "err");
//   }
// };
// writeFile();
