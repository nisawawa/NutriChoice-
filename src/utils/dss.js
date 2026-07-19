export const CRITERIA = [
  { id: 'C1', name: 'Usia', weight: 0.10, type: 'benefit' },
  { id: 'C2', name: 'Jenis Kelamin', weight: 0.10, type: 'benefit' },
  { id: 'C3', name: 'Aktivitas Fisik', weight: 0.15, type: 'benefit' },
  { id: 'C4', name: 'Berat Badan', weight: 0.15, type: 'cost' },
  { id: 'C5', name: 'Tujuan Penyakit', weight: 0.25, type: 'cost' },
  { id: 'C6', name: 'Budget', weight: 0.25, type: 'cost' }
];

const getEmojiImage = (emoji) => {
  return `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="80">${emoji}</text></svg>`;
};

// Data Simulasi Matriks (1-5) dan Profil Gizi Asli (untuk UI)
export const ALTERNATIVES = [
  { id: 'A1', name: 'Oatmeal', emoji: '🥣', values: { C1: 4, C2: 4, C3: 4, C4: 1, C5: 1, C6: 2 }, nutrition: { protein: 6, serat: 10, vitamin: 8, harga: 6, kalori: 7, lemak: 2, natrium: 1 } },
  { id: 'A2', name: 'Tempe', emoji: '🍘', values: { C1: 5, C2: 4, C3: 4, C4: 2, C5: 2, C6: 1 }, nutrition: { protein: 9, serat: 8, vitamin: 7, harga: 4, kalori: 6, lemak: 3, natrium: 4 } },
  { id: 'A3', name: 'Brokoli', emoji: '🥦', values: { C1: 5, C2: 5, C3: 3, C4: 1, C5: 1, C6: 2 }, nutrition: { protein: 10, serat: 9, vitamin: 10, harga: 7, kalori: 7, lemak: 2, natrium: 5 } },
  { id: 'A4', name: 'Bayam', emoji: '🥬', values: { C1: 4, C2: 5, C3: 3, C4: 1, C5: 1, C6: 1 }, nutrition: { protein: 4, serat: 8, vitamin: 10, harga: 3, kalori: 4, lemak: 1, natrium: 3 } },
  { id: 'A5', name: 'Salmon', emoji: '🐟', values: { C1: 5, C2: 5, C3: 5, C4: 3, C5: 2, C6: 5 }, nutrition: { protein: 10, serat: 2, vitamin: 8, harga: 10, kalori: 8, lemak: 4, natrium: 4 } },
  { id: 'A6', name: 'Dada Ayam', emoji: '🍗', values: { C1: 5, C2: 4, C3: 5, C4: 2, C5: 3, C6: 3 }, nutrition: { protein: 9, serat: 7, vitamin: 8, harga: 6, kalori: 5, lemak: 2, natrium: 3 } },
  { id: 'A7', name: 'Almond', emoji: '🥜', values: { C1: 4, C2: 4, C3: 4, C4: 4, C5: 2, C6: 4 }, nutrition: { protein: 5, serat: 8, vitamin: 9, harga: 7, kalori: 6, lemak: 3, natrium: 1 } },
  { id: 'A8', name: 'Quinoa', emoji: '🍚', values: { C1: 4, C2: 4, C3: 5, C4: 2, C5: 2, C6: 4 }, nutrition: { protein: 8, serat: 9, vitamin: 8, harga: 8, kalori: 7, lemak: 2, natrium: 4 } },
  { id: 'A9', name: 'Tahu', emoji: '🧊', values: { C1: 4, C2: 4, C3: 3, C4: 2, C5: 2, C6: 1 }, nutrition: { protein: 6, serat: 7, vitamin: 8, harga: 5, kalori: 5, lemak: 2, natrium: 5 } },
  { id: 'A10', name: 'Alpukat', emoji: '🥑', values: { C1: 3, C2: 4, C3: 4, C4: 5, C5: 3, C6: 3 }, nutrition: { protein: 5, serat: 9, vitamin: 8, harga: 7, kalori: 7, lemak: 3, natrium: 2 } },
  { id: 'A11', name: 'Apel', emoji: '🍎', values: { C1: 5, C2: 3, C3: 3, C4: 2, C5: 1, C6: 2 }, nutrition: { protein: 4, serat: 8, vitamin: 9, harga: 8, kalori: 6, lemak: 2, natrium: 1 } },
  { id: 'A12', name: 'Pisang', emoji: '🍌', values: { C1: 4, C2: 4, C3: 5, C4: 3, C5: 2, C6: 1 }, nutrition: { protein: 5, serat: 7, vitamin: 7, harga: 5, kalori: 6, lemak: 2, natrium: 2 } },
  { id: 'A13', name: 'Kacang Hitam', emoji: '🫘', values: { C1: 4, C2: 4, C3: 4, C4: 2, C5: 2, C6: 2 }, nutrition: { protein: 8, serat: 9, vitamin: 7, harga: 6, kalori: 6, lemak: 1, natrium: 4 } },
  { id: 'A14', name: 'Wortel', emoji: '🥕', values: { C1: 5, C2: 4, C3: 3, C4: 1, C5: 1, C6: 1 }, nutrition: { protein: 3, serat: 7, vitamin: 10, harga: 5, kalori: 4, lemak: 1, natrium: 3 } },
  { id: 'A15', name: 'Bawang Putih', emoji: '🧄', values: { C1: 5, C2: 5, C3: 2, C4: 1, C5: 1, C6: 1 }, nutrition: { protein: 9, serat: 2, vitamin: 7, harga: 6, kalori: 7, lemak: 3, natrium: 3 } },
  { id: 'A16', name: 'Blueberry', emoji: '🫐', values: { C1: 5, C2: 4, C3: 3, C4: 1, C5: 1, C6: 4 }, nutrition: { protein: 6, serat: 6, vitamin: 9, harga: 7, kalori: 5, lemak: 2, natrium: 2 } },
  { id: 'A17', name: 'Telur Rebus', emoji: '🥚', values: { C1: 4, C2: 5, C3: 4, C4: 2, C5: 3, C6: 1 }, nutrition: { protein: 7, serat: 5, vitamin: 7, harga: 4, kalori: 6, lemak: 3, natrium: 4 } },
  { id: 'A18', name: 'Yogurt', emoji: '🥛', values: { C1: 5, C2: 5, C3: 3, C4: 2, C5: 2, C6: 3 }, nutrition: { protein: 8, serat: 4, vitamin: 8, harga: 7, kalori: 5, lemak: 2, natrium: 2 } },
  { id: 'A19', name: 'Edamame', emoji: '🫛', values: { C1: 4, C2: 4, C3: 3, C4: 2, C5: 1, C6: 2 }, nutrition: { protein: 7, serat: 7, vitamin: 6, harga: 5, kalori: 5, lemak: 1, natrium: 3 } },
  { id: 'A20', name: 'Minyak Zaitun', emoji: '🫒', values: { C1: 3, C2: 3, C3: 3, C4: 5, C5: 1, C6: 5 }, nutrition: { protein: 4, serat: 6, vitamin: 5, harga: 6, kalori: 7, lemak: 2, natrium: 4 } },
  { id: 'A21', name: 'Ubi Jalar', emoji: '🍠', values: { C1: 4, C2: 4, C3: 5, C4: 2, C5: 2, C6: 1 }, nutrition: { protein: 2, serat: 7, vitamin: 9, harga: 4, kalori: 6, lemak: 1, natrium: 1 } },
  { id: 'A22', name: 'Jeruk', emoji: '🍊', values: { C1: 5, C2: 4, C3: 4, C4: 1, C5: 1, C6: 2 }, nutrition: { protein: 2, serat: 6, vitamin: 10, harga: 5, kalori: 3, lemak: 0, natrium: 1 } },
  { id: 'A23', name: 'Susu Kedelai', emoji: '🥛', values: { C1: 4, C2: 4, C3: 3, C4: 2, C5: 2, C6: 2 }, nutrition: { protein: 5, serat: 3, vitamin: 5, harga: 5, kalori: 4, lemak: 1, natrium: 2 } },
  { id: 'A24', name: 'Tomat', emoji: '🍅', values: { C1: 5, C2: 4, C3: 2, C4: 1, C5: 1, C6: 1 }, nutrition: { protein: 7, serat: 5, vitamin: 8, harga: 7, kalori: 6, lemak: 3, natrium: 4 } },
  { id: 'A25', name: 'Beras Merah', emoji: '🍚', values: { C1: 4, C2: 4, C3: 5, C4: 2, C5: 2, C6: 2 }, nutrition: { protein: 4, serat: 7, vitamin: 6, harga: 5, kalori: 6, lemak: 1, natrium: 2 } },
  { id: 'A26', name: 'Paprika', emoji: '🫑', values: { C1: 4, C2: 4, C3: 2, C4: 1, C5: 1, C6: 3 }, nutrition: { protein: 8, serat: 5, vitamin: 9, harga: 9, kalori: 6, lemak: 3, natrium: 4 } },
  { id: 'A27', name: 'Kacang Hijau', emoji: '🥣', values: { C1: 4, C2: 4, C3: 4, C4: 1, C5: 2, C6: 1 }, nutrition: { protein: 5, serat: 7, vitamin: 6, harga: 4, kalori: 5, lemak: 1, natrium: 1 } },
  { id: 'A28', name: 'Jamur', emoji: '🍄', values: { C1: 4, C2: 4, C3: 2, C4: 1, C5: 2, C6: 2 }, nutrition: { protein: 4, serat: 5, vitamin: 7, harga: 5, kalori: 3, lemak: 1, natrium: 3 } },
  { id: 'A29', name: 'Gandum', emoji: '🍞', values: { C1: 4, C2: 4, C3: 5, C4: 3, C5: 3, C6: 2 }, nutrition: { protein: 6, serat: 6, vitamin: 5, harga: 5, kalori: 7, lemak: 3, natrium: 3 } },
  { id: 'A30', name: 'Kacang Merah', emoji: '🫘', values: { C1: 4, C2: 4, C3: 4, C4: 2, C5: 2, C6: 2 }, nutrition: { protein: 8, serat: 8, vitamin: 7, harga: 8, kalori: 7, lemak: 3, natrium: 4 } },
  { id: 'A31', name: 'Tuna', emoji: '🐟', values: { C1: 5, C2: 5, C3: 4, C4: 2, C5: 2, C6: 3 }, nutrition: { protein: 9, serat: 3, vitamin: 6, harga: 7, kalori: 5, lemak: 2, natrium: 5 } },
  { id: 'A32', name: 'Kacang Kenari', emoji: '🥜', values: { C1: 4, C2: 4, C3: 4, C4: 5, C5: 2, C6: 4 }, nutrition: { protein: 5, serat: 6, vitamin: 6, harga: 8, kalori: 6, lemak: 3, natrium: 2 } },
  { id: 'A33', name: 'Strawberi', emoji: '🍓', values: { C1: 5, C2: 4, C3: 3, C4: 1, C5: 1, C6: 4 }, nutrition: { protein: 2, serat: 6, vitamin: 9, harga: 7, kalori: 5, lemak: 0, natrium: 1 } },
  { id: 'A34', name: 'Seledri', emoji: '🥬', values: { C1: 4, C2: 4, C3: 2, C4: 1, C5: 1, C6: 2 }, nutrition: { protein: 1, serat: 4, vitamin: 9, harga: 6, kalori: 3, lemak: 0, natrium: 2 } },
  { id: 'A35', name: 'Chia Seeds', emoji: '🥄', values: { C1: 5, C2: 4, C3: 4, C4: 3, C5: 1, C6: 4 }, nutrition: { protein: 4, serat: 10, vitamin: 5, harga: 7, kalori: 5, lemak: 2, natrium: 1 } },
  { id: 'A36', name: 'Biji Labu', emoji: '🎃', values: { C1: 4, C2: 5, C3: 4, C4: 4, C5: 2, C6: 3 }, nutrition: { protein: 5, serat: 7, vitamin: 8, harga: 6, kalori: 6, lemak: 2, natrium: 3 } }
].map(alt => ({ ...alt, image: getEmojiImage(alt.emoji) }));

// Exact Categorized High-Quality Images (TheMealDB)
const imgStirFry = 'https://www.themealdb.com/images/media/meals/m0p0j81765568742.jpg'; // Beef and Broccoli Stir-Fry
const imgRoast = 'https://www.themealdb.com/images/media/meals/cj56fs1762340001.jpg'; // Sticky Chicken Roast
const imgSalad = 'https://www.themealdb.com/images/media/meals/bqx8mc1782684286.jpg'; // Shopska Fresh Salad
const imgSoup = 'https://www.themealdb.com/images/media/meals/tvvxpv1511191952.jpg'; // Broccoli Soup
const imgRedSoup = 'https://www.themealdb.com/images/media/meals/sqpqtp1515365614.jpg'; // Red Peas Soup
const imgSalmon = 'https://www.themealdb.com/images/media/meals/xxrxux1503070723.jpg'; // Salmon Risotto
const imgDessert = 'https://www.themealdb.com/images/media/meals/gkcdpl1764441325.jpg'; // Passion fruit mousse (Smoothies/Puddings)
const imgPancake = 'https://www.themealdb.com/images/media/meals/sywswr1511383814.jpg'; // Banana Pancakes (Oats/Pancakes)
const imgPasta = 'https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg'; // Mediterranean Pasta Salad
const imgSandwich = 'https://www.themealdb.com/images/media/meals/sonirb1763782831.jpg'; // Vegan Banh Mi (Sandwiches/Toasts)

// Specific Match Images
const imgTempeSteak = 'https://www.themealdb.com/images/media/meals/vussxq1511882648.jpg'; // Steak Diane (Looks like Tempe Steak with sauce)
const imgTofu = 'https://www.themealdb.com/images/media/meals/1525874812.jpg'; // Ma Po Tofu
const imgUbi = 'https://www.themealdb.com/images/media/meals/1550441882.jpg'; // Roasted Potatoes (Looks like Ubi Panggang)

// AI Recommendations for each raw ingredient
export const AI_RECOMMENDATIONS = {
  'A1': { name: 'Oatmeal Buah Segar', recipe: 'Rebus oat utuh dengan susu almond rendah lemak, sajikan dengan topping pisang, stroberi, dan madu murni.', desc: 'Kaya karbohidrat kompleks. Memberikan energi tahan lama dan serat tinggi yang baik untuk menjaga kesehatan pencernaan.', image: 'https://www.themealdb.com/images/media/meals/c400ok1764439058.jpg' },
  'A2': { name: 'Steak Tempe Panggang', recipe: 'Marinasi tempe dengan lada hitam, bawang putih, dan kecap rendah natrium, lalu panggang.', desc: 'Menu nabati tinggi protein dan isoflavon. Membantu menurunkan kolesterol tanpa lemak jenuh.', image: 'https://www.themealdb.com/images/media/meals/lwsnkl1604181187.jpg' },
  'A3': { name: 'Tumis Brokoli Dada Ayam', recipe: 'Tumis dada ayam dengan brokoli segar, minyak zaitun, bawang putih, dan saus tiram.', desc: 'Kombinasi klasik pembentukan otot. Dada ayam menyuplai protein, brokoli memberi vitamin C antikanker.', image: 'https://www.themealdb.com/images/media/meals/m0p0j81765568742.jpg' },
  'A4': { name: 'Sup Bayam Jagung Manis', recipe: 'Rebus kaldu sayur, masukkan jagung manis dan daun bayam segar. Tambahkan sejumput lada.', desc: 'Sup hangat ringan. Bayam kaya zat besi mencegah anemia, jagung memberi serat tanpa kalori berlebih.', image: 'https://www.themealdb.com/images/media/meals/wspuvp1511303478.jpg' },
  'A5': { name: 'Salmon Panggang Lemon', recipe: 'Bumbui salmon dengan perasan lemon, rosemary, dan garam laut. Panggang di dalam oven.', desc: 'Sajian premium dipenuhi asam lemak Omega-3. Sangat krusial menjaga kesehatan jantung.', image: 'https://www.themealdb.com/images/media/meals/ikizdm1763760862.jpg' },
  'A6': { name: 'Salad Dada Ayam Rebus', recipe: 'Campurkan dada ayam rebus dengan selada romain, tomat ceri, dan dressing olive oil.', desc: 'Diet defisit kalori terbaik. Memberikan kepuasan maksimal dari protein ayam tanpa lemak.', image: 'https://www.themealdb.com/images/media/meals/pk8wtn1763758591.jpg' },
  'A7': { name: 'Smoothie Bowl Almond', recipe: 'Blender pisang dan bayam dengan susu almond. Hias dengan almond panggang dan chia seed.', desc: 'Minuman kental kaya antioksidan. Almond memberikan vitamin E tinggi untuk kulit sehat.', image: 'https://www.themealdb.com/images/media/meals/0s80wo1764374393.jpg' },
  'A8': { name: 'Quinoa Salad Bowl', recipe: 'Rebus quinoa, campurkan dengan potongan mentimun, tomat, zaitun, dan dressing balsamic.', desc: 'Quinoa adalah sumber tanaman yang mengandung protein lengkap (9 asam amino esensial).', image: 'https://www.themealdb.com/images/media/meals/k29viq1585565980.jpg' },
  'A9': { name: 'Sapo Tahu Sayuran', recipe: 'Masak tofu lembut dalam kuah kaldu jamur dengan brokoli, wortel, dan pakcoy.', desc: 'Tahu sutra kaya kalsium nabati yang baik untuk tulang dan mencegah osteoporosis.', image: 'https://www.themealdb.com/images/media/meals/1525874812.jpg' },
  'A10': { name: 'Avocado Toast Gandum', recipe: 'Panggang roti gandum, oleskan alpukat matang, beri perasan lemon dan lada hitam.', desc: 'Alpukat mengandung lemak tak jenuh tunggal yang aktif menurunkan kolesterol darah.', image: 'https://www.themealdb.com/images/media/meals/1549542994.jpg' },
  'A11': { name: 'Salad Apel Walnut', recipe: 'Iris buah apel, campur dengan walnut panggang, kismis, dan yogurt rendah lemak.', desc: 'Apel kaya pektin pengikat kolesterol, walnut pakan luar biasa untuk kesehatan otak.', image: 'https://www.themealdb.com/images/media/meals/c0gmo31766594751.jpg' },
  'A12': { name: 'Pancake Pisang Oat', recipe: 'Lumatkan pisang matang, campur dengan oat halus dan telur, panggang di teflon.', desc: 'Bebas terigu & gula tambahan. Pisang memberikan kalium untuk mencegah kram otot.', image: 'https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg' },
  'A13': { name: 'Sup Kacang Hitam', recipe: 'Rebus kacang hitam bersama potongan tomat, bawang bombay, dan bubuk paprika.', desc: 'Kaya protein nabati dan serat larut. Sangat efektif menekan lonjakan gula darah.', image: 'https://www.themealdb.com/images/media/meals/rpvptu1511641092.jpg' },
  'A14': { name: 'Sup Krim Wortel', recipe: 'Kukus wortel, blender bersama kaldu ayam tanpa lemak dan sedikit susu skim.', desc: 'Wortel sumber utama beta-karoten yang diubah menjadi Vitamin A untuk ketajaman mata.', image: 'https://www.themealdb.com/images/media/meals/vrspxv1511722107.jpg' },
  'A15': { name: 'Ayam Panggang Bawang Putih', recipe: 'Rendam ayam utuh dalam bawang putih dan minyak zaitun, lalu panggang.', desc: 'Bawang putih melepas senyawa allicin (anti-inflamasi) berpadu protein hewani.', image: 'https://www.themealdb.com/images/media/meals/ssrrrs1503664277.jpg' },
  'A16': { name: 'Yogurt Parfait Blueberry', recipe: 'Susun yogurt plain berlapis dengan granola bebas gula dan blueberry.', desc: 'Blueberry adalah raja antioksidan yang menangkal radikal bebas perusak sel tubuh.', image: 'https://www.themealdb.com/images/media/meals/v5jrnn1764362830.jpg' },
  'A17': { name: 'Sandwich Telur Gandum', recipe: 'Kepit telur rebus iris dan selada segar di antara dua lembar roti gandum utuh.', desc: 'Telur menyediakan asam amino paling lengkap menutrisi ulang sel otot.', image: 'https://www.themealdb.com/images/media/meals/1529446137.jpg' },
  'A18': { name: 'Greek Yogurt Buah Naga', recipe: 'Blender buah naga merah segar ke dalam semangkuk Greek yogurt kental.', desc: 'Greek yogurt sangat kaya bakteri pelindung usus, berpadu pewarna alami antioksidan.', image: 'https://www.themealdb.com/images/media/meals/y2irzl1585563479.jpg' },
  'A19': { name: 'Edamame Rebus Bumbu', recipe: 'Rebus kacang edamame, tiriskan dan taburi sedikit garam laut dan bubuk cabai.', desc: 'Edamame sumber protein kedelai mengenyangkan, menjaga dari keinginan jajan.', image: 'https://www.themealdb.com/images/media/meals/j8c1d51782772399.jpg' },
  'A20': { name: 'Spaghetti Aglio Olio', recipe: 'Gunakan pasta gandum, tumis minyak zaitun, bawang putih, dan taburan parsley.', desc: 'Minyak zaitun menjaga elastisitas pembuluh darah dan gandum lambat urai.', image: 'https://www.themealdb.com/images/media/meals/5fu4ew1760524857.jpg' },
  'A21': { name: 'Ubi Panggang Madu', recipe: 'Potong ubi jalar memanjang, panggang dalam oven dengan olesan tipis madu.', desc: 'Pengganti kentang goreng superior. Ubi jalar rendah indeks glikemik.', image: 'https://www.themealdb.com/images/media/meals/1550441882.jpg' },
  'A22': { name: 'Salad Jeruk Segar', recipe: 'Iris jeruk manis, campurkan dengan bayam baby dan bawang merah tipis.', desc: 'Jeruk memompa vitamin C tinggi untuk merangsang produksi sel darah putih.', image: 'https://www.themealdb.com/images/media/meals/y4jpgq1560459207.jpg' },
  'A23': { name: 'Puding Susu Kedelai', recipe: 'Masak susu kedelai murni dengan agar-agar tanpa warna. Bekukan di lemari es.', desc: 'Susu kedelai menawarkan perlindungan antioksidan dari isoflavon.', image: 'https://www.themealdb.com/images/media/meals/bopa2i1683209167.jpg' },
  'A24': { name: 'Sup Tomat Bola Daging', recipe: 'Buat kuah tomat blender halus, rebus bersama bola daging sapi giling.', desc: 'Tomat melepas likopen bertindak sebagai tameng kuat pelindung organ dalam.', image: 'https://www.themealdb.com/images/media/meals/stpuws1511191310.jpg' },
  'A25': { name: 'Nasi Merah Bakar', recipe: 'Bungkus nasi merah dengan daun pisang isian jamur suwir, lalu bakar sebentar.', desc: 'Nasi merah mempertahankan kulit ari beras yang kaya akan vitamin B kompleks.', image: 'https://www.themealdb.com/images/media/meals/5r5rvx1763287943.jpg' },
  'A26': { name: 'Tumis Paprika Sapi', recipe: 'Iris daging sapi, tumis cepat dengan potongan besar paprika merah.', desc: 'Paprika adalah sayuran dengan kandungan Vitamin C tertinggi mengalahkan jeruk.', image: 'https://www.themealdb.com/images/media/meals/pbzcrx1763765096.jpg' },
  'A27': { name: 'Bubur Kacang Hijau', recipe: 'Rebus kacang hijau hingga pecah merekah dengan jahe geprek.', desc: 'Sangat manjur dalam mengatasi peradangan dan melancarkan pencernaan dengan lembut.', image: 'https://www.themealdb.com/images/media/meals/sqpqtp1515365614.jpg' },
  'A28': { name: 'Tumis Jamur Tiram', recipe: 'Tumis jamur tiram segar dengan irisan cabai hijau dalam minyak jagung.', desc: 'Jamur menyediakan zinc mineral yang krusial untuk sel-sel imun.', image: 'https://www.themealdb.com/images/media/meals/0r7y5n1782681336.jpg' },
  'A29': { name: 'Roti Selai Kacang', recipe: 'Panggang roti gandum, oles dengan selai kacang murni 100% tanpa gula.', desc: 'Selai kacang murni menyimpan lemak sehat tak jenuh yang mendongkrak stamina.', image: 'https://www.themealdb.com/images/media/meals/1544384070.jpg' },
  'A30': { name: 'Sup Kacang Merah', recipe: 'Rebus iga sapi rendah lemak bersama kacang merah matang, tomat, dan seledri.', desc: 'Membangun sel darah merah berkat zat besi dari daging dan folat kacang merah.', image: 'https://www.themealdb.com/images/media/meals/ppodrp1762325183.jpg' },
  'A31': { name: 'Tuna Sandwich', recipe: 'Gunakan ikan tuna kaleng dalam air, lapisi di roti gandum utuh.', desc: 'Tuna merupakan pasokan Omega-3 murni memperbaiki saraf-saraf tubuh.', image: 'https://www.themealdb.com/images/media/meals/yypwwq1511304979.jpg' },
  'A32': { name: 'Granola Bowl Kenari', recipe: 'Susun granola oat tanpa gula, siram susu skim, taburkan potongan kacang kenari.', desc: 'Kacang kenari (walnut) terbukti medis sebagai pencegah penurunan fungsi otak.', image: 'https://www.themealdb.com/images/media/meals/46uazv1782588877.jpg' },
  'A33': { name: 'Strawberry Smoothie', recipe: 'Blender halus pisang dingin, stroberi segar, dan air kelapa muda.', desc: 'Kaya elektrolit air kelapa dan karbohidrat dari buah untuk glikogen otot.', image: 'https://www.themealdb.com/images/media/meals/178z5o1585514569.jpg' },
  'A34': { name: 'Jus Seledri Apel', recipe: 'Juicer batang seledri segar dengan apel hijau utuh untuk menetralkan rasa pahit.', desc: 'Seledri bertindak sebagai penyapu racun di ginjal dan penurun tekanan darah.', image: 'https://www.themealdb.com/images/media/meals/pb6mj11763788331.jpg' },
  'A35': { name: 'Chia Seed Pudding', recipe: 'Rendam biji chia dalam susu kedelai semalaman di kulkas hingga mengental.', desc: 'Biji chia sumber serat kental (mucilage) membersihkan usus secara maksimal.', image: 'https://www.themealdb.com/images/media/meals/rsqwus1511640214.jpg' },
  'A36': { name: 'Salad Sayur Biji Labu', recipe: 'Campurkan sayuran hijau, siram saus wijen, taburkan biji labu panggang.', desc: 'Harta karun mineral Zinc dan Magnesium esensial untuk kesehatan hormon.', image: 'https://www.themealdb.com/images/media/meals/wxswxy1511452625.jpg' }
};

export function calculateSAW() {
  const normalizedMatrix = ALTERNATIVES.map(alt => {
    const normValues = {};
    CRITERIA.forEach(crit => {
      const vals = ALTERNATIVES.map(a => a.values[crit.id]);
      if (crit.type === 'benefit') {
        const max = Math.max(...vals);
        normValues[crit.id] = alt.values[crit.id] / max;
      } else {
        const min = Math.min(...vals);
        normValues[crit.id] = min / alt.values[crit.id];
      }
    });
    return { ...alt, normValues };
  });

  const scoredAlternatives = normalizedMatrix.map(alt => {
    let score = 0;
    CRITERIA.forEach(crit => {
      score += alt.normValues[crit.id] * crit.weight;
    });
    return { ...alt, score: Number(score.toFixed(4)) };
  });

  return scoredAlternatives.sort((a, b) => b.score - a.score);
}

export function calculateTOPSIS() {
  const sumSquares = {};
  CRITERIA.forEach(crit => {
    sumSquares[crit.id] = Math.sqrt(ALTERNATIVES.reduce((acc, alt) => acc + Math.pow(alt.values[crit.id], 2), 0));
  });

  const normalizedMatrix = ALTERNATIVES.map(alt => {
    const normValues = {};
    CRITERIA.forEach(crit => {
      normValues[crit.id] = alt.values[crit.id] / sumSquares[crit.id];
    });
    return { ...alt, normValues };
  });

  const weightedMatrix = normalizedMatrix.map(alt => {
    const weightValues = {};
    CRITERIA.forEach(crit => {
      weightValues[crit.id] = alt.normValues[crit.id] * crit.weight;
    });
    return { ...alt, weightValues };
  });

  const idealPositive = {};
  const idealNegative = {};
  
  CRITERIA.forEach(crit => {
    const vals = weightedMatrix.map(a => a.weightValues[crit.id]);
    if (crit.type === 'benefit') {
      idealPositive[crit.id] = Math.max(...vals);
      idealNegative[crit.id] = Math.min(...vals);
    } else {
      idealPositive[crit.id] = Math.min(...vals);
      idealNegative[crit.id] = Math.max(...vals);
    }
  });

  const finalScores = weightedMatrix.map(alt => {
    let dPlusSq = 0;
    let dMinSq = 0;
    
    CRITERIA.forEach(crit => {
      dPlusSq += Math.pow(alt.weightValues[crit.id] - idealPositive[crit.id], 2);
      dMinSq += Math.pow(alt.weightValues[crit.id] - idealNegative[crit.id], 2);
    });
    
    const dPlus = Math.sqrt(dPlusSq);
    const dMin = Math.sqrt(dMinSq);
    
    const closeness = dMin / (dMin + dPlus);
    return { ...alt, score: Number(closeness.toFixed(4)) };
  });

  return finalScores.sort((a, b) => b.score - a.score);
}
