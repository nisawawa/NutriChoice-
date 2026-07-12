const https = require('https');

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
  { id: 'A1', q: 'oat' }, // Oatmeal
  { id: 'A2', q: 'pork' }, // Tempe (Tonkatsu pork looks like tempeh)
  { id: 'A3', q: 'chicken' }, // Tumis Brokoli Dada Ayam
  { id: 'A4', q: 'spinach' }, // Bayam
  { id: 'A5', q: 'salmon' }, // Salmon
  { id: 'A6', q: 'chicken salad' }, // Salad Dada Ayam
  { id: 'A7', q: 'smoothie' }, // Smoothie Almond
  { id: 'A8', q: 'quinoa' }, // Quinoa Salad
  { id: 'A9', q: 'tofu' }, // Sapo Tahu
  { id: 'A10', q: 'avocado' }, // Avocado toast
  { id: 'A11', q: 'apple' }, // Salad Apel
  { id: 'A12', q: 'pancake' }, // Pancake Pisang
  { id: 'A13', q: 'black' }, // Kacang Hitam (Black bean/Black)
  { id: 'A14', q: 'carrot' }, // Sup Wortel
  { id: 'A15', q: 'roast' }, // Ayam Panggang
  { id: 'A16', q: 'berry' }, // Blueberry
  { id: 'A17', q: 'egg' }, // Sandwich Telur
  { id: 'A18', q: 'yogurt' }, // Yogurt
  { id: 'A19', q: 'bean' }, // Edamame (Beans)
  { id: 'A20', q: 'spaghetti' }, // Spaghetti
  { id: 'A21', q: 'potato' }, // Ubi Panggang
  { id: 'A22', q: 'orange' }, // Salad Jeruk
  { id: 'A23', q: 'milk' }, // Puding Susu
  { id: 'A24', q: 'tomato' }, // Sup Tomat
  { id: 'A25', q: 'rice' }, // Nasi Merah
  { id: 'A26', q: 'beef' }, // Tumis Paprika Sapi
  { id: 'A27', q: 'pea' }, // Kacang Hijau
  { id: 'A28', q: 'mushroom' }, // Jamur
  { id: 'A29', q: 'peanut' }, // Roti Selai Kacang
  { id: 'A30', q: 'red' }, // Kacang Merah (Red beans/Red)
  { id: 'A31', q: 'tuna' }, // Tuna
  { id: 'A32', q: 'nut' }, // Granola Kenari
  { id: 'A33', q: 'strawberry' }, // Strawberry
  { id: 'A34', q: 'celery' }, // Seledri / juice
  { id: 'A35', q: 'pudding' }, // Chia Pudding
  { id: 'A36', q: 'squash' } // Biji Labu (Pumpkin/Squash)
];

async function getImages() {
  const finalMap = {};
  const used = new Set();
  
  for (const item of items) {
    let meals = await fetchMeals(item.q);
    if (!meals) {
      // Fallback
      meals = await fetchMeals(''); // random search doesn't work, let's search 'a'
      if (!meals) meals = await fetchMeals('a');
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
        finalMap[item.id] = meals[0].strMealThumb; // reuse if exhausted
      }
    }
  }
  
  console.log("const images = " + JSON.stringify(finalMap, null, 2) + ";");
}

getImages();
