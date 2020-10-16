process.stdout.write("\033c");
const fs = require("fs");
const _ = require("lodash");
//import end

let listMH = fs.readdirSync("./json");
//loop all mh => all data
let allData = listMH.map((mh) => {
  let dataFile = fs.readFileSync(`./json/${mh}`);
  return JSON.parse(dataFile);
});
// console.log(allData.flat(3));
// get all classs
let classs = [];
let sp = allData[0][0][14][6];
// console.log(sp);
for (let i = 0; i < allData.length; i++) {
  let element = allData[i];
  for (let j = 0; j < element.length; j++) {
    let mh = element[j];
    classs.push({
      nmh: mh[3],
      quantity: mh[8],
      slot: mh[8],
      tth: mh[4],
      thu: mh[11].split(sp),
      tbd: mh[12].split(sp),
      subject: {
        name: mh[2],
      },
    });
  }
}
// classs = classs.flat(1);
// classs = [...new Set(classs)];
// let r = classs.filter((k) => {
//   if (k) return k;
// });
console.log(classs);
// fs.writeFile(`data/classs.json`, JSON.stringify(classs), (err) => {
//   if (err) console.log(err);
//   console.log("Data written to file");
// });

