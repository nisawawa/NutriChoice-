const https = require('https');

const fetchMeals = (query) => {
  return new Promise((resolve) => {
    https.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(JSON.parse(data).meals));
    });
  });
};

async function getImages() {
  const queries = ['chicken', 'salmon', 'broccoli', 'beef', 'salad', 'soup', 'vegan', 'dessert', 'pancake', 'pasta', 'fish', 'fruit'];
  const results = {};
  for (const q of queries) {
    const meals = await fetchMeals(q);
    if (meals) {
      results[q] = meals.map(m => ({ name: m.strMeal, img: m.strMealThumb })).slice(0, 3);
    }
  }
  console.log(JSON.stringify(results, null, 2));
}

getImages();
