const fs = require("fs");
const path = require("path");
const content = fs.readFileSync(
  path.join(__dirname, "../components/Home/SectionBento2.tsx"),
  "utf8",
);
const start = "xlinkHref={`data:image/png;base64,";
const end = "`}";
const i = content.indexOf(start);
if (i === -1) {
  console.log("Start not found");
  process.exit(1);
}
const dataStart = i + start.length;
const j = content.indexOf("`}", dataStart);
if (j === -1) {
  console.log("End not found");
  process.exit(1);
}
const fullDataUrl = "data:image/png;base64," + content.slice(dataStart, j);
const out = `const BOOK_SLOTS_PATTERN_IMAGE = ${JSON.stringify(fullDataUrl)};
export default BOOK_SLOTS_PATTERN_IMAGE;
`;
fs.writeFileSync(
  path.join(__dirname, "../components/Home/sectionBento2PatternImage.ts"),
  out,
);
console.log("Written", fullDataUrl.length, "chars");
