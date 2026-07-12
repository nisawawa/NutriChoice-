import fs from 'fs';

const images = {
  "A1": "https://www.themealdb.com/images/media/meals/c400ok1764439058.jpg",
  "A2": "https://www.themealdb.com/images/media/meals/lwsnkl1604181187.jpg",
  "A3": "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg",
  "A4": "https://www.themealdb.com/images/media/meals/wspuvp1511303478.jpg",
  "A5": "https://www.themealdb.com/images/media/meals/ikizdm1763760862.jpg",
  "A6": "https://www.themealdb.com/images/media/meals/pk8wtn1763758591.jpg",
  "A7": "https://www.themealdb.com/images/media/meals/0s80wo1764374393.jpg",
  "A8": "https://www.themealdb.com/images/media/meals/k29viq1585565980.jpg",
  "A9": "https://www.themealdb.com/images/media/meals/1525874812.jpg",
  "A10": "https://www.themealdb.com/images/media/meals/1549542994.jpg",
  "A11": "https://www.themealdb.com/images/media/meals/c0gmo31766594751.jpg",
  "A12": "https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg",
  "A13": "https://www.themealdb.com/images/media/meals/rpvptu1511641092.jpg",
  "A14": "https://www.themealdb.com/images/media/meals/vrspxv1511722107.jpg",
  "A15": "https://www.themealdb.com/images/media/meals/ssrrrs1503664277.jpg",
  "A16": "https://www.themealdb.com/images/media/meals/v5jrnn1764362830.jpg",
  "A17": "https://www.themealdb.com/images/media/meals/1529446137.jpg",
  "A18": "https://www.themealdb.com/images/media/meals/y2irzl1585563479.jpg",
  "A19": "https://www.themealdb.com/images/media/meals/j8c1d51782772399.jpg",
  "A20": "https://www.themealdb.com/images/media/meals/5fu4ew1760524857.jpg",
  "A21": "https://www.themealdb.com/images/media/meals/1550441882.jpg",
  "A22": "https://www.themealdb.com/images/media/meals/y4jpgq1560459207.jpg",
  "A23": "https://www.themealdb.com/images/media/meals/bopa2i1683209167.jpg",
  "A24": "https://www.themealdb.com/images/media/meals/stpuws1511191310.jpg",
  "A25": "https://www.themealdb.com/images/media/meals/5r5rvx1763287943.jpg",
  "A26": "https://www.themealdb.com/images/media/meals/pbzcrx1763765096.jpg",
  "A27": "https://www.themealdb.com/images/media/meals/sqpqtp1515365614.jpg",
  "A28": "https://www.themealdb.com/images/media/meals/0r7y5n1782681336.jpg",
  "A29": "https://www.themealdb.com/images/media/meals/1544384070.jpg",
  "A30": "https://www.themealdb.com/images/media/meals/ppodrp1762325183.jpg",
  "A31": "https://www.themealdb.com/images/media/meals/yypwwq1511304979.jpg",
  "A32": "https://www.themealdb.com/images/media/meals/46uazv1782588877.jpg",
  "A33": "https://www.themealdb.com/images/media/meals/178z5o1585514569.jpg",
  "A34": "https://www.themealdb.com/images/media/meals/pb6mj11763788331.jpg",
  "A35": "https://www.themealdb.com/images/media/meals/rsqwus1511640214.jpg",
  "A36": "https://www.themealdb.com/images/media/meals/wxswxy1511452625.jpg"
};

let content = fs.readFileSync('src/utils/dss.js', 'utf-8');

// The regex correctly matches lines in AI_RECOMMENDATIONS to update the image field
// E.g., 'A1': { name: '...', ..., image: imgPancake }, => 'A1': { name: '...', ..., image: 'https://...' },
for (const id in images) {
  const regex = new RegExp(`('${id}':\\s*\\{[^}]*image:\\s*)([a-zA-Z0-9_]+)(\\s*\\})`, 'g');
  content = content.replace(regex, `$1'${images[id]}'$3`);
}

fs.writeFileSync('src/utils/dss.js', content);
console.log("Updated dss.js with 36 unique images.");
