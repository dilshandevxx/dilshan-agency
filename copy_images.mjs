import fs from "fs";
import path from "path";

const srcDir = "C:\\Users\\dilsh\\.gemini\\antigravity-ide\\brain\\b65f470b-144a-4e99-878b-4b23a44680d0";
const destDir = "c:\\Users\\dilsh\\Desktop\\works\\web\\05-portfolio\\15-dilshan\\public\\images";

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = [
  { src: "post_design_systems_1780831065000.png", dest: "post_design_systems.png" },
  { src: "post_typography_1780831079891.png", dest: "post_typography.png" },
  { src: "post_brand_identity_1780831095351.png", dest: "post_brand_identity.png" }
];

files.forEach(file => {
  fs.copyFileSync(path.join(srcDir, file.src), path.join(destDir, file.dest));
  console.log(`Copied ${file.dest}`);
});
