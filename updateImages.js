import fs from 'fs';
import https from 'https';

const fetchMeals = (query) => {
  return new Promise((resolve) => {
    https.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          resolve(parsed.meals ? parsed.meals : null);
        } catch(e) {
          resolve(null);
        }
      });
    });
  });
};

const items = [
  { id: 'A1', q: 'oat' }, 
  { id: 'A2', q: 'pork' }, 
  { id: 'A3', q: 'chicken' }, 
  { id: 'A4', q: 'spinach' }, 
  { id: 'A5', q: 'salmon' }, 
  { id: 'A6', q: 'chicken salad' }, 
  { id: 'A7', q: 'smoothie' }, 
  { id: 'A8', q: 'quinoa' }, 
  { id: 'A9', q: 'tofu' }, 
  { id: 'A10', q: 'avocado' }, 
  { id: 'A11', q: 'apple' }, 
  { id: 'A12', q: 'pancake' }, 
  { id: 'A13', q: 'black' }, 
  { id: 'A14', q: 'carrot' }, 
  { id: 'A15', q: 'roast' }, 
  { id: 'A16', q: 'berry' }, 
  { id: 'A17', q: 'egg' }, 
  { id: 'A18', q: 'yogurt' }, 
  { id: 'A19', q: 'bean' }, 
  { id: 'A20', q: 'spaghetti' }, 
  { id: 'A21', q: 'potato' }, 
  { id: 'A22', q: 'orange' }, 
  { id: 'A23', q: 'milk' }, 
  { id: 'A24', q: 'tomato' }, 
  { id: 'A25', q: 'rice' }, 
  { id: 'A26', q: 'beef' }, 
  { id: 'A27', q: 'pea' }, 
  { id: 'A28', q: 'mushroom' }, 
  { id: 'A29', q: 'peanut' }, 
  { id: 'A30', q: 'red' }, 
  { id: 'A31', q: 'tuna' }, 
  { id: 'A32', q: 'nut' }, 
  { id: 'A33', q: 'strawberry' }, 
  { id: 'A34', q: 'celery' }, 
  { id: 'A35', q: 'pudding' }, 
  { id: 'A36', q: 'squash' } 
];

async function updateFile() {
  const finalMap = {};
  const used = new Set();
  
  for (const item of items) {
    let meals = await fetchMeals(item.q);
    if (!meals) {
      meals = await fetchMeals('c');
    }
    
    if (meals) {
      let found = false;
      for (const m of meals) {
        if (!used.has(m.strMealThumb)) {
          finalMap[item.id] = m.strMealThumb;
          used.add(m.strMealThumb);
          found = true;
          break;
        }
      }
      if (!found) {
        finalMap[item.id] = meals[0].strMealThumb; 
      }
    }
  }
  
  let content = fs.readFileSync('src/utils/dss.js', 'utf-8');
  for (const id in finalMap) {
    // Regex to match the image field in AI_RECOMMENDATIONS for the specific ID
    const regex = new RegExp(`('${id}':\\s*\\{[^}]*image:\\s*)([a-zA-Z0-9_]+)(\\s*\\})`, 'g');
    content = content.replace(regex, `$1'${finalMap[id]}'$3`);
  }
  
  fs.writeFileSync('src/utils/dss.js', content);
  console.log("Updated dss.js");
}

updateFile();
