const fs = require("fs");
const path = require("path");

module.exports = (data, fileName) => {
  try {
    fs.writeFileSync(
      path.join(__dirname, "../", "dummyData", fileName),
      JSON.stringify(data)
    );
  } catch (err) {
    console.log(err, "err");
  }
};
